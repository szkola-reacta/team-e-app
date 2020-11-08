import React from "react";
import "./VideoList.scss";

function VideoList({children}) {
    return (
        <section className="VideoList">
            <h2 className="VideoList__header">
                Our Video List
            </h2>
            <div className="VideoList__grid">
                {children}
            </div>
        </section>
    );
}

export default VideoList;
