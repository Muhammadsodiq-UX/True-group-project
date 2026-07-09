import {Routes, Route} from 'react-router-dom'

import React from 'react'
import Owner from './pages/Owner'
import Sarvar from './pages/Sarvar'
import Abdumalik from './pages/Abdumalik'
import Solixa from './pages/Solixa'
import Muslima from './pages/Muslima'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
        <Header/>
        <main className="flex-1">
          <Routes>
            <Route path='/' element={<Owner/>}/>
            <Route path='/sarvar' element={<Sarvar/>}/>
            <Route path='/abdumalik' element={<Abdumalik/>}/>
            <Route path='/solixa' element={<Solixa/>}/>
            <Route path='/muslima' element={<Muslima/>}/>
          </Routes>
        </main>
        <Footer/>
    </div>
  )
}

export default App; 