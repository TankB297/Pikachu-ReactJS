import React from 'react'
import "../Styles/Block.css"

export default function Block({item, changeSelection}) {
  return (
    <img className={item.selected ? 'isSelected' : 'each-block' && item.hidden ? 'each-block hiddenItem' : 'each-block'} src={item.id} onClick={changeSelection} alt='Character'/>
  )
}
