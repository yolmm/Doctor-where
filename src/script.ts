import { IActor } from "./actors/actor"
import { Doctor } from "./actors/doctor"

window.onload = () => {
    var canvas = document.getElementById("canvas") as HTMLCanvasElement;
	var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    let doctor = new Doctor({x: 20, y: 20});

    let actors: Array<IActor> = [doctor];

    actors.forEach( (e) => e.draw(ctx));
}