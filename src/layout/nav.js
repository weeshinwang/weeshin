import React from "react"
import styled from "styled-components/macro"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <NavWrapper>
      <List>
        <Button>
          <ListItem to="/">主页</ListItem>
        </Button>
        <Button>
          <ListItem to="/projects">项目</ListItem>
        </Button>
        <Button>
          <ListItem to="/posts">文章</ListItem>
        </Button>
        <Button>
          <ListItem to="/about">关于我</ListItem>
        </Button>
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
  margin: 0 10px;
  font-weight: 700;
  font-size: 1.15rem;
  text-decoration: none;
  &:visited {
    color: initial;
  }
`

const Button = styled.button`
  margin: 0 10px;
  border: none;
  background-color: transparent;
  &:hover {
    background-color: white;
  }
  transition: 0.5s;
`
