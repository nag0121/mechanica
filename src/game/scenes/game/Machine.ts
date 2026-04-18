// core/machines/Machine.ts

import { Scene, GameObjects } from 'phaser';

export type MachineConfig = {
  key: string;
  processingTime?: number;
};

export class Machine {
  scene: Scene;
  container: GameObjects.Container;
  sprite: GameObjects.Image;

  key: string;
  processingTime: number;

  constructor(scene: Scene, x: number, y: number, config: MachineConfig) {
    this.scene = scene;

    this.key = config.key;
    this.processingTime = config.processingTime ?? 1000;

    this.container = scene.add.container(x, y);

    this.sprite = scene.add.image(0, 0, this.key);
    this.container.add(this.sprite);
  }

  start() {
    // override in subclasses
  }

  update(dt: number) {
    // override if needed
  }

  destroy() {
    this.container.destroy();
  }
}