import React from 'react'

const CategoryList = (props) => (

    {props.state.categories && (
        <div className="list-group">

            {props.state.categories.map(category => (
                <button
                    key={category.id}
                    className={'list-group-item list-group-item-action ' + (props.state.categorySelected && category.id === props.state.categorySelected.id ? 'active' : '')}
                    onClick={() => props.categoryClickHandler(category)}>
                    {category.name}
                </button>
            ))}
        </div>
    )}

)

export default CategoryList