import React, {Component} from 'react'
import './App.css';
import './components/TurnOn'
import TurnOn from './components/TurnOn';

class App extends Component{
  constructor(){
    super()
    this.state = {
      textToShow: "Hola Genio"
    }
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler( event ){
    let newText = event.target.value
    this.setState({textToShow: newText})
    console.log( newText)
  }

  render(){
    return(
      <div className='App'>
        <input type='Text' onChange={ this.changeHandler }></input>
        <h1>{this.state.textToShow}</h1>
        <TurnOn />
      </div>
      
    )
  }
}


export default App;
