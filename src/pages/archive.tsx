import React, {FunctionComponent} from 'react'
import Layout from '../components/Layout'

export interface ArchiveProps {
}

import "../scss/styles-12-archive.scss"
import ArchiveReleaseRow from "../components/Archive/ArchiveReleaseRow";

const Archive: FunctionComponent<ArchiveProps> = props => {

    const releases = []

    return (
        <Layout>
            <main className="grey-bg">

                <div id="archives-page">
                    <h1 className="large-title">Archive</h1>

                    <div className="callout">
                        <p>Please be aware that using old, superseded, or otherwise unsupported releases is not
                            recommended.</p>
                    </div>

                    <a href="./releases.html" id="latest-button" className="blue-button a-button">
                        <div>
                            <span>Latest release</span>
                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"/>
                        </div>
                    </a>
                    <a href="./nightly.html" id="nightly-button" className="grey-button a-button">
                        <div>
                            <span>Nightly builds</span>
                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"/>
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
                        <img src="dist/assets/loading_dots.gif" width="40" height="40" alt="Content is loading."/>
                    </div>
                    <div id="error-container"></div>

                    <div id="archive-list" className="hide">
                        <div id="pagination-container"></div>
                        <table className='archive-container'>
                            <tbody id='archive-table-body'>
                                { releases.map(release => <ArchiveReleaseRow release={release} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Archive