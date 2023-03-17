console.dir(_); //
//
// isEmpty()

// console.log(_.isEmpty({}));
// console.log(_.isEmpty({ a: 1 }));

// get()

const user = {
  name: "Mango",
  //   location: {
  //     coords: [1, 2],
  //     city: "Kyiv",
  //   },
};

console.log(_get(user, "location.city")); // Если локацию не указали вернет undefined
console.log(user.location.city); // Если локацию не указали, то код упадет (error)

// - user && user.location && obj.location.city

if (user && user.location && user.location.city) {
  console.log(user.location.city);
} // если локацию не указали пропустит и пойдет дальше

// - user?.location?.city //////////////////////////////////////////////

console.log(user?.location?.city);

//  union()

console.log(_.union([1, 2, 3], [3, 4, 5]));

// range()

// console.log(_.range([start], end, [step=1]));
console.log(_.range(1, 6, 2));

// sortBy()

const users = [
  { user: "fred", age: 48 },
  { user: "barney", age: 36 },
  { user: "fred", age: 40 },
  { user: "barney", age: 34 },
];
console.log(_.sortBy(users, ["user", "age"]));

// sum() and sumBy()

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
];

console.log(_.sum([1, 2, 3, 4, 5]));
console.log(_.sumBy(players, (player) => player.timePlayed));

// uniq() and uniqBy()
// sortedUniq() and sortedUniqBy()

// min() max()
// minBy() and maxBy()

console.log(_.minBy(players, (player) => player.timePlayed)); // { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false }

//  camelCase(string =''), capitalize(string =''), kebabCase(string =''), lowerCase(string =''), upperCase(string ='')
