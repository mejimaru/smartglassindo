import React from 'react'

const CategoryList = (props) => (

    {this.state.categories && (
        <div className="list-group">

            {this.state.categories.map(category => (
                <button
                    key={category.id}
                    className={'list-group-item list-group-item-action ' + (this.state.categorySelected && category.id === this.state.categorySelected.id ? 'active' : '')}
                    onClick={() => this.categoryClickHandler(category)}>
                    {category.name}
                </button>
            ))}
        </div>
    )}

)

export default CategoryList