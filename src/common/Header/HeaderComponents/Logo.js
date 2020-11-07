import React from "react";

function Logo({ image, alt }) {
    return(
        <div className="App-header-logo-container">
            <img className="App-header-logo-img" src={image} alt={alt} />
            <h1 className="App-header-logo-text">MovieApp</h1>
        </div>
    );
}

export default Logo;