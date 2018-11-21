import React, { Component } from 'react';
import './App.css';
import * as ecc from "eosjs-ecc";

class App extends Component {
  render() {
    return (
      <div className="App" onClick={()=>clickme()}>
        Click Me
      </div>
    );
  }
}

var clickme = async function() {
  await ecc.PrivateKey.randomKey().then( result => {
    console.log('Private Key = ' + result);
  })
  

}

export default App;
