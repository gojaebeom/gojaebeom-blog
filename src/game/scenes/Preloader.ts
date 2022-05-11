class Preloader extends Phaser.Scene {
  constructor() {
    super("bootstrap");
  }

  preload(): void {
    // 배경
    this.load.image("water", "assets/world/Water.png");
    this.load.image("grass", "assets/world/Grass.png");
    this.load.image("hill", "assets/world/Hills.png");
    this.load.image("dirt", "assets/world/Dirt.png");
    this.load.image("object", "assets/Objects/object1.png");
    this.load.image("furniture", "assets/Objects/Basic Furniture.png");
    this.load.image("plant", "assets/Objects/Basic Plants.png");
    this.load.image("paths", "assets/Objects/Paths.png");
    this.load.image("house", "assets/world/WoodenHouse.png");
    this.load.tilemapTiledJSON("world", "assets/world/world2.json");

    this.load.spritesheet("player", "assets/characters/banny_default.png", {
      frameWidth: 48,
      frameHeight: 48,
    });

    this.load.spritesheet("cow", "assets/characters/cow.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  create(): void {
    this.scene.start("game");
  }
}

export default Preloader;
