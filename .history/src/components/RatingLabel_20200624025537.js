import React from 'react'

const RatingLabel = (props) => (

    <div className="btn btn-sm"
        style={{
            color: 'white',
            backgroundColor: `#${props.restaurant.user_rating.rating_color}`,
            borderColor: `#${props.restaurant.user_rating.rating_color}`,
        }}
    >
        {`${props.restaurant.user_rating.aggregate_rating} (${props.restaurant.user_rating.rating_text})`}
    </div>

)

export default RatingLabel 