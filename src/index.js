import React from 'react'
import ReactDOM from 'react-dom'
import pwgen from 'generate-password'


const Headline = props => <h1>{props.title}</h1>

const List = props => {
  let itemList = props.items.map(function(item, index){
    return <li key={index}>{item}</li>
  })
  return <ul>{itemList}</ul>
}

function App() {
  const headline = 'Hello!!! Here are some passwords:'

  const passwords = pwgen.generateMultiple(5, {
    length: 10,
    numbers: true
  })

  return (
    <div>
      <Headline title={headline} />
      <List items={passwords} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

module.hot.accept()