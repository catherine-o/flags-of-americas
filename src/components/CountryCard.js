import React, { Component } from 'react'

class CountryCard extends Component {

    render() {
        return (
            <div className='country-name'>
                <h3>Name: {this.props.selectedCountry}</h3>
            </div>
        )
    }
}

export default CountryCard