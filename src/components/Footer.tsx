import React, { FunctionComponent } from "react"

export interface FooterProps {}

interface SocialBarProps {}

const SocialBar: React.FunctionComponent<SocialBarProps> = props => {
  return <div />
}

export const Footer: FunctionComponent<FooterProps> = props => {
  return (
    <footer>
      <div className="margin-auto">
        <div className="footer-icon align-center inline-block">
          <a
            href="./slack.html"
            target="_blank"
            className="light-link no-underline"
          >
            <img
              src="dist/assets/slack.svg"
              alt="Slack logo"
              className="footer-logo"
            />
            <p className="margin-auto">Slack</p>
          </a>
        </div>

        <div className="footer-icon align-center inline-block">
          <a
            href="https://github.com/AdoptOpenJDK"
            target="_blank"
            className="light-link no-underline"
          >
            <img
              src="dist/assets/GitHub.png"
              alt="GitHub logo"
              className="footer-logo"
            />
            <p className="margin-auto">GitHub repos</p>
          </a>
        </div>

        <div className="footer-icon align-center inline-block">
          <a
            href="https://ci.adoptopenjdk.net"
            target="_blank"
            className="light-link no-underline"
          >
            <img
              src="dist/assets/jenkins_headshot.png"
              alt="Jenkins logo"
              className="footer-logo"
            />
            <p className="margin-auto">Jenkins CI</p>
          </a>
        </div>
      </div>

      <div className="margin-auto" id="footer-social-bar">
        <SocialBar />
      </div>

      <p>
        Java and OpenJDK are trademarks or registered trademarks of Oracle
        and/or its affiliates. Other names may be trademarks of their respective
        owners.
      </p>
      <br />
      <p>
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
