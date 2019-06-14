import React from "react";

const ReleasesBinary = ({binary}) => {
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

export default ReleasesBinary