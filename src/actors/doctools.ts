import { Actor } from "./actor";
import screwdriver from "../../public/img/sonic-screwdriver.png";
import banana from "../../public/img/banana.png";
import spoonImg from "../../public/img/spoon.png";


export class Tool extends Actor {
    origin: {x: number, y: number}; 
    tool: string;
    newPosition: {x: number, y: number};
    screwdriverImg: HTMLImageElement;
    bananaImg: HTMLImageElement;
    spoonImg: HTMLImageElement;
    constructor(initPosition: { x: number, y: number }, tool: string) {
        super(initPosition);
        this.tool = tool;
        this.origin = {x: initPosition.x, y: initPosition.y};
        this.screwdriverImg = new Image();
        this.screwdriverImg.src = screwdriver;
        this.bananaImg = new Image();
        this.bananaImg.src = banana;
        this.spoonImg = new Image();
        this.spoonImg.src = spoonImg;
    }

    update () {}
    keyboard_event(key: string) { }

    getPos() {
        return this.origin;
    }

    draw(ctx: CanvasRenderingContext2D, delta?: number) {
        if (this.tool == "screwdriver") {
            ctx.drawImage(this.screwdriverImg, this.origin.x, this.origin.y, 40, 40);
        }
        else if (this.tool == "banana") {
            ctx.drawImage(this.bananaImg, this.origin.x, this.origin.y, 40, 40);
        }
        else if (this.tool == "spoon") {
            ctx.drawImage(this.spoonImg, this.origin.x, this.origin.y, 40, 40);
        }
    }
}