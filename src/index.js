const { lte } = require("semver");

module.exports = function toReadable (number) {
  let string = '';
  let arrOfNumbersLess20 = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
    ];
    let arrOfTens = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];
    let hundred = Math.floor(number / 100);
    let numberLess100 = number % 100;
    let ten = Math.floor(numberLess100 / 10);
    let ones = numberLess100 % 10;

    if (hundred) {
        string = arrOfNumbersLess20[hundred] + ' hundred';
    }

    if (numberLess100 < 20 && numberLess100 > 0) {
        return string = string ? `${string} ${arrOfNumbersLess20[numberLess100]}` : arrOfNumbersLess20[numberLess100];
    } else {
        if (ten) {
            string = string ? `${string} ${arrOfTens[ten]}` : arrOfTens[ten];
        }        

        if (ones) {
            string = string ? `${string} ${arrOfNumbersLess20[ones]}` : arrOfNumbersLess20[ones];
        } else {
            string = string ? string : arrOfNumbersLess20[ones];
        }
        return string;
    }
}
