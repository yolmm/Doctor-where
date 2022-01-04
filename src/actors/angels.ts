import { Actor } from "./actor";
import { Map } from "./map";

export class Angel extends Actor {
    angelSize: number;
    newPosition: {x: number, y: number};
    color: string;
    constructor(initPosition: {x: number, y: number}, color: string) {
        super(initPosition);
        this.angelSize = 40;
        this.color = color;
        this.newPosition= { x: initPosition.x, y: initPosition.y};
    }

    update() {};

    keyboard_event(key) {
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
        ctx.fillStyle = this.color;
        ctx.fillRect(position.x, position.y, angelSize, angelSize);
    }

}