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
          <head>
    
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-N42TX3Z');</script>
  <!-- End Google Tag Manager -->
  
  
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
      content="LEARN-TRAIN-MANAGE-SUCCEED - join VIDER,  a technology-driven platform that revolutionizes business practices and ensures compliance with regulations, simplifying the process of doing business & professional practice."
    />
    <link rel="shortcut icon" href="images/vider-favicon.png" />
    <link rel="apple-touch-icon" href="images/vider-favicon.png" />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="images/vider-favicon.png"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="images/apple-touch-icon-114x114.png"
    />
    <!-- style sheets and font icons  -->
    <link rel="stylesheet" type="text/css" href="https://vider.netlify.app/css/font-icons.min.css" />
    <link rel="stylesheet" type="text/css" href="https://vider.netlify.app/css/theme-vendors.min.css" />
    <link rel="stylesheet" type="text/css" href="https://vider.netlify.app/css/style.css" />
    <link rel="stylesheet" href="https://vider.netlify.app/css/main.css" />
    <link rel="stylesheet" type="text/css" href="https://vider.netlify.app/css/responsive.css" />

    <style>
      .image-show {
        background-image: url("./images/aks1.png");
      }
      .mobile-hero-img {
        display: none;
        max-width: 100%;
      }
      .word-animation {
        font-size: 32px;
      }
      .what-special {
        color: white;
      }
      .what-special:hover {
        color: black;
      }
      @media (max-width: 767px) {
        .image-show {
          background-image: none;
        }
        .mobile-hero-img {
          display: block;
          max-width: 100%;
        }
        .word-animation {
          font-size: 18px;
        }
      }
    </style>
  </head>
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
