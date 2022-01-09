import { Actor } from "./actor";
import { Map } from "./map";
import docRight from "../../public/img/doc-frames/doc-right.png";
import docLeft from "../../public/img/doc-frames/doc-left.png";
import docUp from "../../public/img/doc-frames/doc-up.png";
import docDown from "../../public/img/doc-frames/doc-down.png";

export class Doctor extends Actor {
    docSize: number;
    newDocPosition: { x: number, y: number };
    docRightImg: HTMLImageElement;
    docLeftImg: HTMLImageElement;
    docDownImg: HTMLImageElement;
    docUpImg: HTMLImageElement;
    currentImg: HTMLImageElement;
    currentFrames: Array<{src_origin: { x: number, y: number }, size: { x: number, y: number } }>; 
    frameCount: number;
    docFrames: Array<{src_origin: { x: number, y: number }, size: { x: number, y: number } }>;
    constructor(initPosition: { x: number, y: number }) {
        super(initPosition);
        this.docSize = 40;
        this.newDocPosition = { x: initPosition.x, y: initPosition.y };
        this.docRightImg = new Image();
        this.docRightImg.src = docRight;
        this.docLeftImg = new Image();
        this.docLeftImg.src = docLeft;
        this.docDownImg = new Image();
        this.docDownImg.src = docDown;
        this.docUpImg = new Image();
        this.docUpImg.src = docUp;
        this.frameCount = 0;
        this.currentImg = this.docRightImg;
        this.docFrames = [
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
    }

    update() { };

    keyboard_event(key: string) {
        let map = new Map({ x: 0, y: 0 });
        let a: number, b: number;
        let docPosition = this.newDocPosition;
        let docSize = this.docSize;
        switch (key) {
            case `ArrowRight`:
                docPosition = { x: (docPosition.x + docSize), y: docPosition.y };
                a = docPosition.x / docSize;
                b = docPosition.y / docSize;
                if (!map.isCollision(a, b)) {
                    this.newDocPosition.x += docSize;
                }
                this.currentFrames = this.docFrames;
                this.currentImg = this.docRightImg;
                break;
            case `ArrowLeft`:
                docPosition = { x: (docPosition.x - docSize), y: docPosition.y };
                a = docPosition.x / docSize;
                b = docPosition.y / docSize;
                if (!map.isCollision(a, b)) {
                    this.newDocPosition.x -= docSize;
                }
                this.currentFrames = this.docFrames;
                this.currentImg = this.docLeftImg;
                break;
            case `ArrowDown`:
                docPosition = { x: docPosition.x, y: (docPosition.y + docSize) };
                a = docPosition.x / docSize;
                b = docPosition.y / docSize;
                if (!map.isCollision(a, b)) {
                    this.newDocPosition.y += docSize;
                }
                this.currentFrames = this.docFrames;
                this.currentImg = this.docDownImg;
                break;
            case `ArrowUp`:
                docPosition = { x: docPosition.x, y: (docPosition.y - docSize) };
                a = docPosition.x / docSize;
                b = docPosition.y / docSize;
                if (!map.isCollision(a, b)) {
                    this.newDocPosition.y -= docSize;
                }
                this.currentFrames = this.docFrames;
                this.currentImg = this.docUpImg;
                break;
        }
    }

    getPos() {
        return this.newDocPosition;
    }

    draw(ctx: CanvasRenderingContext2D, delta: number) {
        let docSize = this.docSize;
        let newDocPosition = this.newDocPosition;
        this.currentFrames = this.docFrames;
        let i = Math.floor(this.frameCount * 10);
        let frame = this.currentFrames[i % this.currentFrames.length];
        ctx.drawImage(this.currentImg, frame.src_origin.x, frame.src_origin.y, frame.size.x, frame.size.y, newDocPosition.x, newDocPosition.y, docSize, docSize);
        this.frameCount += delta;

    }
}