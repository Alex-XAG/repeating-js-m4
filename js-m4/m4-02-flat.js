// Array.prototype.flat(callback)
// - Разглаживает массив до указанной глубины
// - По умолчанию глубина 1

const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
console.log(array.flat(3)); // [1,2,3,4,5,6,7,8,9]

// Array.prototype.flatMap(callback)

//  Комбинация map + flat

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []); // Write decision!!!!!
// console.log(allTags);

// const tagsStats2 = allTags.reduce(
//   (acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }),
//   {}
// );

const tags = tweets.map((tweet) => tweet.tags).flat();
const tagsFlatMap = tweets.flatMap((tweet) => tweet.tags);
const stats1 = tagsFlatMap.reduce(
  (acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }),
  {}
);
console.log(tags);
console.log(stats1);

//////////// flat + reduce() ////////

const stats = tweets
  .flatMap((tweet) => tweet.tags)
  .reduce((acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }), {});
console.log(stats);
