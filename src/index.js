import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import pwgen from 'generate-password'

import Headline from './components/common/Headline'
import List from './components/common/List'
import LengthSlider from './components/LengthSlider'
import Calculator from './components/Calculator'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      passwordLength: 24
    }
    
    // TODO: Why do I need to do this???
    this.onPasswordLengthChange = this.onPasswordLengthChange.bind(this)
  }

  onPasswordLengthChange (passwordLength) {
    this.setState({passwordLength: passwordLength})
  }

  render() {
    const headline = 'Hello!!! Here are some passwords:'
    const passwords = pwgen.generateMultiple(5, {
      length: this.state.passwordLength,
      numbers: true
    })

    const { passwordLength } = this.state

    // TODO: LengthSlider change soll natürlich nicht den Calculator triggern! (Warum tut ers trotzdem? Ist das Verhindern nicht der Zweck von React?)

    return (
    <main>
      <section>
        <Headline title={headline} />
        <LengthSlider passwordLength={passwordLength} onLengthChange={this.onPasswordLengthChange}/>
        <List items={passwords} />
      </section>
      <hr />
      <section>
        <Headline title='Password Calculator' />
        <Calculator />
      </section>
    </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

module.hot.accept()