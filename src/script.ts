import { IActor } from "./actors/actor"
import { Doctor } from "./actors/doctor"

window.onload = () => {
    var canvas = document.getElementById("canvas") as HTMLCanvasElement;
	var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    let doctor = new Doctor({x: 20, y: 20});

    let actors: Array<IActor> = [doctor];

    actors.forEach( (e) => e.draw(ctx));
    actors.forEach( (a) => a.initialize())

    document.body.addEventListener("keydown", (e) => {
        doctor.keyboard_event(e.key);
        ctx.clearRect(0, 0, 1020, 1024);
        ctx.beginPath();
        ctx.fillRect(doctor.docSpeed.x, doctor.docSpeed.y, doctor.docSize, doctor.docSize);
    })
}