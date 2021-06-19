import PropTypes from "prop-types"

import "./GraphItem.css"

const GraphItem = ({ countryName, countryPopulation }) => {

    const countryPopulationAsInt = parseInt(countryPopulation.replaceAll(",", ""))

    return (

        <div id="graphitem">

            { /* Country's name */ }
            <p id="graphitem-countryname">{countryName}</p>

            <div id="graphitem-countrypopulation-bar" style={{width: (((countryPopulationAsInt / 1400000000) * 100) - 10) + "%"}}>

                { /* Country's population */ }
                <div id="graphitem-countrypopulation">{countryPopulation}</div>

            </div>

        </div>

    )
}

GraphItem.propTypes = {
    countryName: PropTypes.string.isRequired,
    countryPopulation: PropTypes.string.isRequired
}
export default GraphItem