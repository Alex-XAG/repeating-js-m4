// ///////// Task 4 ////////////
// Необходимо написать логику обработки заказа пиццы.Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

// Метод order объявляет три параметра
// Вызов pizzaPalace.order("Smoked", makePizza, onOrderError) возвращает "Your order is accepted. Cooking pizza Smoked."
// Вызов pizzaPalace.order("Four meats", makePizza, onOrderError) возвращает "Your order is accepted. Cooking pizza Four meats."
// Вызов pizzaPalace.order("Big Mike", makePizza, onOrderError) возвращает "Error! There is no pizza with a name Big Mike in the assortment."
// Вызов pizzaPalace.order("Vienna", makePizza, onOrderError) возвращает "Error! There is no pizza with a name Vienna in the assortment."

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],

  order(pizzaName, onSuccess, onError) {
    if (!this.pizzas.includes(pizzaName)) {
      console.log(this.pizzas.includes(pizzaName));
      return onError(
        `There is no pizza with a name ${pizzaName} in the assortment.`
      );
    }
    return onSuccess(pizzaName);
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// ///////// Task 20 ////////////

// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.
// ///////// Tests
// Объявлена переменная books
// Значение переменной books это массив объектов
// Объявлена переменная allGenres
// Значение переменной allGenres это массив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// Объявлена переменная uniqueGenres
// Значение переменной uniqueGenres это массив ["adventure", "history", "fiction", "mysticism", "horror"]
// Для вычисления значения переменной allGenders использован метод flatMap()
// Для вычисления значения переменной uniqueGenres использован метод filter()

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter(
  (genre, i, array) => i === array.indexOf(genre)
);

// ///////// Task 25 ////////////

// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

// Объявлена переменная getFriends
// Переменной getFriends присвоена стрелочная функция с параметром (users)
// Вызов функции с указанным массивом пользователей возвращает массив ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// const getFriends = (users) => {
//   const friendsOfUsers = users
//     .flatMap((user) => user.friends)
//     .filter((friend, i, array) => array.indexOf(friend) === i);

//   return friendsOfUsers;
// };

const getFriends1 = (users) =>
  users
    .flatMap((user) => user.friends)
    .filter((friend, i, array) => array.indexOf(friend) === i);

// ///////// Task 38 ////////////

//     Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

// Объявлена переменная releaseDates
// Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Объявлена переменная authors
// Значение переменной authors это массив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
// Объявлена переменная ascendingReleaseDates
// Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Объявлена переменная alphabeticalAuthors
// Значение переменной alphabeticalAuthors это массив ["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]
// Использован метод sort()

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

// ///////// Task 41 ////////////

// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

const books1 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = [...books1].sort((firstAuthor, secondAuthor) =>
  firstAuthor.author.localeCompare(secondAuthor.author)
);

const sortedByReversedAuthorName = [...books1].sort(
  (firstAuthor, secondAuthor) =>
    secondAuthor.author.localeCompare(firstAuthor.author)
);

const sortedByAscendingRating = [...books1].sort(
  (firstBook, secondBook) => firstBook.rating - secondBook.rating
);

const sortedByDescentingRating = [...books1].sort(
  (firstBook, secondBook) => secondBook.rating - firstBook.rating
);

///////////////// Task 45 /////////////

const booksChaining = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = booksChaining
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .sort((firstName, secondName) => firstName.localeCompare(secondName));

// console.log(names);
