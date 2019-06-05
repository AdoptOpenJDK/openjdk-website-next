import React, {FunctionComponent} from 'react'
import Layout from '../components/Layout'

export interface ArchiveProps {
}

import "../scss/styles-12-archive.scss"

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
                            {releases.map(release => {
                                return (<div>
                                    <tr className='release-row'>
                                        <td className='blue-bg release-info'>
                                            <div>
                                                <h2>
                                                    <a href={release.release_link} className='light-link'
                                                       target='_blank'>
                                                        {release.release_name}
                                                    </a></h2>
                                                <h4>{release.release_datetime}</h4>
                                                <h4><a href={release.dashboard_link} className='light-link'
                                                       target='_blank'>Download
                                                    Stats</a></h4>
                                            </div>
                                        </td>
                                        <td>
                                            <table className='archive-platforms'>
                                                <tr className='column-names'>
                                                    <td>
                                                    </td>
                                                    <td>
                                                        <span>Installer</span>
                                                    </td>
                                                    <td>
                                                        <span>Binary</span>
                                                    </td>
                                                </tr>
                                                {release.platforms.map(platform => {
                                                    return (
                                                        <div>
                                                            {platform.assets.map((asset, index) => {
                                                                return (
                                                                    <tr className='platform-row'>
                                                                        <td>{index === 0 ? asset.official_name : ''}</td>
                                                                        <td>{
                                                                            asset.installer_link ?
                                                                                <a className='blue-button no-underline'
                                                                                   href={asset.installer_link}>{asset.type} </a>
                                                                                :
                                                                                <div
                                                                                    className='empty-download'>&nbsp;Not
                                                                                    available</div>
                                                                        }
                                                                        </td>
                                                                        <td className='download-td'>
                                                                            <a className='grey-button no-underline'
                                                                               href={asset.link}>{asset.type} ({asset.size} MB)</a>
                                                                        </td>
                                                                        <td><a href={asset.checksum_link}
                                                                               className='dark-link'>Checksum</a></td>
                                                                    </tr>
                                                                )
                                                            })}
                                                        </div>
                                                    )
                                                })}
                                            </table>
                                        </td>
                                    </tr>
                                </div>)
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Archive