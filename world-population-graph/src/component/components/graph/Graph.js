import PropTypes from "prop-types"

import GraphItem from "./GraphItem.js"

import "./Graph.css"

const Graph = ({ data }) => {
    return (

        <div id="graph">

            {getGraphItems(data)}

        </div>

    )
}

function getGraphItems(data) {
    return data.map(item => <GraphItem countryName={item.countryName} countryPopulation={item.countryPopulation} />)
}

Graph.propTypes = {
    data: PropTypes.array.isRequired
}
export default Graph