import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/SearchBar'
import ExploreFood from './components/ExploreFood/ExploreFood'
import FoodMenu from './components/FoodMenu/FoodMenu'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <ExploreFood />
      <FoodMenu />
      <Footer />
    </div>
  )
}

export default App