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
            <li>esbuild wasm 在浏览器中即时打包代码</li>
            <li>实时显示 React 组件</li>
            <li>在线调用任意 npm 包</li>
            <li>渲染 Markdown 片段</li>
            <li>代码提示以及代码美化</li>
            <li>变量持久化</li>
            <li>lerna 管理客户端与 CLI 包</li>
            <li>已发布 npm 包</li>
            <li>&#8942;</li>
          </FeaturesWrapper>
          <StacksWrapper>
            <p>技术栈</p>
            <p>React🔸TypeScript🔸redux🔸esbuild</p>
          </StacksWrapper>
          <SourceWrapper>
            <p>
              本地使用 <code>npx jarbook open</code> 试用或在线访问
            </p>
          </SourceWrapper>
          <CodeWrapper>
            <p>
              源代码：
              <span>
                <a href="">GitHub</a>
              </span>
              <span>
                <a href="">Gitee</a>
              </span>
            </p>
          </CodeWrapper>
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
            <li>&#8942;</li>
          </FeaturesWrapper>
          <StacksWrapper>
            <p>技术栈</p>
            <p>React🔸Gatsby🔸GraphQL🔸Sanity</p>
          </StacksWrapper>
          <SourceWrapper>
            <p>
              <a href="">在线访问</a>
            </p>
          </SourceWrapper>
          <CodeWrapper>
            <p>
              源代码：
              <span>
                <a href="">GitHub</a>
              </span>
              <span>
                <a href="">Gitee</a>
              </span>
            </p>
          </CodeWrapper>
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
    margin: 16px;
  }
`

const ProjectCard = styled.div`
  border: 1px solid red;
  width: 350px;
  height: 380px;

  & ul {
    padding: 0;
    list-style-type: none;
  }

  & li {
    list-style: none;
    padding: 0;
    margin: 0;
    text-indent: 0;
  }
`

const IntroWrapper = styled.p``

const FeaturesWrapper = styled.ul``

const StacksWrapper = styled.div``

const SourceWrapper = styled.div``
const CodeWrapper = styled.div``
