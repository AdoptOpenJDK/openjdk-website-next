import React, { FunctionComponent, SyntheticEvent } from "react"
import Layout from "../components/Layout"
import ReleaseSelector from "../components/ReleaseSelector";

export interface NightlyProps {}

const Nightly: FunctionComponent<NightlyProps> = props => {
    return (
        <Layout>
            <ReleaseSelector
                onVersionChange={(e: SyntheticEvent)=> {console.log(e)}}
                onJVMChange={(e: SyntheticEvent)=> {console.log(e)}}
            />
        </Layout>
    )
}

export default Nightly;


