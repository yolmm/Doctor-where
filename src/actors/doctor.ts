import { Actor, IActor } from "./actor";

export class Doctor extends Actor implements IActor{
    origin: {x: number, y: number};
    docSize: number;
    constructor(initPosition: {x: number, y: number}) {
        super(initPosition);
        this.origin = {x: 20, y: 20};
        this.docSize = 40;
    }

    keyboard_event(key: string) {}

    draw(ctx: CanvasRenderingContext2D) {
		let origin = this.origin;
		let docSize = this.docSize;
        ctx.fillStyle = "blue";
        ctx.fillRect(origin.x, origin.y, docSize, docSize);
    }
}