import React from 'react';
import mainImage from './assets/images/aneka-kaca1.jpg'

function App() {

  const productDummy = [
    {id: 72, name:"Gatot", country_name:"Indonesia"},
    {id: 11052, name:"Laila", country_name:"USA"},
    {id: 170, name:"Alucard", country_name:"London"}
  ]


  return (

    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <a className="navbar-brand" href="/">www.smartglassindo.co.id</a>
      </nav>

      <div className="container-fluid">
        <div className="row" style={{ marginBottom: 30}}>
          <img src={mainImage} width="100%"alt="Aneka Kaca"></img>
        </div>
      </div>

      <div className="row">
      <div className="col">
        <div className="card text-white bg-success mb-3 text-center">
          <div className="card-header"><h1>Welcome to SMARTGLASSINDO</h1></div>
          <div className="card-body">
            <h4 className="card-title">The Easiest Way to Find Smart Glass and Mirror</h4>
            <p className="card-text">You can grab information about glass, mirror with just a few clicks.</p>
            <p className="card-text">Start by choosing the product below, or search the product name.</p>
          </div>
        </div>
      </div>
      </div>

      <div className="container" style={{ marginTop:30, marginBottom:30}}>
        <div className="row">
          <div className="col-12">
            <h3>Featured Products</h3>
          </div>
        </div>
        <div className="row">
          { productDummy.map( product => 
          
          <div className="card-body">
            <h3 className="card-title">{product.name}</h3>
          <p>{product.country_name}</p>
          <a href="/#" className="card-text">See glass in {product.name}</a>
          </div>
          )}
        </div>
      </div>

    </React.Fragment>
  );
}

export default App;
