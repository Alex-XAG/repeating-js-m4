// Array.prototype.forEach(callback(currentValue, index, array), thisArg);

// - Пэлементно перебирает массив
// - Ничего не возвращает
// - Заменяет классический  фор, если не нужно прерывать цикл.

const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number, index, array) {
//   console.log("number ", number);
// }); // parameters index and array use not often!!!!!!!!

numbers.forEach(function (number) {
  console.log("number ", number);
});

console.log(numbers);
