import React, {FunctionComponent} from "react"

import Layout from "../components/Layout"
import "../scss/styles-4-releases.scss"

export interface ReleasesProps {}

export const Releases: FunctionComponent<ReleasesProps> = props => {
    return (
        <Layout>
            <main className="grey-bg">
                <div id="latest-page" style={{ marginBottom: '2rem' }}>
                    <h1 className="large-title">Latest release</h1>

                    <div>
                        <a href="./archive.html" className="blue-button a-button">
                            <div>
                                <span>Build archive</span>
                                <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                            </div>
                        </a>
                        <a href="./nightly.html" id="nightly-button" className="grey-button a-button">
                            <div>
                                <span>Nightly builds</span>
                                <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                            </div>
                        </a>

                        <div className="btn-container">
                            <form id="jdk-selector" className="btn-form">
                                <h3>1. Choose a Version</h3>
                            </form>
                            <form id="jvm-selector" className="btn-form">
                                <h3>2. Choose a JVM</h3>
                            </form>
                        </div>

                        <div id="loading">
                            <img src="dist/assets/loading_dots.gif" width="40" height="40" alt="Content is loading." />
                        </div>
                        <div id="error-container"></div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Releases
