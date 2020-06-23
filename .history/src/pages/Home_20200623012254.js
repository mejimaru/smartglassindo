import React, { Component } from 'react'
import ImageAndWelcome from '../components/ImageAndWelcome'
import ProductList from '../components/ProductList'
import SearchProduct from '../components/SearchProduct'

const productDummy = [
    { id: 72, name: "China", country_name: "Indonesia" },
    { id: 11052, name: "CPV 003", country_name: "USA" },
    { id: 170, name: "Fantasy 02", country_name: "London" }
]

class Home extends Component {

    constructor() {
        super();
        this.state = {
            keyword: ""
        }
    }

    changeKeywordHandler = (event) => {
        this.setState({ keyword: event.target.value })
    }

    render() {
        return (
            <React.Fragment>
                <ImageAndWelcome />
                <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
                    <ProductList productDummyz={productDummy} title={'Featured Product'} />
                    <SearchProduct value={this.state.keyword} onChange={this.changeKeywordHandler} />
                    <ProductList title={'Search Result'} productDummyz={productDummy} />
                </div>
            </React.Fragment>
        )
    }
}

export default Home