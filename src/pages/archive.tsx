import React, {FunctionComponent, SyntheticEvent} from 'react'
import Layout from '../components/Layout'

export interface ArchiveProps {
}

import "../scss/styles-12-archive.scss"
import ArchiveReleaseRow from "../components/Archive/ArchiveReleaseRow";
import ReleaseSelector from "../components/ReleaseSelector";
import Loading from "../components/Loading";
import NavButton from "../components/NavButton";

const Archive: FunctionComponent<ArchiveProps> = props => {

    const loading = false
    const error = false
    const releases = []

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <div id="error-container" />
    }

    return (
        <Layout>
            <main className="grey-bg">

                <div id="archives-page">
                    <h1 className="large-title">Archive</h1>

                    <div className="callout">
                        <p>Please be aware that using old, superseded, or otherwise unsupported releases is not recommended.</p>
                    </div>

                    <NavButton href="releases" type="primary">Latest Releases</NavButton>
                    <NavButton href="nightly" type="secondary">Nightly Builds</NavButton>

                    <ReleaseSelector
                        onVersionChange={(e: SyntheticEvent)=> {console.log(e)}}
                        onJVMChange={(e: SyntheticEvent)=> {console.log(e)}}
                    />

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