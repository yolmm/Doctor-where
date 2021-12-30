import { Actor, IActor } from "./actor";
import doctorSprites from "../../public/img/doctor_sprites.png";

type docSpeed = {
    x: number,
    y: number
};

type position = {
    x: number;
    y: number;
}

export class Doctor extends Actor implements IActor{
    origin: {x: number, y: number};
    docSize: number;
	maxSpeed: number;
    docSpeed: {x: number, y: number};
    doctorImg: HTMLImageElement;
    constructor(initPosition: {x: number, y: number}) {
        super(initPosition = { x: 0, y: 0 });
        this.origin = {x: 20, y: 20};
        this.docSize = 40;
        this.maxSpeed = 0;
        this.docSpeed = { x: this.origin.x, y: this.origin.y };
        this.doctorImg = new Image();
        this.doctorImg.src = doctorSprites;
    }

    keyboard_event(key) {
        switch (key) {
            case `ArrowRight`:
                this.docSpeed.x += 1.5;
                break;
            case `ArrowLeft`:
                this.docSpeed.x -= 1.5;
                break;
            case `ArrowUp`:
                this.docSpeed.y -= 1.5;
                break;
            case `ArrowDown`:
                this.docSpeed.y += 1.5;
                break;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
		let origin = this.origin;
		let docSize = this.docSize;
        let docImg = this.doctorImg;
        ctx.fillStyle = "blue";
        ctx.fillRect(origin.x, origin.y, docSize, docSize);
        ctx.drawImage(docImg, origin.x, origin.y, docSize, docSize, 2, 27, 8, 10);
    }
}