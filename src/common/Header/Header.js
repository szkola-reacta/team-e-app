import React from "react";
import { Logo, Menu } from "./HeaderComponents";
import "./Header.css";

function Header({ image, alt }) {
    return(
        <header className="App-header">
            <div className="App-header-wrapper">
                <Logo
                    image={image}
                    alt={alt}
                />
                <Menu />
            </div>
        </header>
    );
}

export default Header;