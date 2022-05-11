import { alien, cat } from "game/textures/sample";

class Game extends Phaser.Scene {
  static readonly TILE_SIZE = 48;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
  player: Phaser.Physics.Arcade.Sprite | undefined;
  cow?: Phaser.Physics.Arcade.Sprite;
  readonly SPEED: number = 400;

  constructor() {
    super("game");
  }

  create(): void {
    this.textures.generate("chick", { data: cat, pixelWidth: 6 });
    this.add.image(400, 200, "chick").setOrigin(0, 1).setDepth(10);

    this.textures.generate("alien", { data: alien, pixelWidth: 6 });
    const _alien = this.add.image(1200, 750, "alien");
    _alien.setOrigin(0, 1).setDepth(10);

    this.add.text(1190, 650, "HelloWorld!").setDepth(10);

    const map = this.make.tilemap({ key: "world" });

    map.addTilesetImage("Water", "water");
    map.addTilesetImage("Grass", "grass");
    map.addTilesetImage("Dirt", "dirt");
    map.addTilesetImage("Hills", "hill");
    map.addTilesetImage("object1", "object");
    map.addTilesetImage("WoodenHouse", "house");
    map.addTilesetImage("Basic Furniture", "furniture");
    map.addTilesetImage("Basic Plants", "plant");
    map.addTilesetImage("Paths", "paths");

    const layer0 = map.createLayer(0, "Dirt", 0, 0);
    layer0.setDepth(1).scale = 3;

    const layer1 = map.createLayer(1, "Water", 0, 0);
    layer1.setDepth(2);
    layer1.scale = 3;

    const layer2 = map.createLayer(2, "Grass", 0, 0);
    layer2.setDepth(3);
    layer2.scale = 3;

    const layer3 = map.createLayer(3, "Hills", 0, 0);
    layer3.setDepth(4);
    layer3.scale = 3;

    const layer4 = map.createLayer(
      4,
      ["object1", "Dirt", "Paths", "WoodenHouse"],
      0,
      0
    );
    layer4.setDepth(5);
    layer4.scale = 3;

    const layer5 = map.createLayer(
      5,
      ["object1", "Basic Furniture", "Basic Plants"],
      0,
      0
    );
    layer5.setDepth(6);
    layer5.scale = 3;

    // const debugGraphics = this.add.graphics().setAlpha(0.75);
    // layer3.renderDebug(debugGraphics);

    this.player = this.physics.add.sprite(1000, 500, "player");
    this.player.setOrigin(0, 0);
    // this.player.setDisplaySize(48, 48);
    this.player.setBodySize(16, 16);
    this.player.setDepth(10);
    this.player.scale = 3;
    this.player.setOrigin(0.5);

    this.cameras.main.setBounds(
      0,
      1,
      map.widthInPixels * 3,
      map.heightInPixels * 3
    );
    this.cameras.main.startFollow(this.player);
    this.cameras.main.roundPixels = true;

    layer0.setCollisionBetween(133, 133);
    this.physics.add.collider(this.player, layer0);

    const cow1 = this.physics.add.sprite(600, 500, "cow");
    cow1.setDepth(10);
    cow1.scale = 3;
    cow1.setBodySize(32, 32);
    this.cow = cow1;

    this.physics.add.collider(this.cow, layer0);
    this.physics.add.collider(this.player, _alien);

    this.anims.create({
      key: "default",
      frames: this.anims.generateFrameNumbers("cow", {
        start: 0,
        end: 4,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "cow_idle",
      frames: this.anims.generateFrameNumbers("cow", {
        start: 0,
        end: 0,
      }),
    });

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

    // console.debug(time);

    if (time % 8 == 0) {
      this.cow?.anims.play("default", true);

      const randomNumber0between3 = Math.floor(Math.random() * 4);
      switch (randomNumber0between3) {
        case 0:
          this.cow?.setVelocity(-this.SPEED / 3, 0);
          break;
        case 1:
          this.cow?.setVelocity(this.SPEED / 3, 0);
          break;
        case 2:
          this.cow?.setVelocity(0, -this.SPEED / 3);
          break;
        case 3:
          this.cow?.setVelocity(0, this.SPEED / 3);
          break;
      }
    } else {
      // this.cow?.anims.play("cow_idle", true);
      // this.cow?.setVelocity(0, 0);
    }
  }
}

export default Game;
