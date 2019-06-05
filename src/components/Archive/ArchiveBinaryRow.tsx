import React from 'react'

const ArchiveBinaryRow = ({platform}) => {
    return (
        <div>
            {platform.assets.map((asset, index) => {
                return (
                    <tr className='platform-row'>
                        <td>{index === 0 ? asset.official_name : ''}</td>
                        <td>{asset.installer_link ?
                                <a className='blue-button no-underline' href={asset.installer_link}>{asset.type} </a>
                                :
                                <div className='empty-download'>&nbsp;Not available</div>
                        }
                        </td>
                        <td className='download-td'>
                            <a className='grey-button no-underline' href={asset.link}>{asset.type} ({asset.size} MB)</a>
                        </td>
                        <td><a href={asset.checksum_link} className='dark-link'>Checksum</a></td>
                    </tr>
                )
            })}
        </div>
    )
}

export default ArchiveBinaryRow