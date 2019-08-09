const apiUrl = "https://api.adoptopenjdk.net/v3";

const apiEntities = [
  {
    name: "avaliableReleases",
    url: `${apiUrl}/info/available_releases`
  },
  { name: "platforms", url: `${apiUrl}/info/platforms` },
  { name: "variants", url: `${apiUrl}/info/variants` }
];

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-apiserver`,
      options: {
        entitiesArray: apiEntities,
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
