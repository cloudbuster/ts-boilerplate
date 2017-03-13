import {InitCanvas} from "./InitCanvas";
import { Text } from './Text';

const myCanvas: InitCanvas = new InitCanvas('animationCanvas', 800, 200);
const canvasHeight = myCanvas.getCanvasHeight();
const canvasWidth = myCanvas.getCanvasWidth();

const hello: string = '..................At least the wrapping works even if there is some twitching'
const text: Text = new Text(myCanvas.context, -50, 50, 'orange', 'wraps around nicely... ', 40);

var draw = (): void => {
    myCanvas.context.fillStyle = '#222222';
    myCanvas.context.fillRect(0, 0, canvasWidth, canvasHeight);

    requestAnimationFrame(draw);

    // text.update();
    text.update();
    text.draw(myCanvas.context)

}

window.onload = (): void => {
    myCanvas.createCanvas();
    draw();
}


