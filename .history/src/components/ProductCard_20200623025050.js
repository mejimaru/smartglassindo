import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = (props) => (
    <div className="col-4">
        <div className="card bg-light mb-3">
            <div className="card-body">
                <h3 className="card-title">{props.product.name}</h3>
                <p>{props.product.country_name}</p>
                <Link to={`/product/${props.product.id}` className="card-text">See glass in {props.product.name}</a>
            </div>
        </div>
    </div>
)
export default ProductCard