import {Shape} from './Shape';

export class Circle implements Shape {
    x: number;
    y: number;
    xSpeed: number;
    ySpeed: number;
    radius: number;
    lineWidth: number;
    color: string;

    constructor(x: number, y: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        var i = 100;
    }

    randomInit(canvasHeight: number, canvasWidth: number, layers: number): void {
        const min: number = 0;
        this.x = Math.round(Math.random() * (canvasWidth - min) + min);
        this.y = Math.round(Math.random() * (canvasHeight - min) + min);
        this.xSpeed = Math.round(Math.random() * (layers - min) + min) + 1;
        this.ySpeed = Math.round(Math.random() * (layers - min) + min);
        this.radius = (this.xSpeed / 3);
    }

    update(canvasHeight: number, canvasWidth: number): void {
        const min: number = 0;
        this.x += this.xSpeed;
        if (this.x > canvasWidth) this.x = -1 * (this.radius);
    }


    draw(context: CanvasRenderingContext2D): void {
        context.save();
        context.beginPath();
        context.strokeStyle = this.color;
        context.lineWidth = this.lineWidth;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.stroke();
        context.restore();
    }

}

