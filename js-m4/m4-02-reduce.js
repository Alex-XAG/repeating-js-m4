// Array.prototype.reduce()
// - Поэлементно перебирает оригинальный массив
// - Возвращает что угодно
// - Замняет все на свете, но использовать нужно с умом

const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//   console.log("value ", number);
//   console.log("acc ", acc);

//   return acc + number;
// }, 0); // full decision!!!!!

const total = numbers.reduce((acc, number) => acc + number, 0); // Short decision !!!!!

// console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 0 -> number = 5 -> return 5 + 10
// accumulator = 0 -> number = 5 -> return 15 + 15
// accumulator = 0 -> number = 5 -> return 30 + 20
// accumulator = 0 -> number = 5 -> return 50 + 25

// ////// Count total salary //////

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce(
  (total, value) => total + value,
  0
);
// console.log(totalSalary);

// ///// Counting of total quantity hours ////////

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
];

const totalTimePlayed = players.reduce(
  (totalTime, player) => totalTime + player.timePlayed,
  0
);
// console.log(totalTimePlayed);

/////// Count total sum of products cart /////////

const cart = [
  {
    label: "Apple",
    price: 100,
    quantity: 2,
  },
  {
    label: "Bananas",
    price: 120,
    quantity: 3,
  },

  {
    label: "Lemons",
    price: 70,
    quantity: 4,
  },
];

const totalAmount = cart.reduce(
  (totalAmount, { price, quantity }) => totalAmount + price * quantity,
  0
);
console.log(totalAmount);

//////// Take all tags from tweets ////////

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// const allTags = tweets.reduce((tags, tweet) => {
//   //   console.log(acc);
//   //   console.log(...tweet.tags);

//   //   return tags.push(...tweet.tags); //m4-02-reduce.js:96 Uncaught TypeError: tags.push is not a function

//   //   tags.push(...tweet.tags);
//   //   return tags; // Работает, но котролер будет ругаться.....!!!!!!!

//   return [...tags, ...tweet.tags]; // Write decision!!!!!!!!
// }, []);

const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []); // Write decision!!!!!

console.log(allTags);

//  Ведем статистику тегов ////////////

// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }
//   acc[tag] = 1;

//   return acc;
// }, {});
// console.log(tagsStats);

/////////////////////////////////////////////////////////////////////////////
const tagsStats1 = allTags.reduce((acc, tag) => {
  //   console.log(acc);

  if (acc[tag]) {
    acc[tag] += 1;

    return { ...acc, [tag]: acc[tag] + 1 };
  }
  acc[tag] = 1;

  return { ...acc, [tag]: 1 };
}, {});
// console.log(tagsStats1);

// ///////////////////////////////////////////////////////

// const tagsStats2 = allTags.reduce((acc, tag) => {
//   console.log(acc);
//   return { ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 };
// }, {});
// console.log(tagsStats2);

const tagsStats2 = allTags.reduce(
  (acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }),
  {}
);
console.log(tagsStats2);
