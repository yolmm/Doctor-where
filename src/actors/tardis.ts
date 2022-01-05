import { Actor } from "./actor";
import tardis_frame from "../../public/img/tardis-frame.png";


export class Tardis extends Actor {
    tardisOrigin: {x: number, y: number};
    tardisSize: {x: number, y: number};
    tardisImg: HTMLImageElement;
    constructor(initPosition: {x: number, y: number}) {
        super(initPosition)
        this.tardisOrigin = {x: initPosition.x, y: initPosition.y}
        this.tardisSize = {x: 40, y: 80}
        this.tardisImg = new Image();
        this.tardisImg.src = tardis_frame;
    }

    update () {}
    keyboard_event(key) {}

    draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.tardisImg, this.tardisOrigin.x, this.tardisOrigin.y, this.tardisSize.x, this.tardisSize.y);
    }
}