import React from 'react'
import ProductCard from './'

const FeaturedProducts = (props) => (

    <React.Fragment>
        <div className="row">
            <div className="col-12">
                <h3>Featured Products</h3>
            </div>
        </div>

        <div className="row">
            {props.productDummy.map(product =>
                <ProductCard key={product.id} product={product} />
            )}
        </div>
    </React.Fragment>
)

export default FeaturedProducts