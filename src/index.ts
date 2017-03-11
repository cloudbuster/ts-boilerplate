import {InitCanvas} from "./InitCanvas";
import {Circle} from "./Circle";
import { Text } from './Text';


const myCanvas: InitCanvas = new InitCanvas('animationCanvas', 320, 64);
const canvasHeight = myCanvas.getCanvasHeight();
const canvasWidth = myCanvas.getCanvasWidth();
const radius: number = 14;
const text: Text = new Text(canvasWidth, 0, 'black');
const addme: number = 18;

// TODO: make ArrayHandler class (inject object and make array)
// TODO: arrayInit(object: object) method
// TODO: arrayUpdate(object: object) method
// TODO: arrayDraw(object: object) method
// TODO: arrayRandomize(object: object) method
const circles = new Array();
for (var i = 0; i < 85; i += 1) {
    circles.push(new Circle((i*(radius*2))-(radius*4), addme+radius, radius, 'darkorange'));
}


const circlesTwo = new Array();
for (var i = 0; i < 85; i += 1) {
    circlesTwo.push(new Circle((i*(radius*2))-(radius*4), addme+(radius*3), radius, 'darkorange'));
}

// const text: Text = new Text(canvasWidth, 120, 'orange');

var draw = (): void => {
    const lingrad = myCanvas.context.createLinearGradient(0, 0, 0, canvasHeight);
    lingrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    lingrad.addColorStop(.1, 'rgba(0, 0, 0, 1)');
    lingrad.addColorStop(0.5, 'orange');
    lingrad.addColorStop(.9, 'rgba(0, 0, 0, 1)');
    lingrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    myCanvas.context.fillStyle = '#222222';
    myCanvas.context.clearRect(0, 0, canvasWidth, canvasHeight);

    requestAnimationFrame(draw);

    // TODO: array updater in
    for (var i in circles) {
        circles[i].anotherUpdate(1);
        circles[i].fill(myCanvas.context);
    }

 /*   for (var i in circles) {
        circlesTwo[i].anotherUpdate(1);
        circlesTwo[i].fill(myCanvas.context);
    } */

    text.update(canvasHeight, canvasWidth);
    text.draw(myCanvas.context)

}

window.onload = (): void => {
    myCanvas.createCanvas();
    draw();
}


