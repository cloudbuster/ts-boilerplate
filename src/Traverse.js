/**
 * A class for traversing through string
 * text is string, textWidth is the width
 * of traversed and returned string.
 */
"use strict";
var Traverse = (function () {
    function Traverse(text, textWidth) {
        this.text = text;
        this.textWidth = textWidth;
        this.textArray = this.text.split('');
        this.arrayLength = this.textArray.length;
    }
    Traverse.prototype.iterate = function (traversePosition) {
        var traverseString = this.textArray[traversePosition];
        for (var j = 1; j < this.textWidth; j++)
            traverseString += this.textArray[(traversePosition + j) % this.arrayLength];
        return traverseString;
    };
    return Traverse;
}());
exports.Traverse = Traverse;
