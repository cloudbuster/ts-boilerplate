import {InitCanvas} from "./InitCanvas";
import { Text } from './Text';

const myCanvas: InitCanvas = new InitCanvas('animationCanvas', 640, 480);
const canvasHeight = myCanvas.getCanvasHeight();
const canvasWidth = myCanvas.getCanvasWidth();

const text: Text = new Text(myCanvas.context, -50, (canvasHeight/2 + 30), 'white', 'Yeah...  ', 60);

var draw = (): void => {
    myCanvas.context.fillStyle = '#222222';
    myCanvas.context.fillRect(0, 0, canvasWidth, canvasHeight);

    requestAnimationFrame(draw);

    text.update();
    text.draw(myCanvas.context)

}

window.onload = (): void => {
    myCanvas.createCanvas();
    draw();
}


