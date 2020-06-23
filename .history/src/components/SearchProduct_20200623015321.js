import React from 'react'

const SearchProduct = (props) => (
    <div className="row" style={{ marginBottom: 30 }}>
            <div className="col">
              <h3>Search Products</h3>
              <div className="card">
                <div className="card-body">
  
                  <div className="form-row">
                    <div className="col-11">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Type keyword or product name"
                        value={props.value}
                        onChange={props.onChange}
                      />
                    </div>
                    <div className="col-1">
                      <button className="btn btn-primary" type="button" on>
                        Search
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
)

export default SearchProduct