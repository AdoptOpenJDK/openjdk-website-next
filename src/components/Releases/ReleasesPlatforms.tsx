import React, {FunctionComponent} from "react"
import {Platform} from "../../types";
import ReleasesPlatformItem from "./ReleasesPlatformItem";

export interface ReleasesPlatformsProps {
    platforms?: Platform[]
}

const ReleasesPlatforms: FunctionComponent<ReleasesPlatformsProps> = ({platforms}) => {
    return (
        <div>
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
                { platforms.map( platform => <ReleasesPlatformItem platform={platform}/>)}
            </div>
        </div>
    )
}

export default ReleasesPlatforms;