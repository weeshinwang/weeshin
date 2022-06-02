import React from "react"
import styled from "styled-components/macro"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <NavWrapper>
      <List>
        {/* <ListItem to="/">主页</ListItem> */}
        <ListItem
          activeStyle={{
            backgroundColor: "var(--color-hover-bg)",
            color: "var(--color-hover-text)",
          }}
          to="/projects"
        >
          项目
        </ListItem>
        <ListItem
          activeStyle={{
            backgroundColor: "var(--color-hover-bg)",
            color: "var(--color-hover-text)",
          }}
          to="/posts"
        >
          文章
        </ListItem>
        <ListItem
          activeStyle={{
            backgroundColor: "var(--color-hover-bg)",
            color: "var(--color-hover-text)",
          }}
          to="/thoughts"
        >
          想法
        </ListItem>
        <ListItem
          activeStyle={{
            backgroundColor: "var(--color-hover-bg)",
            color: "var(--color-hover-text)",
          }}
          to="/about"
        >
          关于我
        </ListItem>
      </List>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  justify-self: start;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const List = styled.div`
  display: flex;
  list-style: none;
  align-items: baseline;
  margin-left: 30px;
`

const ListItem = styled(Link)`
  outline: none;
  margin: 0 5px;
  padding: 0px 8px;
  font-weight: 700;
  font-size: 1.15rem;
  text-decoration: none;
  &:visited {
    border-color: white;
  }
  margin: 0 10px;
  border: none;
  background-color: transparent;
  border-radius: 5px;
  &:hover {
    background-color: #f47fb5;
    color: white;
  }
  transition: 300ms;
`
