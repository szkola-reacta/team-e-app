import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function Menu() {
    return(
        <Router>
            <nav className="App-header-nav">
                <ul>
                    <li><NavLink exact to="/home" className="App-header-nav-link" activeClassName="App-header-nav-link-active">Home</NavLink></li>
                    <li><NavLink exact to="/about" className="App-header-nav-link" activeClassName="App-header-nav-link-active">About</NavLink></li>
                    <li><NavLink exact to="/movie" className="App-header-nav-link" activeClassName="App-header-nav-link-active">Movie</NavLink></li>
                </ul>
            </nav>
        </Router>

    );
}

export default Menu;