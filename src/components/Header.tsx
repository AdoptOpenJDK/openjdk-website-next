import React, { FunctionComponent, useState } from "react"

import Menu from "./Header/Menu"
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

export const Header: FunctionComponent<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleClick = () => setIsMenuOpen(prevState => !prevState)

  return (
    <>
      <Menu isOpen={isMenuOpen} onClick={handleClick} />
      <nav>
        <button style={{ border: "none", padding: 0 }} onClick={handleClick}>
          <i id="menu-button" className="fa fa-bars" aria-hidden="true" />
        </button>
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
