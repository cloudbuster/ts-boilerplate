export class InitCanvas {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    constructor(canvasName: string, canvasWidth: number, canvasHeight: number) {
        this.canvas = <HTMLCanvasElement>document.createElement('canvas');
        this.canvas.id = canvasName;
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.canvas.style.zIndex = '0';
        this.canvas.style.position = 'absolute';
        this.canvas.style.border = '2px solid black';
        this.canvas.style.width = `${canvasWidth * 1}px`;
        this.canvas.style.height = `${canvasHeight * 1}px`;
        this.canvas.style.backgroundColor = 'black';
        this.canvas.style.borderRadius = '50px';
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '50%';
        this.canvas.style.left = '50%';
        this.canvas.style.marginLeft = `-${canvasWidth / 2}px`;
        this.canvas.style.marginTop = `-${canvasHeight / 2}px`;
    }

    getCanvasHeight():number {
        return this.canvas.height;
    }

    getCanvasWidth():number {
        return this.canvas.width;
    }


	public get $canvas(): HTMLCanvasElement {
		return this.canvas;
	}

	public set $canvas(value: HTMLCanvasElement) {
		this.canvas = value;
	}
    

    

    createCanvas() {
        this.context = <CanvasRenderingContext2D>this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
    }
}