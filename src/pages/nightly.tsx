import React, { FunctionComponent } from "react"
import Layout from "../components/Layout"
import ReleaseSelector from "../components/ReleaseSelector";


export interface NightlyProps {}

const Nightly: FunctionComponent<NightlyProps> = props => {
    return (
        <Layout>
            <ReleaseSelector/>
        </Layout>
    )
}

export default Nightly;


