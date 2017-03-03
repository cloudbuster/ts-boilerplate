/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Circle = (function () {
    function Circle(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    Circle.prototype.randomInit = function (canvasHeight, canvasWidth, layers) {
        var min = 0;
        this.x = Math.round(Math.random() * (canvasWidth - min) + min);
        this.y = Math.round(Math.random() * (canvasHeight - min) + min);
        this.xSpeed = Math.round(Math.random() * (layers - min) + min) + 1;
        this.ySpeed = Math.round(Math.random() * (layers - min) + min);
        this.radius = (this.xSpeed * 1.05) - 1;
    };
    Circle.prototype.update = function (canvasHeight, canvasWidth) {
        var min = 0;
        this.x += this.xSpeed;
        if (this.x > canvasWidth)
            this.x = -1 * (this.radius);
    };
    Circle.prototype.draw = function (context) {
        context.save();
        context.beginPath();
        context.strokeStyle = this.color;
        context.lineWidth = this.lineWidth;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.stroke();
        context.restore();
    };
    return Circle;
}());
exports.Circle = Circle;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InitCanvas = (function () {
    function InitCanvas(canvasName, canvasWidth, canvasHeight) {
        this.canvas = document.createElement('canvas');
        this.canvas.id = canvasName;
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.canvas.style.zIndex = '0';
        this.canvas.style.position = 'absolute';
        this.canvas.style.border = '2px solid black';
        this.canvas.style.width = canvasWidth * 2 + "px";
        this.canvas.style.height = canvasHeight * 2 + "px";
        this.canvas.style.backgroundColor = 'black';
    }
    InitCanvas.prototype.getCanvasHeight = function () {
        return this.canvas.height;
    };
    InitCanvas.prototype.getCanvasWidth = function () {
        return this.canvas.width;
    };
    InitCanvas.prototype.createCanvas = function () {
        this.context = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
    };
    return InitCanvas;
}());
exports.InitCanvas = InitCanvas;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InitCanvas_1 = __webpack_require__(1);
var Circle_1 = __webpack_require__(0);
var canvas = new InitCanvas_1.InitCanvas('animationCanvas', 320, 240);
var canvasHeight = canvas.getCanvasHeight();
var canvasWidth = canvas.getCanvasWidth();
var circle = new Circle_1.Circle(10, 10, 10, 'orange');
circle.randomInit(canvasHeight, canvasWidth, 2);
var circles = new Array();
for (var i = 0; i < 50; i += 1) {
    circles.push(new Circle_1.Circle(10, 10, 10, 'orange'));
    circles[i].randomInit(canvas.getCanvasHeight(), canvas.getCanvasWidth(), 10);
}
// update
// draw
var draw = function () {
    canvas.context.fillStyle = "black";
    canvas.context.fillRect(0, 0, canvasWidth, canvasHeight);
    requestAnimationFrame(draw);
    for (var i in circles) {
        circles[i].update(canvasHeight, canvasWidth);
        circles[i].draw(canvas.context);
    }
};
window.onload = function () {
    canvas.createCanvas();
    draw();
};


/***/ })
/******/ ]);