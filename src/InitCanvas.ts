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
        this.canvas.style.width = `${canvasWidth * 2}px`;
        this.canvas.style.height = `${canvasHeight * 2}px`;
        this.canvas.style.backgroundColor = 'black';
    }

    getCanvasHeight():number {
        return this.canvas.height;
    }

    getCanvasWidth():number {
        return this.canvas.width;
    }

    createCanvas() {
        this.context = <CanvasRenderingContext2D>this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
    }
}