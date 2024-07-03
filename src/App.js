// import ReactPlayer from "react-player";
// import Webcam from "react-webcam";
// import demoVedio from "./assets/demoVedio.mp4";
// import "./App.css";

// function App() {
//   const videoConstraints = {
//     width: 4096,
//     height: 2160,
//     facingMode: "environment"
//   };
//   return (
//       <div className="webcam-container">
//         <Webcam className="webcam"  videoConstraints={videoConstraints}/>
//         <ReactPlayer
//           url={demoVedio}
//           playing={true}
//           loop={true}
//           controls={false}
//           className="react-player"
//           width={"20rem"}
//           height={"30rem"}
         
//         />
//     </div>
//   );
// }

// export default App;


import ReactPlayer from "react-player";
import Webcam from "react-webcam";
import demoVedio from "./assets/demoVedio.mp4";
import "./App.css";

function App() {
  const videoConstraints = {
    width: 4096,
    height: 2160,
    facingMode: "environment"
  };
  return (
    <div className="webcam-container">
      <Webcam className="webcam" videoConstraints={videoConstraints} />
      <ReactPlayer
        url={demoVedio}
        playing={true}
        loop={true}
        controls={false}
        className="react-player"
        width={"20rem"}
        height={"30rem"}
      />
    </div>
  );
}

export default App;
