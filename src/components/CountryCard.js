import React, { Component } from 'react'

class CountryCard extends Component {
    state = {
        name: 'name',
        language: 'language',
        flag: 'flag'
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h2>{this.state.language}</h2>
                <h3>{this.state.flag}</h3>
            </div>
        )
    }
}

export default CountryCard