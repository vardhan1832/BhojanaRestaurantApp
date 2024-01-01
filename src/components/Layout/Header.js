import React,{useContext} from "react";
import "./Header.css";
import mealsImage from "../../assets/meals.jpg";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cartcontext";
const Header = (props) => {
  const cartctx = useContext(CartContext)
  const numberofCartItems = cartctx.items.reduce((currentamount,item)=>{
    return currentamount + Number(item.Amount)
  },0)
  const cartHandler = ()=>{
     props.onCartclick()
  }
  return (
    <React.Fragment>
      <header className="header">
        <h1>BHOJANA</h1>
        <button onClick={cartHandler}>
          <span className="icon">
          <CartIcon/>
          </span>
            <span>Your Cart :</span>
            <span className="badge">{numberofCartItems}</span>
        </button>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="Food"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
