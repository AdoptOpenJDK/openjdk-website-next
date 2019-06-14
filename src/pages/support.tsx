import React, { FunctionComponent } from "react"

import Layout from "../components/Layout"

export interface SupportProps {}

const time = Date.now()
export const Support: FunctionComponent<SupportProps> = props => {
  return (
    <Layout>
      <h1 className="margin-bottom large-title">Support</h1>

      <div className="align-left support">
        <div className="anchor">
          <a href="#community-support" className="anchor">
            <img src="dist/assets/anchor.png" alt="anchor icon" />
          </a>
          <h2 className="bold">
            <a id="community-support">Community Support</a>
          </h2>
        </div>
        <div className="margin-bottom">
          <p>
            Read{" "}
            <a href="https://medium.com/@javachampions/java-is-still-free-2-0-0-6b9aa8d6d244">
              Java Is Still Free (2.0.0)
            </a>
            for some background information about Java support options. We are
            prepared to stand behind our release quality binaries, so each build
            that is identified as a <strong>release</strong> receives support
            via the AdoptOpenJDK community. Our support means that you can raise
            an issue to describe a bug you have found in the build, and we will
            work with you and the appropriate development team to resolve it.
            Any fixes we identify will be delivered as part of the next
            AdoptOpenJDK release.
          </p>

          <p>
            As a community of open source developers, our commitment is to
            triage any issues raised and champion them in the appropriate source
            code project. Of course, if the problem arises from the way we build
            and test the code we can fix that directly. For higher levels of
            assurance you should contact commercial companies offering support.
          </p>
        </div>

        <div className="anchor">
          <a href="#commercial-support" className="anchor">
            {" "}
            <img src="dist/assets/anchor.png" alt="anchor icon" />{" "}
          </a>
          <h2 className="bold">
            <a id="commercial-support">Commercial Support</a>
          </h2>
        </div>

        <div className="margin-bottom">
          <table className="commercial-table">
            <tr>
              <td>
                <a target="_blank" href="https://www.ibm.com">
                  <img src="dist/assets/ibm.svg" alt="IBM logo" />
                </a>
              </td>
              <td>
                IBM is a core contributor to OpenJDK and Eclipse OpenJ9 and
                employs several of the founders of AdoptOpenJDK and key
                engineers on the AdoptOpenJDK project. See{" "}
                <a
                  target="_blank"
                  href="https://www.ibm.com/cloud/support-for-runtimes"
                >
                  IBM Runtimes for Business
                </a>{" "}
                for more details.
              </td>
            </tr>

            <tr>
              <td>
                <a target="_blank" href="https://www.jclarity.com/">
                  <img src="dist/assets/jclarity.png" alt="jClarity Logo" />
                </a>
              </td>
              <td>
                <strong>Hotspot VM</strong> - jClarity employs several of the
                founders of AdoptOpenJDK and key engineers on the AdoptOpenJDK
                project. See{" "}
                <a
                  href="https://www.jclarity.com/adoptopenjdk-support/"
                  target="_blank"
                >
                  jClarity's AdoptOpenJDK Support
                </a>{" "}
                for more details.
              </td>
            </tr>
          </table>
        </div>

        <div className="anchor">
          <a href="#roadmap" className="anchor">
            <img src="dist/assets/anchor.png" alt="anchor icon" />
          </a>
          <h2 className="bold">
            <a id="roadmap">Release Roadmap</a>
          </h2>
        </div>
        <div className="margin-bottom">
          <p>
            The frequency of AdoptOpenJDK releases is guided by the schedule of
            our dependencies. We produce builds based upon source code at{" "}
            <a href="https://openjdk.java.net" target="_blank">
              OpenJDK
            </a>
            ,
            <a href="https://www.eclipse.org/openj9/" target="_blank">
              Eclipse OpenJ9
            </a>
            , and{" "}
            <a href="https://sap.github.io/SapMachine/" target="_blank">
              SAP Machine
            </a>
            .
          </p>
          <p>
            OpenJDK provides a new feature release every six months, and a
            maintenance/security update based upon each active release every
            three months. We will follow this schedule for publishing binary
            releases from AdoptOpenJDK to ensure you get the latest, most secure
            builds.
          </p>
          <p>
            In addition, every three years one feature release will be
            designated as the Long Term Supported (LTS) release. We will produce
            LTS releases for at least four years. This assurance will allow you
            to stay on a well-defined code stream, and give you time to migrate
            to the next, new, stable, LTS release when it becomes available.
          </p>
          <p>Based upon this roadmap, and starting with Java 8:</p>
          <table>
            <tr>
              <th />
              <th>First Availability</th>
              <th>Next Release</th>
              <th>End of Availability [1]</th>
            </tr>
            <tr>
              <td>
                <strong>Java 8 (LTS)</strong>
              </td>
              <td>
                <strong>March 2014</strong>
              </td>
              <td>
                <strong>
                  1.8.0_222
                  <br />
                  16th July 2019
                </strong>
              </td>
              <td>
                <strong>At Least Sep 2023</strong>
              </td>
            </tr>
            <tr>
              <td>Java 9</td>
              <td>Sept 2017</td>
              <td>N/A</td>
              <td>March 2018</td>
            </tr>
            <tr>
              <td>Java 10</td>
              <td>March 2018</td>
              <td>N/A</td>
              <td>Sept 2018</td>
            </tr>
            <tr>
              <td>
                <strong>Java 11 (LTS)</strong>
              </td>
              <td>
                <strong>Sept 2018</strong>
              </td>
              <td>
                <strong>
                  11.0.4
                  <br />
                  16th July 2019
                </strong>
              </td>
              <td>
                <strong>At Least Sept 2022</strong>
              </td>
            </tr>
            <tr>
              <td>Java 12</td>
              <td>March 2019</td>
              <td>
                12.0.1
                <br />
                Jun 2019
              </td>
              <td>Sept 2019</td>
            </tr>
          </table>
          <p role="contentinfo">
            Notes:
            <br />
            [1] As a general philosophy, AdoptOpenJDK will continue to build
            binaries for LTS releases as long as the corresponding upstream
            source is actively maintained. The{" "}
            <a href="https://www.eclipse.org/openj9/docs/openj9_support/">
              Eclipse OpenJ9 Support Document
            </a>{" "}
            covers extra support info for that VM.
          </p>
        </div>

        <div>
          <a href="./quality.html" className="no-underline home-links">
            <h2 className="inline-block zero-margin">
              Quality&nbsp;
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </h2>
          </a>
          <a
            href="./supported_platforms.html"
            className="no-underline home-links"
          >
            <h2 className="inline-block zero-margin">
              Supported Platforms&nbsp;
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </h2>
          </a>
          <a
            href="https://github.com/AdoptOpenJDK/openjdk-build/issues"
            className="no-underline home-links"
          >
            <h2 className="inline-block zero-margin">
              Submit an Issue&nbsp;
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
            </h2>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Support