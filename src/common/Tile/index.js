import React from "react";
import ReactPlayer from "react-player";
import "./style.css";

export const Tile = ({ title, url, description }) => {

    const MAX_TEXT_LENGTH = 25;

    const cutText = (description) => {
        if (description.length > MAX_TEXT_LENGTH) {
            return `${description.slice(0, MAX_TEXT_LENGTH)}...`;
        }
        return description;
    };

    return (
        <div className="tileWrapper">
            <h2>{title}</h2>
            <ReactPlayer
                className="tileWrapper__player"
                url={url}
                width={400}//changed to number - Kamil
                height={400}//changed to number - Kamil
                controls
                light
            />

            <div className="tileWrapper__descriptionBox">
                <span>{cutText(description)}</span>
                <button className="tileWrapper__button">Show more</button>
            </div>
        </div>
    );
};
