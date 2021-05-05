import React from "react"

import GraphCountryNames from "./parts/GraphCountryNames.js"
import GraphDivider from "./parts/GraphDivider.js"

import "./Graph.css"

function Graph() {

    return (

        <div id="graph">

            <GraphCountryNames />

            <div id="graphdivider-container">
                <GraphDivider left="10%" />
                <GraphDivider left="20%" />
                <GraphDivider left="30%" />
                <GraphDivider left="40%" />
                <GraphDivider left="50%" />
                <GraphDivider left="60%" />
                <GraphDivider left="70%" />
                <GraphDivider left="80%" />
                <GraphDivider left="90%" />
            </div>

        </div>

    )
}

export default Graph