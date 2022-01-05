import { Actor } from "./actor";
import { Map } from "./map";
import angelSprites from "../../public/img/weaping-angel-sprite.png";

export class Angel extends Actor {
    angelSize: number;
    newPosition: {x: number, y: number};
    angelImg: HTMLImageElement;
    constructor(initPosition: {x: number, y: number}) {
        super(initPosition);
        this.angelSize = 40;
        this.newPosition= { x: initPosition.x, y: initPosition.y};
        this.angelImg = new Image();
        this.angelImg.src = angelSprites;
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
                break;
            case `ArrowRight`:
                position = { x: (position.x - angelSize), y: position.y };
                a = position.x/angelSize;
                b = position.y/angelSize;
                if (!map.isCollision(a, b)) {
                    this.newPosition.x -= angelSize;
                }
                break;
            case `ArrowUp`:
                position = { x: position.x, y: (position.y + angelSize) };
                a = position.x/angelSize;
                b = position.y/angelSize;
                if (!map.isCollision(a, b)) {
                    this.newPosition.y += angelSize;
                }
                break;
            case `ArrowLeft`:
                position = { x: position.x, y: (position.y - angelSize) };
                a = position.x/angelSize;
                b = position.y/angelSize;
                if (!map.isCollision(a, b)) {
                    this.newPosition.y -= angelSize;
                }
                break;
        }
    }

    getPos() {
        return this.newPosition;
    }

    draw(ctx: CanvasRenderingContext2D, delta: number) {
        let angelSize = this.angelSize;
        let position = this.newPosition;
        let angelImg = this.angelImg;
        ctx.drawImage(angelImg, 140, 140, 40, 60, position.x, position.y, angelSize, angelSize);
    }

}