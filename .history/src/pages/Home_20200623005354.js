import React, { Component } from 'react'
import ImageAndWelcome from '../components/ImageAnWelcome'
import ProductList from './components/ProductList'
import SearchProduct from '../components/SearchCity'
class Home extends Component {

    constructor() {
        super();
        this.state = {
          keyword: ""
        }
      }
    
      changeKeywordHandler = (event) => {
        this.setState({keyword: event.target.value})
      }

    render() {
        return (
        <React.Fragment>
        <ImageAndWelcome />
        <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
            <CityList title={'Featured Cities'} cities={citiesDummy} />

            <SearchCity
                value={this.state.keyword}
                onChange={this.changeKeywordHandler}
            />

            <CityList title={'Search Result'} cities={citiesDummy} />

        </div>
        </React.Fragment>
        )
    }
}

export default Home