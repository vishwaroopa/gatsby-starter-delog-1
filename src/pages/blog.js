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
        <link rel="shortcut icon" href="../images/vider-favicon.png" />
        <link rel="apple-touch-icon" href="../images/vider-favicon.png" />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="../images/vider-favicon.png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="../images/apple-touch-icon-114x114.png"
        />

        <link rel="stylesheet" type="text/css" href="../css/font-icons.min.css" />
    <link rel="stylesheet" type="text/css" href="../css/theme-vendors.min.css" />
            <link rel="stylesheet" type="text/css" href="../css/style.css" />
    <link rel="stylesheet" href="../css/main.css" />
    <link rel="stylesheet" type="text/css" href="../css/responsive.css" />
    <script type="text/javascript" src="../js/jquery.min.js"></script>
    <script type="text/javascript" src="../js/theme-vendors.min.js"></script>
    <script type="text/javascript" src="../js/main.js"></script>
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
