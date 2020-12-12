import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import "./App.scss";

import Header from "./common/Header";
import {Greetings} from "./common/Greetings";
import VideoList from "./common/Containers/VideoList";
import Tile from "./common/Tile";
import database from "./Data/database.json";
import Page404 from  "./common/Page404";
import AddMoviePage from  "./features/AddMoviePage";

function App() {
    const [data, setData] = useState(database);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("MovieStorage")) === null) {
            setData(database);
        } else {
            setData(JSON.parse(localStorage.getItem("MovieStorage")));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("MovieStorage", JSON.stringify(data));
    }, [data]);

    const addMovieHandle = values => {
        setData([...data, values]);
    };

  return (
    <div className="App">
        <Router>
                <Header />
            <Switch>
                <Route path="/" exact>
                    <Greetings />
                </Route>
                <Route path="/videolist">
                    <VideoList>
                        {data.map(el => (
                            <Tile
                                key={`tile-${el.id}`}
                                title={el.title}
                                url={el.video_url}
                                description={el.description}
                            />
                        ))}
                    </VideoList>
                </Route>
                <Route path="/about">
                {/* AboutPage */}
                </Route>
                <Route path="/addmovie">
                    <AddMoviePage
                        addMovieHandle={addMovieHandle}
                    />
                </Route>

                <Route path="*">
                    <Page404 />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
