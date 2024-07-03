import ReactPlayer from "react-player";
import Webcam from "react-webcam";
import demoVedio from "./assets/demoVedio.mp4";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>WebCam POC</h1>
      <div className="webcam-container">
        <Webcam className="webcam" />
        <ReactPlayer
          url={demoVedio}
          playing={true} 
    loop={true} 
    controls={false}
          className="react-player"
          width={"30rem"}
          height={"30rem"}
        />
      </div>
    </div>
  );
}

export default App;
