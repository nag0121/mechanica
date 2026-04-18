import { Scene, GameObjects } from 'phaser';
import { Machine } from './Machine';
import MachineCard from './MachineCard';

type MachineFactory = (scene: Scene, x: number, y: number) => Machine;

type MachineDefinition = {
  id: string;
  icon: string;
  factory: MachineFactory;
};

export default class MachinesContainer extends GameObjects.Container {

  cards: MachineCard[] = [];
  activeMachines: Machine[] = [];

  machineDefs: MachineDefinition[] = [];

  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y);
    scene.add.existing(this);

    this.registerMachines();
    this.createCards();
    this.layoutHorizontal();
  }

  // 🔥 ALL MACHINES DEFINED HERE
  registerMachines() {

    this.machineDefs = [

      {
        id: 'farm',
        icon: 'farm_icon',
        factory: (scene, x, y) => {
          const m = new Machine(scene, x, y, { key: 'farm_machine' });

          m.start = () => {
            scene.time.addEvent({
              delay: 1000,
              loop: true,
              callback: () => {
                console.log('🌾 Farming...');
              }
            });
          };

          return m;
        }
      },

      {
        id: 'crusher',
        icon: 'crusher_icon',
        factory: (scene, x, y) => {
          const m = new Machine(scene, x, y, { key: 'crusher_machine' });

          m.start = () => {
            scene.tweens.add({
              targets: m.sprite,
              angle: 360,
              duration: 800,
              repeat: -1
            });
          };

          return m;
        }
      }

    ];
  }

  // 🎴 Create UI cards from definitions
  createCards() {

    this.machineDefs.forEach((def, index) => {

      const card = new MachineCard(
        this.scene,
        0,
        0,
        def.icon,
        def.factory
      );

      card.on('machine-selected', (factory: MachineFactory) => {
        this.spawnMachine(factory);
      });

      this.cards.push(card);
      this.add(card);
    });
  }

  // 🏗️ Spawn machine
  spawnMachine(factory: MachineFactory) {

    const x = this.scene.scale.width * 0.5;
    const y = this.scene.scale.height * 0.5;

    const machine = factory(this.scene, x, y);

    machine.start();

    this.activeMachines.push(machine);
  }

  // 📐 Layout cards
  layoutHorizontal(padding = 20) {
    let offsetX = 0;

    this.cards.forEach(card => {
      card.setPosition(offsetX, 0);
      offsetX += card.width + padding;
    });
  }
}