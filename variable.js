// Задание 1
// let str = 'js';
// let upperCaseStr = str.toUpperCase();
// console.log(upperCaseStr); 


// // Задание 2
// function searchStart(arr, str) {
//   let result = arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
//   return result;
// }

// console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); 
// console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); 
// console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); 


// // Задание 3
// let num = 32.58884;
// console.log(Math.floor(num));
// console.log(Math.ceil(num)); 
// console.log(Math.round(num)); 


// // Задание 4
// let numbers = [52, 53, 49, 77, 21, 32];
// let minNumber = Math.min(...numbers);
// let maxNumber = Math.max(...numbers);

// console.log(`Наименьшее число: ${minNumber}`);
// console.log(`Наибольшее число: ${maxNumber}`);


// // Задание 5
// function getRandomNumber() {
//   let randomNum = Math.floor(Math.random() * 10) + 1;
//   console.log(randomNum);
// }

// getRandomNumber(); // выводит рандомное число от 1 до 10


// // Задание 6
// function getRandomArrNumbers(num) {
//   let arr = [];
//   let len = Math.floor(num / 2);
//   for (let i = 0; i < len; i++) {
//     arr.push(Math.floor(Math.random() * (num + 1)));
//   }
//   return arr;
// }

// console.log(getRandomArrNumbers(7)); 
// console.log(getRandomArrNumbers(12)); 



// // Задание 7
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomInt(1, 10)); 


// // Задание 8
// let currentDate = new Date();
// console.log(currentDate.toLocaleString()); 

// // Задание 9
// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate.toLocaleDateString()); 


// // Задание 10
// function formatDate(date) {
//     const months = [
//         "января", "февраля", "марта",
//         "апреля", "мая", "июня", "июля",
//         "августа", "сентября", "октября",
//         "ноября", "декабря"
//     ];

//     const days = [
//         "воскресенье", "понедельник", "вторник", "среда",
//         "четверг", "пятница", "суббота"
//     ];

//     let dayOfWeek = days[date.getDay()];
//     let dayOfMonth = date.getDate();
//     let month = months[date.getMonth()];
//     let year = date.getFullYear();

//     let hours = String(date.getHours()).padStart(2, '0');
//     let minutes = String(date.getMinutes()).padStart(2, '0');
//     let seconds = String(date.getSeconds()).padStart(2, '0');

//     return `Дата: ${dayOfMonth} ${month} ${year} - это ${dayOfWeek}. Время: ${hours}:${minutes}:${seconds}`;
// }

// let date = new Date(); 
// console.log(formatDate(date));