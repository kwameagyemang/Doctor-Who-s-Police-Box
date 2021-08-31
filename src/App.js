import React, { Component } from 'react';
import Caps from "./Caps";

class App extends Component {

state = {
  tardis: {
    name: 'Time and Relative Dimension in Space',
    caps: false,
  }
}

  // FUNCTION GIVEN TO US: 
  changeIt = (text) =>{
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }
  }

}

  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
      </div>
    );
  }

export default App;

