import { Actor } from "./actor";
import { Map } from "./map";
import angelRight from "../../public/img/angels-frames/angel-right.png";
import angelLeft from "../../public/img/angels-frames/angel-left.png";
import angelDown from "../../public/img/angels-frames/angel-down.png";
import angelUp from "../../public/img/angels-frames/angel-up.png";

export class Angel extends Actor {
    angelSize: number;
    newPosition: {x: number, y: number};
    angelRightImg: HTMLImageElement;
    angelLeftImg: HTMLImageElement;
    angelDownImg: HTMLImageElement;
    angelUpImg: HTMLImageElement;
    currentAngelImg: HTMLImageElement;
    constructor(initPosition: {x: number, y: number}) {
        super(initPosition);
        this.angelSize = 40;
        this.newPosition= { x: initPosition.x, y: initPosition.y};
        this.angelRightImg = new Image();
        this.angelRightImg.src = angelRight;
        this.angelLeftImg = new Image();
        this.angelLeftImg.src = angelLeft;
        this.angelDownImg = new Image();
        this.angelDownImg.src = angelDown;
        this.angelUpImg = new Image();
        this.angelUpImg.src = angelUp;
        this.currentAngelImg = this.angelLeftImg;
    }

    update() {};

    keyboard_event(key: string) {
        let map = new Map ({x: 0, y: 0});
        let a: number, b: number;
        let position = this.newPosition;
        let angelSize = this.angelSize;
        switch (key) {
            case `ArrowDown`:
                position = { x: (position.x + angelSize), y: position.y };
                a = position.x/angelSize;
                b = position.y/angelSize;
                if (!map.isCollision(a, b)) {
                    this.newPosition.x += angelSize;
                }
                this.currentAngelImg = this.angelRightImg;
                break;
            case `ArrowRight`:
                position = { x: (position.x - angelSize), y: position.y };
                a = position.x/angelSize;
                b = position.y/angelSize;
                if (!map.isCollision(a, b)) {
                    this.newPosition.x -= angelSize;
                }
                this.currentAngelImg = this.angelLeftImg;
                break;
            case `ArrowUp`:
                position = { x: position.x, y: (position.y + angelSize) };
                a = position.x/angelSize;
                b = position.y/angelSize;
                if (!map.isCollision(a, b)) {
                    this.newPosition.y += angelSize;
                }
                this.currentAngelImg = this.angelDownImg
                break;
            case `ArrowLeft`:
                position = { x: position.x, y: (position.y - angelSize) };
                a = position.x/angelSize;
                b = position.y/angelSize;
                if (!map.isCollision(a, b)) {
                    this.newPosition.y -= angelSize;
                }
                this.currentAngelImg = this.angelUpImg;
                break;
        }
    }

    getPos() {
        return this.newPosition;
    }

    draw(ctx: CanvasRenderingContext2D, delta: number) {
        let angelSize = this.angelSize;
        let position = this.newPosition;
        let angelImg = this.currentAngelImg;
        ctx.drawImage(angelImg, position.x, position.y, angelSize, angelSize);
    }

}