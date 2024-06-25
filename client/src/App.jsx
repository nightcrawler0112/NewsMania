import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header' 
import { BrowserRouter as Router, Route, BrowserRouter} from 'react-router-dom'

const App = () => {

  const [count,setCount] = useState(0);

  return (
    <>
    <div className='w-full'>
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </div>
      
    </>
  )
}

export default App;
