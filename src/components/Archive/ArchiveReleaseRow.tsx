import React from 'react'
import ArchiveBinaryRow from './ArchiveBinaryRow'

const ArchiveReleaseRow = ({release}) => {
    return (
        <div>
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
                            <td></td>
                            <td><span>Installer</span></td>
                            <td><span>Binary</span></td>
                        </tr>
                        {release.platforms.map(platform => <ArchiveBinaryRow platform={platform}/>)}
                    </table>
                </td>
            </tr>
        </div>
    )
}

export default ArchiveReleaseRow