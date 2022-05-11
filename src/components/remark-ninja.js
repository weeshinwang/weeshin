// import React, { useState, useEffect } from "react"
// import axios from "axios"
// import styled from "styled-components/macro"
// import text from "../utils/remark-ninja-text"

// const rnUrlPrefix = "https://api.rmninja.com"

// const SITE_ID = process.env.GATSBY_REMARK_NINJA_SITE_ID

// const checkHttpStatus = (resp) => {
//   if (resp.status >= 400) {
//     throw new Error(resp.data.message)
//   } else {
//     return resp.data
//   }
// }

// const loadComments = ({ siteId, threadSlug, start, limit }) => {
//   start = start === undefined ? 0 : start
//   limit = limit === undefined ? 10 : limit
//   threadSlug = threadSlug || window.location.pathname
//   return axios
//     .get(
//       `${rnUrlPrefix}/api/1/sites/${encodeURIComponent(
//         siteId
//       )}/threads/${encodeURIComponent(threadSlug)}/comments`,
//       {
//         params: {
//           start,
//           limit,
//         },
//       }
//     )
//     .then(checkHttpStatus)
// }

// const postComment = ({
//   siteId,
//   threadSlug,
//   authorName,
//   authorEmail,
//   body,
//   replyToComment,
// }) => {
//   threadSlug = threadSlug || window.location.pathname
//   return axios
//     .post(`${rnUrlPrefix}/api/1/comments`, {
//       siteId,
//       threadSlug,
//       authorName,
//       authorEmail,
//       body,
//       replyToComment,
//     })
//     .then(checkHttpStatus)
// }

// const lsGet = (key) =>
//   typeof localStorage !== "undefined" && localStorage.getItem(key)
// const lsSet = (key, val) =>
//   typeof localStorage !== "undefined" && localStorage.setItem(key, val)

// const lsAuthorNameKey = "rnCommentAuthorName"
// const lsAuthorEmailKey = "rnCommentAuthorEmail"

// const scrollTo = (hash) => {
//   window.location.hash = `#${hash}`
// }

// const CommentForm = ({ siteId, threadSlug, onNewComment, replyingTo }) => {
//   const [authorName, setAuthorName] = useState(lsGet(lsAuthorNameKey) || "")
//   const [authorEmail, setAuthorEmail] = useState(lsGet(lsAuthorEmailKey) || "")
//   const [body, setBody] = useState("")
//   const [error, setError] = useState(undefined)
//   const [message, setMessage] = useState(undefined)
//   useEffect(() => {
//     if (replyingTo) {
//       const replyingToUser = replyingTo.authorName || "Guest"
//       setBody(`@${replyingToUser} `)
//     } else {
//       setBody("")
//     }
//   }, [replyingTo])
//   const submit = (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//     const btn = e.target
//     btn.disabled = true
//     lsSet(lsAuthorNameKey, authorName)
//     lsSet(lsAuthorEmailKey, authorEmail)
//     setError(undefined)
//     setMessage(undefined)
//     postComment({
//       siteId,
//       threadSlug,
//       authorName,
//       authorEmail,
//       body,
//       replyToComment: replyingTo ? replyingTo.id : undefined,
//     })
//       .then(() => {
//         setMessage(text("submitted"))
//         setBody("")
//         onNewComment()
//       })
//       .catch((e) => {
//         setError(e.message)
//       })
//       .finally(() => {
//         btn.disabled = false
//       })
//   }
//   return (
//     <form className="rn-comment-form" id="rn-comment-form">
//       {error !== undefined && <div className="rn-error">{error}</div>}
//       <div className="rn-author-box">
//         <div className="rn-author-name-box">
//           <label htmlFor="rn-author-name">{text("name")}</label>
//           <input
//             id="rn-author-name"
//             value={authorName}
//             onChange={(e) => setAuthorName(e.target.value)}
//             placeholder={text("name_placeholder")}
//           />
//         </div>
//         <div className="rn-author-email-box">
//           <label htmlFor="rn-author-email">{text("email")}</label>
//           <input
//             id="rn-author-email"
//             type="email"
//             placeholder={text("email_placeholder")}
//             value={authorEmail}
//             onChange={(e) => setAuthorEmail(e.target.value)}
//           />
//         </div>
//       </div>
//       <label htmlFor="rn-body">{text("comment")}</label>
//       <textarea
//         id="rn-body"
//         rows="5"
//         value={body}
//         onChange={(e) => setBody(e.target.value)}
//       />
//       <input onClick={submit} type="submit" value={text("submit")} />
//       {message !== undefined && <span className="rn-success">{message}</span>}
//       <div className="rn-promo-link">
//         {text("powered_by")} <a href="https://remark.ninja">Remark Ninja</a>.
//       </div>
//     </form>
//   )
// }

// const Comment = ({ authorName, gravatarHash, body, createdAt, replyFn }) => {
//   const date = new Date(createdAt)
//   return (
//     <div className="rn-comment-item">
//       <div className="rn-gravatar">
//         <img
//           alt={`Avatar for ${authorName}`}
//           src={`https://www.gravatar.com/avatar/${gravatarHash}?s=40`}
//         />
//       </div>
//       <div className="rn-main-section">
//         <div className="rn-author-name">{authorName || text("guest")}</div>
//         <div className="rn-comment-actions">
//           <span className="rn-date">{date.toLocaleDateString()}</span>
//           <button onClick={replyFn}>Reply</button>
//         </div>
//         <div
//           className="rn-comment-body"
//           dangerouslySetInnerHTML={{ __html: body }}
//         />
//       </div>
//     </div>
//   )
// }

// const Comments = ({
//   siteId = SITE_ID,
//   threadSlug = "WEESHIN-TEST",
//   pageSize,
// }) => {
//   console.log("yay", SITE_ID)

