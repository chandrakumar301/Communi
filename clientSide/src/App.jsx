import React, { Component} from 'react'
// import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Profile from './pages/Profile'
import LoginPage from './pages/LoginPage'
import './index.css'


export class App extends Component {
  
  render() {
    return (
      <div className='Rout'>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Profile/>}/>
        <Route path="/profile" element={<LoginPage/>}/>
        </Routes>
        </div>
    )
  }
}

export default App
