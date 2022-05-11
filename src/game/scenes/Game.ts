import World from "game/map/World";
import Player from "game/player/Player";
import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  private world!: World;
  private player!: Player;

  constructor() {
    super("game");
    this.world = new World(this);
    this.player = new Player(this);
  }

  preload(): void {
    this.world.preload();
    this.player.preload();
    this.load.audio("bgm", "assets/audio/bgm.mp3");
  }

  create(): void {
    this.world.create();
    this.player.create();

    this.cameras.main.setBounds(
      0,
      1,
      this.world.map.widthInPixels * 3,
      this.world.map.heightInPixels * 3
    );
    this.cameras.main.startFollow(this.player.player);
    this.cameras.main.roundPixels = true;

    this.physics.add.collider(this.player.player, this.world.colliderLayer);
  }

  update(time: number, delta: number): void {
    this.player.update();
  }
}
