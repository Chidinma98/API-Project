import React, {Component} from 'react'
import App from '../App'

class Traveled extends Component {
    constructor(props){
        super(props)
    }

render(props){
    return(
        <div>
            {/* {console.log(this.props.traveled)} */}
    
     {this.props.traveled.map((travel)=> (travel.name))} 


        </div>
    )


    
}




}

export default Traveled