import React from "react";
import "./Header.css";
import mealsImage from "../../assets/meals.jpg";
import CartIcon from "../Cart/CartIcon";
const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>BHOJANA</h1>
        <button>
            <CartIcon/>
            <span className="cart">Your Cart :</span>
            <span className="badge">3</span>
        </button>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="Food"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
