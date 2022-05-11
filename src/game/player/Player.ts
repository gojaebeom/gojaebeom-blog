import Phaser from "phaser";

export default class Player {
  player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  static SPEED = 300;

  constructor(private scene: Phaser.Scene) {}

  preload(): void {
    this.scene.load.spritesheet(
      "player",
      "assets/sprout-land/characters/Premium Charakter Spritesheet.png",
      {
        frameWidth: 48,
        frameHeight: 48,
      }
    );
  }

  create(): void {
    this.player = this.scene.physics.add.sprite(1000, 500, "player");
    this.player.setDepth(2);
    this.player.scale = 3;
    this.player.setBodySize(16, 16);
    this.createAnims();
    this.cursors = this.scene.input.keyboard.createCursorKeys();
  }

  createAnims(): void {
    this.scene.anims.create({
      key: "idle",
      frames: this.scene.anims.generateFrameNumbers("player", {
        start: 0,
        end: 7,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: "down",
      frames: this.scene.anims.generateFrameNumbers("player", {
        start: 32,
        end: 39,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: "up",
      frames: this.scene.anims.generateFrameNumbers("player", {
        start: 40,
        end: 47,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: "right",
      frames: this.scene.anims.generateFrameNumbers("player", {
        start: 48,
        end: 55,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: "left",
      frames: this.scene.anims.generateFrameNumbers("player", {
        start: 56,
        end: 63,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }

  update(): void {
    if (this.cursors?.up?.isDown && this.cursors?.left?.isDown) {
      this.player?.setVelocity(-Player.SPEED / 1.5, -Player.SPEED / 1.5);
      this.player?.anims.play("left", true);
    } else if (this.cursors?.up?.isDown && this.cursors?.right?.isDown) {
      this.player?.setVelocity(Player.SPEED / 1.5, -Player.SPEED / 1.5);
      this.player?.anims.play("right", true);
    } else if (this.cursors?.down?.isDown && this.cursors?.left?.isDown) {
      this.player?.setVelocity(-Player.SPEED / 1.5, Player.SPEED / 1.5);
      this.player?.anims.play("left", true);
    } else if (this.cursors?.down?.isDown && this.cursors?.right?.isDown) {
      this.player?.setVelocity(Player.SPEED / 1.5, Player.SPEED / 1.5);
      this.player?.anims.play("right", true);
    } else if (this.cursors?.down?.isDown) {
      this.player?.setVelocity(0, Player.SPEED);
      this.player?.anims.play("down", true);
    } else if (this.cursors?.up?.isDown) {
      this.player?.setVelocity(0, -Player.SPEED);
      this.player?.anims.play("up", true);
    } else if (this.cursors?.left?.isDown) {
      this.player?.setVelocity(-Player.SPEED, 0);
      this.player?.anims.play("left", true);
    } else if (this.cursors?.right?.isDown) {
      this.player?.setVelocity(Player.SPEED, 0);
      this.player?.anims.play("right", true);
    } else {
      this.player?.setVelocity(0);
      this.player?.anims.play("idle", true);
    }
  }
}
