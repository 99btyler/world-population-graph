import React from "react"

import GraphBar from "./parts/GraphBar.js"
import GraphCountryNames from "./parts/GraphCountryNames.js"
import GraphDivider from "./parts/GraphDivider.js"

import "./Graph.css"

function Graph(props) {

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

                {getGraphBarsFromData(props.data)}

            </div>

        </div>

    )
}

function getGraphBarsFromData(data) {
    return data.map((country) => <GraphBar width={((country.population / 2000000000) * 100) + "%"} />)
}

export default Graph