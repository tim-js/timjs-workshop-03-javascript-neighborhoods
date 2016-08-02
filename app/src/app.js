var APP = {
    lettersFound: [],
    currentWord: null,
    $wrapper: null,


    init(wrapper, list) {
        this.currentWord = list[this.getRandom(list.length)];
        this.$wrapper    = wrapper; 

        this.$wrapper.append('<ul>');

        this.currentWord.word.split('').forEach((letter) => {
            this.$wrapper.find('ul').append('<li>_</li>');
        });

        // $wrapper.find('ul').append( new Array(currentWord.word.length).fill('<li>_</li>').join('') );

        $('<q>')
            .text( this.currentWord.description )
            .appendTo( this.$wrapper );

        $('body').on('keyup', (e) => {
            var key = String.fromCharCode(e.which).toLowerCase();
            this.checkKey( key );
        });
    },

    checkKey(key) {
        var index = this.currentWord.word.indexOf(key);

        if ( this.currentWord.word.includes(key) ) {
            if ( this.lettersFound.includes(key) ) {
                console.log('duplicate');
            } else {
                this.lettersFound.push(key);
                console.log(`exists on position ${index}`);

                this.$wrapper.find('li:eq('+index+')').text(key);

                if ( this.lettersFound.length === this.currentWord.word.length  ) {
                    alert('GUESSED');
                }
            }
        } else {
            console.log(`letter ${key} does not exist`);
        }
    },

    getRandom(max) {
        return Math.floor(Math.random() * max);
    }
};


