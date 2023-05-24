/**Написать функцию для поздравления с днем рождения 
 * если введенная дата пользователем равна сегоднешней! */
function congrBirthday(){
    let usersDate = Number(prompt("Enter your date of birth", "00"));
    let usersMonth = Number(prompt("Enter your month of birth", "00"));
    let date = new Date();
    let currentDate = date.getDate();
    let currentMonth = date.getMonth();

        if(usersDate == currentDate && usersMonth == currentMonth + 1) {
        document.getElementById('congr').innerHTML = "Congratulations! Today is your birthday!";
        } else {
            document.getElementById('congr').innerHTML = "Today isn't your birthday";
        }       
}


