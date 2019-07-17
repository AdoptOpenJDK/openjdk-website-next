"use strict"

const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const { createRedirect } = actions

  const markdownTemplate = path.resolve(`src/templates/markdownTemplate.js`)

  createRedirect({
    fromPath: `/supported_platforms`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/supported-platforms`,
  })

  createRedirect({
    fromPath: `/getinvolved`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/get-involved`,
  })

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: markdownTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
