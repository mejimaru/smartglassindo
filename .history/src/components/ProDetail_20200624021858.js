import React, { Component } from 'react'
import axios from 'axios'
import { API } from '../config/api'

class RestaurantDetail extends Component {
  render() {

    constructor () {
        super()
        this.state = {
          restaurant: null,
        }
    }

    return (
      <>
        <p>Halaman Restaurant Detail</p>
      </>
    )
  }
}

export default RestaurantDetail