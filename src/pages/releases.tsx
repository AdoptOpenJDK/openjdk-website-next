import React, {FunctionComponent, SyntheticEvent} from "react"
import Layout from "../components/Layout"
import Loading from "../components/Loading"
import ReleasesPlatforms from "../components/Releases/ReleasesPlatforms"
import ReleaseSelector from "../components/ReleaseSelector"

import "../scss/styles-4-releases.scss"

export interface ReleasesProps {}

export const Releases: FunctionComponent<ReleasesProps> = props => {

    const loading = false
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

    if(loading) {
        <Loading />
    }

    return (
        <Layout>
            <main className="grey-bg">
                <div id="latest-page" style={{marginBottom: '2rem'}}>
                    <h1 className="large-title">Latest release</h1>

                    <div>
                        <a href="./archive.html" className="blue-button a-button">
                            <div>
                                <span>Build archive</span>
                                <i className="fa fa-arrow-circle-o-right" aria-hidden="true"/>
                            </div>
                        </a>
                        <a href="./nightly.html" id="nightly-button" className="grey-button a-button">
                            <div>
                                <span>Nightly builds</span>
                                <i className="fa fa-arrow-circle-o-right" aria-hidden="true"/>
                            </div>
                        </a>
                        <ReleaseSelector
                            onVersionChange={(e: SyntheticEvent)=> {console.log(e)}}
                            onJVMChange={(e: SyntheticEvent)=> {console.log(e)}}
                        />
                    </div>

                        <div id="latest-container">
                            <ReleasesPlatforms platforms={platforms}/>
                        </div>
                    </div>
            </main>
        </Layout>
)
}

export default Releases
