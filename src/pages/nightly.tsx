import React, {FunctionComponent, SyntheticEvent} from "react"
import Layout from "../components/Layout"
import Loading from "../components/Loading";
import NavButton from "../components/NavButton"
import { PrimaryButton } from 'office-ui-fabric-react'
import ReleaseSelector from "../components/ReleaseSelector";

import "../scss/styles-3-nightly.scss"

export interface NightlyProps {
}

const Nightly: FunctionComponent<NightlyProps> = props => {

    const loading = false
    const thisInstallerLink = false
    const platforms = [{
        placeholder: true
    }]

    if (loading) {
        return <Loading/>
    }

    return (
        <Layout>
            <h1 className="large-title">Nightly builds</h1>
            <NavButton href="./releases" type="primary">Latest Release</NavButton>
            <NavButton href="./archive" type="secondary">Release Archive</NavButton>
            <ReleaseSelector
                onVersionChange={(e: SyntheticEvent) => {
                    console.log(e)
                }}
                onJVMChange={(e: SyntheticEvent) => {
                    console.log(e)
                }}
            />

            <div>
                <span>View</span>
                <select id="numberpicker">
                    <option value="10">10</option>
                    <option value="20" selected={true}>20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <span>builds prior to: </span>
                <input type="text" id="datepicker"/>
            </div>

            <input type="text" className="block margin-auto" id="search" placeholder="Search these builds"/>

            <h3 id="scroll-text" className="hide">Scroll horizontally <i className="fa fa-arrow-circle-o-right"
                                                                         aria-hidden="true"/></h3>
            <div id="search-error" className="hide">No search results</div>

            <div id="nightly-list">
                <table id="table-parent">
                    <thead id="table-head">
                    <tr id='table-header'>
                        <th>Platform</th>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Binary</th>
                        <th>Installer</th>
                        <th>Checksum</th>
                    </tr>
                    </thead>
                    <tbody id="nightly-table">
                    {platforms.map(() => {
                        return (
                            <tr className='nightly-container'>
                                <td className='nightly-platform-block'>Linux aarch64</td>
                                <td className='nightly-platform-type'>jdk</td>
                                <td>
                                    <div className='nightly-release-date'>13 June 2019</div>
                                </td>
                                <td className='nightly-downloads-block'>
                                    <div>
                                        <a className='dark-link' href="">
                                            .tar.gz (99 MB)
                                        </a>
                                    </div>
                                </td>
                                {
                                    thisInstallerLink ?
                                        <td className='nightly-downloads-block'>
                                            <div>
                                                <a className='dark-link' href="">
                                                    .pkg
                                                </a>
                                            </div>
                                        </td>
                                        :
                                        <td className='nightly-downloads-block'>
                                            <div>Not available</div>
                                        </td>
                                }
                                <td><a href="" className='dark-link'>Checksum</a></td>
                            </tr>
                        )
                    })
                    }
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default Nightly;