import React from 'react'

/* const CityCard = (props) => {

} */

const CityCard = (props) => (
    <div className="col-4">
        <div className="card bg-light mb-3">
            <div className="card-body">
                <h3 className="card-title">{props.product.name}</h3>
                <p>{props.product.country_name}</p>
                <a href="/#" className="card-text">See glass in {props.product.name}</a>
            </div>
        </div>
    </div>
)
export default CityCard