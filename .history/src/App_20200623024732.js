import React, { Component }from 'react'
import Navbar from './components/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import Product from './'

class App extends Component{

  render() {
    return (
      <Router>
      <React.Fragment>
        <Navbar />
        <Route path="/" exact component={Home}></Route>
        <Footer />
      </React.Fragment>
      </Router>
    )
  }
}
export default App
