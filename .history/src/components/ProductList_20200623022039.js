import React from 'react'
import ProductCard from './ProductCard'

const ProductList = (props) => (

    <React.Fragment>
    <div className="row">
        <div className="col-12">
            <h3>{props.title}</h3>
            {props.showSubtitle === true && props.subtitle !== '' &&
                <h6 className="text-muted">Search result for keyword '{props.subtitle}' </h6>
            }

        </div>
    </div>

    <div className="row">

        {props.products == null ? (
            <div className="col">
                <p>Loading...</p>
            </div>
        ) : (
                _renderProductList(props.products)
            )}
    </div>
    </React.Fragment >
)

const _renderProductList = products => {
    if (products.length > 0) {
        ret
            products.map(product =>
                <ProductCard key={product.id} product={product} />
        )
    }else {
        return (
            <div className="col">
                <p className="text-danger">Data not found !</p>
            </div>
        )
    }
}

export default ProductList