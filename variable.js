// задание 1
// function minNumber(a, b) {
//     return (a < b) ? a : b;
// }

// console.log(minNumber(8, 4)); // 4
// console.log(minNumber(6, 6)); // 6



//задание 2
// function checkParity(number) {
//     if (number % 2 === 0) {
//         return "Число четное";
//     } else {
//         return "Число нечетное";
//     }
// }

// let number = 5;
// console.log(checkParity(number));

// number = 8;
// console.log(checkParity(number));



//задание 3.1
// function printSquare(number) {
//     console.log(number ** 2);
// }

// let number = 4;
// printSquare(number);



//задание 3.2
// function getSquare(number) {
//     return number ** 2;
// }

// let number = 4;
// console.log(getSquare(number));



//задание 4
// function greeting() {
//     const age = parseInt(prompt("Сколько вам лет? "));
//     if (age < 0) {
//         console.log("Вы ввели неправильное значение");
//     } else if (age <= 12) {
//         console.log("Привет, друг!");
//     } else {
//         console.log("Добро пожаловать!");
//     }
// }

// greeting();



//задание 5
// function mulNumbers(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return "Одно или оба значения не являются числом";
//     } else {
//         return a * b;
//     }
// }

// console.log(mulNumbers(2, 3));
// console.log(mulNumbers("two", 3));



//задание 6
// function cubeNumber() {
//     const n = prompt("Введите число: ");

//     if (isNaN(n)) {
//         return "Переданный параметр не является числом";
//     }

//     const num = parseInt(n);
//     return `${num} в кубе равняется ${num ** 3}`;
// }

// console.log(cubeNumber());




//задание 7
// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }

//     getArea() {
//         return Math.PI * this.radius ** 2;
//     }

//     getPerimeter() {
//         return 2 * Math.PI * this.radius;
//     }
// }

// const circle1 = new Circle(3);
// const circle2 = new Circle(5);

// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());

// задание 8

function season_by_month(month) {
    if (1 <= month && month <= 12) {
        if (3 <= month && month <= 5) {
            return "Весна";
        } else if (6 <= month && month <= 8) {
            return "Лето";
        } else if (9 <= month && month <= 11) {
            return "Осень";
        } else {
            return "Зима";
        }
    } else {
        return "Неправильный параметр";
    }
}

console.log(season_by_month(3));  
console.log(season_by_month(7)); 
console.log(season_by_month(11)); 
console.log(season_by_month(1)); 
console.log(season_by_month(50)); 