//задание 1

// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];
 
//  people.sort((a, b) => a.age - b.age);
//  console.log(people);

//задание 2

// function filter(arr, ruleFunction) {
//     return arr.map(item => {
//        if (ruleFunction(item)) {
//           return item;
//        }
//     }).filter(Boolean);
//  }
 
//  function isPositive(num) {
//     return num > 0;
//  }
 
//  function isMale(person) {
//     return person.gender === 'male';
//  }
 
//  console.log(filter([3, -4, 1, 9], isPositive)); 
 
//  const people = [
//     {name: 'Глеб', gender: 'male'},
//     {name: 'Анна', gender: 'female'},
//     {name: 'Олег', gender: 'male'},
//     {name: 'Оксана', gender: 'female'}
//  ];
 
//  console.log(filter(people, isMale)); 

//задание 3
// let counter = 0;

// const intervalId = setInterval(() => {
//    console.log(new Date());
//    counter += 3;

//    if (counter >= 30) {
//       clearInterval(intervalId);
//       console.log('30 секунд прошло');
//    }
// }, 3000);

//задание 4

// function delayForSecond(callback) {
//     setTimeout(callback, 1000); 
//   }
  
//   delayForSecond(function() {
//     console.log('Привет, Глеб!');
//   });

//задание 5

// function delayForSecond(cb) {
//     setTimeout(() => {
//       if (cb) {
//         cb();
//       }
//       console.log('Прошла одна секунда');
//     }, 1000);
//   }
  
//   function sayHi(name) {
//     console.log(`Привет, ${name}!`);
//   }
  
//   delayForSecond(() => sayHi(`Глеб`));
