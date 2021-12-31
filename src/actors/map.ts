import { Actor } from "./actor";

let labyrinth = `
WWWWWWWWWWWW
pppppppppppp
WWWWWWWWWWWW
`;

export class Map extends Actor {
    canvasSize: {width: number, height: number};
    blockSize: number;
    gridSize: {x: number, y: number};
    origin: {x: number, y: number};
    coords: {x: number, y: number};
    matrix: Array<Array<string>>;
    constructor(initPosition: {x: number, y: number}) {
        super(initPosition = { x: 0, y: 0 });
        this.canvasSize = {width: 1020, height: 1024};
        this.blockSize = 40;
        this.gridSize = {
            x: Math.round(this.canvasSize.width/this.blockSize),
            y: Math.round(this.canvasSize.height/this.blockSize),
        };
        this.origin = {x: 0, y: 0};
        this.coords;
        this.matrix = labyrinth.match(/.{1,12}/g).map((e) => e.split(""));
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.matrix.forEach((e, y) => {
            this.origin.y = y;
            let mapArray = e.forEach((element, x) => {
                this.origin.x = x;
                this.coords = {x: (this.origin.x*this.blockSize), y: (this.origin.y*this.blockSize)}
                switch (element) {
                    case "W": //Wall
                        ctx.strokeStyle = "red";
                        ctx.fillStyle = "red";
                        ctx.fillRect(this.coords.x, this.coords.y, this.blockSize, this.blockSize);
                        break;
                    case "p": //path
                        ctx.strokeStyle = "green";
                        ctx.fillStyle = "green";
                        ctx.fillRect(x*this.blockSize, y*this.blockSize, this.blockSize, this.blockSize);
                        break;
                }
            })
        })
    }

    isCollision(a: number, b: number) {
        console.log(a,b,this.matrix[b][a])
        if (this.matrix[b][a] === "W") {
            console.log("Collision!");
            return true;
        } else {
            console.log("Continue");
            return false;
        }
    } 
}