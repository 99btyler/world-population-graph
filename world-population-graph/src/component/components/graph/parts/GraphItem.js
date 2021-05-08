import React from "react"

import "./GraphItem.css"

function GraphItem(props) {
    return (

        <div id="graphitem">
            <p>{props.countryName}</p>
            <div style={{width: props.width}}></div>
        </div>

    )
}

export default GraphItem