// Функция, результатом своей работы может возвращать другую функию.

// Возвращаемая функция во время вызова будет иметь доступ ко всем
// локальным переменным(области видимости) родительской
// фукции(той из которой ее вернули),
//  это называется ЗАМЫКАНИЕ!!!

const fnA = function (parameter) {
  const innerVariable = "Значение внутренней переменной функции fnA";

  const innerFunction = function () {
    console.log(parameter);
    console.log(innerVariable);
    console.log("This is call of innerFunction");
  };

  return innerFunction;
};

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

///////// Поваренок //////////////

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish("Mango", "пирожок");
// makeDish("Mango", "омлет");
// makeDish("Mango", "чай");

// makeDish("Poly", "котлеты");
// makeDish("Poly", "супчик");
// makeDish("Poly", "кофе");

const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} готовит ${dish}`);
  };

  return makeDish;
};

// const mango = makeSheff("Mango");

// mango("котлеты");
// mango("пирожок");

// const poly = makeSheff("Poly");
// poly("чай");

// ///////// Округлятор ///////////

const floatingPoint = 3.456789;
const someInt = Math.round(floatingPoint);
const withDecimals = Number(floatingPoint.toFixed(2));

// /////// without closure //////////

// const rounder = function (number, places) {
//   return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.4567, 2));
// console.log(rounder(5.4567, 3));

// //////// With Closure /////////

const rounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.4567));
// console.log(rounder3(3.4567));
// console.log(rounder2(5.4567));
// console.log(rounder3(5.4567));

// function rounder(places) {
//   return function (num) {
//     return Number(num.toFixed(places));
//   };
// }

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// rounder2(floatingPoint);// 3.46
// rounder3(floatingPoint);// 3.457

// ////// Private data and functions - Скрытие реализации, интерфейс ///////////

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
  let salary = baseSalary;

  const changeBy = function (amount) {
    salary += amount;
  };

  return {
    raise(amount) {
      changeBy(amount);
    },
    lower(amount) {
      changeBy(amount);
    },
    current() {
      return `Ткущая зарплата ${employeeName} - ${salary}`;
    },
  };
};

const salaryManager = salaryManagerFactory("Mango", 5000);
console.log(salaryManager.current());
