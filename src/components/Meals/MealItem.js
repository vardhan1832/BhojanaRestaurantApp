import React,{useContext,useState} from 'react'
import './MealItem.css'
import CartContext from '../../store/cartcontext'

const MealItem = (props) =>{
    const cartctx = useContext(CartContext)
    const [amount,setamount] = useState(1)
    const amountHandler = (event)=>{
        setamount(event.target.value)
    }
    const submitHandler = (event)=>{
        event.preventDefault()
        const item = {...props.item,Amount:amount}
        cartctx.addToCart(item)
    }
    return (
        <li className='mealitem'>
            <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <h4 className='price'>${props.price}</h4>
            </div>
            <div>
                <form onSubmit={submitHandler}>
                    <div className='form' >
                        <div class='form-control' >
                        <label htmlFor="Amount">Amount</label>
                        <input id='Amount' type='number' min='1' max='5' step='1' defaultValue='1' onChange={amountHandler} />
                        </div>
                        <div class='form-actions' >
                        <button type='submit' >+ Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </li>
    )
}

export default MealItem