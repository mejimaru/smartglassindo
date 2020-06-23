import React from 'react'
import mainImage from '../assets/images/aneka-kaca1.jpg'

const ImageAndWelcome = () => (
    <div className="container-fluid">
        <div className="row" style={{ marginBottom: 30 }}>
            <img src={mainImage} width="50%" alt="Aneka Kaca"></img>
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
    </div>
)


export default ImageAndWelcome