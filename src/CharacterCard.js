import React, { Component } from 'react';
import './App.css';

export default class CharacterCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        }
    }

    activate = () => {
        if (!this.state.active) {
            this.setState({ active: true })
        }
    }

    activate = () => {
        if (!this.state.active) {
            this.props.activationHandler(this.props.value)
            this.setState({ active: true })
        }
    }
    activationHandler = c => { console.log(`${c} has been activated.`) }
    render() {
        let className = `card ${this.state.active ? 'activeCard' : ''}`
        return (
            <div className={className} onClick={this.activate}>
                {this.props.value}
            </div>
        )
    }
}

