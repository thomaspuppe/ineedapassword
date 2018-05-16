import React from 'react'
import ReactDOM from 'react-dom'

import pwgen from 'generate-password'

import Headline from './components/common/Headline'
import List from './components/common/List'
import LengthSlider from './components/LengthSlider'

function App() {
  const headline = 'Hello!!! Here are some passwords:'
  const passwords = pwgen.generateMultiple(5, {
    length: 10,
    numbers: true
  })

  return (
    <div>
      <Headline title={headline} />
      <LengthSlider />
      <List items={passwords} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

module.hot.accept()