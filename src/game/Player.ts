import Phaser from "phaser";

export class Player extends Phaser.Scene {
  constructor() {
    super("player");
  }

  preload(): void {
    this.load.spritesheet("player", "assets/characters/banny_default.png", {
      frameWidth: 48,
      frameHeight: 48,
    });
  }

  create(): void {
    const playerSprite = this.add.sprite(100, 100, "player");
    playerSprite.setDepth(2).scale = 3;
    this.cameras.main.startFollow(playerSprite);
    this.cameras.main.roundPixels = true;
  }
}
