import React from 'react'
import "./App.css"

function App() {
  const Colors = ["info" , 'danger' , 'warning' , 'primary' , 'secondary' , 'dark' , 'light']
  const RandomColor = Math.floor(Math.random() * Colors.length)
  return (
    <div  className={`App bg-${Colors[RandomColor]}`}>
      <h1>{ Colors[RandomColor] }</h1>
    </div>
  )
}

export default App