import React, {Component} from 'react'

class Options extends Component {
    constructor(props){
        super(props)
    }

render(){
    const {countries} = this.props
    console.log(countries);
    return(
        <div>
{/* <h1>{this.props.countries[0].name}</h1> */}
        </div>
    )


    
}




}

export default Options