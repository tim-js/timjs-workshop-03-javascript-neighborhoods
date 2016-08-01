var words = [
    { word: 'caine', description: 'un animal care face ham ham' },
    { word: 'masa', description: 'se pun farfuriile pe ea' }
];

var lettersFound = [];
var currentWord = words[getRandom(words.length)];
var $wrapper = $('#app');

init();

function init() {
    $wrapper.append('<ul>');

    currentWord.word.split('').forEach(function(letter) {
        $wrapper.find('ul').append('<li>_</li>');
    });

    // $wrapper.find('ul').append( new Array(currentWord.word.length).fill('<li>_</li>').join('') );

    $('<q>')
        .text( currentWord.description )
        .appendTo( $wrapper );

    $('body').on('keyup', function(e) {
        var key = String.fromCharCode(e.which).toLowerCase();
        checkKey( key );
    });
}

function checkKey(key) {
    var index = currentWord.word.indexOf(key);

    if ( currentWord.word.includes(key) ) {
        if ( lettersFound.includes(key) ) {
            console.log('duplicate');
        } else {
            lettersFound.push(key);
            console.log(`exists on position ${index}`);

            $wrapper.find('li:eq('+index+')').text(key);

            if ( lettersFound.length === currentWord.word.length  ) {
                alert('GUESSED');
            }
        }
    } else {
        console.log(`letter ${key} does not exist`);
    }
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}
