import React, { FunctionComponent } from "react"

import SocialBar from "./SocialBar"
import logo from "./adopt_logo_white.svg"

export interface HeaderProps {}

interface BannersProps {}

/**
 * This is where you can add banners to the website (nothing here now)
 */
const Banners: React.FunctionComponent<BannersProps> = () => {
  return <div />
}

interface MenuProps {}

const Menu: React.FunctionComponent<MenuProps> = () => {
  return <div />
}

export const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <>
      <Menu />
      <nav>
        <i id="menu-button" className="fa fa-bars" aria-hidden="true" />
        <a id="logo" href="/" className="a-button">
          <img src={logo} alt="AdoptOpenJDK" />
        </a>
        <div id="header-social-bar">
          <SocialBar />
        </div>
      </nav>
      <Banners />
    </>
  )
}

export default Header
