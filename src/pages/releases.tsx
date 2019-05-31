import React, {FunctionComponent} from "react"
import {ChoiceGroup} from 'office-ui-fabric-react/lib/ChoiceGroup';

import Layout from "../components/Layout"
import "../scss/styles-4-releases.scss"

export interface ReleasesProps {
}

const ReleaseTile = ({platform}) => {
    return (
        <div className="latest-asset latest-grid-border" id={`latest-selector-${platform.name}`}>
            <img alt={`/${platform.official_name} logo`} src={`/${platform.logo}`}/>
            <h2 className="officialName">{platform.official_name}</h2>
            <p className="releaseName">{platform.release_name}</p>
        </div>
    )
}

const BinaryDownload = ({binary}) => {
    return (
        <div>
            {binary.installer_link ?
                <div>
                    <a href='' className='latest-download-button a-button'>
                        <div className='large-dl-text'>Install {binary.type}
                            <div className='small-dl-text'>Installer</div>
                        </div>
                    </a>
                    <a href={binary.link} className='latest-download-button latest-download-button-grey a-button'>
                        <div className='large-dl-text'>Download {binary.type}
                            <div className='small-dl-text'>{`${binary.extension} - ${binary.size} MB`}</div>
                        </div>
                    </a>
                </div>
                :
                <a href={binary.link} className='latest-download-button a-button'>
                    <div className='large-dl-text'>Download {binary.type}
                        <div className='small-dl-text'>{`${binary.extension} - ${binary.size} MB`}</div>
                    </div>
                </a>
            }
            <div className='latest-details'>
                <p><a href={binary.checksum_link} className='dark-link' target='_blank'>Checksum</a></p>
            </div>
        </div>
    )
}

const ReleaseDetail = ({platform}) => {
    return (
        <div id="latest-info">
            <div id={`latest-info-${platform.name}`} className='latest-info-container latest-grid-border'>
                <div className='platform-section'>
                    <img alt='{platform.official_name} logo' src={platform.logo}/>
                    <h2 className="officialName">{platform.official_name}</h2>
                    <p className="releaseName">
                        <a href={platform.release_link} className='dark-link'
                           target='_blank'>{platform.release_name}</a></p>
                    <p className="releaseDateTime">{platform.release_datetime}}</p>
                    <p className="latest-selector-back-button">
                        <i className="fa fa-arrow-left" aria-hidden="true"/> Back to platforms
                    </p>
                </div>
                <div className='content-section'>
                    <div className='latest-block'>
                        {platform.binaries.map(binary => <BinaryDownload binary={binary}/>)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export const Releases: FunctionComponent<ReleasesProps> = props => {

    const platforms = [{
        name: 'X64_LINUX',
        logo: '',
        official_name: 'Linux x64',
        release_name: 'jdk8u212-b03',
        release_link: '/',
        release_datetime: '2019-04-18 03:49:04',
        binaries: [
            {
                type: 'JDK',
                link: 'https://www.github.com',
                installer_link: '',
                size: '99',
                extension: '.tar.gz'

            }
        ]
    }]

    return (
        <Layout>
            <main className="grey-bg">
                <div id="latest-page" style={{marginBottom: '2rem'}}>
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
                                <ChoiceGroup
                                    defaultSelectedKey="A"
                                    options={[
                                        {
                                            key: 'A',
                                            text: 'OpenJDK 8 (LDS)'
                                        },
                                        {
                                            key: 'B',
                                            text: 'OpenJDK 9'
                                        },
                                        {
                                            key: 'C',
                                            text: 'OpenJDK 10'
                                        }
                                    ]}
                                />
                            </form>
                            <form id="jvm-selector" className="btn-form">
                                <h3>2. Choose a JVM</h3>
                                <ChoiceGroup
                                    defaultSelectedKey="A"
                                    options={[
                                        {
                                            key: 'A',
                                            text: 'HotSpot'
                                        },
                                        {
                                            key: 'B',
                                            text: 'OpenJ9'
                                        }
                                    ]}
                                />
                            </form>
                        </div>
                    </div>

                    <div id="latest-container">
                        <h3><a href="">All Release Notes</a></h3>
                        <h2 id="latest-select-text" style={{marginBottom: '0.5rem'}}>Select a platform</h2>

                        <div id="latest-selector">
                            <a id="docker_link" href="" target="_blank">
                                <div className="docker-asset latest-grid-border" id='latest-selector-Docker'>
                                    <img alt='Docker logo' src='./dist/assets/docker.png'/>
                                    <h2 className="officialName">Docker</h2>
                                    <p className="releaseName">Official Image</p>
                                </div>
                            </a>
                            <ReleaseTile platform={platforms[0]}/>
                            <ReleaseDetail platform={platforms[0]}/>
                        </div>

                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Releases
