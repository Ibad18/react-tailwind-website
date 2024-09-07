import React from 'react'
import './index.css'
import SearchBar from './components/SearchBar'
import ExploreFood from './components/ExploreFood'
import FoodMenu from './components/FoodMenu'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar />
      <ExploreFood />
      <FoodMenu />
      <Footer />
    </div>
  )
}

export default App