import React, { Component }from 'react';
import Navbar from './components/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home';

class App extends Component{

 

  render() {

    return (
      <React.Fragment>
        <Navbar />
        <Home />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
