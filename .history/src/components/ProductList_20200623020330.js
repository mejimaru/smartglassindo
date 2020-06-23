import React from 'react'
import ProductCard from './ProductCard'

const ProductList = (props) => (

    const _renderProductList = (products) => {
        if(products.le)

    }

    <React.Fragment>
        <div className="row">
            <div className="col-12">
                <h3>{props.title}</h3>
                { props.showSubtitle === true && props.subtitle !== '' && 
                    <h6 className="text-muted">Search result for keyword '{props.subtitle}' </h6>
                }

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
        </div>
    </React.Fragment>
)

export default ProductList