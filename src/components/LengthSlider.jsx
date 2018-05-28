import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const LengthSlider = ({passwordLength = 8, onLengthChange }) => 
    <fieldset>
    <input name="length" id="length" type="range" min="4" max="32" step="1"
        value={passwordLength}
        onChange={onLengthChange}/>
        <span>{passwordLength}</span>
    </fieldset>

export default LengthSlider