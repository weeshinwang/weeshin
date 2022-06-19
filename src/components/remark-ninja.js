import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components/macro"
import text from "../utils/remark-ninja-text"
import { MD5 } from "crypto-js"

const rnUrlPrefix = "https://api.rmninja.com"

const SITE_ID = process.env.GATSBY_REMARK_NINJA_SITE_ID

const checkHttpStatus = (resp) => {
  if (resp.status >= 400) {
    throw new Error(resp.data.message)
  } else {
    return resp.data
  }
}

const loadComments = async ({ siteId, threadSlug, start, limit }) => {
  start = start === undefined ? 0 : start
  limit = limit === undefined ? 10 : limit
  threadSlug = threadSlug || window.location.pathname
  return axios
    .get(
      `${rnUrlPrefix}/api/1/sites/${encodeURIComponent(
        siteId
      )}/threads/${encodeURIComponent(threadSlug)}/comments`,
      {
        params: {
          start,
          limit,
        },
      }
    )
    .then(checkHttpStatus)
}

const postComment = async ({
  siteId,
  threadSlug,
  authorName,
  authorEmail,
  body,
  replyToComment,
}) => {
  threadSlug = threadSlug || window.location.pathname
  return axios
    .post(`${rnUrlPrefix}/api/1/comments`, {
      siteId,
      threadSlug,
      authorName,
      authorEmail,
      body,
      replyToComment,
    })
    .then(checkHttpStatus)
}

const lsGet = (key) =>
  typeof localStorage !== "undefined" && localStorage.getItem(key)
const lsSet = (key, val) =>
  typeof localStorage !== "undefined" && localStorage.setItem(key, val)

const lsAuthorNameKey = "rnCommentAuthorName"
const lsAuthorEmailKey = "rnCommentAuthorEmail"

const scrollTo = (hash) => {
  window.location.hash = `#${hash}`
}

const CommentForm = ({ siteId, threadSlug, onNewComment, replyingTo }) => {
  const [authorName, setAuthorName] = useState(lsGet(lsAuthorNameKey) || "")
  const [authorEmail, setAuthorEmail] = useState(lsGet(lsAuthorEmailKey) || "")
  const [body, setBody] = useState("")
  const [error, setError] = useState(undefined)
  const [message, setMessage] = useState(undefined)

  useEffect(() => {
    if (replyingTo) {
      const replyingToUser = replyingTo.authorName || "Guest"
      setBody(`@${replyingToUser} `)
    } else {
      setBody("")
    }
  }, [replyingTo])

  const submit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const btn = e.target
    btn.disabled = true
    lsSet(lsAuthorNameKey, authorName)
    lsSet(lsAuthorEmailKey, authorEmail)
    setError(undefined)
    setMessage(undefined)
    postComment({
      siteId,
      threadSlug,
      authorName,
      authorEmail,
      body,
      replyToComment: replyingTo ? replyingTo.id : undefined,
    })
      .then(() => {
        setMessage(text("submitted"))
        setBody("")
        onNewComment()
      })
      .catch((e) => {
        setError(e.message)
      })
      .finally(() => {
        btn.disabled = false
      })
  }

  return (
    <CommentFormWrapper className="rn-comment-form" id="rn-comment-form">
      {error !== undefined && <div className="rn-error">{error}</div>}
      <AuthorBoxWrapper>
        <AuthorNameWrapper>
          <label htmlFor="rn-author-name">{text("name")}</label>
          <input
            id="rn-author-name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder={text("name_placeholder")}
          />
        </AuthorNameWrapper>
        <AuthorEmailWrapper>
          <label htmlFor="rn-author-email">{text("email")}</label>
          <input
            id="rn-author-email"
            type="email"
            placeholder={text("email_placeholder")}
            value={authorEmail}
            onChange={(e) => setAuthorEmail(e.target.value)}
          />
        </AuthorEmailWrapper>
      </AuthorBoxWrapper>
      <CommentBoxWrapper>
        <label htmlFor="rn-body">{text("comment")}</label>
        <textarea
          id="rn-body"
          rows="5"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <input onClick={submit} type="submit" value={text("submit")} />
        {message !== undefined && <span>{message}</span>}
      </CommentBoxWrapper>
      <PromoLink>
        {text("powered_by")} <a href="https://remark.ninja">Remark Ninja</a>
      </PromoLink>
    </CommentFormWrapper>
  )
}

const Comment = ({ authorName, authorEmail, body, createdAt, replyFn }) => {
  const date = new Date(createdAt)
  const email = authorEmail || lsGet(lsAuthorEmailKey)
  const gravatarHash = MD5(email?.trim()?.toLowerCase())

  return (
    <CommentItemWrapper>
      <GravatarWrapper>
        <img
          alt={`Avatar for ${authorName}`}
          src={`https://www.gravatar.com/avatar/${gravatarHash}?s=40`}
        />
      </GravatarWrapper>
      <CommentMainSectionWrapper>
        <CommentAuthorName>{authorName || text("guest")}</CommentAuthorName>
        <CommentActions>
          <span>{date.toLocaleDateString()}</span>
          <button onClick={replyFn}>回复</button>
        </CommentActions>
        <CommentBody dangerouslySetInnerHTML={{ __html: body }} />
      </CommentMainSectionWrapper>
    </CommentItemWrapper>
  )
}