//   const [comments, setComments] = useState(undefined)
//   const [error, setError] = useState(undefined)
//   const [start, setStart] = useState(0)
//   const [replyingTo, setReplyingTo] = useState(undefined)
//   const limit = pageSize === undefined ? 20 : pageSize
//   const load = () => {
//     loadComments({ siteId, threadSlug, start, limit })
//       .then((cs) => {
//         setComments(cs)
//         setError(undefined)
//         setReplyingTo(undefined)
//       })
//       .catch((e) => {
//         setError(e.message)
//       })
//   }
//   const prevPage = () => {
//     setStart(Math.max(start - limit, 0))
//   }
//   const nextPage = () => {
//     setStart(start + limit)
//   }

//   useEffect(load, [siteId, threadSlug, pageSize, start, limit])

//   if (comments === undefined && error === undefined) {
//     return <div>{text("loading_comments")}</div>
//   } else if (comments == undefined && error !== undefined) {
//     return <div className="rn-error">Failed to load comments: {error}</div>
//   } else {
//     return (
//       <CommentWrapper>
//         {!!replyingTo && (
//           <div>
//             Replying to{" "}
//             <a href={`#rn-comment-${replyingTo.id}`}>
//               {replyingTo.authorName || "Guest"}
//             </a>{" "}
//             <button
//               className="cancelReply"
//               onClick={() => setReplyingTo(undefined)}
//             >
//               X
//             </button>
//           </div>
//         )}
//         <CommentForm
//           siteId={siteId}
//           threadSlug={threadSlug}
//           onNewComment={load}
//           replyingTo={replyingTo}
//         />
//         {!!error && <div className="rn-error">{error}</div>}
//         <ul className="rn-comment-list">
//           {comments.map((c) => (
//             <li key={c.id} id={`rn-comment-${c.id}`}>
//               <Comment
//                 authorName={c.authorName}
//                 gravatarHash={c.gravatarHash}
//                 body={c.bodyHTML}
//                 createdAt={c.createdAt}
//                 replyFn={() => {
//                   setReplyingTo(c)
//                   scrollTo("rn-comment-form")
//                 }}
//               />
//             </li>
//           ))}
//         </ul>
//         <div className="rn-pagination">
//           {start > 0 && <a onClick={prevPage}>{text("prev_page")}</a>}
//           {comments.length === limit && (
//             <a onClick={nextPage}>{text("next_page")}</a>
//           )}
//         </div>
//       </CommentWrapper>
//     )
//   }
// }

// const CommentWrapper = styled.div`
//   .rn-comment-list {
//     list-style: none;
//     margin-left: 0;
//     padding: 0;
//   }

//   .rn-comment-item {
//     display: flex;
//     margin-top: 10px;
//   }

//   .rn-comment-item .rn-gravatar {
//     flex: 0 0 40px;
//   }

//   .rn-main-section {
//     padding-left: 10px;
//   }

//   .rn-author-name {
//     font-weight: bold;
//     font-size: 16px;
//   }

//   .rn-comment-body {
//     font-size: 14px;
//     font-weight: normal;
//   }

//   .rn-date {
//     font-size: 12px;
//     font-weight: light;
//     color: #888;
//   }

//   .rn-comment-actions {
//     font-size: 12px;
//     font-weight: light;
//   }

//   button {
//     cursor: pointer;
//   }

//   button.cancelReply {
//     border: none;
//     background: transparent;
//     color: rgb(29, 161, 242);
//     padding-left: 3px;
//   }

//   .rn-comment-actions button {
//     cursor: pointer;
//     border: none;
//     background: transparent;
//     padding-top: 0;
//     padding-bottom: 0;
//     color: #888;
//   }

//   .rn-comment-item:hover .rn-comment-actions button {
//     color: rgb(29, 161, 242);
//   }

//   a {
//     color: rgb(29, 161, 242);
//   }

//   .rn-error {
//     color: red;
//     font-size: 14px;
//   }

//   .rn-comment-form {
//     width: 100%;
//   }

//   .rn-comment-form label {
//     display: block;
//     margin-top: 5px;
//   }

//   .rn-comment-form input {
//     width: 100%;
//     display: block;
//   }

//   .rn-comment-form textarea {
//     width: 100%;
//   }

//   .rn-comment-form input[type="submit"] {
//     width: auto;
//     padding: 6px 22px;
//     border-radius: 8px;
//     border-width: 0;
//     margin-top: 10px;
//     color: white;
//     background-color: rgb(29, 161, 242);
//     font-size: 16px;
//     display: inline-block;
//     cursor: pointer;
//   }

//   .rn-comment-form input[type="submit"]:hover {
//     background-color: rgb(21, 126, 192);
//   }

//   .rn-comment-form input[type="submit"]:disabled {
//     background-color: #7d7f8d;
//     cursor: wait;
//   }

//   .rn-author-name-box,
//   .rn-author-email-box {
//     width: 48%;
//     margin: 0;
//   }

//   .rn-author-box {
//     display: flex;
//     justify-content: space-between;
//   }

//   .rn-success {
//     color: green;
//     padding-left: 10px;
//   }

//   .rn-pagination {
//     display: flex;
//     justify-content: space-between;
//   }

//   .rn-pagination a {
//     cursor: pointer;
//     color: rgb(29, 161, 242);
//   }

//   @media (max-width: 700px) {
//     .rn-author-name-box,
//     .rn-author-email-box {
//       width: 100%;
//     }
//     .rn-author-box {
//       flex-direction: column;
//     }
//   }

//   .rn-promo-link {
//     font-size: 12px;
//     color: #7d7f8d;
//     text-align: right;
//   }

//   .rn-promo-link a {
//     color: rgb(29, 161, 242);
//   }
// `

// export default Comments
