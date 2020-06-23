import React from 'react'

const SearchKeyword = (props) => (

    <React.Fragment>

    <h5>Keyword</h5>
    <div className="card">
        <div className="card-body">
            <div className="form-row">
                <div className="col-10">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Type keyword i.e : restaurant's name, location, cuisine, etc."
                        value={this.state.keyword}
                        onChange={props.changeKeywordHandler}
                    />
                </div>
                <div className="col">
                    <button
                        className="btn btn-primary"
                        type="button">
                        Add to criteria
                                            </button>
                </div>
            </div>
        </div>
    </div>

    </React.Fragment>

)

export default SearchKeyword