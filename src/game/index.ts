import Game from "./scenes/Game";

export const gameConfig: Phaser.Types.Core.GameConfig = {
  title: "GJB WORLD",
  render: {
    antialias: false,
  },
  type: Phaser.AUTO,
  // pixelArt: true,
  scene: [Game],
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
  audio: {
    disableWebAudio: true,
  },
};
