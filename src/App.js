import "./App.css";

import VideoList from "./common/Containers/VideoList";
import PrototypeVideoTile from "./common/Tile/PrototypeVideoTile";


function App() {
  return (
    <div className="App">
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
