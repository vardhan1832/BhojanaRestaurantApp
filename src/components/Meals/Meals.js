import React from "react";
import Summary from "./Summary";
import AvailableMeals from "./AvailableMeals";
import './Meals.css'

const Meals = ()=>{
    return (
        <React.Fragment>
            <Summary/>
            <h2 className="menu">BHOJANA'S AVAILABLE</h2>
            <AvailableMeals/>
        </React.Fragment>
    )
}

export default Meals;