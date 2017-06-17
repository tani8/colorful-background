var used = [];

function getRandomColor() {
    var color = '#';
    var letters = '0123456789ABCDEF';

    // generates random color string
    for( var i = 0; i < 6; i++ ) {
        color += letters[Math.floor( Math.random() * 16 )];
    }
    return color;
}

function setRandomColor() {
    var background = document.getElementsByTagName( 'main' )[0];
    var newColor = getRandomColor();
    // checks if generated color has already been used
    if( used.includes( newColor ) ) {
        // if yes, sets a new value for color
        newColor = getRandomColor();
    }

    background.style.backgroundColor = newColor;
    // keeps track of colors used
    used.push( newColor );
}
// changes background color every second
var changeBackground = setInterval( setRandomColor, 1000 );
// stops changing color after 10 seconds
setTimeout( function() {
    clearInterval( changeBackground );
}, 10000 );