import "./App.css";

import VideoList from "./components/VideoList";
import PrototypeVideoTile from "./components/PrototypeVideoTile";


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
