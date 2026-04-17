import { TPosition } from "../../../core/Types";
import { GameObjects, Scene } from 'phaser';

export class MachineContainer extends GameObjects.Container {

    background: GameObjects.Image;

    constructor(scene : Scene, pos : TPosition) {
        super(scene, pos.x, pos.y);

        const {width, height} = this.scene.scale;
        const bgheight = height * 0.2;
        this.setDisplaySize(width, bgheight);
        this.background = this.scene.add.image(width * 0.5, height - (bgheight * 0.5), 'background');
        this.background.setDisplaySize(width, height * 0.2);
        
    }

    loadMachines() {

    }
}