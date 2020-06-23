import React, { Component } from 'react'
import axios from 'axios'
import { API } from '../config/api'
import CategoryList from '../components/CategoryList'

const categoriesDummy = [
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
    }
  ]


class Product extends Component {

    constructor() {
        super()
        this.state = {
            city: null,
            categories: null,
            categorySelected: null
        }
    }

    transformCategoriesData(categories) {
        let categoriesTransformed = categories.map(category => {
            return category.categories
        })
        return categoriesTransformed
    }

    componentDidMount() {
        // cara mendapatkan parameter city_id dari url / route
        let { product_id } = this.props.match.params
        this.getProductData(product_id)
        let categories = this.transformCategoriesData(categoriesDummy)
        this.setState({ categories })
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

    categoryClickHandler = (category) => {
        this.setState({ categorySelected: category })
    }

    render() {

        return (
            <React.Fragment>
            <div className="container-fluid" style={{ marginTop: 30, marginBottom: 30 }}>

                {this.state.product && (
                    <div className="row">
                        <div className="col">
                            <h4 className="text-success">
                                Product in {this.state.product.name}, {this.state.product.country_name}
                            </h4>
                        </div>
                    </div>
                )}
                <div className="row">
                    <div className="col-3">
                        <h5>Categories</h5>

                        <CategoryList 
                            categories={this.state.categories}
                            categorySelected={this.state.categorySelected}
                            categoryClickHandler={(category)}
                        />
                        
                    </div>
                </div>

            </div>
            </React.Fragment>
        )
    }
}

export default Product