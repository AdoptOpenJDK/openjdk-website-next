"use strict";

const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const { createRedirect } = actions;

  const markdownTemplate = path.resolve(`src/templates/markdownTemplate.js`);

  let redirects = [
    { f: `/supported_platforms`, t: `/supported-platforms` },
    { f: `/getinvolved`, t: `/get-involved` }
  ];

  redirects.forEach(({ f, t }) => {
    createRedirect({
      fromPath: f,
      isPermanent: true,
      redirectInBrowser: true,
      toPath: t
    });

    createRedirect({
      fromPath: `${f}.html`,
      isPermanent: true,
      redirectInBrowser: true,
      toPath: t
    });
  });

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
      return Promise.reject(result.errors);
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: markdownTemplate,
        context: {} // additional data can be passed via context
      });

      createRedirect({
        fromPath: `${node.frontmatter.path}.html`,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: node.frontmatter.path
      });
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createRedirect } = actions;

  if (page.path != "/") {
    createRedirect({
      fromPath: `${page.path.slice(0, -1)}.html`,
      isPermanent: true,
      redirectInBrowser: true,
      toPath: page.path.slice(0, -1)
    });
  }
};
