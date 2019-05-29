import React, {Component} from 'react'
import Map from './Map'

class Traveled extends Component {
    constructor(props){
        super(props)
    }

render(props){
    return(
        <div>
    <p>{this.props.travelData.map((travel) => travel.name)}</p>


        </div>
    )


    
}




}

export default Traveled