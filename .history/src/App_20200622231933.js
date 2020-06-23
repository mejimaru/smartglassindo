import React from 'react';
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar'
import ImageAndWelcome from './components/ImageAndWelcome';


function App() {

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
        <div className="row">
          <div className="col-12">
            <h3>Featured Products</h3>
          </div>
        </div>

        <div className="row">
          {productDummy.map(product =>
            <ProductCard key={product.id} product={product} />
          )}
        </div>

      </div>

    </React.Fragment>
  );
}

export default App;
