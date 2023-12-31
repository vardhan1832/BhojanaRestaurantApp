import React from "react";
import './Header.css'

const Header = () => {
    let count = 0
    return (
        <React.Fragment>
            <header className='header'>
                <h1>BHOJANA</h1>
                <button><h4>Your Cart :<span className='spann'>{count}</span></h4> </button>
            </header>
        </React.Fragment>
    )
}

export default Header