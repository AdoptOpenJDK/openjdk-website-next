import { Panel, PanelType } from "office-ui-fabric-react"
import React, { FunctionComponent } from "react"

import { IconButton } from "office-ui-fabric-react"
import SocialBar from "../SocialBar"

export interface MenuProps {
  isOpen: boolean
  onClick: () => void
}

export const Menu: FunctionComponent<MenuProps> = ({ isOpen, onClick }) => {
  return (
    <Panel customWidth={"320px"} isOpen={isOpen} type={PanelType.customNear}>
      <div id="menu-container" className="grey-bg slideInLeft">
        <div id="menu-header">
          <IconButton
            iconProps={{ iconName: "arrow-circle-left" }}
            title="Close"
            onClick={onClick}
          >
            <i id="menu-close" className="fa fa-arrow-circle-left" />
          </IconButton>
        </div>
        <div id="menu-content">
          <ul>
            <li>
              <a href="./index.html">Home</a>
            </li>
            <li>
              <a href="./releases.html">Latest release</a>
            </li>
            <li>
              <a href="./archive.html">Build archive</a>
            </li>
            <li>
              <a href="./nightly.html">Nightly builds</a>
            </li>
            <li>
              <a href="./installation.html">Installation</a>
            </li>
            <li className="submenu">
              <a>Projects</a>
              <ul>
                <li>
                  <a href="./icedtea-web.html">IcedTea-Web</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="./migration.html">Migration Guide</a>
            </li>
            <li>
              <a href="./support.html">Support</a>
            </li>
            <li>
              <a href="./logos.html">Brand Resources</a>
            </li>
            <li>
              <a target="_blank" href="https://blog.adoptopenjdk.net/">
                Blog
              </a>
            </li>
            <li>
              <a target="_blank" href="https://api.adoptopenjdk.net">
                API
              </a>
            </li>
            <li className="submenu">
              <a>Further information</a>
              <ul>
                <li>
                  <a href="./quality.html">Quality</a>
                </li>
                <li>
                  <a href="./supported_platforms.html">Supported Platforms</a>
                </li>
                <li>
                  <a href="./getinvolved.html">Get involved!</a>
                </li>
                <li>
                  <a href="./sponsors.html">Sponsors</a>
                </li>
                <li>
                  <a href="./about.html">About</a>
                </li>
              </ul>
            </li>
          </ul>
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
