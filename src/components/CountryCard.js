import React, { Component } from 'react'

class CountryCard extends Component {
    // state = {
    //     language: ''
    // }

    // findLanguage = (name) => {
    //     return
    // }

    render() {
        return (
            <div>
                <h3>Name: {this.props.selectedCountry}</h3>
                <h3>Language: {this.props.language}</h3>
            </div>
        )
    }
}

export default CountryCard