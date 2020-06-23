import React from 'react'
import ProductCard from './ProductCard'

const ProductList = (props) => (

    <React.Fragment>
        <div className="row">
            <div className="col-12">
                <h3>{props.title}</h3>
            </div>
        </div>

        <div className="row">

        {props.products == null? (
            <div className="col">
                <p>Loading...</p>
            </div>
        ): (
            props.products.map(product =>
                <ProductCard key={product.id} product={product} />
            )

        ) }

            {}
        </div>
    </React.Fragment>
)

export default ProductList