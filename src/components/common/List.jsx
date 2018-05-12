import React from 'react'

const List = props => {
    let itemList = props.items.map(function(item, index){
      return <li key={index}>{item}</li>
    })
    return <ul>{itemList}</ul>
  }

export default List;