import {InitCanvas} from "./InitCanvas";
import {Circle} from "./Circle";
import { Text } from './Text';


const myCanvas: InitCanvas = new InitCanvas('animationCanvas', 640, 480);
const canvasHeight = myCanvas.getCanvasHeight();
const canvasWidth = myCanvas.getCanvasWidth();
const radius: number = 20   ;
const text: Text = new Text(0, 0, 'white');


const circles = new Array();
for (var i = 0; i < 85; i += 1) {
    circles.push(new Circle((i*(radius*2))-(radius*4), radius, radius, 'orange'));
}


const circlesTwo = new Array();
for (var i = 0; i < 85; i += 1) {
    circlesTwo.push(new Circle((i*(radius*2))-(radius*4), radius*4, radius, 'yellow'));
}

// const text: Text = new Text(canvasWidth, 120, 'orange');

var draw = (): void => {
    myCanvas.context.fillStyle = '#222222';
    myCanvas.context.clearRect(0, 0, canvasWidth, canvasHeight);

    requestAnimationFrame(draw);

    for (var i in circles) {
        circles[i].anotherUpdate(1);
        circles[i].fill(myCanvas.context);
    }

    for (var i in circles) {
        circlesTwo[i].anotherUpdate(1);
        circlesTwo[i].fill(myCanvas.context);
    }

    text.update(canvasHeight, canvasWidth);
    text.draw(myCanvas.context)

}

window.onload = (): void => {
    myCanvas.createCanvas();
    draw();
}


