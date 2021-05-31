import React from "react"

import "./GraphItem.css"

function GraphItem(props) {

    const countryName = props.countryName

    const countryPopulationAsString = props.countryPopulation
    const countryPopulationAsInt = parseInt(props.countryPopulation.replaceAll(",", ""))

    return (

        <div id="graphitem">

            { /* Country's name */ }
            <p id="graphitem-countryname">{countryName}</p>

            <div id="graphitem-countrypopulation-bar" style={{width: (((countryPopulationAsInt / 1400000000) * 100) - 10) + "%"}}>

                { /* Country's population */ }
                <div id="graphitem-countrypopulation">{countryPopulationAsString}</div>

            </div>

        </div>

    )
}

export default GraphItem