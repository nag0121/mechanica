import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.image('background', 'assets/bg.png');
    }

    create ()
    {
        this.scene.start('Preloader');

        // window.addEventListener('resize', this.handleResize.bind(this));
        // window.addEventListener('orientationchange', this.handleResize.bind(this));

        // this.handleResize();

    }

    handleResize() {
        setTimeout(() => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            console.log(" -----> ", width, height);
            this.game.scale.resize(width, height);
        }, 100); // 100–200ms is the sweet spot
    }

}
