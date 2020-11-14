import React from "react";
import ReactPlayer from "react-player";
import "./style.scss";

export const Tile = ({ title, url, description }) => {

    const MAX_TEXT_LENGTH = 128;
    const MIN_TEXT_LENGTH = 64;

    const cutText = (description, header) => {
        if (description.length > MAX_TEXT_LENGTH) {
            return `${description.slice(0, MAX_TEXT_LENGTH)}...`;
        } else if (header && description.length > MIN_TEXT_LENGTH) {
            return `${description.slice(0, MIN_TEXT_LENGTH)}...`;
        }

        return description;
    };

    return (
        <div className="tileWrapper">
            <div className="tileWrapper__titleBox">
                <h2>{cutText(title, true)}</h2>
            </div>
            <ReactPlayer
                className="tileWrapper__player"
                url={url}
                width="100%"
                height="50%"
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