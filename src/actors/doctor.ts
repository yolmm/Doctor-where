import { Actor } from "./actor";
import { Map } from "./map";
import doctorSprites from "../../public/img/doctor_sprites.png";

export class Doctor extends Actor{
    docSize: number;
    doctorImg: HTMLImageElement;
    newDocPosition: {x: number, y: number};
    constructor(initPosition: {x: number, y: number}) {
        super(initPosition);
        this.docSize = 40;
        this.newDocPosition = {x: initPosition.x, y: initPosition.y};
        this.doctorImg = new Image();
        this.doctorImg.src = doctorSprites;
    }

    update() {};

    keyboard_event(key: string) {
        let map = new Map ({x: 0, y: 0});
        let a: number, b: number;
        let docPosition = this.newDocPosition;
        let docSize = this.docSize;
        if (map.winning(this.newDocPosition.x/docSize, this.newDocPosition.y/docSize)) {
            window.alert("You won!");
            return;
        }
        switch (key) {
            case `ArrowRight`:
                docPosition = { x: (docPosition.x + docSize), y: docPosition.y };
                a = docPosition.x/docSize;
                b = docPosition.y/docSize;
                if (!map.isCollision(a, b)) {
                    this.newDocPosition.x += docSize;
                }
                break;
            case `ArrowLeft`:
                docPosition = { x: (docPosition.x - docSize), y: docPosition.y };
                a = docPosition.x/docSize;
                b = docPosition.y/docSize;
                if (!map.isCollision(a, b)) {
                    this.newDocPosition.x -= docSize;
                }
                break;
            case `ArrowDown`:
                docPosition = { x: docPosition.x, y: (docPosition.y + docSize) };
                a = docPosition.x/docSize;
                b = docPosition.y/docSize;
                if (!map.isCollision(a, b)) {
                    this.newDocPosition.y += docSize;
                }
                break;
            case `ArrowUp`:
                docPosition = { x: docPosition.x, y: (docPosition.y - docSize) };
                a = docPosition.x/docSize;
                b = docPosition.y/docSize;
                if (!map.isCollision(a, b)) {
                    this.newDocPosition.y -= docSize;
                }
                break;
        }
    }

    getPos() {
        return this.newDocPosition;
    }

    draw(ctx: CanvasRenderingContext2D, delta: number) {
        let docSize = this.docSize;
		let newDocPosition = this.newDocPosition;
        let docImg = this.doctorImg;
        ctx.drawImage(docImg, 5, 1225, 40, 60, newDocPosition.x, newDocPosition.y, docSize, docSize);
    }
}