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

    getCityData = (product_id) => {
        let url = `${API.zomato.baseUrl}/cities`
        axios.get(url, {
          headers: {
            'user-key': API.zomato.api_key
          },
          params: {
            city_ids: `${product_id}`
          }
        })
          .then(({ data }) => {
            let product = data.location_suggestions[0]
            this.setState({ product })
          })
          .catch(err => console.log(err))
      }
  }
}

export default Product