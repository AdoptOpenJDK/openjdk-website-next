import React, {FunctionComponent} from "react"
import {Platform} from "../../types"
import ReleasesBinary from "./ReleasesBinary";

export interface ReleasesPlatformItemProps {
    platform?: Platform
}

const ReleasesPlatformItem: FunctionComponent<ReleasesPlatformItemProps> = ({platform}) => {
    return (
        <div>
            <div className="latest-asset latest-grid-border" id={`latest-selector-${platform.name}`}>
                <img alt={`/${platform.official_name} logo`} src={`/${platform.logo}`}/>
                <h2 className="officialName">{platform.official_name}</h2>
                <p className="releaseName">{platform.release_name}</p>
            </div>
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
                            {platform.binaries.map(binary => <ReleasesBinary binary={binary}/>)}
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default ReleasesPlatformItem;
