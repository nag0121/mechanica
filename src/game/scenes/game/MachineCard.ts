// core/machines/MachineCard.ts

import { Scene, GameObjects } from 'phaser';
import { Machine } from './Machine';

export type MachineFactory = (scene: Scene, x: number, y: number) => Machine;

export default class MachineCard extends GameObjects.Container {
  background: GameObjects.Rectangle;
  icon: GameObjects.Image;

  factory: MachineFactory;

  constructor(
    scene: Scene,
    x: number,
    y: number,
    texture: string,
    factory: MachineFactory
  ) {
    super(scene, x, y);

    scene.add.existing(this);

    this.factory = factory;

    this.background = scene.add.rectangle(0, 0, 120, 140, 0x222222);
    this.icon = scene.add.image(0, 0, texture).setScale(0.5);

    this.add([this.background, this.icon]);

    this.setSize(120, 140);
    this.setInteractive();

    this.on('pointerdown', () => {
      console.log('Machine selected:', texture);
      this.emit('machine-selected', this.factory);
    });
  }
}