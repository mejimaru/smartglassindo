import React, { Component }from 'react'
import Navbar from './components/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import Product from './pages/Product'
import ProDetail from './components/ProDetail'

class App extends Component{

  render() {
    return (
      <Router>
      <React.Fragment>
        <Navbar />
        <Route path="/foodparadise" exact component={Home}></Route>
        <Route path="/foodparadise/product/:product_id" component={Product}></Route>
        <Route path="/restaurant/:restaurant_id" component={ProDetail}></Route>
        <Footer />
      </React.Fragment>
      </Router>
    )
  }
}
export default App
