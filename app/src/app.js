var words = [
    { word: 'caine', description: 'un animal care face ham ham' },
    { word: 'masa', description: 'se pun farfuriile pe ea' }
];

var lettersFound = [];
var currentWord = words[getRandom(words.length)];
var $wrapper = $('#app');

$wrapper.append('<ul>');

currentWord.word.split('').forEach(function(letter) {
    $wrapper.find('ul').append('<li>_</li>');
});

$('<q>')
    .text( currentWord.description )
    .appendTo( $wrapper );

$('body').on('keyup', function(e) {
    var key = String.fromCharCode(e.which).toLowerCase();
    checkKey( key );
});

function checkKey(key) {
    var index = currentWord.word.indexOf(key);

    if ( currentWord.word.includes(key) ) {
        if ( lettersFound.includes(key) ) {
            console.log('ati apasat deja');
        } else {
            lettersFound.push(key);
            console.log('exista', index);

            $wrapper.find('li:eq('+index+')').text(key);
            if ( lettersFound.length === currentWord.word.length  ) {
                alert('ati ghicit !!!');
            }
        }
    } else {
        console.log('nu exista');
    }
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}
