
import React, {useState} from "react";
import SearchBar from "./Components/SearchBar";
import 'regenerator-runtime/runtime';
import './App.css'

class App extends React.Component {

  render(){
    return(
      <div id="app">
        <h1>GitHub Repositories Tracker</h1>
        <h2 id="subtitle">Get information about a Github User's Repositories</h2>
        <SearchBar />

      </div>
    )
  }

}
export default App;
