import "./App.css";
import Header from "./common/Header";
import data from "./Data";

import VideoList from "./common/Containers/VideoList";
import {Tile} from "./common/Tile";
import database from "./Data/database.json";

function App() {
  return (
    <div className="App">
        {data.map(el => (
            <Header
                key={`logo-${el.id}`}
                image={el.image}
                alt={el.alt}
            />
        ))}
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
    </div>
  );
}

export default App;
