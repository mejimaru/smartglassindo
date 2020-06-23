import React, { Component }from 'react';
import Navbar from './components/Navbar'
import ImageAndWelcome from './components/ImageAndWelcome';
import FeaturedProducts from './components/FeaturedProducts'

class App extends Component{

  constructor() {
    super
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
          <div className="row" style={{ marginBottom: 30 }}>
            <div className="col">
              <h3>Search Products</h3>
              <div className="card">
                <div className="card-body">
  
                  <div className="form-row">
                    <div className="col-11">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Type keyword or product name"
                        value={}
                        onChange={}
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* end of search section */}
  
        </div>
      </React.Fragment>
    );
  }
}

export default App;
