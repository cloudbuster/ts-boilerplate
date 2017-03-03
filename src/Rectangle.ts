import { Shape } from './Shape';

class cRectangle implements Shape {
    x: number;
    y: number;
    lineWidth: number;
    width: number;
    height: number;
    color: string;

    constructor(x: number, y: number, width: number, height: number, color: string, line_width: number = 2) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.lineWidth = line_width;
    }

    draw = (context: CanvasRenderingContext2D): void => {
        context.save();
        context.beginPath();
        context.strokeStyle = this.color;
        context.lineWidth = this.lineWidth;
        context.rect(this.x, this.y, this.width, this.height);
        context.stroke();
        context.restore();
    }

}