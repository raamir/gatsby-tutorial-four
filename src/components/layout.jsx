import React from "react"
// import { css } from "@emotion/core"
import { StaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

// import { rhythm } from "../utils/typography"

export default ({ children }) => (<StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
}
    render={data => (
  <div style={{ margin: `0 auto`, maxWidth: `700px`, padding: `2%`, paddingTop: `1.5%` }}>
         <Helmet>
          <meta charSet="utf-8" />
          <title>Pandas Eating lots</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
    <Link to={`/`}>
      <h3 style={{ marginBottom: `2%`, display: `inline-block`, fontStyle: `normal` }}>
         {data.site.siteMetadata.title}
      </h3>
    </Link>
    <Link to={`/about/`} style={{ float: `right` }}>
      About
        </Link>
        {children}
      </div>
    )}
  />
)