import React, { useContext } from 'react'
import { colorContext } from './App'

export default function Color() {
    const {color,setcolor}=useContext(colorContext);

  return (
    <div style={{color:'white',backgroundColor:color}}>User choosed this {color}</div>
  )
}
