import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
   text: "",
   funnySayings: []
  }

  handleChange = (event) => {
   this.setState({text: event.target.value}) 
  }

  doThatThing = () => {
    this.setState((state) => {
      return {funnySayings: [...state.funnySayings, state.text], text: ''}
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} type="text" name="myName" placeholder="Your Name" value={this.state.text}/>
        <button onClick={this.doThatThing}>Create Item</button>
      </div>
    );
  }
}

export default App;
