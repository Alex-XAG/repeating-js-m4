// Array.prototype.find()

// - Поэлементно перебирает  оригинальный массив

// - Возвращает первый элемент удовлетворяющий условию или undefined

const numbers = [5, 10, 15, 20, 25];

const number = numbers.find((number) => number === 10);
console.log(number);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
];

///////// Find player bu id ////////

const playerToFind = "player-3";

const playerWithId = players.find((player) => player.id === playerToFind);
// console.log(playerWithId);

// ////////////////////// Usage in function //////////////

// const findPlayerById = (allPlayers, playerId) => {
//   return allPlayers.find((player) => player.id === playerId);
// };

const findPlayerByIdCorrect = (allPlayers, playerId) =>
  allPlayers.find(({ id }) => id === playerId);

// console.log(findPlayerByIdCorrect(players, "player-3"));
// console.log(findPlayerByIdCorrect(players, "player-5"));

// console.log(findPlayerById(players, 'player-1'));

////////// Look player by name ////

const playerNameToFind = "Poly";

const playerWithName = players.find(
  (player) => player.name === playerNameToFind
);

console.log(playerWithName);
