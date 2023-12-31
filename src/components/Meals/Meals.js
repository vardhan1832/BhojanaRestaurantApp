import React from "react";
import Summary from "./Summary";
import AvailableMeals from "./AvailableMeals";
import './Meals.css'

const Meals = ()=>{
    return (
        <React.Fragment>
            <Summary/>
            <div className="container">
            <AvailableMeals/>
            </div>
        </React.Fragment>
    )
}

export default Meals;