import React from "react";
import { NavLink } from "react-router-dom";

function Menu({ opened }) {

    const styles = {
        left: opened ? "0%": "-100%"
    };

    return(
        <nav className="App__header__nav">
            <ul className="App__header__nav__links" style={styles}>
                <li><NavLink exact to="/home" className="App__header__nav__link" activeClassName="App__header__nav__link__active">Home</NavLink></li>
                <li><NavLink exact to="/videolist" className="App__header__nav__link" activeClassName="App__header__nav__link__active">Video List</NavLink></li>
                <li><NavLink exact to="/about" className="App__header__nav__link" activeClassName="App__header__nav__link__active">About</NavLink></li>
                <li><NavLink exact to="/addmovie" className="App__header__nav__link" activeClassName="App__header__nav__link__active">Add Movie</NavLink></li>
            </ul>
        </nav>
    );
}

export default Menu;