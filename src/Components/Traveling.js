import React, { Component } from 'react'
import App from '../App'

class Traveling extends Component {
    constructor(props) {
        super(props)
    }

    render(props) {
        return (
            <div>

{this.props.traveling.map((travel, index)=> <h1 key = {index}>{travel.name } </h1> )}
            </div>
        )



    }




}

export default Traveling