import React, { Component } from 'react'

class Product extends Component {

    
  render(){

    super()
    this.state = {
        city: null
    }
}
    return (
        <div className="container-fluid" style={{ marginTop: 30, marginBottom: 30 }}>
            <div className="row">
                <div className="col">
                    <h4 className="text-success">
                        Product in City Name , Country Name
                    </h4>
                </div>
            </div>
        </div>
    )
  }
}

export default Product