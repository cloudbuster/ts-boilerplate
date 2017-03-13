/**
 * A class for traversing through string
 * text is string, textWidth is the width
 * of traversed and returned string.
 */
"use strict";
exports.__esModule = true;
var Circulate = (function () {
    function Circulate(text, textWidth) {
        this.x = [0];
        this.y = [0];
        this.circulateArray = [''];
        this.sinValue = [0];
        this.text = text;
        this.textWidth = textWidth;
        this.textArray = this.text.split('');
        this.arrayLength = this.textArray.length;
    }
    Circulate.prototype.iterateToString = function (startPos) {
        var circulateString = this.textArray[startPos];
        for (var j = 1; j < this.textWidth; j++) {
            circulateString += this.textArray[(startPos + j) % this.arrayLength];
        }
        return circulateString;
    };
    Circulate.prototype.iterateToArray = function (startPos) {
        var iterator = 0;
        this.circulateArray[0] = this.textArray[startPos];
        this.sinValue[0] = 0;
        this.x[0] = 0;
        this.y[0] = Math.sin(0) * 100;
        console.log(this.circulateArray[0] + ", \t x: " + this.x[0] + ", \t\t y: " + this.y[0]);
        for (var j = 1; j < this.textWidth; j++) {
            this.circulateArray[j] = this.textArray[(startPos + j) % this.arrayLength];
            iterator += (Math.PI) / (this.textWidth - 1);
            this.sinValue[j] = iterator;
            this.x[j] = j * 30;
            this.y[j] = Math.round(Math.sin(this.sinValue[j]) * 100);
            console.log(this.circulateArray[j] + ", \t x: " + this.x[j] + ", \t y: " + this.y[j]);
        }
    };
    return Circulate;
}());
exports.Circulate = Circulate;
var circulate = new Circulate('Hello', 20);
for (var i = 0; i < 10; i += 1)
    circulate.iterateToArray(i);
