import Square from './Square'
import './App.css'
import Input from './Input'
import { useState } from 'react'

function App() {
const [colorValue, setColorValue] = useState('');
const [hexValue, setHexValue] = useState('');
const [isDarkText, setIsDarkText] = useState('');



  return (
    <div className='App'>
    <Square colorValue={colorValue}
    hexValue={hexValue}
    isDarkText={isDarkText}
    />

    <Input colorValue={colorValue}
    setHexValue={setHexValue}
    setColorValue={setColorValue}
    isDarkText={isDarkText}
    setIsDarkText={setIsDarkText}
    
    />

    </div>
  )
}

export default App
