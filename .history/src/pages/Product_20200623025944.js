import React, { Component } from 'react'
import axios from 'axios'
import { API } from '../config/api'

class Product extends Component {

    constructor() {
        super()
        this.state = {
            city: null
        }
    }

    componentDidMount () {
        // cara mendapatkan parameter city_id dari url / route
        let { city_id } = this.props.match.params
        this.getCityData(city_id)
    }
        
  render(){
      
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