import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './GlobalStyles.css'

import Home from './components/Home/Home'
import Chat from './components/Chat/Chat'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/chat/:id' element={<Chat />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App