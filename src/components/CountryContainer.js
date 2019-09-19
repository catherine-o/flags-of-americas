import React, { Component } from 'react'
import CountryCard from './CountryCard'

class CountryContainer extends Component {
    state = {
        selectedCountry: '',
        language: ''
    }

    countryFlags = () => {
        return this.props.countries.map(country => (
            <img className='flag'
                onClick={this.updateCountry}
                src={country.flag}
                name={country.name}
                data-language={country.language}></img>
        ))
    }

    updateCountry = (event) => {
        this.setState({
            selectedCountry: event.target.name,
            language: event.target.dataLanguage
        })
    }


    render() {
        return (
            <div>
                <h2>Select a Flag</h2>
                <CountryCard 
                    selectedCountry={this.state.selectedCountry}
                    language={this.state.language}
                />
                <div className='flagsList'>{this.countryFlags()}</div>
                
            </div>
        )
    }
}

export default CountryContainer