import React, { useState } from 'react'
import Banner from '../Components/Banner'

export default function Home() {
  const [position, setPosition] = useState("")
  var handlePositionChange = (e) =>{
    setPosition(e.target.value)
    console.log(position)
  }
  return (
    <Banner position={position} handlePositionChange={handlePositionChange}/>
  )
}
