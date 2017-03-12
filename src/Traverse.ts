/**
 * A class for traversing through string
 * text is string, textWidth is the width 
 * of traversed and returned string.
 */

export class Traverse {

    text: string;
    textArray: Array<string>;
    arrayLength: number;
    textWidth: number;

    constructor(text: string, textWidth: number) {
        this.text = text;
        this.textWidth = textWidth;
        this.textArray = this.text.split('');
        this.arrayLength = this.textArray.length;
    }

    iterate(traversePosition: number): string {
        let traverseString = this.textArray[traversePosition];
        for (let j = 1; j < this.textWidth; j++) {
            traverseString += this.textArray[(traversePosition + j) % this.arrayLength];
        }
        return traverseString;
    }
}