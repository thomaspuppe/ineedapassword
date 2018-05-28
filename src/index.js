import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import pwgen from 'generate-password'

import Headline from './components/common/Headline'
import List from './components/common/List'
import LengthSlider from './components/LengthSlider'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      passwordLength: 24
    }
    this.onPasswordLengthChange = this.onPasswordLengthChange.bind(this)
  }

  onPasswordLengthChange (passwordLength) {
    this.setState({passwordLength: passwordLength})
  }

  render() {
    const headline = 'Hello!!! Here are some passwords:'
    const passwords = pwgen.generateMultiple(5, {
      length: 10,
      numbers: true
    })

    const { passwordLength } = this.state

    return (
    <div>
      <Headline title={headline} />
      <LengthSlider passwordLength={passwordLength} onLengthChange={this.onPasswordLengthChange}/>
      <List items={passwords} />
    </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

module.hot.accept()