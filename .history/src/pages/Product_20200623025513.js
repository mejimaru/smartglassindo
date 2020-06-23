import React, { Component } from 'react'

class Product extends Component {
  render(){
    return (
        <div className="container-fluid" style={{ marginTop: 30, marginBottom: 30 }}>
            <div className="row">
                <div className="col">
                    <h4 className="text-success">
                        Restaurant in City Name , Country Name
                    </h4>
        </div>
    </div>
        </div>
    )
  }
}

export default Product