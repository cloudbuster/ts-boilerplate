import { Shape } from './Shape';

export class Text implements Shape {
    x: number;
    y: number;
    xSpeed: number;
    ySpeed: number;
    lineWidth: number;
    color: string;

    constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.xSpeed = 8;
    }

    update(canvasHeight: number, canvasWidth: number): void {
        this.x -= this.xSpeed;
        if (this.x < -4500) this.x = canvasWidth; //-1 * ();
        this.y = (Math.sin(this.x/360)*(canvasHeight/4)) + (canvasHeight / 2);
    }


    draw(context: CanvasRenderingContext2D): void {
        context.save();
        context.font = '72px serif';
        context.fillStyle = 'blue';
        context.fillText('My content is here and this should be a very long text to create a text scroller. I wonder if this looks like a text scroller - I bet it does and will look cool.', this.x, this.y);
        context.restore();
    }

}

