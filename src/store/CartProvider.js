import React, { useState } from "react";
import CartContext from "./cartcontext";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {
    const existingitemindex = cartcontext.items.findIndex((obj) => {
      return obj.id === item.id;
    });
    if (existingitemindex !== -1) {
      let newitem = {
        ...cartcontext.items[existingitemindex],
        Amount: Number(cartcontext.items[existingitemindex].Amount) + Number(item.Amount) ,
      };
      cartcontext.items[existingitemindex] = newitem;
    } else {
      cartcontext.items.push(item);
    }
    console.log(cartcontext);
    cartcontext.totalAmount += item.price * item.Amount;
    setCart({ ...cartcontext });
  };
  const removeItemFromCartHandler = (id) => {
    const existingitemindex = cartcontext.items.findIndex((obj) => {
        return obj.id === id;
    });
    cartcontext.totalAmount = cartcontext.totalAmount - Number(cartcontext.items[existingitemindex].price)
    let updateditems;
    if(+cartcontext.items[existingitemindex].Amount === 1){
        updateditems = cartcontext.items.filter((item)=>{
            return item.id!==cartcontext.items[existingitemindex].id;
        })
        cartcontext.items = [...updateditems]
    }else{
        let afterremovingitem = {
            ...cartcontext.items[existingitemindex],
            Amount: Number(cartcontext.items[existingitemindex].Amount) - 1 ,
        };
        cartcontext.items[existingitemindex] = afterremovingitem;
    }
    
    setCart({ ...cartcontext})
  };
  const cartcontext = {
    totalAmount: 0,
    items: [],
    addToCart: addItemToCartHandler,
    removeFromCart: removeItemFromCartHandler,
  };
  const [cart, setCart] = useState(cartcontext);
  return (
    <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
