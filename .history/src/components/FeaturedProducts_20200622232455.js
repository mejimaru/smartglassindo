import React from 'react'

const FeaturedProducts = (props) => (

    <React.Fragment>
        <div className="row">
            <div className="col-12">
                <h3>Featured Products</h3>
            </div>
        </div>

        <div className="row">
            {props.product.map(product =>
                <ProductCard key={product.id} product={product} />
            )}
        </div>
    </React.Fragment>
)

export default FeaturedProducts