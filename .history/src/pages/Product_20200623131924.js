import React, { Component } from 'react'
import axios from 'axios'
import { API } from '../config/api'

const categoriesDummy = [
{
    "categories": [
      {
        "categories": {
          "id": 1,
          "name": "Delivery"
        }
      },
      {
        "categories": {
          "id": 2,
          "name": "Dine-out"
        }
      },
      {
        "categories": {
          "id": 3,
          "name": "Nightlife"
        }
      },
      {
        "categories": {
          "id": 4,
          "name": "Catching-up"
        }
      },
      {
        "categories": {
          "id": 5,
          "name": "Takeaway"
        }
      },
      {
        "categories": {
          "id": 6,
          "name": "Cafes"
        }
      },
      {
        "categories": {
          "id": 7,
          "name": "Daily Menus"
        }
      },
      {
        "categories": {
          "id": 8,
          "name": "Breakfast"
        }
      },
      {
        "categories": {
          "id": 9,
          "name": "Lunch"
        }
      },
      {
        "categories": {
          "id": 10,
          "name": "Dinner"
        }
      },
      {
        "categories": {
          "id": 11,
          "name": "Pubs & Bars"
        }
      },
      {
        "categories": {
          "id": 13,
          "name": "Pocket Friendly Delivery"
        }
      },
      {
        "categories": {
          "id": 14,
          "name": "Clubs & Lounges"
        }
      }
    ]
  }
]

class Product extends Component {

    constructor() {
        super()
        this.state = {
            city: null,
            categories: null
        }
    }

    transformCategoriesData(categories) {
        let 
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

            {this.state.product && (
                 <div className="row">
                 <div className="col">
                     <h4 className="text-success">
                     Product in { this.state.product.name }, { this.state.product.country_name }
                     </h4>
                 </div>
             </div>
            )}
           
        </div>
    )
  }
}

export default Product