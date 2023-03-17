// Array.prototype.map()

// - Поэлементно перебирает массив
// - Не изменяет оригинальный массив
// - Возвращает новый массив такой же длинны

const numbers = [5, 10, 15, 20, 25];

const doubledNums = numbers.map((number) => {
  console.log(number);

  return number * 2;
});
// console.log("numbers ", numbers);
// console.log("doubledNums ", doubledNums);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

// Получаем массив имен всех игроков

const playerNames = players.map((player) => player.name);
// console.log("playerNames", playerNames);

const playerIds = players.map((player) => player.id);
// console.log("playerIds", playerIds);

////////// Возврат 2х и более значений через мап обычный способ и через деструктуризацию//////////

const res = players.map((player) => {
  return {
    name: player.name,
    online: player.online,
  };
});
// console.log("res ", res);

const resDestructuring = players.map(({ name, online }) => ({
  name,
  online,
}));
// console.log("res ", resDestructuring);

/////////// Увеличиваем количество юнитов каждого игррока на 10% /////////

const updatedPlayers = players.map((player) => {
  //   console.log(player);

  return { ...player, points: player.points * 1.1 };
});

// console.table(updatedPlayers);
// console.log(updatedPlayers);

const playerToUpdate = "player-3";

///////// Изменение только одного значения в 1 элементе массива /////////

const updatedPlayers1 = players.map((player) => {
  //   console.log(player.id);
  if (playerToUpdate === player.id) {
    // console.log('Вот мы нашли нужный элеимент для обновления');

    return {
      ...player,
      timePlayed: player.timePlayed + 100,
    };
  }

  return player;

  // return playerToUpdate === player.id ? {
  //     ...player,
  //     timePlayed: player.timePlayed + 100,
  // } : player;
});

// console.table(updatedPlayers1);
// console.log(updatedPlayers1);
