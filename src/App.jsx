import { useRef } from "react";
import "./App.scss";
import Lyrics from "./Lyrics";

const App = () => {
  const audioElement = useRef();

  const replay = () => {
    audioElement.current.currentTime = 0;
    audioElement.current.play();
    console.log("element",audioElement);
  };

  return (
    <div className="main">
      <div className="parent">
        <div className="musicPlayer">
          <div className="song">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/5/57/Something_Just_Like_This.png"
              alt=""
            />

            <div className="text">
              <h2>Something like this</h2>
              <span>coldplay.</span>
            </div>
          </div>
          <div className="audio">
            <audio
              controls
              src="./something1.mp3"
              className="sound"
              onPlay={(e) => console.log("music started:", e)}
              ref={audioElement}
            ></audio>
          </div>
          <div className="lyrics">
            <Lyrics audioElement={audioElement}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
