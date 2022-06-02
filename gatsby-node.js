const path = require("path")

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
      path: `/posts/${post.id}`,
      component: path.resolve(`${__dirname}/src/layout/post-layout.js`),
      context: { id: post.id },
    })
  })
}
