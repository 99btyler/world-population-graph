import React from "react"

import Footer from "./components/Footer.js"
import Graph from "./components/graph/Graph.js"
import Header from "./components/Header.js"

import { countryData } from "./countryData.js"

class WorldPopulationGraph extends React.Component {

    state = {
        data: countryData
    }

    render() {
        return (

            <div>
                <Header />
                <Graph data={this.state.data} />
                <Footer />
            </div>

        )
    }

}

export default WorldPopulationGraph