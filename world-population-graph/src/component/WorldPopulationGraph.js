import React from "react"

import Footer from "./components/Footer.js"
import Graph from "./components/graph/Graph.js"
import Header from "./components/Header.js"

class WorldPopulationGraph extends React.Component {

    state = {
        data: [
            {
                name: "China",
                population: 1400000000
            },
            {
                name: "India",
                population: 1300000000
            },
            {
                name: "United States",
                population: 300000000
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