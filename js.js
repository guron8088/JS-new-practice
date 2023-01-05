'strict';

/* if (4==4) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

const num = 50;

(num === 50) ? console.log('Ok!') : console.log('Error'); */

const num = 50;
// switch конструкци котора поддерживает проверку нескольких  условий
switch (num) {
    case 49:
        console.log('неверно');
        break;
    case 100:
        console.log('неверно');
        break;
    case 50:
        console.log('В точку!');
        break;
    default: 
        console.log('Не в этот раз');
        break;
    
}