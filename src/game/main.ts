import * as Phaser from "phaser";
import { cursorTo } from "readline";
import { Player } from "./Player";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  key: "Game",
  active: false,
  visible: false,
};

const CANVAS_WIDTH = 720;
const CANVAS_HEIGHT = 528;

export class GameScene extends Phaser.Scene {
  static readonly TILE_SIZE = 48;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
  player: Phaser.Physics.Arcade.Sprite | undefined;
  readonly SPEED: number = 400;

  constructor() {
    super(sceneConfig);
  }

  preload(): void {
    this.load.image("water", "assets/world/Water.png");
    this.load.image("grass", "assets/world/Grass.png");
    this.load.tilemapTiledJSON("world", "assets/world/world.json");

    this.load.spritesheet("player", "assets/characters/banny_default.png", {
      frameWidth: 48,
      frameHeight: 48,
    });
  }

  create(): void {
    const worldTilemap = this.make.tilemap({ key: "world" });
    worldTilemap.addTilesetImage("Water", "water");
    worldTilemap.addTilesetImage("Grass", "grass");
    worldTilemap.createLayer(0, "Water").setDepth(0).scale = 3;
    worldTilemap.createLayer(1, "Grass").setDepth(1).scale = 3;

    this.player = this.physics.add.sprite(100, 100, "player");
    this.player.setOrigin(0, 0);
    this.player.setDisplaySize(48, 48);
    this.player.setBodySize(16, 16);
    this.player.setDepth(2).scale = 3;
    this.cameras.main.startFollow(this.player);
    this.cameras.main.roundPixels = true;

    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("player", {
        start: 1,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("player", {
        start: 4,
        end: 7,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("player", {
        start: 8,
        end: 11,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("player", {
        start: 12,
        end: 15,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("player", {
        start: 0,
        end: 1,
      }),
      frameRate: 2,
      repeat: -1,
    });

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update(time: number, delta: number): void {
    if (this.cursors?.up?.isDown && this.cursors?.left?.isDown) {
      this.player?.setVelocity(-this.SPEED / 2, -this.SPEED / 2);
      this.player?.anims.play("left", true);
    } else if (this.cursors?.up?.isDown && this.cursors?.right?.isDown) {
      this.player?.setVelocity(this.SPEED / 2, -this.SPEED / 2);
      this.player?.anims.play("right", true);
    } else if (this.cursors?.down?.isDown && this.cursors?.left?.isDown) {
      this.player?.setVelocity(-this.SPEED / 2, this.SPEED / 2);
      this.player?.anims.play("left", true);
    } else if (this.cursors?.down?.isDown && this.cursors?.right?.isDown) {
      this.player?.setVelocity(this.SPEED / 2, this.SPEED / 2);
      this.player?.anims.play("right", true);
    } else if (this.cursors?.down?.isDown) {
      this.player?.setVelocity(0, this.SPEED);
      this.player?.anims.play("down", true);
    } else if (this.cursors?.up?.isDown) {
      this.player?.setVelocity(0, -this.SPEED);
      this.player?.anims.play("up", true);
    } else if (this.cursors?.left?.isDown) {
      this.player?.setVelocity(-this.SPEED, 0);
      this.player?.anims.play("left", true);
    } else if (this.cursors?.right?.isDown) {
      this.player?.setVelocity(this.SPEED, 0);
      this.player?.anims.play("right", true);
    } else {
      this.player?.setVelocity(0);
      this.player?.anims.play("idle", true);
    }
  }
}

export const gameConfig: Phaser.Types.Core.GameConfig = {
  title: "Sample",
  render: {
    antialias: false,
  },
  type: Phaser.AUTO,
  scene: [GameScene],
  // scale: {
  //   autoCenter: Phaser.Scale.CENTER_BOTH,
  //   mode: Phaser.Scale.FIT,
  // },
  parent: "phaser",
  backgroundColor: "white",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
};
