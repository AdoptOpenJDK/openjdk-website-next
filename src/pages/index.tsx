import "../scss/styles-2-index.scss"

import Layout from "../components/Layout"
import { Link } from "gatsby"
import React from "react"
import ReleaseSelector from "../components/ReleaseSelector"
import loadingDots from "../assets/loading_dots.gif"

const App: React.FunctionComponent = () => {
  return (
    <Layout>
      <main className="grey-bg home-main">
        <h1>Prebuilt OpenJDK Binaries for Free!</h1>
        <p className="intro">
          Java™ is the world's leading programming language and platform.
          AdoptOpenJDK uses{" "}
          <a
            href="https://github.com/AdoptOpenJDK/openjdk-infrastructure"
            rel="noopener"
            target="_blank"
          >
            infrastructure
          </a>
          ,{" "}
          <a
            href="https://github.com/AdoptOpenJDK/openjdk-build"
            rel="noopener"
            target="_blank"
          >
            build
          </a>
          , and{" "}
          <a
            href="https://github.com/AdoptOpenJDK/openjdk-tests"
            rel="noopener"
            target="_blank"
          >
            test
          </a>{" "}
          scripts to produce prebuilt binaries from{" "}
          <a href="https://openjdk.java.net" rel="noopener" target="_blank">
            OpenJDK
          </a>
          ™ class libraries and a choice of either the{" "}
          <a
            rel="noopener"
            target="_blank"
            href="https://openjdk.java.net/groups/hotspot/"
          >
            OpenJDK HotSpot
          </a>{" "}
          or{" "}
          <a
            rel="noopener"
            target="_blank"
            href="https://www.eclipse.org/openj9/"
          >
            Eclipse OpenJ9
          </a>{" "}
          VM.
          <br />
          All AdoptOpenJDK binaries and scripts are{" "}
          <Link to="/about" rel="noopener" target="_blank">
            open source licensed
          </Link>{" "}
          and available for free.
        </p>

        <div className="dl-container">
          <h2 id="dl-text" className="invisible">
            Downloads
          </h2>
          <ReleaseSelector onVersionChange={_ => {}} onJVMChange={_ => {}} />
          <div id="loading">
            <img
              src={loadingDots}
              height="40"
              width="40"
              alt="Content is loading."
            />
          </div>
          <div id="error-container" />
          <Link
            to="/releases"
            className="dl-button a-button fadeIn invisible"
            id="dl-latest"
          >
            <div id="dl-version">
              <i id="dl-icon" className="fa fa-download" aria-hidden="true" />
              <span>Latest release</span>
              <i
                id="dl-icon-2"
                className="fa fa-arrow-circle-o-right hide"
                aria-hidden="true"
              />
            </div>
            <div className="dl-description">
              <var id="dl-version-text" className="small-dl-text" />
              <div
                id="jck-approved-tick"
                className="tick hide"
                data-tooltip="This build is JCK certified."
              >
                <img
                  src="./dist/assets/tick.png"
                  alt="This build is JCK certified."
                />
              </div>
            </div>
          </Link>
          <Link
            to="/releases"
            className="dl-button dl-thin-button a-button fadeIn invisible"
            id="dl-other"
          >
            <div>
              <span>Other platforms</span>
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </div>
          </Link>
          <Link
            to="/archive"
            className="dl-button dl-thin-button a-button fadeIn invisible"
            id="dl-archive"
          >
            <div>
              <span>Release Archive &amp; Nightly Builds</span>
              <i className="fa fa-archive" aria-hidden="true" />
            </div>
          </Link>
          AdoptOpenJDK now also distributes{" "}
          <strong>
            <Link style={{ textDecoration: "none" }} to="/upstream">
              OpenJDK upstream builds
            </Link>
          </strong>
          !
        </div>

        <div style={{ marginTop: "3rem" }}>
          <Link to="/installation" className="no-underline home-links">
            <h2 id="installation-link" className="inline-block zero-margin">
              Installation&nbsp;
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </h2>
          </Link>
          <Link to="/migration" className="no-underline home-links">
            <h2 id="migration-link" className="inline-block zero-margin">
              Migration&nbsp;
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </h2>
          </Link>
          <Link to="/support" className="no-underline home-links">
            <h2 id="support-link" className="inline-block zero-margin">
              Support&nbsp;
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </h2>
          </Link>
          <Link
            to="/getinvolved"
            id="dev-button"
            className="no-underline home-links"
          >
            <h2 className="inline-block zero-margin">
              Get involved&nbsp;
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </h2>
          </Link>

          <div id="minor-links" className="blue-link-section">
            <Link to="/about">
              <h3 className="inline-block zero-margin">About</h3>
            </Link>
            <span> | </span>
            <Link to="/sponsors">
              <h3 className="inline-block zero-margin">Sponsors</h3>
            </Link>
            <span> | </span>
            <Link to="/testimonials">
              <h3 className="inline-block zero-margin">Testimonials</h3>
            </Link>
            <span> | </span>
            <a
              rel="noopener"
              target="_blank"
              href="https://api.adoptopenjdk.net"
            >
              <h3 className="inline-block zero-margin">API</h3>
            </a>
            <span> | </span>
            <a
              rel="noopener"
              target="_blank"
              href="https://blog.adoptopenjdk.net/"
            >
              <h3 className="inline-block zero-margin">Blog</h3>
            </a>
            <span> | </span>
            <a
              rel="noopener"
              target="_blank"
              href="https://calendar.adoptopenjdk.net"
            >
              <h3 className="inline-block zero-margin">Meeting diary</h3>
            </a>
            <span> | </span>
            <a
              rel="noopener"
              target="_blank"
              href="https://status.adoptopenjdk.net"
            >
              <h3 className="inline-block zero-margin">Status</h3>
            </a>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default App
