/**
 * Circular iteration algorithm
 */

var scrolltext = "Okay this is okay. At least the wrapping works .............. ";
var scrolltextArray = scrolltext.split('');
var arrayLength = scrolltextArray.length;
var scrolltextWidth = 20;

for (var myLoop = 0; myLoop < 4; myLoop += 1) {
    for (var i = 0; i < arrayLength; i++) {
        var str = scrolltextArray[i];
        for (var j = 1; j < scrolltextWidth; j++)
            str += scrolltextArray[(i + j) % arrayLength]; // you could push to an array as well
        console.log(str);
    }
}
