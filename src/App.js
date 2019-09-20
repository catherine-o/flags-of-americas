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
      <>
        <header>
          <h1>The Americas</h1>
          <h2>Select a Flag</h2>
        </header>
        <CountryContainer countries={this.state.countries} />
      </>
    )
  }
  
}

export default App;
