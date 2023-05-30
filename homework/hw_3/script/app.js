/**Написать программы, которая ищет на основе запроса пользователя (prompt) 
 * и изменяет найденное значение внутри массива. */

let item = prompt('Enter the country you are looking for (ex. England)');
let array = ['Brazil', 'England', 'Germany', 'Belarus', 'Italy'];
let newItem = array.indexOf(item, 0);

alert(array.indexOf(item, 0));

document.getElementById('currentArray').innerHTML = array;
array[newItem] = prompt("Enter the new country");
document.getElementById('searchItem').innerHTML = array;




