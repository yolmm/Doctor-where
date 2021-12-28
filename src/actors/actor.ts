export interface IActor {
	position: {x: number, y: number};
	initialize?: () => void;
	keyboard_event_down?: (key: string) => void;
	keyboard_event_up?: (key: string) => void;
	draw: (ctx: CanvasRenderingContext2D) => void;
}

export class Actor implements IActor {
	position: {x: number, y: number};
	constructor(position: {x: number, y: number}) {
		this.position = position;
	}
	draw(ctx: CanvasRenderingContext2D) {}
	keyboard_event(key: string) {}
}