import { gameConfig } from "game";
import { useEffect } from "react";

export default function useApp() {
  useEffect(() => {
    if (!document.querySelector("canvas")) {
      new Phaser.Game(gameConfig);
    }
  }, []);
}
