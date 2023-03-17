// Array.prototype.filter()

// - Поэлементно перебирает  оригинальный массив

// - Возвращает новый массив (с элементами или пустой)
// - Добавляет в возвращенный массив элементы, которые удовлетворяют условию коллбек-фукции
// - Если калл-бек вернул trueб элемент добавляется в возвращенный массив
// - Если колл-бек вернул false,  элемент НЕ добавляется в возвращенный массив

const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter((number) => {
//   console.log(number); // []

//   return number > 5 || number < 25;
// });

const filteredNumbers1 = numbers.filter((number) => number > 5 || number < 25);

// console.log(filteredNumbers);
// console.log(filteredNumbers1);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
];

///////// Получаем массив игроков, которые онлайн ///////

// const onlinePlayers = players.filter((player) => {
//   return player.online === true;
// });

const onlinePlayers = players.filter(({ online }) => online); // destructuring

// console.table(onlinePlayers);

// ////// Получаем массви всех оффлайн игроков /////////

const offlinePlayers = players.filter((player) => !player.online);

// console.table(offlinePlayers);

// ///////////// Плучаем список хардкорных игроков с временем больше 250 ///////////////////

// const hardcorePlayers = players.filter((player) => {
//     return player.timePlayed > 250;
// });

const hardcorePlayers = players.filter((player) => player.timePlayed > 250);
console.table(hardcorePlayers);
