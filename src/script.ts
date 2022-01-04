import { IActor } from "./actors/actor";
import { Angel } from "./actors/angels";
import { Doctor } from "./actors/doctor";
import { Map } from "./actors/map";
import { FPSViewer } from "./actors/FPSViewer";

window.onload = () => {
    var canvas = document.getElementById("canvas") as HTMLCanvasElement;
	var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    let doctor = new Doctor({x: 40, y: 40}, "black");
    let map = new Map({x: 0, y: 0});

    let actors: Array<IActor> = [
        map,
        doctor,
        new Angel({x: 120, y: 360}, "gray"),
        new Angel({x: 560, y: 360}, "yellow"),
        new Angel({x: 800, y: 800}, "purple"),
        new Angel({x: 1120, y: 680}, "gray"),
    ];

    // setInterval(() => {
    //     actors.forEach(e => e.update());
    //     ctx.clearRect(0, 0, 1020, 1024);
    //     actors.forEach(e => { e.draw(ctx) });
    // }, 100)

    let lastFrame = 0;
	const render = (time: number) => {
		console.log(time);
		let delta = (time - lastFrame) / 1000;
		console.log(delta);
		lastFrame = time;
		actors.forEach((e) => e.update(delta));
		ctx.clearRect(0, 0, 1020, 1024);
		actors.forEach((e) => {
			ctx.save();
			e.draw(ctx, delta);
			ctx.restore();
		});
		window.requestAnimationFrame(render);
	};

	window.requestAnimationFrame(render);

    document.body.addEventListener("keydown", (e) => {
        actors.forEach((actor) => {
			if (actor.keyboard_event) {
				actor.keyboard_event(e.key);
			}
		});
        // ctx.clearRect(0, 0, 1020, 1024);
        // ctx.beginPath();
        // map.draw(ctx);
        // ctx.fillStyle = doctor.color;
        // ctx.fillRect(doctor.docPosition.x, doctor.docPosition.y, doctor.docSize, doctor.docSize);
        // ctx.fillStyle = angel.color;
        // ctx.fillRect(angel.newPosition.x, angel.newPosition.y, angel.angelSize, angel.angelSize);
    })
}