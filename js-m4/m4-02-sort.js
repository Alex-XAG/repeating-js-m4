// Array.prototype.sort
// - Сортируем и ИЗМЕНЯЕТ оригинальный массив
// - По умолчанию:
//     - сортирует по возростанию
//     - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)

const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log('numbers ', numbers);

const letters = ["b", "B", "a", "A"];
// letters.sort();
// console.log("letters", letters);

// compareFunction() -функция сравнения (callback)
// - Элементы массива сортируются в соответствии с ее возвращаемым значением
// - если compareFunction(А, В) меньше 0, сортировка поставит А перед В
// - если compareFunction(А, В) больше 0, сортировка поставит В перед А
// - если compareFunction(А, В) вернет 0, сортировка поставит А и В  неизменными
// по отношению друг к другу, но отсортирует их по отношениюко всем другим элементам

numbers.sort((currEl, nextEl) => {
  return currEl - nextEl; // сортировка по возрастанию
  return nextEl - currEl; // сортировка по убыванию
});

// console.log(numbers);

// Как сделать копию массива чтобі не сортировать оригинальній
// - Array.prototype.slice()
// - spread operation

const copy = [...numbers];
copy.sort();
// console.log(numbers);
// console.log(copy);

const ascSortedNumbers = [...numbers].sort(); /// По возрастанию
const ascSortedNumbers1 = [...numbers].sort((a, b) => b - a); // По убыванию
// console.log(ascSortedNumbers);
// console.log(ascSortedNumbers1);

// Кастомная сортировка сложных типов ///////////////

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

// ////// sort By timePlayed //////////////

const sortedByBestPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
);
// console.log(sortedByBestPlayers);

const sortedByWorstPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
);
// console.log(sortedByWorstPlayers);

// const byName = [...players].sort((a, b) => {
//   console.log(a.name[0]);
//   console.log(b.name[0]);
//   console.log(a.name[0] - b.name[0]);
//   return a.name[0] - b.name[0];
// }); ////  NaN !!!!!!!!!!!!!!!!!!!!!!!!

// console.log(byName); ////  NaN !!!!!!!!!!!!!!!!!!!!!!!!

const byName = [...players].sort((a, b) => {
  const result = a.name[0] > b.name[0];

  if (result) {
    return 1;
  }
  if (!result) {
    return -1;
  }
});
console.log(byName);
