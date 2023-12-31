import React from 'react'
import './MealItem.css'

const MealItem = (props) =>{
    return (
        <div className='mealitem'>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <h4>${props.price}</h4>
        </div>
    )
}

export default MealItem