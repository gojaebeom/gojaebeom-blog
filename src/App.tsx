import { useEffect } from "react";
import Phaser from "phaser";
import { gameConfig } from "game/main";

function App() {
  useEffect(() => {
    if (!document.querySelector("canvas")) {
      new Phaser.Game(gameConfig);
    }
  }, []);

  return (
    <div className="App">
      <header>
        <div className="w-full h-[40px] border-b">헤더</div>
      </header>
      <div id="phaser"></div>
    </div>
  );
}

export default App;
