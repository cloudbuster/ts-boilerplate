import '../css/textscroller.css';
import { Shape } from './Shape';

export class Text implements Shape {
    x: number;
    y: number;
    xSpeed: number;
    ySpeed: number;
    lineWidth: number;
    color: string;
    myText: string;

    constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.xSpeed = 1;
        this.myText = 'My content is here and this should be a very long text to create a text scroller. I wonder if this looks like a text scroller - I bet it does and will look cool.';
    }

    update(canvasHeight: number, canvasWidth: number): void {
        this.x -= this.xSpeed;
        if (this.x < -5500) this.x = canvasWidth; //-1 * ();
        this.y = 18 + (canvasHeight/2);  //16; // +(Math.sin(this.x/10)*(canvasHeight/30)) + (canvasHeight / 2);
    }


    draw(context: CanvasRenderingContext2D): void {
        context.save();
        context.font = '60px Baloo Bhaina, cursive';
        context.fillStyle = this.color;
        context.fillText(this.myText.toUpperCase(), this.x, this.y);
        context.restore();
    }

}

