const apiUrl = "https://api.adoptopenjdk.net/v3";

// Available releases are hard-coded here to allow for the assets endpoint
const availableVersions = [8, 9, 10, 11, 12, 13];

// Array of releases for each type
const assets = availableVersions
  .map(version => ["nightly", version])
  .concat(availableVersions.map(version => ["releases", version]));

const apiEntities = [
  {
    name: "avaliableReleases",
    url: `${apiUrl}/info/available_releases`
  },
  { name: "platforms", url: `${apiUrl}/info/platforms` },
  { name: "variants", url: `${apiUrl}/info/variants` }
].concat(
  assets.map(([releaseType, version]) => ({
    name: `assets${releaseType}${version}`,
    url: `${apiUrl}/assets/${releaseType}/${version}`
  }))
);
console.log(apiEntities);
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-apiserver`,
      options: {
        entitiesArray: apiEntities,
        verboseOutput: true
      }
    },
    // {
    //   resolve: `gatsby-source-apiserver`,
    //   options: {
    //     enableDevRefresh: true,
    //     name: "avaliableReleases",
    //     url: `${apiUrl}/info/available_releases`,
    //     verboseOutput: true
    //   }
    // },
    // {
    //   resolve: `gatsby-source-apiserver`,
    //   options: {
    //     enableDevRefresh: true,
    //     name: "platforms",
    //     url: `${apiUrl}/info/platforms`,
    //     verboseOutput: true
    //   }
    // },
    // {
    //   resolve: `gatsby-source-apiserver`,
    //   options: {
    //     enableDevRefresh: true,
    //     name: "variants",
    //     url: `${apiUrl}/info/variants`,
    //     verboseOutput: true
    //   }
    // },
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
