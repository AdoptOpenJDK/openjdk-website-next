import React, { FunctionComponent, useState } from "react"

import { IconButton } from "office-ui-fabric-react"
import { Link } from "gatsby"
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
            root: { position: "absolute", left: "2rem", top: 0 },
          }}
          iconProps={{ iconName: "bars" }}
          title="Menu"
          onClick={handleClick}
        />

        <Link id="logo" to="/" className="a-button">
          <img src={logo} alt="AdoptOpenJDK" />
        </Link>
        <div id="header-social-bar" style={{ top: "1rem" }}>
          <SocialBar />
        </div>
      </nav>
      <Banners />
    </>
  )
}

export default Header
