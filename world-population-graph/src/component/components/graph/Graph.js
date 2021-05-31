import React from "react"

import GraphItem from "./GraphItem.js"

import "./Graph.css"

function Graph(props) {
    return (

        <div id="graph">

            {getGraphItems(props.data)}

        </div>

    )
}

function getGraphItems(data) {
    return data.map(item => <GraphItem countryName={item.countryName} countryPopulation={item.countryPopulation} />)
}

export default Graph