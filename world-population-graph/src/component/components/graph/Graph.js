import React from "react"

import GraphBar from "./parts/GraphBar.js"
import GraphCountryNames from "./parts/GraphCountryNames.js"
import GraphDivider from "./parts/GraphDivider.js"

import "./Graph.css"

function Graph() {

    return (

        <div id="graph">

            <GraphCountryNames />

            <div id="graph-content">

                <GraphDivider left="10%" />
                <GraphDivider left="20%" />
                <GraphDivider left="30%" />
                <GraphDivider left="40%" />
                <GraphDivider left="50%" />
                <GraphDivider left="60%" />
                <GraphDivider left="70%" />
                <GraphDivider left="80%" />
                <GraphDivider left="90%" />

                <GraphBar width="55%" />
                <GraphBar width="16%" />
                <GraphBar width="71%" />
                <GraphBar width="78%" />

            </div>

        </div>

    )
}

export default Graph