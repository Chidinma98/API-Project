import React, { Component } from 'react'
import App from '../App'

class Traveling extends Component {
    constructor(props) {
        super(props)
    }

    render(props) {
        return (
            <div>
// {console.log(this.props.continent)}
{console.log(this.props.traveling)}
{this.props.traveling.map((travel)=> travel.name)}
            </div>
        )



    }




}

export default Traveling