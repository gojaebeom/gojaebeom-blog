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
    this.load.image("dirt", "assets/world/Dirt.png");
    this.load.image("object", "assets/world/object1.png");
    this.load.tilemapTiledJSON("world", "assets/world/world2.json");

    this.load.spritesheet("player", "assets/characters/banny_default.png", {
      frameWidth: 48,
      frameHeight: 48,
    });
  }

  create(): void {
    const map = this.make.tilemap({ key: "world" });

    map.addTilesetImage("Water", "water");
    map.addTilesetImage("Grass", "grass");
    map.addTilesetImage("Dirt", "dirt");
    const layer1 = map.createLayer(0, "Water", 0, 0);
    layer1.setDepth(1).scale = 3;

    const layer2 = map.createLayer(1, "Grass", 0, 0);
    layer2.setDepth(2);
    layer2.scale = 3;

    const layer3 = map.createLayer(2, "Water", 0, 0);
    layer3.setDepth(0);
    layer3.scale = 3;

    layer3.setCollisionBetween(0, 2);
    const debugGraphics = this.add.graphics().setAlpha(0.75);
    layer3.renderDebug(debugGraphics);

    this.player = this.physics.add.sprite(100, 100, "player");
    this.player.setOrigin(0, 0);
    this.player.setDisplaySize(48, 48);
    this.player.setBodySize(16, 16);
    this.player.setDepth(3);
    this.player.scale = 3;

    this.cameras.main.setBounds(
      0,
      1,
      map.widthInPixels * 3,
      map.heightInPixels * 3
    );
    this.cameras.main.startFollow(this.player);
    // this.cameras.main.roundPixels = true;

    this.physics.add.collider(this.player, layer3);

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
  width: window.innerWidth,
  height: window.innerHeight,
  // scale: {
  //   // autoCenter: Phaser.Scale.CENTER_BOTH,
  //   // mode: Phaser.Scale.FIT,
  //   // zoom: 4,
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
