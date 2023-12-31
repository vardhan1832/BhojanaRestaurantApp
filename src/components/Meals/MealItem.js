import React from 'react'
import './MealItem.css'

const MealItem = (props) =>{
    return (
        <li className='mealitem'>
            <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <h4 className='price'>${props.price}</h4>
            </div>
            <div>
                <form>
                    <div class='form-control' >
                    <label htmlFor="Amount">Amount</label>
                    <input id='Amount' type='number' min='0' />
                    </div>
                    <div class='form-actions' >
                    <button type='submit' >+ Add</button>
                    </div>
                    
                </form>
            </div>
        </li>
    )
}

export default MealItem