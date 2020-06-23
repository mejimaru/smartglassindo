import React, { Component } from 'react'
import ImageAndWelcome from '../components/ImageAnWelcome'
import ProductList from './components/ProductList'
import SearchProduct from '../components/SearchProduct'
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
          <ProductList productDummyz={productDummy} title={'Featured Product'}/>
          <SearchProduct value={this.state.keyword} onChange={this.changeKeywordHandler}/>
          <ProductList title={'Search Result'} productDummyz={productDummy}/>
        </div>
        </React.Fragment>
        )
    }
}

export default Home