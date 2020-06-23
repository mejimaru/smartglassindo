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
        let { product_id } = this.props.match.params
        this.getProductData(product_id)
    }

    getProductData = (product_id) => {
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