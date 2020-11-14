import React from "react";
import { NavLink } from "react-router-dom";

function Menu({ opened }) {

    const styles = {
        left: opened ? "0%": "-100%"
    };

    return(
        <nav className="header__nav">
            <ul className="header__links__list" style={styles}>
                <li><NavLink exact to="/" className="header__link" activeClassName="header__link__active">Home</NavLink></li>
                <li><NavLink exact to="/videolist" className="header__link" activeClassName="header__link__active">Video List</NavLink></li>
                <li><NavLink exact to="/about" className="header__link" activeClassName="header__link__active">About</NavLink></li>
                <li><NavLink exact to="/addmovie" className="header__link" activeClassName="header__link__active">Add Movie</NavLink></li>
            </ul>
        </nav>
    );
}

export default Menu;