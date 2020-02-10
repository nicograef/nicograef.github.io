/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Nico Gräf - Software Engineer',
    siteUrl: 'https://nicograef.com',
    description: 'Nico Gräf, software engineer.',
    author: 'Nico Gräf'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Nico Graef',
        short_name: 'Nico Graef',
        start_url: '/',
        background_color: '#f9f7f7',
        theme_color: '#f9f7f7',
        display: 'standalone',
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-react-helmet'
  ]
}
