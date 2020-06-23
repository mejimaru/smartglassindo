import React, { Component }from 'react';
import Navbar from './components/Navbar'
import ImageAndWelcome from './components/ImageAndWelcome';

import Footer from './components/footer/Footer'
import Home from './pages/Home';

class App extends Component{

 

  render() {

    const productDummy = [
      { id: 72, name: "Gatot", country_name: "Indonesia" },
      { id: 11052, name: "Laila", country_name: "USA" },
      { id: 170, name: "Alucard", country_name: "London" }
    ]

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
