import { IActor } from "./actors/actor";
import { Doctor } from "./actors/doctor";
import { Map } from "./actors/map";

window.onload = () => {
    var canvas = document.getElementById("canvas") as HTMLCanvasElement;
	var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    let doctor = new Doctor({x: 40, y: 40});
    let map = new Map({x: 130, y: 130})

    let actors: Array<IActor> = [map, doctor];

    actors.forEach( (e) => e.draw(ctx));

    document.body.addEventListener("keydown", (e) => {
        doctor.keyboard_event(e.key);
        ctx.clearRect(0, 0, 1020, 1024);
        ctx.beginPath();
        map.draw(ctx);
        ctx.fillStyle = "blue";
        ctx.fillRect(doctor.docPosition.x, doctor.docPosition.y, doctor.docSize, doctor.docSize);
    })
}