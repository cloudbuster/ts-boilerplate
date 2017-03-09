import {Shape} from './Shape';

export class Circle implements Shape {
    x: number;
    y: number;
    xSpeed: number;
    ySpeed: number;
    radius: number;
    lineWidth: number;
    color: string;
    counter: number = 0;

    constructor(x: number, y: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
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

    anotherUpdate(direction: number): void {
        this.counter += 1;
        this.x += Math.round(direction);
        if (this.counter > (this.radius*2)-1 && direction <= -1) {
            this.x += this.radius*2;
            this.counter = 0;
        } else if (this.counter > (this.radius*2)-1 && direction >= 1) {
            this.x -= this.radius*2;
            this.counter = 0;
        }
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

    fill(context: CanvasRenderingContext2D): void {
        context.save();
        context.beginPath();
        context.fillStyle = this.color;
        context.lineWidth = this.lineWidth;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill();
        context.restore();
    }


}

