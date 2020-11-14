import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Img404 from "./Page404.png";

function Page404() {
    return(
        <div>
            <img className="page404__img" src={Img404} alt="Error 404 info page" />
            <Link to="/">
                <button className="page404__button">Back to main page</button>
            </Link>
        </div>
    );
}

export default Page404;