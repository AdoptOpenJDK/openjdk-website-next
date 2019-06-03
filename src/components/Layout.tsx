import "./index.css"
import "../scss/styles-0-master.scss"
import "../scss/styles-1-large-main.scss"

import React, { FunctionComponent } from "react"

import Footer from "./Footer"
import Header from "./Header"
import Helmet from "react-helmet"
import { registerIcons } from "office-ui-fabric-react"

registerIcons({
  icons: {
    "arrow-circle-left": <i className="fa fa-arrow-circle-left" />,
  },
})

export interface LayoutProps {
  className?: string
}

export const Layout: FunctionComponent<LayoutProps> = ({
  children,
  className = "",
}) => {
  return (
    <>
      <Helmet bodyAttributes={{ class: "blue-bg" }}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        />
      </Helmet>
      <Header />
      <main className={`grey-bg ${className}`}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
