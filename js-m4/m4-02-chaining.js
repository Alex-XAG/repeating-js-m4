//  Chaining

const numbers = [1, 5, 2, 4, 3];

const greaterThenTwo = numbers.filter((num) => num > 2);
// console.log(greaterThenTwo);

const multByThree = greaterThenTwo.map((num) => num * 3);
// console.log(multByThree);

const sorted = multByThree.sort((prevNum, nextNum) => prevNum - nextNum);
// console.log(sorted);

//// Chaining of previos //////////
const result = numbers
  .filter((num) => num > 2)
  .map((num) => num * 3)
  .sort((prevNum, nextNum) => prevNum - nextNum);

console.log(result);

const players = [
  { id: "id-1", name: "Mango", isOnline: true, rank: 80 },
  { id: "id-2", name: "Poly", isOnline: false, rank: 600 },
  { id: "id-3", name: "Kiwi", isOnline: true, rank: 100 },
  { id: "id-4", name: "Ajax", isOnline: true, rank: 400 },
  { id: "id-5", name: "Chelsy", isOnline: false, rank: 250 },
];

const onlineByRank = players
  .filter((player) => player.isOnline)
  .sort((a, b) => a.rank - b.rank);
console.log(onlineByRank);

// Chaining in methods of object like jquery

const element = {
  class: "",
  hovered: false,
  changeClass(cls) {
    this.class = cls;

    return this;
  },
  toggleHovered() {
    this.hovered = !this.hovered;

    return this;
  },
};

element.toggleHovered().changeClass("open");
console.log(element);
