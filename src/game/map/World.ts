import Phaser from "phaser";

export default class World {
  map!: Phaser.Tilemaps.Tilemap;
  colliderLayer!:Phaser.Tilemaps.TilemapLayer;
  constructor(private scene: Phaser.Scene) {}

  preload():void {
    // Map Assets
    this.scene.load.image("water", "assets/sprout-land/tilesets/Water.png");
    this.scene.load.image("grass", "assets/sprout-land/tilesets/Grass.png");
    this.scene.load.image("dirt", "assets/sprout-land/tilesets/Tilled Dirt.png");
    this.scene.load.image("home", "assets/sprout-land/tilesets/Building parts/home.png");
    this.scene.load.image("path", "assets/sprout-land/tilesets/Building parts/Paths.png");
    this.scene.load.image("mfs", "assets/sprout-land/objects/Mushrooms, Flowers, Stones.png");
    this.scene.load.image("tree", "assets/sprout-land/objects/Trees, stumps and bushes.png");
    this.scene.load.image("water-obj", "assets/sprout-land/objects/Water Objects.png");
    this.scene.load.tilemapTiledJSON("world", "assets/sprout-land/world.json");
  }

  create(): void {
    this.map = this.scene.make.tilemap({ key: "world" });
    this.map.addTilesetImage("Water", "water");
    this.map.addTilesetImage("Grass", "grass");
    this.map.addTilesetImage("Tilled Dirt", "dirt");
    this.map.addTilesetImage("Paths", "path");
    this.map.addTilesetImage("home", "home");
    this.map.addTilesetImage("Trees, stumps and bushes", "tree");
    this.map.addTilesetImage("Mushrooms, Flowers, Stones", "mfs");
    this.map.addTilesetImage("Water Objects", "water-obj");
    this.colliderLayer = this.map.createLayer(0, "Tilled Dirt", 0, 0);
    this.colliderLayer.setDepth(1).scale = 3;
    this.colliderLayer.setCollisionBetween(245, 245);
    const waterLayer = this.map.createLayer(1, "Water", 0, 0);
    waterLayer.setDepth(1).scale = 3;
    const grassLayer = this.map.createLayer(2, "Grass", 0, 0);
    grassLayer.setDepth(1).scale = 3;
    const dirtLayer = this.map.createLayer(3, "Tilled Dirt", 0, 0);
    dirtLayer.setDepth(1).scale = 3;
    const pathLayer = this.map.createLayer(4, "Paths", 0, 0);
    pathLayer.setDepth(1).scale = 3;
    const homeLayer = this.map.createLayer(5, "home", 0, 0);
    homeLayer.setDepth(1).scale = 3;
    const objectLayer1 = this.map.createLayer(6, ["Trees, stumps and bushes","Mushrooms, Flowers, Stones","Water Objects"], 0, 0);
    objectLayer1.setDepth(1).scale = 3;
    const objectLayer2 = this.map.createLayer(7, ["Trees, stumps and bushes"], 0, 0);
    objectLayer2.setDepth(3).scale = 3;
  }
}
