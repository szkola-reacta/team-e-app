import React from "react";

function Logo({ image, alt }) {
    return(
        <div className="header__logo__container">
            <img className="header__logo__img" src={image} alt={alt} />
            <h1 className="header__logo__text">MovieApp</h1>
        </div>
    );
}

export default Logo;