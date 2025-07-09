import React from 'react'
import './App.css'
import Home from './pages/Home';
import Agents from './pages/Agents';
import Velocity from './components/Velocity'



function App() {
  return (
    <div className='main_div'>
      <Home/>
      {/* <Velocity/> */}
      <section id='/#employees'>
        <Agents/>
      </section>
    </div>
  )
}

export default App
