import Phaser from "phaser";
import BootScene from "./scenes/boot-scene";

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: [BootScene],
};

const game = new Phaser.Game(config);
