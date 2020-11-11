import React from "react";

function Logo({ image, alt }) {
    return(
        <div className="App__header__logo__container">
            <img className="App__header__logo__img" src={image} alt={alt} />
            <h1 className="App__header__logo__text">MovieApp</h1>
        </div>
    );
}

export default Logo;