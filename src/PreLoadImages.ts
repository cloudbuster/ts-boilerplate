class PreLoadImages {
    images = <any>{};
    loadedImages: number;
    numberOfImages: number;

    constructor() {
        this.loadedImages = 0;
        this.numberOfImages = 0;
        this.images = <any>{};
    }

    getNumberOfSources(sources: {}): void {
        this.numberOfImages = 0;
        for (var src in sources) {
            this.numberOfImages += 1;
        }
    }

    // ekana injektoidaan objekti
    loadImages(sources: {}): void {
        // src on indeksi, sourcesin läpi iteroidaan
        for (var src in sources) {
            // jokaisella iteroinnilla laitetaan uusi 
            // key, joka on src mutta onko se numero?
            // key pariksi laitetaan uusi image
            this.images[src] = new Image();
            // sitten se sama ladattaessa
            this.images[src].onload = function () {
                if (++this.loadedImages >= this.numImages) {
                    this.callback(this.images);
                }
            };
            this.images[src].src = sources[src];
        }
    }


    printNumberOfSources() {
        console.log(this.numberOfImages);
    }

}

let preLoad: PreLoadImages = new PreLoadImages();

var sources = <any>{
    darthVader: 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg',
    yoda: 'http://www.html5canvastutorials.com/demos/assets/yoda.jpg',
    amiga: 'http://moparx.com/files/images/Amiga_1000_Logo.jpg',
    c64: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Commodore64.png'
};

sources.okay = 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Commodore64.png';





/*

function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for (var src in sources) {
        numImages++;
    }

    for (var src in sources) {
        images[src] = new Image();
        images[src].onload = function () {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var sources = {
    darthVader: 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg',
    yoda: 'http://www.html5canvastutorials.com/demos/assets/yoda.jpg'
};

loadImages(sources, function (images) {
    context.drawImage(images.darthVader, 100, 30, 200, 137);
    context.drawImage(images.yoda, 350, 55, 93, 104);
});

*/