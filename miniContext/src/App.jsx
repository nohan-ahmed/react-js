import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React chai or code with Hitesh sir</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
