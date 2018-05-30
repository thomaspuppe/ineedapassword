import React from 'react'
import ReactDOM from 'react-dom'

const LengthSlider = ({passwordLength = 8, onLengthChange }) => 
    <fieldset>
    <input name="length" id="length" type="range" min="4" max="32" step="1"
        value={passwordLength}
        onChange={(evt) => onLengthChange(evt.target.value)}/>
        <span>{passwordLength}</span>
    </fieldset>

export default LengthSlider