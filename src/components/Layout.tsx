import "./index.css"

import React, { FunctionComponent } from "react"

export interface LayoutProps {}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return <main>{children}</main>
}

export default Layout
