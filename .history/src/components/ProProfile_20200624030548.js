import React from 'react'
import ProCard from './ProCard'

const ProProfile = (props) => (

    <div className="card">
        <div className="card-header">
            <div className="row">
                <div className="col">
                    {
                        this.pr.restaurant ? (
                            <>
                                <h4 className="text-success" style={{ fontWeight: 800 }}>{this.pr.restaurant.name}</h4>
                                <h6 style={{ fontWeight: 600 }}>{this.pr.restaurant.location.locality}</h6>
                                <h6 className="text-muted">{this.pr.restaurant.location.address}</h6>
                            </>
                        ) : (
                                <p>Loading...</p>
                            )
                    }
                </div>
            </div>
        </div>
        <div className="card-body">
            {
                this.pr.restaurant ? (
                    <div className="row">
                        <div className="col-6">
                            <img class="img-responsive" src={this.pr.restaurant.featured_image} alt="" style={{ borderRadius: 5, width: 500 }} ></img>
                        </div>
                        <div className="col-6">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Rating</td>
                                        <td>
                                            <RatingLabel
                                                labelColor={this.pr.restaurant.user_rating.rating_color}
                                                text={`${this.pr.restaurant.user_rating.aggregate_rating} (${this.pr.restaurant.user_rating.rating_text})`}
                                            />
                                            <h6>{this.pr.restaurant.user_rating.votes} Votes</h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Cuisines</td>
                                        <td>
                                            {this.pr.restaurant.cuisines}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Cost for two</td>
                                        <td>
                                            {this.pr.restaurant.currency + ' ' + this.pr.restaurant.average_cost_for_two}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                        <p>Loading...</p>
                    )
            }

        </div>
    </div>



)

export default ProProfile