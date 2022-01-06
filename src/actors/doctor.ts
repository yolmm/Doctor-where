import { Actor } from "./actor";
import { Map } from "./map";
import docRight from "../../public/img/doc-frames/doc-right.png";

export class Doctor extends Actor {
    docSize: number;
    docRightImg: HTMLImageElement;
    newDocPosition: { x: number, y: number };
    frameCount: number;
    constructor(initPosition: { x: number, y: number }) {
        super(initPosition);
        this.docSize = 40;
        this.newDocPosition = { x: initPosition.x, y: initPosition.y };
        this.docRightImg = new Image();
        this.docRightImg.src = docRight;
        this.frameCount = 0;
    }

    update() { };

    keyboard_event(key: string) {
        let map = new Map({ x: 0, y: 0 });
        let a: number, b: number;
        let docPosition = this.newDocPosition;
        let docSize = this.docSize;
        if (map.winning(this.newDocPosition.x / docSize, this.newDocPosition.y / docSize)) {
            window.alert("You won!");
            return;
        }
        switch (key) {
            case `ArrowRight`:
                docPosition = { x: (docPosition.x + docSize), y: docPosition.y };
                a = docPosition.x / docSize;
                b = docPosition.y / docSize;
                if (!map.isCollision(a, b)) {
                    this.newDocPosition.x += docSize;
                }
                break;
            case `ArrowLeft`:
                docPosition = { x: (docPosition.x - docSize), y: docPosition.y };
                a = docPosition.x / docSize;
                b = docPosition.y / docSize;
                if (!map.isCollision(a, b)) {
                    this.newDocPosition.x -= docSize;
                }
                break;
            case `ArrowDown`:
                docPosition = { x: docPosition.x, y: (docPosition.y + docSize) };
                a = docPosition.x / docSize;
                b = docPosition.y / docSize;
                if (!map.isCollision(a, b)) {
                    this.newDocPosition.y += docSize;
                }
                break;
            case `ArrowUp`:
                docPosition = { x: docPosition.x, y: (docPosition.y - docSize) };
                a = docPosition.x / docSize;
                b = docPosition.y / docSize;
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
        if (`ArrowRight`) {
            let docRightImg = this.docRightImg;
            const docRightFrames = [
                { src_origin: { x: 10, y: 0 }, size: { x: 40, y: 60 } },
                { src_origin: { x: 75, y: 0 }, size: { x: 40, y: 60 } },
                { src_origin: { x: 140, y: 0 }, size: { x: 40, y: 60 } },
                { src_origin: { x: 205, y: 0 }, size: { x: 40, y: 60 } },
                { src_origin: { x: 265, y: 0 }, size: { x: 40, y: 60 } },
                { src_origin: { x: 330, y: 0 }, size: { x: 40, y: 60 } },
                { src_origin: { x: 395, y: 0 }, size: { x: 40, y: 60 } },
                { src_origin: { x: 460, y: 0 }, size: { x: 40, y: 60 } },
                { src_origin: { x: 525, y: 0 }, size: { x: 40, y: 60 } },
            ]
            let i = Math.floor(this.frameCount * 10);
            let frame = docRightFrames[i % docRightFrames.length];
            ctx.drawImage(docRightImg, frame.src_origin.x, frame.src_origin.y, frame.size.x, frame.size.y, newDocPosition.x, newDocPosition.y, docSize, docSize);
            this.frameCount += delta;
        }

    }
}