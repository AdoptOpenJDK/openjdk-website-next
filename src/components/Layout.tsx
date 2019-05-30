import "./index.css"
import "../scss/styles-0-master.scss"

import React, { FunctionComponent } from "react"

import Footer from "./Footer"

export interface LayoutProps {}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
