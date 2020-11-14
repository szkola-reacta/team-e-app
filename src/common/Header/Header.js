import React, { useState } from "react";
import { Logo, Menu } from "./HeaderComponents";
import "./Header.scss";

function Header({ image, alt }) {
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
        <header className="App__header">
            <div className="App__header__wrapper">
                <Logo
                    image={image}
                    alt={alt}
                />
                <Menu opened={opened} />
                <div className="App__header__hamburger" onClick={handleToggle}>
                    <div className="App__header__hamburger__bar1" style={styles.bar1} ></div>
                    <div className="App__header__hamburger__bar2" style={styles.bar2}></div>
                    <div className="App__header__hamburger__bar3" style={styles.bar3}></div>
                </div>
            </div>
        </header>
    );
}

export default Header;