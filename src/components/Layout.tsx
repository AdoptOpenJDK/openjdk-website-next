import "./index.css"
import "../scss/styles-0-master.scss"
import "../scss/styles-1-large-main.scss"

import React, { FunctionComponent } from "react"

import Footer from "./Footer"
import Header from "./Header"
import Helmet from "react-helmet"

export interface LayoutProps {
  className?: string
}

export const Layout: FunctionComponent<LayoutProps> = ({
  children,
  className = "",
}) => {
  return (
    <>
      <Helmet>
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
