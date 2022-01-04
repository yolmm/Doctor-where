import { Actor } from "./actor";

let labyrinth = `
WWWWWWWWWWWWWWWWWWWWWWWWWW
W......W.............W.W.W
W.W.WWWWWWWWWWWW.WWW.W.W.W
W.W..W...W....W....W.W.W.W
WWW.WW.W.W.W.WWW.W.W.W...W
W.W....WWWWW...W.W.W.W.W.W
W.W.W....W....WW.W.W...W.W
W...WWWW...WW.W..W.WWW.W.W
W.W.W..WWWW.WWWW.W...W.W.W
W.W...W...W......W.WWW.WWW
W.WWW.W.WWW.W.W.WW.W....WW
W...WWW...W.WWW.W..WWWW.WW
WW.WW.WWW...W...WW.W..W.WW
WW..W...WWWWWW...WWWW.W..W
WW.WW.WWW...W..W....W.WW.W
W...W.....WWWWWWWWW.W....W
W.W.WW.WW...W.......WW.WWW
W.W.....WWW.W.WWWWWWW....W
WWWW.WW...W.W..W......WW.W
W.....W.W.WWWW.W.WWWW..W.W
W.W.W.W.W......W....WWWW.W
W.W.W.W.WWWWWWWWWWW...W..W
W.W.W...W......W..W.W.WWWW
W.W.WWWWW.WWWWWW.WW.W.WTTW
W.W..............W..W..TTW
WWWWWWWWWWWWWWWWWWWWWWWWWW
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
        this.matrix = labyrinth.match(/.{1,26}/g).map((e) => e.split(""));
    }

    update() {};
    keyboard_event() {};

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
                    case ".": //path
                        ctx.strokeStyle = "green";
                        ctx.fillStyle = "green";
                        ctx.fillRect(x*this.blockSize, y*this.blockSize, this.blockSize, this.blockSize);
                        break;
                    case "T": //TARDIS
                        ctx.strokeStyle = "blue";
                        ctx.fillStyle = "blue";
                        ctx.fillRect(x*this.blockSize, y*this.blockSize, this.blockSize, this.blockSize);
                        break;
                }
            })
        })
    }

    isCollision(a: number, b: number) {
        if (this.matrix[b][a] === "W") {
            return true;
        } else {
            return false;
        }
    } 
}