import React from "react";
import Summary from "./Summary";
import AvailableMeals from "./AvailableMeals";
import './Meals.css'

const Meals = ()=>{
    return (
        <React.Fragment>
            <Summary/>
            <AvailableMeals/>
        </React.Fragment>
    )
}

export default Meals;