import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "/home/cabox/workspace/tutorial-part-four/src/styles/global.css"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1> 
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </Layout>
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`