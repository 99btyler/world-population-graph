import React from "react"

import Footer from "./components/Footer.js"
import Graph from "./components/graph/Graph.js"
import Header from "./components/Header.js"

class WorldPopulationGraph extends React.Component {

    render() {
        return (

            <div>
                <Header />
                <Graph />
                <Footer />
            </div>

        )
    }

}

export default WorldPopulationGraph