import { Nav, Panel, PanelType } from "office-ui-fabric-react"
import React, { FunctionComponent } from "react"

import { IconButton } from "office-ui-fabric-react"
import SocialBar from "../SocialBar"
import { navigate } from "@reach/router"

export interface MenuProps {
  isOpen: boolean
  onClick: () => void
}

export const Menu: FunctionComponent<MenuProps> = ({ isOpen, onClick }) => {
  return (
    <Panel customWidth={"320px"} isOpen={isOpen} type={PanelType.customNear}>
      <div id="menu-container" className="grey-bg slideInLeft">
        <div id="menu-header" style={{ backgroundColor: "inherit" }}>
          <IconButton
            styles={{ icon: { fontSize: "2em" }, root: { left: 144, top: 10 } }}
            iconProps={{ iconName: "arrow-circle-left" }}
            title="Close"
            onClick={onClick}
          />
        </div>
        <div id="menu-content">
          <Nav
            onLinkClick={(event, item) => {
              event.preventDefault()
              navigate(item.url)
            }}
            groups={[
              {
                links: [
                  { name: "Home", url: "/" },
                  { name: "Latest release", url: "/releases" },
                  { name: "Build archive", url: "/archive" },
                  { name: "Nightly builds", url: "/nightly" },
                  { name: "Installation", url: "/installation" },
                  { name: "Migration Guide", url: "/migration" },
                  { name: "Support", url: "/support" },
                  { name: "Brand resources", url: "/logos" },
                  {
                    name: "Blog",
                    target: "_blank",
                    url: "https://blog.adoptopenjdk.net/",
                  },
                  {
                    name: "API",
                    target: "_blank",
                    url: "https://api.adoptopenjdk.net",
                  },
                ],
              },

              {
                name: "Projects",
                links: [{ name: "IcedTea-Web", url: "/icedtea-web" }],
              },
              {
                name: "Further information",
                links: [
                  { name: "Quality", url: "/quality" },
                  { name: "Supported Platforms", url: "/supported_platforms" },
                  { name: "Get involved!", url: "/getinvolved" },
                  { name: "Sponsors", url: "/sponsors" },
                  { name: "About", url: "/about" },
                ],
              },
            ]}
            styles={{
              group: { fontFamily: "'Open Sans', sans-serif" },
              compositeLink: { backgroundColor: "inherit" },
              link: { fontFamily: "'Open Sans', sans-serif" },
            }}
          />
          <div className="align-center">
            <div id="menu-social-bar">
              <SocialBar />
            </div>
          </div>
        </div>
      </div>
    </Panel>
  )
}

export default Menu
