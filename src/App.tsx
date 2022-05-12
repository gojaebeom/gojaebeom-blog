import { useEffect, useState } from "react";
import { gameConfig } from "game";
import Phaser from "phaser";
import { CategoryBox, Modal } from "components";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "utils/firebaseInit";
import { useDispatch } from "react-redux";
import { setFiles } from "store/modules/markdown";

function App() {
  const [toggle, setToggle] = useState<boolean>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!document.querySelector("canvas")) {
      new Phaser.Game(gameConfig);
    }
  }, []);

  return (
    <div className="App font-ng">
      <div id="phaser" className="fixed top-0 left-0 w-full h-full"></div>
      <CategoryBox />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
