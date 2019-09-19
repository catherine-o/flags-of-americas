import React, { Component } from 'react';
import './App.css';
import CountryContainer from './components/CountryContainer'

class App extends Component {
  state = {
    countries: []
  }

  componentDidMount(){
    fetch('https://restcountries.eu/rest/v2/region/americas')
      .then(response => response.json())
      .then(result => this.setState({
        countries: result
      }))
  }


  render() {
    return (
      <div className="App">
        <h1>The Americas</h1>
        <CountryContainer countries={this.state.countries} />
      </div>
    )
  }
  
}

export default App;
