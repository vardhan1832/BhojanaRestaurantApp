import React from "react";
import ReactDom from "react-dom";
import "./CartOverlay.css";
const CartOverlay = (props) => {
  const cancelHandler = ()=>{
      props.onCancelClick()
  }
  return  ReactDom.createPortal(
    <div className="cart-overlay">
      <p>Sushi</p>
      <h3>
        Total Amount <span>35.6</span>{" "}
      </h3>
      <div className='actions'>
      <button onClick={cancelHandler}>Cancel</button>
      <button>Order</button>
      </div>
      
    </div>,
  document.getElementById("overlay")
)
};

export default CartOverlay;