const Comments = ({ siteId = SITE_ID, threadSlug, pageSize }) => {
  const [comments, setComments] = useState(undefined)
  const [error, setError] = useState(undefined)
  const [start, setStart] = useState(0)
  const [replyingTo, setReplyingTo] = useState(undefined)
  const limit = pageSize === undefined ? 20 : pageSize
  const load = () => {
    loadComments({ siteId, threadSlug, start, limit })
      .then((cs) => {
        setComments(cs)
        setError(undefined)
        setReplyingTo(undefined)
      })
      .catch((e) => {
        setError(e.message)
      })
  }
  const prevPage = () => {
    setStart(Math.max(start - limit, 0))
  }
  const nextPage = () => {
    setStart(start + limit)
  }

  useEffect(load, [siteId, threadSlug, pageSize, start, limit])

  if (comments === undefined && error === undefined) {
    return <div>{text("loading_comments")}</div>
  } else if (comments === undefined && error !== undefined) {
    return <div className="rn-error">Failed to load comments: {error}</div>
  } else {
    return (
      <CommentWrapper>
        {!!replyingTo && (
          <ReplyWrapper>
            回复给
            <a href={`#rn-comment-${replyingTo.id}`}>
              {replyingTo.authorName || "Guest"}
            </a>
            <CancelReplyButton onClick={() => setReplyingTo(undefined)}>
              取消
            </CancelReplyButton>
          </ReplyWrapper>
        )}
        <CommentForm
          siteId={siteId}
          threadSlug={threadSlug}
          onNewComment={load}
          replyingTo={replyingTo}
        />
        {!!error && <div className="rn-error">{error}</div>}
        <CommentListWrapper>
          {comments.map((c) => (
            <CommentList key={c.id} id={`rn-comment-${c.id}`}>
              <Comment
                authorName={c.authorName}
                authorEmail={c.authorEmail}
                body={c.bodyHTML}
                createdAt={c.createdAt}
                replyFn={() => {
                  setReplyingTo(c)
                  scrollTo("rn-comment-form")
                }}
              />
            </CommentList>
          ))}
        </CommentListWrapper>
        <CommentPagination>
          {start > 0 && <a onClick={prevPage}>{text("prev_page")}</a>}
          {comments.length === limit && (
            <a onClick={nextPage}>{text("next_page")}</a>
          )}
        </CommentPagination>
      </CommentWrapper>
    )
  }
}

const CommentWrapper = styled.div`
  padding-top: 2rem;
  border-top: 2px dashed var(--color-button-hover-bg);
`

const ReplyWrapper = styled.div`
  a {
    margin: 0 0.5rem;
  }
`

const CommentPagination = styled.div`
  display: flex;
  justify-content: space-between;
`

const CommentFormWrapper = styled.form`
  textarea {
    width: 100%;
    resize: vertical;
    padding: 5px;
    border: 2px solid var(--color-button-hover-bg);
    color: var(--color-text);
    background-color: var(--color-background);
    &:focus {
      border-color: transparent;
      outline: none;
      box-shadow: 0px 0px 30px -5px hsl(var(--color-box-shadow));
    }
  }
`

const AuthorBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    width: 48%;
  }

  div > label {
    margin-bottom: 5px;
  }

  div > input {
    width: 100%;
    display: block;
    padding: 5px;
    border: 2px solid var(--color-button-hover-bg);
    color: var(--color-text);
    background-color: var(--color-background);
    &:focus {
      border-color: transparent;
      outline: none;
      box-shadow: 0px 0px 30px -5px hsl(var(--color-box-shadow));
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`

const CancelReplyButton = styled.button`
  border: none;
  background: transparent;
  color: var(--color-hover-bg);
  cursor: pointer;
`

const AuthorNameWrapper = styled.div``
const AuthorEmailWrapper = styled.div``

const CommentBoxWrapper = styled.div`
  margin-top: 10px;
  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="submit"] {
    width: auto;
    padding: 6px 22px;
    border-radius: 8px;
    border: 2px solid var(--color-button-hover-bg);
    margin-top: 10px;
    font-size: 1rem;
    display: inline-block;
    cursor: pointer;
    color: var(--color-text);
    background-color: transparent;

    &:hover {
      border-color: transparent;
      background-color: var(--color-button-hover-bg);
    }

    &:disabled {
      border-color: transparent;
      background-color: var(--color-gray-500);
      cursor: wait;
    }
  }

  span {
    color: limegreen;
    padding-left: 1rem;
  }
`

const PromoLink = styled.div`
  font-size: 0.8rem;
  color: var(--color-gray-500);
  text-align: right !important;
  margin-top: 0.5rem;
`

const CommentItemWrapper = styled.div`
  display: flex;
`

const GravatarWrapper = styled.div``

const CommentMainSectionWrapper = styled.div`
  padding-left: 10px;
`

const CommentAuthorName = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
`

const CommentActions = styled.div`
  width: max-content;
  span {
    font-size: 0.8rem;
    font-weight: light;
    color: var(--color-gray-500);
  }

  button {
    font-size: 0.8rem;
    cursor: pointer;
    border: none;
    background: transparent;
    margin: 0 0.3rem;
    color: var(--color-gray-500);

    color: var(--color-text);
    text-decoration: underline dotted 2px var(--color-hover-bg);
    &:hover {
      background-color: var(--color-hover-bg);
      color: var(--color-hover-text);
    }
  }
`

const CommentBody = styled.div`
  margin-top: 0.5rem;
  font-size: 1rem;
`

const CommentListWrapper = styled.ul`
  margin-left: 0;
  padding-left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`

const CommentList = styled.li`
  list-style: none;
  display: block;
  width: 100%;
  height: fit-content;
  margin: 0.5rem 0;
`

export default Comments
