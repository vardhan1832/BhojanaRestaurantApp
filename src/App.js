import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Backdrop from "./components/Cart/Backdrop";
import CartOverlay from "./components/Cart/CartOverlay";
function App() {
  return (
    <div>
      <Backdrop/>
        <CartOverlay />
        <Header />
        <Meals />
    </div>
  );
}

export default App;
