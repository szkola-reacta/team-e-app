import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import "./App.css";

import data from "./Data";
import Header from "./common/Header";
import {Greetings} from "./common/Greetings";
import VideoList from "./common/Containers/VideoList";
import Tile from "./common/Tile";
import database from "./Data/database.json";
import Page404 from  "./common/Page404";

function App() {
  return (
    <div className="App">
        <Router>
                {data.map(el => (
                    <Header
                        key={`logo-${el.id}`}
                        image={el.image}
                        alt={el.alt}
                    />
                ))}
            <Switch>
                <Route path="/" exact>
                    <Greetings />
                </Route>
                <Route path="/videolist">
                    <VideoList>
                        {database.map(el => (
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
                {/* AddMoviePage */}
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
