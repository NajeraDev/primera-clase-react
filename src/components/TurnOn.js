import React, {Component} from 'react'
import { Button } from 'reactstrap'


class TurnOn extends Component{
  constructor(){
    super()
    this.state = {
      textToShow: "Turn On",
      isOn: false,
    }
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler( event ){
    let turnOnText = "Turn On"
    let turnOfText = "Turn Off" 
    let newText 
    this.state.textToShow === turnOnText ? newText = turnOfText : newText = turnOnText  
    this.setState({textToShow: newText})
    this.setState({isOn: !this.state.isOn})
    console.log(this.state)
  }

  render(){
    return(
      <div className='Turn Button'>
        <button onClick={ this.changeHandler }>{this.state.textToShow}</button>  
        
        <div className={ this.state.isOn ? "border border-danger rounded-circle w-25 mx-auto mt-3 foco on"
                                          :"border border-danger rounded-circle w-25 mx-auto mt-3 foco"}>

        </div>  
      </div>
    )
  }
}


export default TurnOn;
