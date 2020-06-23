import React from 'react';
import Navbar from './components/Navbar'
import ImageAndWelcome from './components/ImageAndWelcome';
import FeaturedProducts from './components/FeaturedProducts'

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
        

      </div>

    </React.Fragment>
  );
}

export default App;
