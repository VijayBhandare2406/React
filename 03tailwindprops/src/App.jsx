import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      
      <div className='flex items-center gap-3 h-100 mt-6'>

        <Card username="world featured" btnText="View More"/>
        <Card username="global featured" btnText="Read More"/>
      
      </div>
    </>
  )
}

export default App
