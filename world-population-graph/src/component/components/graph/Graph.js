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

                {getGraphDividers()}

                {getGraphBars(props.data)}

            </div>

        </div>

    )
}

function getGraphDividers() {
    
    const graphDividers = []

    for (var i = 10; i < 100; i+= 10) {
        graphDividers.push(<GraphDivider left={i + "%"} />)
    }

    return graphDividers

}

function getGraphBars(data) {
    return data.map((country) => <GraphBar width={((country.population / 2000000000) * 100) + "%"} />)
}

export default Graph