import React from "react"

import Footer from "./components/Footer.js"
import Graph from "./components/graph/Graph.js"
import Header from "./components/Header.js"

class WorldPopulationGraph extends React.Component {

    state = {
        data: [
            {
                countryName: "China",
                countryPopulation: 1400000000
            },
            {
                countryName: "India",
                countryPopulation: 1300000000
            },
            {
                countryName: "United States",
                countryPopulation: 300000000
            }
        ]
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