import Phaser from "phaser";

export default class Entity extends Phaser.Physics.Arcade.Sprite {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string | Phaser.Textures.Texture,
    frames: string | number | undefined
  ) {
    super(scene, x, y, texture, frames);
  }
}
