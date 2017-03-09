import { InitCanvas } from './InitCanvas';
import { Text } from './Text';

console.log(100);

const myCanvas: InitCanvas = new InitCanvas('animationCanvas', 640, 480);
const canvasHeight = myCanvas.getCanvasHeight();
const canvasWidth = myCanvas.getCanvasWidth();

const text: Text = new Text(canvasWidth, 120, 'orange');

var draw = (): void => {
    myCanvas.context.fillStyle = '#222222';
    myCanvas.context.fillRect(0, 0, canvasWidth, canvasHeight);

    requestAnimationFrame(draw);

    text.update(canvasHeight, canvasWidth);
    text.draw(myCanvas.context)

}

window.onload = (): void => {
    myCanvas.createCanvas();
    draw();
}


