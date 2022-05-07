const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const postsData = await graphql(`
    query getPostsData {
      allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
        nodes {
          frontmatter {
            title
          }
          id
        }
      }
    }
  `)

  if (postsData.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = postsData.data.allMdx.nodes

  posts.forEach((post, index) => {
    createPage({
      path: `/posts/${post.frontmatter.title}`,
      component: path.resolve(`${__dirname}/src/layout/post-layout.js`),
      context: { id: post.id },
    })
  })
}
