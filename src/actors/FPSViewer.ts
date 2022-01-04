import { Actor } from "./actor";

export class FPSViewer extends Actor {
	update() {}
	keyboard_event() {}
	draw(ctx: CanvasRenderingContext2D, delta: number) {
		const fps = (1 / delta).toFixed(2);
		ctx.font = "18px Arial";
		ctx.fillStyle = "black";
		ctx.fillText(`FPS:${fps}`, this.position.x, this.position.y);
	}
}