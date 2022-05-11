import * as Phaser from "phaser";
import Preloader from "game/scenes/Preloader";
import Game from "./scenes/Game";

export const gameConfig: Phaser.Types.Core.GameConfig = {
  title: "Sample",
  render: {
    antialias: false,
  },
  type: Phaser.AUTO,
  // pixelArt: true,
  scene: [Preloader, Game],
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  parent: "phaser",
  backgroundColor: "white",
  autoFocus: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
};
