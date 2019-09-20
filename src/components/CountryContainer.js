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
        let container = document.querySelector('.flags-container')
    }


    render() {
        return (
            <div className='flags-container'>
                <CountryCard 
                    selectedCountry={this.state.selectedCountry}
                />
                <div className='flagsList'>{this.countryFlags()}</div>
                
            </div>
        )
    }
}

export default CountryContainer