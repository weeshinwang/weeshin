import React from "react"
import styled from "styled-components/macro"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <NavWrapper>
      <List>
        <ListWrapper>
          <ListItem to="/">主页</ListItem>
        </ListWrapper>
        <ListWrapper>
          <ListItem to="/projects">项目</ListItem>
        </ListWrapper>
        <ListWrapper>
          <ListItem to="/posts">文章</ListItem>
        </ListWrapper>
        <ListWrapper>
          <ListItem to="/about">关于我</ListItem>
        </ListWrapper>
      </List>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav``

const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: baseline;
`

const ListItem = styled(Link)`
  outline: none;
  margin: 0 10px;
  font-weight: 700;
  font-size: 1.15rem;
  text-decoration: none;
  &:visited {
    color: initial;
    border-color: white;
  }
`

const ListWrapper = styled.div`
  margin: 0 10px;
  border: none;
  background-color: transparent;
  border-radius: 3px;
  &:hover {
    background-color: #f47fb5;
    & > a {
      color: white;
    }
  }
  transition: 0.5s;
`
