import React, { Component } from 'react'
import axios from 'axios'
import { API } from '../config/api'

class RestaurantDetail extends Component {
    constructor () {
        super()
        this.state = {
          restaurant: null,
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
            this.setState({ restaurant: data })
          })
          .catch(err => console.log(err))
      }

      componentDidMount () {
        let { params } = this.props.match
        this.getRestaurantData(params.restaurant_id)
      }


    render() {
        return (
        <>
            <p>Halaman Restaurant Detail</p>
        </>
        )
    }
}

export default RestaurantDetail