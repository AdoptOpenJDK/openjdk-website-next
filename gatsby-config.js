module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-apiserver`,
      options: {
        enableDevRefresh: true,
        name: "assets",
        url: "https://api.adoptopenjdk.net/v3/assets",
        verboseOutput: true
      }
    },
    {
      resolve: `gatsby-source-apiserver`,
      options: {
        enableDevRefresh: true,
        name: "avaliableReleases",
        url: "https://api.adoptopenjdk.net/v3/info/available_releases",
        verboseOutput: true
      }
    },
    {
      resolve: `gatsby-source-apiserver`,
      options: {
        enableDevRefresh: true,
        name: "platforms",
        url: "https://api.adoptopenjdk.net/v3/info/platforms",
        verboseOutput: true
      }
    },
    {
      resolve: `gatsby-source-apiserver`,
      options: {
        enableDevRefresh: true,
        name: "variants",
        url: "https://api.adoptopenjdk.net/v3/info/variants",
        verboseOutput: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-attr`]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-client-side-redirect`
  ]
};
