/*Напишите функцию JavaScript, которая возвращает 
переданную строку с буквами в алфавитном порядке. */

function alphabetOrder(str) {
    return str.split('').sort().join('');
}

let strUnord = 'zsaqtreaotafgylk';
console.log('Ordered string: ', alphabetOrder(strUnord));

/*Напишите функцию JavaScript, которая принимает строку 
в качестве параметра и находит самое длинное слово в строке. */

function findLongestWord(str) {
   
    let array = str.match(/\w[a-z]{0,}/gi);
    let word = array[0];

        for(let i = 0; i < array.length; i++) {
            if (word.length < array[i].length) {
                word = array[i];
            }
        }
        return word;
    }

let strLongestWord = 'It is a string';
console.log('The longest word is: ', findLongestWord(strLongestWord));