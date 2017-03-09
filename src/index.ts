import { InitCanvas } from './InitCanvas';
import { Circle } from './Circle';
import { Text } from './Text';


const myCanvas: InitCanvas = new InitCanvas('animationCanvas', 640, 480);
const canvasHeight = myCanvas.getCanvasHeight();
const canvasWidth = myCanvas.getCanvasWidth();

const text: Text = new Text(canvasWidth, 120, 'orange');



const circles = new Array();
for (var i = 0; i < 25; i += 1) {
    circles.push(new Circle(10, 10, 10, 'grey'));
    circles[i].randomInit(myCanvas.getCanvasHeight(), myCanvas.getCanvasWidth(), 10);
}

var draw = (): void => {
    myCanvas.context.fillStyle = '#222222';
    myCanvas.context.fillRect(0, 0, canvasWidth, canvasHeight);

    requestAnimationFrame(draw);

    for (var i in circles) {
        circles[i].update(canvasHeight, canvasWidth);
        circles[i].draw(myCanvas.context);
    }

    text.update(canvasHeight, canvasWidth);
    text.draw(myCanvas.context)

}

window.onload = (): void => {
    myCanvas.createCanvas();
    draw();
}


