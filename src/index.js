import React from 'react'
import ReactDOM from 'react-dom'
import pwgen from 'generate-password'
 
const passwords = pwgen.generateMultiple(5, {
    length: 10,
    numbers: true
})

let passwordList = passwords.map(function(password, index){
  return <li key={index}>{password}</li>
})

const title = 'Hello!!! Here are some passwords:'

ReactDOM.render(
  <div><h1>{title}</h1>{passwordList}</div>,
  document.getElementById('app')
)

module.hot.accept()