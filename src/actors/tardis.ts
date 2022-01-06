import { Actor } from "./actor";
import tardis from "../../public/img/tardis/tardis.png";
import tardisGlowing from "../../public/img/tardis/tardis-glowing.png";
import tardisVanishing1 from "../../public/img/tardis/tardis-vanishing1.png";
import tardisVanishing2 from "../../public/img/tardis/tardis-vanishing2.png";
import tardisVanishing3 from "../../public/img/tardis/tardis-vanishing3.png";
import tardisVanishing4 from "../../public/img/tardis/tardis-vanishing4.png";
import tardisVanishing5 from "../../public/img/tardis/tardis-vanishing5.png";
import tardisVanishing6 from "../../public/img/tardis/tardis-vanishing6.png";
import tardisVanishing7 from "../../public/img/tardis/tardis-vanishing7.png";
import tardisVanishing8 from "../../public/img/tardis/tardis-vanishing8.png";
import tardisVanishing9 from "../../public/img/tardis/tardis-vanishing9.png";
import tardisVanished from "../../public/img/tardis/tardis-vanished.png";


export class Tardis extends Actor {
    origin: {x: number, y: number};
    tardisSize: {x: number, y: number};
    tardisImg: HTMLImageElement;
    currentImg: HTMLImageElement;
    tardisGlowing: HTMLImageElement;
    tardisVanishing1: HTMLImageElement;
    tardisVanishing2: HTMLImageElement;
    tardisVanishing3: HTMLImageElement;
    tardisVanishing4: HTMLImageElement;
    tardisVanishing5: HTMLImageElement;
    tardisVanishing6: HTMLImageElement;
    tardisVanishing7: HTMLImageElement;
    tardisVanishing8: HTMLImageElement;
    tardisVanishing9: HTMLImageElement;
    tardisVanished: HTMLImageElement;
    tardisEndImg: Array<HTMLImageElement>;
    constructor(initPosition: {x: number, y: number}) {
        super(initPosition)
        this.origin = {x: initPosition.x, y: initPosition.y}
        this.tardisSize = {x: 40, y: 80}
        this.tardisImg = new Image();
        this.tardisImg.src = tardis;
        this.tardisGlowing = new Image();
        this.tardisGlowing.src = tardisGlowing;
        this.tardisVanishing1 = new Image();
        this.tardisVanishing1.src = tardisVanishing1;
        this.tardisVanishing2 = new Image();
        this.tardisVanishing2.src = tardisVanishing2;
        this.tardisVanishing3 = new Image();
        this.tardisVanishing3.src = tardisVanishing3;
        this.tardisVanishing4 = new Image();
        this.tardisVanishing4.src = tardisVanishing4;
        this.tardisVanishing5 = new Image();
        this.tardisVanishing5.src = tardisVanishing5;
        this.tardisVanishing6 = new Image();
        this.tardisVanishing6.src = tardisVanishing6;
        this.tardisVanishing7 = new Image();
        this.tardisVanishing7.src = tardisVanishing7;
        this.tardisVanishing8 = new Image();
        this.tardisVanishing8.src = tardisVanishing8;
        this.tardisVanishing9 = new Image();
        this.tardisVanishing9.src = tardisVanishing9;
        this.tardisVanished = new Image();
        this.tardisVanished.src = tardisVanished;
        this.currentImg = this.tardisImg;
        this.tardisEndImg = [
            this.tardisGlowing,
            this.tardisVanishing1,
            this.tardisVanishing2,
            this.tardisVanishing3,
            this.tardisVanishing4,
            this.tardisVanishing5,
            this.tardisVanishing6,
            this.tardisVanishing7,
            this.tardisVanishing8,
            this.tardisVanishing9,
            this.tardisVanished
        ]
    }

    update () {}
    keyboard_event(key) {}

    setImg (element: HTMLImageElement) {
        return this.currentImg = element;
    }

    draw(ctx: CanvasRenderingContext2D, delta?: number) {
        ctx.drawImage(this.currentImg, this.origin.x, this.origin.y, this.tardisSize.x, this.tardisSize.y);
    }
}