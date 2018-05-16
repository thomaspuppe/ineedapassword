import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class LengthSlider extends Component {

    constructor(props){
        super(props)
        this.state = {
            passwordLength: 16
        }
        this.onLengthChange = this.onLengthChange.bind(this)
    }

    onLengthChange (evt) {
        console.log(this.state.passwordLength)
        this.setState({ passwordLength: evt.target.value }); 
    }

    render() {
        return (
            <fieldset>
            <input name="length" id="length" type="range" min="4" max="32" step="1"
                value={this.state.passwordLength}
                onChange={this.onLengthChange}/>
                <span>{this.state.passwordLength}</span>
            </fieldset>
        )
    }
}