import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CreateTodo } from './components/CreateTodo'
import { Toodos } from './components/Toodos'
import './App.css'
function App() {
  return (
    <div>
      <CreateTodo></CreateTodo>
      <br/>
      <Toodos></Toodos>
    </div>
  )
}

export default App
