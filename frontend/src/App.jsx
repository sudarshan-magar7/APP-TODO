import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CreateTodo } from './components/CreateTodo'
import { Toodos } from './components/Toodos'
import './App.css'
function App() {
  const [todos, setTodo] = useState([]);

  fetch("http://localhost:3000/todos").then(async function (res) {
    const json = await res.json();
    setTodo(json.todos);
  })
  return (
    <div>
      <CreateTodo></CreateTodo>
      <br />
      <Toodos todos={todos}></Toodos>
    </div>
  )
}

export default App
