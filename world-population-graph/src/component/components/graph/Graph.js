import React from "react"

import GraphItem from "./parts/GraphItem.js"

import "./Graph.css"

function Graph(props) {
    return (

        <div id="graph">

            {getGraphItems(props.data)}

        </div>

    )
}

function getGraphItems(data) {
    return data.map(item => <GraphItem countryName={item.countryName} width={(((item.countryPopulation / 1400000000) * 100) - 10) + "%"} />)
}

export default Graph