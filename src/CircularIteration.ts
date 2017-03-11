/**
 * Circular iteration algorithm
 */

// TODO: Make class


export class CircularIteration {

    private scrolltext: string = "Here...";
    private scrolltextArray: Array<string> = this.scrolltext.split('');
    private arrayLength: number = this.scrolltextArray.length;
    private scrolltextWidth: number = 60;

    public init(scrolltext: string, scrolltextWidth: number) {
        this.scrolltext = scrolltext;
        this.scrolltextArray = this.scrolltext.split('');
        this.arrayLength = this.scrolltextArray.length;
        this.scrolltextWidth = scrolltextWidth;
    }

    public iterate(): void {
        for (let i = 0; i < this.arrayLength; i++) {
            let str: string = this.scrolltextArray[i];
            for (let j = 1; j < this.scrolltextWidth; j++)
                str += this.scrolltextArray[(i + j) % this.arrayLength]; // you could push to an array as well
            console.log(str);
            // console.log('Get Character Width')
            // console.log('Scroll Width amount pixels');
            // TODO: Determine the width of last letter in the array and take number to counter
            // TODO: text.draw(str)
            // TODO: scroll the defined pixels - then go back.
            // Eli tämä pitää jotenkin hoitaa updaten kautta.
            // eka looppi vie arrayssa yhden askeleen eteenpäin ++ (while(i=>arraylength)
            // toka looppi ottaa tekstin pätkän
            // sitten tulee draw osuus, johon teksti, jossa skrollataan counterin verran ja sitten
            // lisätään taas i++
            // update on siis i++, for j ja counterin selvittäminen
            // draw on pelkästään .x--
        }
    }
}

let iteration: CircularIteration = new CircularIteration();
iteration.iterate();

