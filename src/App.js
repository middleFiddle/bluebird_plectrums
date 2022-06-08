import React from 'react'
import { Products } from './components'
import Footer from './components/Footer'
import Header from './components/Header'
import Pitch from './components/Pitch'

const App = () => {
  return (
    <div>
      <Header />
      <Products />
      <Pitch />
      <Footer />
    </div>
  )
}

export default App
