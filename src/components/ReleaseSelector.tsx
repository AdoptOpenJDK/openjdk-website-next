import React, { FunctionComponent, SyntheticEvent } from 'react'
import {ChoiceGroup} from "office-ui-fabric-react";

export interface ReleaseSelectorProps {
    onVersionChange(e: SyntheticEvent): void;
    onJVMChange(e: SyntheticEvent): void;
}

const ReleaseSelector: FunctionComponent<ReleaseSelectorProps> = ({onVersionChange, onJVMChange}) => {
    return (
      <div className="btn-container">
        <form id="jdk-selector" className="btn-form">
          <h3>1. Choose a Version</h3>
          <ChoiceGroup
            defaultSelectedKey="A"
            onChange={onVersionChange}
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
            onChange={onJVMChange}
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