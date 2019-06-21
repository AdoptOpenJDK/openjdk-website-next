import React, { FunctionComponent, SyntheticEvent } from "react"

import { ChoiceGroup } from "office-ui-fabric-react"

export interface ReleaseSelectorProps {
  onVersionChange(e: SyntheticEvent): void
  onJVMChange(e: SyntheticEvent): void
}

const ReleaseSelector: FunctionComponent<ReleaseSelectorProps> = ({
  onVersionChange,
  onJVMChange,
}) => {
  return (
    <div className="btn-container">
      <form id="jdk-selector" className="btn-form">
        <h3>1. Choose a Version</h3>
        <ChoiceGroup
          defaultSelectedKey="A"
          onChange={onVersionChange}
          options={[
            {
              key: "A",
              text: "OpenJDK 8 (LDS)",
            },
            {
              key: "B",
              text: "OpenJDK 9",
            },
            {
              key: "C",
              text: "OpenJDK 10",
            },
          ]}
        />
      </form>
      <form id="jvm-selector" className="btn-form">
        <h3>
          2. Choose a JVM
          <span className="help-jvm">Help Me Choose</span>
          <div className="popup-content" id="jvm-popup">
            <div className="popup-heading">
              <h4>Choosing the right JVM</h4>
            </div>
            <div className="popup-text">
              <p className="hotspot-text">
                <b>HotSpot</b> is the VM from the OpenJDK community. It is the
                most widely used VM today and is used in Oracle’s JDK. It is
                suitable for all workloads.
              </p>
              <p>
                For more details see{" "}
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://openjdk.java.net/groups/hotspot/"
                >
                  OpenJDK HotSpot
                </a>
                .
              </p>
              <p className="openj9-text">
                <b>Eclipse OpenJ9</b> is the VM from the Eclipse community. It
                is an enterprise-grade VM designed for low memory usage and fast
                start-up and is used in IBM’s JDK. It is suitable for running
                all workloads.
              </p>
              <p>
                For more details see{" "}
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://www.eclipse.org/openj9/"
                >
                  Eclipse OpenJ9
                </a>
                .
              </p>
            </div>
          </div>
        </h3>

        <ChoiceGroup
          defaultSelectedKey="A"
          onChange={onJVMChange}
          options={[
            {
              key: "A",
              text: "HotSpot",
            },
            {
              key: "B",
              text: "OpenJ9",
            },
          ]}
        />
      </form>
    </div>
  )
}

export default ReleaseSelector
