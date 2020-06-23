import React from 'react';
import mainImage from './assets/images/aneka-kaca1.jpg'

function App() {
  return (

    <React.Fragment>

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <a className="navbar-brand" href="/">www.smartglassindo.co.id</a>
    </nav>
    <div className="row" style="{{ marginBottom: 30}}">
      <img src={mainImage} width="100%"alt="Aneka Kaca"></img>
    </div>

  );
}

export default App;
