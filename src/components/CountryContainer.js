import React, { Component } from 'react'
import CountryCard from './CountryCard'

class CountryContainer extends Component {
    state = {
        selectedCountry: 'Select a Flag',
        name: '',
        language: '',
        flag: ''
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
        let clickedCountry = event.target.name
        let selected = this.props.countries.filter(country => {
            country.name = clickedCountry
        })
        this.setState({
            name: selected.name,
            language: selected.language,
            flag: selected.flag
        })
        console.log(this.state.name)
    }


    render() {
        return (
            <div>
                <h1>{this.state.selectedCountry}</h1>
                <div className='flagsList'>{this.countryFlags()}</div>
                <CountryCard 
                    selectedCountry={this.state.selectedCountry}
                />
            </div>
        )
    }
}

export default CountryContainer