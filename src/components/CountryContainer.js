import React, { Component } from 'react'
import CountryCard from './CountryCard'

class CountryContainer extends Component {
    state = {
        selectedCountry: ''
    }

    countryFlags = () => {
        return this.props.countries.map(country => (
            <img className='flag'
                onClick={this.updateCountry}
                src={country.flag}
                name={country.name}></img>
        ))
    }

    updateCountry = (event) => {
        this.setState({
            selectedCountry: event.target.name
        })
    }


    render() {
        return (
            <div>
                <h2>Select a Flag</h2>
                <CountryCard 
                    selectedCountry={this.state.selectedCountry}
                />
                <div className='flagsList'>{this.countryFlags()}</div>
                
            </div>
        )
    }
}

export default CountryContainer