import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './scss/styles.scss'
import { Home } from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home />

      Hi
      </div>
  )
}

export default App
