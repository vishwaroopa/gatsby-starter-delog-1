import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
<Layout>
 <Helmet>
        <title>Vider Business Solutions</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="ThemeZaa" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1"
        />
        <meta
          name="description"
          content="LEARN-TRAIN-MANAGE-SUCCEED - join VIDER,  a technology-driven platform that revolutionizes business practices and ensures compliance with regulations, simplifying the process of doing business & professional practice."
        />
        <link rel="stylesheet" type="text/css" href="https://vider.netlify.app/css/font-icons.min.css" />
        <link rel="stylesheet" type="text/css" href="https://vider.netlify.app/css/theme-vendors.min.css" />
        <link rel="stylesheet" type="text/css" href="https://vider.netlify.app/css/style.css" />
        <link rel="stylesheet" href="https://vider.netlify.app/css/main.css" />
        <link rel="stylesheet" type="text/css" href="https://vider.netlify.app/css/responsive.css" />
      </Helmet>
      <HeroHeader/>
      <h2>Blog Posts &darr;</h2>
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`
