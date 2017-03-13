import '../css/textscroller.css';

export class Text {
    // Placement
    xArr: Array<number> = [0];
    yArr: Array<number> = [0];
    sinArr: Array<number> = [0];
    phases: Array<number> = [0];
    iterator: number = 0;
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
    traverseArray: Array<string> = [''];

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

            let iterator: number;
            // Nullify positions
            this.ticker = 0; // skrollaus aloitetaan alusta

            this.traversePosition += 1; // otetaan uusi aloituskohta stringille
            if (this.traversePosition == this.arrayLength) {
                this.traversePosition = 0;
            }

            // Return traversed text
            this.traverseString = this.textArray[this.traversePosition];
            for (let i = 1; i < this.textWidth; i++) {
                this.traverseString += this.textArray[(this.traversePosition + i) % this.arrayLength];
                this.xArr[i] = (i * this.fontWidth) - 50; // levitetään ruudun leveydelle
                let myMath: number;
                myMath = Math.sin(this.iterator + this.phases[i]);
            }
            this.willTraverse = false;
            this.traverseArray = this.traverseString.split('');
        }

        for (var i: number = 0; i < this.textWidth; i += 1) {
            this.xArr[i] -= this.xSpeed;
            this.iterator += .0020;
            this.yArr[i] = 117 + (Math.sin(this.iterator + this.xArr[i] / 90) * 50);
        }

        this.iterator += .0020;

        this.ticker += this.xSpeed;



        // Ticker checks for fontWidth (ticker starts from 0 and font from 1 so 29, 30)  
        if (this.ticker >= this.fontWidth - 1) {
            this.willTraverse = true;
        }
    }


    draw(context: CanvasRenderingContext2D): void {
        for (let i: number = 0; i < this.textWidth; i += 1) {
            context.save();
            context.font = '60px Ubuntu Mono, monospace';
            context.fillStyle = this.color;
            context.fillText(this.traverseArray[i], this.xArr[i], this.yArr[i]);
            context.restore();
        }
    }

}
