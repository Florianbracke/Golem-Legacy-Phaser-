import "./style.css";
import Phaser, { Physics, Scene } from "phaser";

const canvasSizes = {
	width: 500,
	height: 500,
};

const gravitySpeedDown = 300;

class GameScene extends Phaser.Scene {
	constructor() {
		super("scene-game");
	}
	preload() {
		this.load.image("bg", "/assets/bg.png");
	}
	create() {}
	update() {}
}

const config = {
	type: Phaser.WEBGL,
	width: canvasSizes.width,
	height: canvasSizes.height,
	canvas: gameCanvas,
	Physics: {
		default: "arcade",
		arcade: {
			gravity: { y: gravitySpeedDown },
			debug: true,
		},
	},
	scene: [GameScene],
};

const game = new Phaser.Game(config);
console.log(game);
