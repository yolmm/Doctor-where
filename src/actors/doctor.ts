import { Actor, IActor } from "./actor";
//import doctorSprites from "../../public/img/doctor_sprites.png";
import { Map } from "./map";

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
    docPosition: {x: number, y: number};
    doctorImg: HTMLImageElement;
    color: string;
    constructor(initPosition: {x: number, y: number}, color: string) {
        super(initPosition);
        this.origin = {x: 40, y: 40};
        this.docSize = 40;
        this.docPosition = { x: this.origin.x, y: this.origin.y };
        this.doctorImg = new Image();
        this.color = color;
        //this.doctorImg.src = doctorSprites;
    }

    update() {};

    keyboard_event(key) {
        let map = new Map ({x: 0, y: 0});
        let newDocPosition: {x: number, y: number};
        let a: number, b: number;
        switch (key) {
            case `ArrowRight`:
                newDocPosition = { x: (this.docPosition.x + this.docSize), y: this.docPosition.y };
                a = newDocPosition.x/this.docSize;
                b = newDocPosition.y/this.docSize;
                if (!map.isCollision(a, b)) {
                    this.docPosition.x += this.docSize;
                }
                break;
            case `ArrowLeft`:
                newDocPosition = { x: (this.docPosition.x - this.docSize), y: this.docPosition.y };
                a = newDocPosition.x/this.docSize;
                b = newDocPosition.y/this.docSize;
                if (!map.isCollision(a, b)) {
                    this.docPosition.x -= this.docSize;
                }
                break;
            case `ArrowDown`:
                newDocPosition = { x: this.docPosition.x, y: (this.docPosition.y + this.docSize) };
                a = newDocPosition.x/this.docSize;
                b = newDocPosition.y/this.docSize;
                if (!map.isCollision(a, b)) {
                    this.docPosition.y += this.docSize;
                }
                break;
            case `ArrowUp`:
                newDocPosition = { x: this.docPosition.x, y: (this.docPosition.y - this.docSize) };
                a = newDocPosition.x/this.docSize;
                b = newDocPosition.y/this.docSize;
                if (!map.isCollision(a, b)) {
                    this.docPosition.y -= this.docSize;
                }
                break;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
		let origin = this.origin;
		let docSize = this.docSize;
        //let docImg = this.doctorImg;
        ctx.fillStyle = this.color;
        ctx.fillRect(origin.x, origin.y, docSize, docSize);
        //ctx.drawImage(docImg, origin.x, origin.y, docSize, docSize, 2, 27, 8, 10);
    }
}