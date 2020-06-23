import React from 'react'
import ProductCard from './ProductCard'

const ProductList = (props) => (

    <React.Fragment>
        <div className="row">
            <div className="col-12">
                <h3>{</h3>
            </div>
        </div>

        <div className="row">
            {props.productDummyz.map(product =>
                <ProductCard key={product.id} product={product} />
            )}
        </div>
    </React.Fragment>
)

export default ProductList