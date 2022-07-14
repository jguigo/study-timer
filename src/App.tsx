import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* funciona como se fosse uma tag html, porém é uma class */}
        <Button />
    </div>
  )
}

export default App
