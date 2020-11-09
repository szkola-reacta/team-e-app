import React from "react";
import "./style.css";
import Img404 from "./Page404.png";

function Page404() {
    return(
        <img className="page404__img" src={Img404} alt="Error 404 info page" />
    );
}

export default Page404;