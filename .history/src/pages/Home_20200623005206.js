import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
        <React.Fragment>

        <ImageAndWelcome />
        <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
            <CityList title={'Featured Cities'} cities={citiesDummy} />

            <SearchCity
                value={this.state.keyword}
                onChange={this.changeKeywordHandler}
            />

            <CityList title={'Search Result'} cities={citiesDummy} />

        </div>
        </React.Fragment>
        )
    }
}

export default Home