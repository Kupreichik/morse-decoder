const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let splitExpr = [];
    for( let i = 0; i < expr.length; i += 10 ) {
        splitExpr.push(expr.slice(i, i + 10))
    };

    splitExpr = splitExpr.map( item => {
        let str = '';
        if( item == '**********') {
            return item = ' ';
        } else {
            for( let i = 0; i < item.length; i += 2) {
            (item[i] + item[i+1] == '10') ? str += '.' :
                    (item[i] + item[i+1] == '11') ? str += '-' : str;
            };
            return item = str;
        }
    });
    console.log(splitExpr);

    let exprDecoded = splitExpr.map(item => {
        return MORSE_TABLE[item] ? item = MORSE_TABLE[item] : item;
    });

    return exprDecoded.join('');
}

module.exports = {
    decode
}