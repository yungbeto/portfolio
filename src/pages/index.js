import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div className="post-card" key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                  lineHeight: 1.7,
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small
                style={{
                  textTransform: "uppercase",
                  fontFamily: "sans-serif",
                  letterSpacing: 1.5,
                  color: "#666",
                  lineHeight: "auto",
                }}
              >{node.frontmatter.category}</small>
              <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
              <p 
                style={{
                  color: "#444",
                }}
              dangerouslySetInnerHTML={{ __html: node.frontmatter.description }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            category
            title
            description
            featuredImage {
              childImageSharp{
                  sizes(maxWidth: 420) {
                      ...GatsbyImageSharpSizes
                  }
              }
          }
          }
        }
      }
    }
  }
`
