import { useEffect } from "react";
import Phaser from "phaser";
import { gameConfig } from "game";

function App() {
  useEffect(() => {
    if (!document.querySelector("canvas")) {
      const game = new Phaser.Game(gameConfig);
    }
  }, []);

  return (
    <div className="App">
      {/* <header>
        <div className="w-full h-[40px] border-b fixed left-0 top-0">
          <figure className="text-2xl">놀러와요 재범이네</figure>
        </div>
      </header> */}
      <div id="phaser"></div>
    </div>
  );
}

export default App;
