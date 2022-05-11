import { useEffect, useState } from "react";
import { gameConfig } from "game";
import Phaser from "phaser";

function App() {
  const [toggle, setToggle] = useState<boolean>();

  useEffect(() => {
    if (!document.querySelector("canvas")) {
      new Phaser.Game(gameConfig);
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
      <div
        onClick={() => setToggle(!toggle)}
        className={`fixed flex items-center justify-center  transition-all bg-white shadow-xl bottom-10 right-10
        ${toggle ? "w-[300px] h-[500px] rounded-lg" : "w-20 h-20 rounded-full"}
        `}
      >
        블로그
      </div>
    </div>
  );
}

export default App;
