import '../css/textscroller.css';

export class Text {
    // Placement
    x: number;
    y: number;
    xSpeed: number;
    color: string;

    // For traversing
    text: string;
    textArray: Array<string>;
    arrayLength: number;
    textWidth: number;
    fontWidth: number;
    willTraverse: boolean;
    traverseString: string;
    traversePosition: number;
    ticker: number;

    constructor(context: CanvasRenderingContext2D, x: number, y: number, color: string, text: string, textWidth: number) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.xSpeed = 2;

        // Traversing
        this.text = text;
        this.text = text;
        this.textWidth = textWidth;
        this.textArray = this.text.split('');
        this.arrayLength = this.textArray.length;
        // let mockupText = 'a';
        // context.font = '60px Ubuntu Mono, monospace';
        // this.fontWidth = context.measureText(mockupText).width;
        this.fontWidth = 30; // 29.999969482421875;
        this.willTraverse = true;
        this.traversePosition = 0;
        this.ticker = 0;
    }

    update(): void {

        if (this.willTraverse) {

            // Nullify positions
            this.ticker = 0;
            this.x += this.fontWidth;
            this.traversePosition += 1;
            if (this.traversePosition == this.arrayLength) {
                this.traversePosition = 0;
            }

            // Return traversed text
            this.traverseString = this.textArray[this.traversePosition];
            for (let j = 1; j < this.textWidth; j++) {
                this.traverseString += this.textArray[(this.traversePosition + j) % this.arrayLength];
            }
            this.willTraverse = false;
        }

        // Update xpos for drawing the string
        this.ticker += this.xSpeed;
        this.x -= this.xSpeed;

        // Ticker checks for fontWidth (ticker starts from 0 and font from 1 so 29, 30)  
        if (this.ticker >= this.fontWidth-1) {
            this.willTraverse = true;
        }

    }


    draw(context: CanvasRenderingContext2D): void {
        context.save();
        context.font = '60px Ubuntu Mono, monospace';
        context.fillStyle = this.color;
        context.fillText(this.traverseString, this.x, this.y);
        context.restore();
    }

}

