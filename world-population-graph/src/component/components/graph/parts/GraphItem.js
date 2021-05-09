import React from "react"

import "./GraphItem.css"

function GraphItem(props) {
    return (

        <div id="graphitem">

            { /* Country's name */ }
            <p id="graphitem-countryname">{props.countryName}</p>

            <div id="graphitem-countrypopulation-bar" style={{width: (((props.countryPopulation / 1400000000) * 100) - 10) + "%"}}>

                { /* Country's population */ }
                <div id="graphitem-countrypopulation">{props.countryPopulation}</div>

            </div>

        </div>

    )
}

export default GraphItem