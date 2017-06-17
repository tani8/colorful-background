var used = [];

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for( var i = 0; i < 6; i++ ) {
        color += letters[Math.floor( Math.random() * 16 )];
    }
    return color;
}

function setRandomColor() {
    var background = document.getElementsByTagName( 'main' )[0];
    var newColor = getRandomColor();

    if( used.includes( newColor ) ) {
        newColor = getRandomColor();
    }

    background.style.backgroundColor = newColor;
    used.push( newColor );
}

var changeBackground = setInterval( setRandomColor, 1000 );

setTimeout( function() {
    clearInterval( changeBackground );
}, 10000 );