import { InitCanvas } from './InitCanvas';
import { Circle } from './Circle';

const canvas: InitCanvas = new InitCanvas('animationCanvas', 320, 240);
const canvasHeight =canvas.getCanvasHeight();
const canvasWidth = canvas.getCanvasWidth();


const circle: Circle = new Circle(10, 10, 10, 'orange');
circle.randomInit(canvasHeight, canvasWidth, 2);

const circles = new Array();

for (var i = 0; i < 50; i += 1){
circles.push(new Circle(10, 10, 10, 'orange'));
circles[i].randomInit(canvas.getCanvasHeight(), canvas.getCanvasWidth(), 10);
}

// update

// draw
var draw = (): void => {
    canvas.context.fillStyle = "black";
    canvas.context.fillRect(0, 0, canvasWidth, canvasHeight);

    requestAnimationFrame(draw);

    for (var i in circles) {
        circles[i].update(canvasHeight, canvasWidth);
        circles[i].draw(canvas.context);
    }
    
}

window.onload = (): void => {
    canvas.createCanvas();
    draw();

}