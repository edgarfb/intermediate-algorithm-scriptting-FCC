// Descomponer el numero en unidad, decena, centena ... etc;

// asignar a cada numero su correspordiente en Romano


// concatenar los Num Romanos y retornar


function convertToRoman(num) {
    
    let str = num.toString().split('');
    let n = str.map(el => +el);
    console.log(n)
    let roman = [];
    let oneToNine = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    let tenToHundred = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    let hundredToKilo = ['C', 'CC', 'CCC', 'CD' , 'D', 'DC', 'DCC', 'DCCC', 
    'CM'];
    let kiloTo4000 = ['M', 'MM' , 'MMM'];
    if(num < 10) {
        return oneToNine[num -1];
    }
    else if(num < 100) {
        console.log(n);
        roman.push(tenToHundred[n[0] - 1]);
        roman.push(oneToNine[n[1] - 1]);
        return roman.join('');
    }
    else if(num < 1000) {
        roman.push(hundredToKilo[n[0] - 1]);
        roman.push(tenToHundred[n[1] - 1]);
        roman.push(oneToNine[n[2] - 1]);
        return roman.join('');
    }
    else if(num < 4000) {
        roman.push(kiloTo4000[n[0] - 1]);
        roman.push(hundredToKilo[n[1] - 1]);
        roman.push(tenToHundred[n[2] - 1]);
        roman.push(oneToNine[n[3] - 1]);
        return roman.join('');
    }
    else return 'Hail, Caesar, those who are not able to convert this number salute you!👋';
   
   }


   
console.log(convertToRoman(633349));

// Roman Numeral Converter
// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.