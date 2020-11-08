import "./App.css";
import Header from "./common/Header";
import data from "./Data";

import VideoList from "./common/Containers/VideoList";
import PrototypeVideoTile from "./common/Tile/PrototypeVideoTile";


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
            <PrototypeVideoTile />
            <PrototypeVideoTile />
            <PrototypeVideoTile />
            <PrototypeVideoTile />
            <PrototypeVideoTile />
            <PrototypeVideoTile />
            <PrototypeVideoTile />
            <PrototypeVideoTile />
            <PrototypeVideoTile />
            <PrototypeVideoTile />
        </VideoList>
    </div>
  );
}

export default App;
