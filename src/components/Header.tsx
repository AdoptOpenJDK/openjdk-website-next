import React, { FunctionComponent, useState } from "react"

import { IconButton } from "office-ui-fabric-react"
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
        <IconButton
          styles={{
            icon: { color: "white", fontSize: "2.25em" },
            root: { left: 82, top: 42 },
          }}
          iconProps={{ iconName: "bars" }}
          title="Menu"
          onClick={handleClick}
        />

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
