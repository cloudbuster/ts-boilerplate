import { InitCanvas } from './InitCanvas';
import { Circle } from './Circle';
import { Text } from './Text';
import * as px from './PxLoader';

class Preload {
    constructor() {
        var baseUrl: string = 'http://thinkpixellab.com/pxloader' +
            '/slowImage.php?delay=1&time=' + new Date;

        var loader: px.PxLoader = new px.PxLoader();

        for (var i: number = 0; i < 100; i++) {
            var pxImage: px.PxLoaderImage = new px.PxLoaderImage(baseUrl + '&i=' + i);
            loader.add(pxImage);

            loader.addProgressListener(this.onProgress);
            loader.addCompletionListener(this.onComplete);
        }
    }

    onProgress = (e: any): void => {
        console.log("items loaded: " + (e.completedCount / e.totalCount));
    }

    onComplete = (e: any): void => {
        console.log("Loading completed.");
    }

}

const myPreload: Preload = new Preload();
myPreload.onProgress;
myPreload.onComplete;


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


