import { Actor, IActor } from "./actor";
//import doctorSprites from "../../public/img/doctor_sprites.png";
import { Map } from "./map";
import { skipPartiallyEmittedExpressions } from "typescript";

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
    constructor(initPosition: {x: number, y: number}) {
        super(initPosition = { x: 0, y: 0 });
        this.origin = {x: 40, y: 40};
        this.docSize = 40;
        this.docPosition = { x: this.origin.x, y: this.origin.y };
        this.doctorImg = new Image();
        //this.doctorImg.src = doctorSprites;
    }

    keyboard_event(key) {
        let map = new Map ({x: 130, y: 130});
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
        ctx.fillStyle = "black";
        ctx.fillRect(origin.x, origin.y, docSize, docSize);
        //ctx.drawImage(docImg, origin.x, origin.y, docSize, docSize, 2, 27, 8, 10);
    }
}