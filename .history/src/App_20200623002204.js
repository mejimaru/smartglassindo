import React, { Component }from 'react';
import Navbar from './components/Navbar'
import ImageAndWelcome from './components/ImageAndWelcome';
import ProductList from './components/ProductList'
import SearchProduct from './components/SearchProduct'

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
          <ProductList productDummyz={productDummy} title />
  
          {/* start of search section */}
          <SearchProduct value={this.state.keyword} onChange={this.changeKeywordHandler}/>
          {/* end of search section */}
  
        </div>
      </React.Fragment>
    );
  }
}

export default App;
