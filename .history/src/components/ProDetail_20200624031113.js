import React, { Component } from 'react'
import axios from 'axios'
import { API } from '../config/api'
import ProProfile from '../components/ProProfile'

class ProDetail extends Component {

    
    constructor() {
        super()
        this.state = {
            restaurant: null,
            reviews:null,
        }
    }

    

    getRestaurantData = (restaurant_id) => {
        let url = `${API.zomato.baseUrl}/restaurant`
        axios.get(url, {
            headers: {
                'user-key': API.zomato.api_key
            },
            params: {
                res_id: restaurant_id
            }
        })
            .then(({ data }) => {
                //console.log(data)
                this.setState({ restaurant: data })
            })
            .catch(err => console.log(err))
    }

    getReviewsData = (restaurant_id) => {
        let url = `${API.zomato.baseUrl}/reviews`
        axios.get(url, {
          headers: {
            'user-key': API.zomato.api_key
          },
          params: {
            res_id: restaurant_id
          }
        })
          .then(({ data }) => {
            this.setState({ reviews: data.user_reviews })
          })
          .catch(err => console.log(err))
    }

    componentDidMount() {
        let { params } = this.props.match
        this.getRestaurantData(params.restaurant_id)
        this.getReviewsData(params.restaurant_id)
    }


    render() {
        
        return (

            <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
                <div className="row">
                    <div className="col-12" style={{ marginBottom: 20 }}>
                        <ProProfile restaurant={this.state.restaurant}/>
                
                    </div>
                </div>
            </div>
        )
    }
}

export default ProDetail