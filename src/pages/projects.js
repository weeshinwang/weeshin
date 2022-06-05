import React from "react"
import styled from "styled-components/macro"
import Layout from "../layout/layout"

export default function ProjectsPage() {
  return (
    <Layout title="projects">
      <ProjectWrapper>
        <ProjectCard>
          <h2>jarbook</h2>
          <IntroWrapper>一个 React 代码笔记本</IntroWrapper>
          <FeaturesWrapper>
            <li>esbuild wasm 浏览器中即时打包</li>
            <li>实时显示 React 组件</li>
            <li>在线调用任意 npm 包</li>
            <li>渲染 Markdown 片段</li>
            <li>代码提示以及代码美化</li>
            <li>变量持久化</li>
            <li>lerna 管理客户端与 CLI 包</li>
            <li>已发布 npm 包</li>
            &#8942;
          </FeaturesWrapper>
          <StacksWrapper>
            <p>技术栈</p>
            <p>React🔸TypeScript🔸redux🔸esbuild</p>
          </StacksWrapper>
          <SourceWrapper>
            <OuterLinks
              target="_blank"
              rel="noreferrer"
              href="https://jarbook-7gh2znir713d94e3-1253351468.tcloudbaseapp.com/"
            >
              在线访问
            </OuterLinks>
            <OuterLinks
              target="_blank"
              rel="noreferrer"
              href="https://github.com/weeshinwang/jarbook/"
            >
              GitHub
            </OuterLinks>
            <OuterLinks
              target="_blank"
              rel="noreferrer"
              href="https://gitee.com/weeshin/jarbook/"
            >
              Gitee
            </OuterLinks>
          </SourceWrapper>
        </ProjectCard>
        <ProjectCard>
          <h2>slicks</h2>
          <IntroWrapper>一个有趣的披萨商店</IntroWrapper>
          <FeaturesWrapper>
            <li>完全响应式设计</li>
            <li>Sanity 无头 CMS</li>
            <li>Gatsby Image 优化图片加载</li>
            <li>云函数发送订单邮件</li>
            <li>React Helmet 优化应用 SEO</li>
            <li>自定义内容 Schema 以及商户配置页面</li>
            <li>全局订单状态持久化</li>
            <li>styled-component CSS-in-JS 方案</li>
            &#8942;
          </FeaturesWrapper>
          <StacksWrapper>
            <p>技术栈</p>
            <p>React🔸Gatsby🔸GraphQL🔸Sanity</p>
          </StacksWrapper>
          <SourceWrapper>
            <OuterLinks
              target="_blank"
              rel="noreferrer"
              href="https://slicks-0gsqfnyh1d1bc2a4-1253351468.tcloudbaseapp.com/"
            >
              在线访问
            </OuterLinks>
            <OuterLinks
              target="_blank"
              rel="noreferrer"
              href="https://www.github.com"
            >
              GitHub
            </OuterLinks>
            <OuterLinks
              target="_blank"
              rel="noreferrer"
              href="https://www.gitee.com"
            >
              Gitee
            </OuterLinks>
          </SourceWrapper>
        </ProjectCard>
      </ProjectWrapper>
    </Layout>
  )
}

const ProjectWrapper = styled.div`
  display: flexbox;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  & * {
    text-align: center;
  }

  & > div {
    margin: 20px;
  }

  @media only screen and (max-width: 600px) {
    padding: 20px 0;
    transition: 300ms;
  }
`

const ProjectCard = styled.div`
  width: 320px;
  height: minmax(400px, fit-content);
  padding: 10px;
  border-radius: 16px;
  box-shadow: var(--color-shadow-elevation-high);

  ul {
    padding: 0;
    list-style-type: none;
  }

  li {
    list-style: none;
    padding: 0;
    margin: 0;
    text-indent: 0;
  }
  h2 {
    font-family: Merriweather;
    font-size: 1.5rem;
    text-decoration: underline;
  }
`

const IntroWrapper = styled.p``

const FeaturesWrapper = styled.ul`
  & li::before {
    content: "✅";
  }
`
const StacksWrapper = styled.div``
const SourceWrapper = styled.div`
  margin-top: 10px;
`

const OuterLinks = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  margin: 5px 5px;
  background-color: transparent;
  border: 1px solid #43978d;
  padding: 2px 5px;
  border-radius: 5px;
  &:hover {
    background-color: var(--color-hover-bg);
    border-color: transparent;
  }
  transition: background 500ms;
`
