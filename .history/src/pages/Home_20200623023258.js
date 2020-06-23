import React, { Component } from 'react'
import ImageAndWelcome from '../components/ImageAndWelcome'
import ProductList from '../components/ProductList'
import SearchProduct from '../components/SearchProduct'
import axios from 'axios'
import { API } from '../config/api'

/* const productDummy = [
    { id: 72, name: "Jakarta", country_name: "Indonesia" },
    { id: 11052, name: "Beijing", country_name: "China" },
    { id: 170, name: "Berlin", country_name: "Germany" }
]
 */
class Home extends Component {

    constructor() {
        super();
        this.state = {
            keyword: "",
            featuredProducts: null,
            productsResultSearch: null,
            productKeywordSearch: '',
        }
    }

    changeKeywordHandler = (event) => {
        this.setState({ keyword: event.target.value })
    }

    getFeaturedProducts = () => {
        var url = `${}/cities`
        axios.get(url, {
            headers: {
                'user-key': 'e721d9ef98567691ff7c3950841039a9'
            },
            params: {
                city_ids: "74, 11052, 170"
            }
        }).then(({data}) => {
            if (data.status === "success"){
                this.setState({featuredProducts: data.location_suggestions})
            }
        }).catch(err => console.log(err))
    }

    searchHandler = () => {
        let keyword = this.state.keyword
        var url = "https://developers.zomato.com/api/v2.1/cities"
        axios.get(url, {
            headers: {
                'user-key': 'e721d9ef98567691ff7c3950841039a9'
            },
            params: {
                q: keyword
            }
        }).then(({data}) => {
            if(data.status === 'success') {
                this.setState({
                    productsResultSearch: data.location_suggestions, 
                    keyword: '', 
                    productKeywordSearch: keyword})
            }
        }).catch(err => console.log(err))

    }

    componentDidMount() {
      // this.getFeaturedProducts()
    }

    render() {
        return (
            <React.Fragment>
                <ImageAndWelcome />
                <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
                    <ProductList products={this.state.featuredProducts} title={'Featured Product'} />
                    <SearchProduct value={this.state.keyword} onChange={this.changeKeywordHandler} onClickSearch={this.searchHandler} />
                    
                    {this.state.productKeywordSearch !== '' && (
                        <ProductList 
                        title={'Search Result'} 
                        products={this.state.productsResultSearch}
                        showSubtitle={true} 
                        subtitle={this.state.productKeywordSearch} />
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default Home