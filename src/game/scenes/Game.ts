import { Scene } from 'phaser';
import MachinesContainer from './game/MachinesContainer';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        const {width, height} = this.game.scale;

        const containerHeight = height * 0.2;
        const machineContainer = new MachinesContainer(this, width * 0.5, height - (containerHeight * 0.5));
        this.add.existing(machineContainer);

        // this.input.once('pointerdown', () => {

        //     this.scene.start('GameOver');

        // });
    }
}
