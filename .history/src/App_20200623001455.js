import React, { Component }from 'react';
import Navbar from './components/Navbar'
import ImageAndWelcome from './components/ImageAndWelcome';
import FeaturedProducts from './components/FeaturedProducts'
import SearchProduct from './components/'

class App extends Component{

  constructor() {
    super();
    this.state = {
      keyword: ""
    }
  }

  changeKeywordHandler = (event) => {
    this.setState({keyword: event.target.value})
  }


  render() {

    const productDummy = [
      { id: 72, name: "Gatot", country_name: "Indonesia" },
      { id: 11052, name: "Laila", country_name: "USA" },
      { id: 170, name: "Alucard", country_name: "London" }
    ]
  



    return (
      <React.Fragment>
        <Navbar />
        <ImageAndWelcome />
        <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
          <FeaturedProducts productDummyz={productDummy} />
  
          {/* start of search section */}
          
          {/* end of search section */}
  
        </div>
      </React.Fragment>
    );
  }
}

export default App;
