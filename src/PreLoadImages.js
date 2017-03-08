var PreLoadImages = (function () {
    function PreLoadImages() {
        this.loadedImages = 0;
        this.numberOfImages = 0;
    }
    PreLoadImages.prototype.getNumberOfSources = function (sources) {
        this.numberOfImages = 0;
        for (var src in sources) {
            this.numberOfImages += 1;
        }
    };
    /**
     * tässä tarkoituksena on ladata jokainen image tauluun.
     *
     */
    PreLoadImages.prototype.loadImages = function (sources) {
        // for (var src in sources) {
        //     images[src] = new Image();
        //     images[src].onload = function () {
        //         if (++this.loadedImages >= this.numImages) {
        //             this.callback(this.images);
        //         }
        //     };
        //     images[src].src = sources[src];
        // }
    };
    PreLoadImages.prototype.printNumberOfSources = function () {
        console.log(this.numberOfImages);
    };
    return PreLoadImages;
}());
var preLoad = new PreLoadImages();
var sources = {
    darthVader: 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg',
    yoda: 'http://www.html5canvastutorials.com/demos/assets/yoda.jpg',
    amiga: 'http://moparx.com/files/images/Amiga_1000_Logo.jpg',
    c64: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Commodore64.png'
};
preLoad.getNumberOfSources(sources);
preLoad.printNumberOfSources();
console.log(sources.darthVader);
sources.jaahas = 'Ok';
console.log(sources.jaahas);
preLoad.getNumberOfSources(sources);
preLoad.printNumberOfSources();
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
