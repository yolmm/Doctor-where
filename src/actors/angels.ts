import { Actor } from "./actor";

export class Angel extends Actor {
    angelSize: number;
    canvasSize: {width: number, height: number};
    newPosition: {x: number, y: number};
    constructor(initPosition: {x: number, y: number}) {
        super(initPosition = { x: 0, y: 0 });
        this.angelSize = 40;
        this.canvasSize = {width: 1020, height: 1024};
        this.newPosition = {
            x: (Math.random()*this.canvasSize.width),
            y: (Math.random()*this.canvasSize.height)
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
		let position = this.newPosition;
		let angelSize = this.angelSize;
        ctx.fillStyle = "grey";
        //ctx.fillRect(position.x, position.y, angelSize, angelSize);
        ctx.fillRect(80, 40, angelSize, angelSize);
    }

    angelsMovement() {
        
    }
}