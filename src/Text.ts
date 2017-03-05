import '../css/textscroller.css';
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
        this.xSpeed = 2;
    }

    update(canvasHeight: number, canvasWidth: number): void {
        this.x -= this.xSpeed;
        if (this.x < -5500) this.x = canvasWidth; //-1 * ();
        this.y = canvasHeight - 25; // (Math.sin(this.x/90)*(canvasHeight/4)) + (canvasHeight / 2);
    }


    draw(context: CanvasRenderingContext2D): void {
        context.save();
        context.font = "72px Molle, cursive" //'72px serif'
        const lingrad = context.createLinearGradient(0, 402, 0, 475);
        lingrad.addColorStop(0, '#555');
        lingrad.addColorStop(0.5, '#aaa');
        // lingrad.addColorStop(0.5, '#66CC00');
        lingrad.addColorStop(1, '#fff');
        context.fillStyle = lingrad;
        context.fillText('My content is here and this should be a very long text to create a text scroller. I wonder if this looks like a text scroller - I bet it does and will look cool.', this.x, this.y);
        context.restore();
    }

}

