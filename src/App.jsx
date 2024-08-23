import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import CallToAction from './components/CallToAction'
import BankSteps from './components/BankSteps'

function App() {
  return (
    <div className='app'>
        <Header/>
        <CallToAction/>
        <BankSteps/>
    </div>
  )
}

export default App
