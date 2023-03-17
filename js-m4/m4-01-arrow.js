//  Стрелочные функции
//  - Объявление
// - Явный и неявный возврат
// - Аргументы
// - неявный возврат объекта

// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };

// const addArrow = (a, b, c) => {
//   //   console.log(arguments);// аргументов у стрелки нет, добраться через ...args  (rest)
//   return a + b + c;
// }; // Явный возврат

// console.log(add(5, 10, 15));

// const addArrow = a => {
//   console.log(a, b, c);
//   return a + b + c;
// }; // при 1 параметре скобки в параметрах не обязательны, при отсутствии параметров, поставить пустые кругл скобки

// const addArrow = (a, b, c) => a + b + c; // Неявный возврат

const fnA = function () {
  return {
    a: 5,
  };
};

const arrowFnA = () => {
  return {
    a: 5,
  };
};

// const arrowFnA = () => ({ a: 5 });// Неявный возврат объекта в стрелке записывается в круглый скобках, т.к. если без, то она воспринимает фигрные скобки как литерал начала функции и внутренности как тело функции

const filter = (array, test) => {
  const filteredArray = [];

  for (const el of array) {
    console.log(el);
    // console.log(test(el));
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

const callback1 = (value) => value >= 3; //  Вместо 3х строчек кода, получили 1 строчку!!!!!

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], (value) => value <= 4);
console.log(r2);

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];

const r3 = filter(fruits, (fruit) => fruit.quantity >= 120); // In this decision I used inline callback because the callback is a little function
console.log(r3);
