/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require("path")

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create DSG page for individual shoots
  const shootTemplate = path.resolve(`./src/templates/shoot.js`)
  
  const result = await graphql(`
    query {
      allShootsJson {
        nodes {
          id
          slug
          name
        }
      }
    }
  `)

  if (result.errors) {
    console.error(result.errors)
    throw result.errors
  }

  const shoots = result.data.allShootsJson.nodes

  shoots.forEach((shoot) => {
    createPage({
      path: `/shoot/${shoot.slug}/`,
      component: shootTemplate,
      context: {
        slug: shoot.slug,
      },
      defer: true, // This enables DSG (Deferred Static Generation)
    })
  })
}