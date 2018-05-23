import Phaser from "phaser";

class BootScene extends Phaser.Scene {
	constructor() {
		super({
			key: "BootScene",
		});
	}

	preload() {
		this.load.setBaseURL("http://labs.phaser.io");

		this.load.image("undersea", "assets/ui/undersea-bg.png");
		this.load.image("logo", "assets/sprites/phaser3-logo.png");
		this.load.image("bubble", "assets/particles/bubble.png");
	}

	create() {
		this.add.image(400, 300, "undersea");

		const particles = this.add.particles("bubble");

		const emitter = particles.createEmitter({
			speed: 100,
			scale: { start: 1, end: 0 },
			blendMode: "ADD",
		});

		const logo = this.physics.add.image(400, 100, "logo");

		logo.setVelocity(100, 200);
		logo.setBounce(1, 1);
		logo.setCollideWorldBounds(true);

		emitter.startFollow(logo);
	}
}

export default BootScene;
