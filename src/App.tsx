import { useEffect, useState } from "react";
import Phaser from "phaser";
import { gameConfig } from "game";

function App() {
  const [toggle, setToggle] = useState<boolean>();

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
      <button
        onClick={() => setToggle(!toggle)}
        className={`fixed flex items-center justify-center  transition-all bg-white shadow-xl bottom-10 right-10
        ${toggle ? "w-[300px] h-[500px] rounded-lg" : "w-20 h-20 rounded-full"}
        `}
      >
        블로그
      </button>
    </div>
  );
}

export default App;
