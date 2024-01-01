import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Backdrop from "./components/Cart/Backdrop";
import CartOverlay from "./components/Cart/CartOverlay";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartDisplay, setcartDisplay] = useState(false);
  const onCartClickHandler = () => {
    setcartDisplay(true);
  };
  const onCancelClickHandler = ()=>{
    setcartDisplay(false)
  }
  return (
    <CartProvider>
      {cartDisplay && <Backdrop onClickBackdrop={onCancelClickHandler} />}
      {cartDisplay && <CartOverlay onCancelClick={onCancelClickHandler}/>}
      <Header onCartclick={onCartClickHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
