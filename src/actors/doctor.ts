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
    docSize: number;
    docPosition: {x: number, y: number};
    doctorImg: HTMLImageElement;
    newDocPosition: {x: number, y: number};
    color: string;
    constructor(initPosition: {x: number, y: number}, color: string) {
        super(initPosition);
        this.docSize = 40;
        this.docPosition = {x: 40, y: 40};
        this.doctorImg = new Image();
        this.color = color;
        this.newDocPosition = {x: initPosition.x, y: initPosition.y};
        //this.doctorImg.src = doctorSprites;
    }

    update() {};

    keyboard_event(key) {
        let map = new Map ({x: 0, y: 0});
        let a: number, b: number;
        let newDocPosition = this.newDocPosition;
        let docPosition = this.docPosition;
        let docSize = this.docSize;
        switch (key) {
            case `ArrowRight`:
                newDocPosition = { x: (docPosition.x + docSize), y: docPosition.y };
                a = newDocPosition.x/docSize;
                b = newDocPosition.y/docSize;
                if (!map.isCollision(a, b)) {
                    docPosition.x += docSize;
                }
                break;
            case `ArrowLeft`:
                newDocPosition = { x: (docPosition.x - docSize), y: docPosition.y };
                a = newDocPosition.x/docSize;
                b = newDocPosition.y/docSize;
                if (!map.isCollision(a, b)) {
                    docPosition.x -= docSize;
                }
                break;
            case `ArrowDown`:
                newDocPosition = { x: docPosition.x, y: (docPosition.y + docSize) };
                a = newDocPosition.x/docSize;
                b = newDocPosition.y/docSize;
                if (!map.isCollision(a, b)) {
                    docPosition.y += docSize;
                }
                break;
            case `ArrowUp`:
                newDocPosition = { x: docPosition.x, y: (docPosition.y - docSize) };
                a = newDocPosition.x/docSize;
                b = newDocPosition.y/docSize;
                if (!map.isCollision(a, b)) {
                    docPosition.y -= docSize;
                }
                break;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
		let newDocPosition = this.newDocPosition;
		let docSize = this.docSize;
        //let docImg = this.doctorImg;
        ctx.fillStyle = this.color;
        ctx.fillRect(newDocPosition.x, newDocPosition.y, docSize, docSize);
        //ctx.drawImage(docImg, origin.x, origin.y, docSize, docSize, 2, 27, 8, 10);
    }
}