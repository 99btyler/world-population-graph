import React from "react"

import "./GraphItem.css"

function GraphItem(props) {
    return (

        <div id="graphitem">
            <p>{props.countryName}</p>
            <div style={{width: (((props.countryPopulation / 1400000000) * 100) - 10) + "%"}}></div>
        </div>

    )
}

export default GraphItem