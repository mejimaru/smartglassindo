import React, { Component } from 'react'
import axios from 'axios'
import { API } from '../config/api'
import CategoryList from '../components/CategoryList'
import SearcKeyword from '../components/SearchKeyword'
import SearchCriteria from '../components/SearchCriteria'

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

const restaurants = [
    {
      "restaurant": {
        "id": "18875696",
        "name": "Kintaro Sushi",
        "location": {
          "address": "Jl. Suryo No. 20, Senopati, Jakarta",
          "locality": "Senopati",
        },
        "cuisines": "Sushi, Japanese",
        "average_cost_for_two": 200000,
        "currency": "IDR",
        "thumb": "https://b.zmtcdn.com/data/pictures/chains/5/18530405/0feeddcbe877a8e27526a8cf5b501edf.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "user_rating": {
          "aggregate_rating": "4.9",
          "rating_text": "Excellent",
          "rating_color": "3F7E00",
          "votes": "1358"
        },
      }
    },
    {
      "restaurant": {
        "id": "18875696",
        "name": "Kintaro Sushi",
        "location": {
          "address": "Jl. Suryo No. 20, Senopati, Jakarta",
          "locality": "Senopati",
        },
        "cuisines": "Sushi, Japanese",
        "average_cost_for_two": 200000,
        "currency": "IDR",
        "thumb": "https://b.zmtcdn.com/data/pictures/chains/5/18530405/0feeddcbe877a8e27526a8cf5b501edf.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "user_rating": {
          "aggregate_rating": "4.9",
          "rating_text": "Excellent",
          "rating_color": "3F7E00",
          "votes": "1358"
        },
      }
    }
  ] 


class Product extends Component {

    constructor() {
        super()
        this.state = {
            product: null,
            categories: null,
            categorySelected: null,
            keyword: '',
            criteria: [],
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
                let newCriteria = {
                    criteriaName: 'Product',
                    data: product
                }
                let criteria = [...this.state.criteria]
                criteria.push(newCriteria)
                this.setState({ product, criteria })
            })
            .catch(err => console.log(err))
    }

    categoryClickHandler = (category) => {
        let criteria = [...this.state.criteria]
        let newCriteria = {
            criteriaName: 'Category',
            data: category
        }
        criteria = criteria.filter(cri => cri.criteriaName !== 'Category')
        criteria.push(newCriteria)
        this.setState({ categorySelected: category, criteria })
    }

    changeKeywordHandler = (event) => {
        this.setState({ keyword: event.target.value });
    }

    addToCriteriaHandler = () => {
        let criteria = [...this.state.criteria]
        criteria = criteria.filter(cri => cri.criteriaName !== 'Keyword')
        let newCriteria = {
          criteriaName  : 'Keyword',
          data          : {
            name: this.state.keyword
          }
        }
    
        criteria.push(newCriteria)
        this.setState({ keyword: '', criteria })
      }

      removeCriteriaHandler = (index) => {
        let criteria = [...this.state.criteria]
        criteria.splice(index, 1)
        this.setState({ criteria })
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
                                categoryClickHandler={(category) => this.categoryClickHandler(category)}
                            />
                        </div>

                        <div className="col">
                            <SearcKeyword
                                keyword={this.state.keyword}
                                changeKeywordHandler={this.changeKeywordHandler}
                                onClickAddToCriteria={this.addToCriteriaHandler}
                            />

                            <SearchCriteria
                                criteria={this.state.criteria}
                                removeCriteriaHandler={(index) => this.removeCriteriaHandler(index)}
                            />

                            <div className="row">
                                <div className="col" style={{ marginBottom: 10 }}>
                                    <h4 className="text-success">Product List</h4>
                                </div>
                            </div>
                            <div className="row">

                            </div>
                            


                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Product