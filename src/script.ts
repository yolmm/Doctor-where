import { IActor } from "./actors/actor";
import { Angel } from "./actors/angels";
import { Doctor } from "./actors/doctor";
import { Map } from "./actors/map";
import { FPSViewer } from "./actors/FPSViewer";
import { Tardis } from "./actors/tardis";
import { Tool } from "./actors/doctools";

window.onload = () => {
    var canvas = document.getElementById("canvas") as HTMLCanvasElement;
	var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    let doctor = new Doctor({x: 40, y: 40});
    let map = new Map({x: 0, y: 0});
    let fps = new FPSViewer ({x: 10, y: 20});
    let tardis = new Tardis ({x: 960, y: 920});
    let screwdriver = new Tool({x: 400, y: 160}, "screwdriver");
    let banana = new Tool({x: 240, y: 320}, "banana");
    let spoon = new Tool({x: 520, y: 560}, "spoon");

    let actors: Array<IActor> = [
        map,
        fps,
        doctor,
        tardis,
        screwdriver,
        banana,
        spoon,
        new Angel({x: 120, y: 360}),
        new Angel({x: 480, y: 240}),
        new Angel({x: 200, y: 880}),
        new Angel({x: 800, y: 240}),
        new Angel({x: 560, y: 800}),
        new Angel({x: 880, y: 680}),
    ];

    const trapped = () => {
        if ((screwdriver.getPos().y == 0) && (banana.getPos().y == 0) && (spoon.getPos().y == 0)){
            return false;
        } else {
            for (let i = 0; i < actors.length; i++) {
                if (actors[i] instanceof Angel) {
                    if ((actors[i].getPos().x == doctor.getPos().x) && (actors[i].getPos().y == doctor.getPos().y)) {
                        return true;
                    }
                }
            }
        }
    }

    const getTools = () => {
        if ((screwdriver.getPos().x == doctor.getPos().x) && (screwdriver.getPos().y == doctor.getPos().y)) {
            screwdriver = new Tool({x: 120, y: 0}, "screwdriver");
            return actors[4] = screwdriver;
        }
        if ((banana.getPos().x == doctor.getPos().x) && (banana.getPos().y == doctor.getPos().y)) {
            banana = new Tool({x: 160, y: 0}, "banana");
            return actors[5] = banana;
        }
        if ((spoon.getPos().x == doctor.getPos().x) && (spoon.getPos().y == doctor.getPos().y)) {
            spoon = new Tool({x: 200, y: 0}, "spoon");
            return actors[6] = spoon;
        }
    }

    const winning = async () => {
        if ((doctor.getPos().x == tardis.origin.x) && (doctor.getPos().y == (tardis.origin.y + 40))) {
            const index = actors.indexOf(doctor);
            if (index > -1) {
                actors.splice(index, 1);
                for (let i = 0; i < tardis.tardisEndImg.length; i++) {
                    tardis.setImg(tardis.tardisEndImg[i]);
                    tardis.draw(ctx);
                    await new Promise (e => setTimeout(e, 500));
                }
            }
        }
    }

    let lastFrame = 0;
	const render = (time: number) => {
		let delta = (time - lastFrame) / 1000;
        lastFrame = time;
		actors.forEach((e) => e.update(delta));
		ctx.clearRect(0, 0, 1020, 1024);
		actors.forEach((e) => {
			ctx.save();
			e.draw(ctx, delta);
			ctx.restore();
		});
        getTools();
        if (trapped()) {
            doctor = new Doctor({x: 40, y: 40});
            actors[2] = doctor;
        }
        winning();
		window.requestAnimationFrame(render);
	};

	window.requestAnimationFrame(render);

    document.body.addEventListener("keydown", (e) => {
        actors.forEach((actor) => {
			if (actor.keyboard_event) {
				actor.keyboard_event(e.key);
			}
		});
    })
}