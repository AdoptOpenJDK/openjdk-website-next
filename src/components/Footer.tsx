import React, { FunctionComponent } from "react"

import { Link } from "gatsby"
import SocialBar from "./SocialBar"
import gitHubIcon from "./Footer/GitHub.png"
import jenkinsIcon from "./Footer/jenkins_headshot.png"
import slackIcon from "./Footer/slack.svg"

export interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer>
      <div className="margin-auto">
        <div className="footer-icon align-center inline-block">
          <Link to="/slack" className="light-link no-underline">
            <img src={slackIcon} alt="Slack logo" className="footer-logo" />
            <p className="margin-auto">Slack</p>
          </Link>
        </div>

        <div className="footer-icon align-center inline-block">
          <a
            href="https://github.com/AdoptOpenJDK"
            target="_blank"
            className="light-link no-underline"
          >
            <img src={gitHubIcon} alt="GitHub logo" className="footer-logo" />
            <p className="margin-auto">GitHub repos</p>
          </a>
        </div>

        <div className="footer-icon align-center inline-block">
          <a
            href="https://ci.adoptopenjdk.net"
            target="_blank"
            className="light-link no-underline"
          >
            <img src={jenkinsIcon} alt="Jenkins logo" className="footer-logo" />
            <p className="margin-auto">Jenkins CI</p>
          </a>
        </div>
      </div>

      <div className="margin-auto" id="footer-social-bar">
        <SocialBar />
      </div>

      <p style={{ lineHeight: "1rem" }}>
        Java and OpenJDK are trademarks or registered trademarks of Oracle
        and/or its affiliates. Other names may be trademarks of their respective
        owners.
      </p>
      <br />
      <p style={{ lineHeight: "1rem" }}>
        <strong>Spotted an issue with the website?</strong>
        <br />
        <a
          target="_blank"
          className="light-link"
          href="https://github.com/AdoptOpenJDK/openjdk-website/issues"
        >
          Raise a GitHub issue
        </a>{" "}
        or{" "}
        <a
          target="_blank"
          className="light-link"
          href="https://github.com/AdoptOpenJDK/openjdk-website/blob/master/CONTRIBUTING.md"
        >
          contribute a change!
        </a>
      </p>
    </footer>
  )
}

export default Footer
