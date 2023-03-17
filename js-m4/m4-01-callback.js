//// Function callback/////////

// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);

//   callback(100);
// };

// const fnB = function (number) {
//   console.log("This is log in call fnB!", number);
// };

// fnA("qweqwe", fnB);

//// function doMath(a, b, callback)////////

const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);
}; // reusable code!!!!!!

// const add = function (x, y) {
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };

// doMath(2, 4, add);
// doMath(10, 8, sub);

// // doMath(2, 4, function (x, y) {
//   return x + y;
// });  inline function or anonym function/////////////////////////////////
// // doMath(10, 8, function (x, y) {
//   return x - y;
// });

// Callback: registration of events!!!!!!!!!!!!!!!!!!!!

const buttonRef = document.querySelector(".js-button");

const btnClickHandler = function () {
  console.log("Click in button!!!");
};

buttonRef.addEventListener("click", btnClickHandler); /// Or we can do inline function!!!

// function addEventListener (eventType, callback) {
//     if (eventType == event) {
//         callback();
//     }
// }

/////////// Callback: geolocation //////////////////////////

// const getPositionSuccessHandler = function (position) {
//   console.log("Это вызов getPositionSuccessHandler");
//   console.log(position);
// };

// const getPositionErrorHandler = function (error) {
//   console.log("Это вызов getPositionErrorHandler");
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   getPositionSuccessHandler,
//   getPositionErrorHandler
// );

/// Callback: intervals////////////////

// const callback = function () {
//   console.log("In 2 seconds in callback in timeout");
// };

// console.log("In code before timeout");

// setTimeout(callback, 2000);

// console.log("In the code after timeout");

//////// Callback: http - query ///////////////////////
//  - API URL: https://pokeapi.co/api/v2/pokemon

const requestSuccessHandler = function (response) {
  console.log(
    "Call of function requestSuccessHandler after success response of backend"
  );
};

// fetch("https://pokeapi.co/api/v2/pokemon")
//   .then((res) => res.json())
//   .then(requestSuccessHandler);

// console.log('before fetch');
// console.log('after fetch');

//////// Filter ///////

const filter = function (array, test) {
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

// 1. It need to give function
// 2. function take el of array
// 3. If element of array satisfies condition, function return true
// 4. If element of array don`t satisfy condition, function return false

const callback1 = function (value) {
  return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], function (value) {
  return value <= 4;
});
console.log(r2);

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];

const r3 = filter(fruits, function (fruit) {
  return fruit.quantity >= 120;
}); // In this decision I used inline callback because the callback is a little function
console.log(r3);
