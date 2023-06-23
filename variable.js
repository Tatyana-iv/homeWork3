//задание 1

// const arr = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   if (arr[i] === 10) {
//     break;
//   }
// }


//задание 2

// const arr = [1, 5, 4, 10, 0, 3];
// const index = arr.indexOf(4);
// console.log(index);


//задание 3

// const arr = [1, 3, 5, 10, 20];
// const str = arr.join(' ');
// console.log(str); 


//задание 4

// const arr = [];
// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 3; j++) {
//     arr[i][j] = 1;
//   }
// }
// console.log(arr);


//задание 5

// const arr = [1, 1, 1];
// arr.push(2, 2, 2);
// console.log(arr); 


//задание 6

// const arr = [9, 8, 7, 'a', 6, 5];
// arr.sort();
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 'a') {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr); 


//задание 7

// const arr = [9, 8, 7, 6, 5];
// const guess = parseInt(prompt('Угадайте число'));
// if (arr.includes(guess)) {
//   alert('Угадал');
// } else {
//   alert('Не угадал');
// }


//задание 8

// const str = 'abcdef';
// const reversedStr = str.split('').reverse().join('');
// console.log(reversedStr);

//задание 9

// const arr = [[1, 2, 3], [4, 5, 6]];
// const newArr = arr.flat();
// console.log(newArr);

//задание 10

// const arr = [1, 3, 2, 4, 5, 7, 6, 8, 9, 10];
// for (let i = 0; i < arr.length - 1; i++) {
//   console.log(arr[i] + arr[i + 1]);
// }

//задание 11

// function squareArray(arr) {
//     const newArr = arr.map(num => num ** 2);
//     return newArr;
//   }
//   const arr = [1, 2, 3, 4, 5];
//   const squaredArr = squareArray(arr);
//   console.log(squaredArr); 

//задание 12

// function getLengthWords(arr) {
//     const newArr = arr.map(word => word.length);
//     return newArr;
//   }
//   const arr = ['слово', '', 'слог', 'длинное предложение', 'буква'];
//   const lengthArr = getLengthWords(arr);
//   console.log(lengthArr);

//задание 13

// function filterPositive(arr) {
//     const filteredArr = arr.filter(num => num < 0);
//     return filteredArr;
//   }
//   const arr = [-1, 0, 5, -10, 56];
//   const filteredArr = filterPositive(arr);
//   console.log(filteredArr); 
//   const arr2 = [-25, 25, 0, -1000, -2];
//   const filteredArr2 = filterPositive(arr2);
//   console.log(filteredArr2); 