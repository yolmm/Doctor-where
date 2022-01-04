import { IActor } from "./actors/actor";
import { Angel } from "./actors/angels";
import { Doctor } from "./actors/doctor";
import { Map } from "./actors/map";

window.onload = () => {
    var canvas = document.getElementById("canvas") as HTMLCanvasElement;
	var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    let doctor = new Doctor({x: 40, y: 40}, "black");
    let map = new Map({x: 130, y: 130});
    let angel1 = new Angel({x: 120, y: 360}, "gray");
    let angel2 = new Angel({x: 800, y: 360}, "gray");
    let angel3 = new Angel({x: 800, y: 800}, "gray");
    let angel4 = new Angel({x: 1120, y: 680}, "gray");

    let actors: Array<IActor> = [map, doctor, angel1, angel2, angel3, angel4];

    setInterval(() => {
        actors.forEach(e => e.update());
        ctx.clearRect(0, 0, 1020, 1024);
        actors.forEach(e => { e.draw(ctx) });
    }, 100)

    document.body.addEventListener("keydown", (e) => {
        doctor.keyboard_event(e.key);
        angel1.keyboard_event(e.key);
        angel2.keyboard_event(e.key);
        angel3.keyboard_event(e.key);
        angel4.keyboard_event(e.key);
        // ctx.clearRect(0, 0, 1020, 1024);
        // ctx.beginPath();
        // map.draw(ctx);
        // ctx.fillStyle = doctor.color;
        // ctx.fillRect(doctor.docPosition.x, doctor.docPosition.y, doctor.docSize, doctor.docSize);
        // ctx.fillStyle = angel.color;
        // ctx.fillRect(angel.newPosition.x, angel.newPosition.y, angel.angelSize, angel.angelSize);
    })
}