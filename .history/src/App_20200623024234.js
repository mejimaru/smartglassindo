import React, { Component }from 'react'
import Navbar from './components/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom' 

class App extends Component{

  render() {
    return (
      <Router>
      <React.Fragment>
        <Navbar />
        <Home />
        <Footer />
      </React.Fragment>
    )
  }
}
export default App
