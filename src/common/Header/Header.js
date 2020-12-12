import React, { useState } from "react";
import { Logo, Menu } from "./HeaderComponents";

import "./Header.scss";
import logo from "../../Data/images/logo.png";

function Header() {
    const [opened, setOpened] = useState(false);

    const handleToggle = () => {
        setOpened(!opened);
    };

    const styles = {
        bar1: {
            transform: opened && "rotate(-45deg) translate(-9px, 6px)"
        },
        bar2: {
            opacity: opened && 0
        },
        bar3: {
            transform: opened && "rotate(45deg) translate(-8px, -8px)"
        }
    };

    return(
        <header className="header">
            <div className="header__wrapper">
                <Logo
                    image={logo}
                    alt="Logo MovieApp"
                />
                <Menu
                    opened={opened}
                    closeMenu={handleToggle}
                />
                <div className="header__hamburger" onClick={handleToggle}>
                    <div className="header__bar1" style={styles.bar1} ></div>
                    <div className="header__bar2" style={styles.bar2}></div>
                    <div className="header__bar3" style={styles.bar3}></div>
                </div>
            </div>
        </header>
    );
}

export default Header;