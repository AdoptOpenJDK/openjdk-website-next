import React, { FunctionComponent } from 'react'
import {ChoiceGroup} from "office-ui-fabric-react";

export interface ReleaseSelectorProps {}

const ReleaseSelector: FunctionComponent<ReleaseSelectorProps> = (props) => {
    return (
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
    )
}

export default ReleaseSelector