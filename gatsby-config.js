/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ASFinder`,
    description: `Find archery shoots, tournaments, and events near you. Browse 3D shoots, target competitions, youth clinics, and more.`,
    author: `@archeryshootfinder`,
    siteUrl: `https://archeryshootfinder.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `clubs`,
        path: `${__dirname}/src/data/clubs.json`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Archery Shoot Finder`,
        short_name: `ShootFinder`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#C2410C`, // Terracotta
        background_color: `#F8F9FA`, // Bootstrap light gray
        icons: [
          {
            src: `src/images/gatsby-icon.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/gatsby-icon.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ]
      },
    },
    `gatsby-transformer-json`,
  ],
}