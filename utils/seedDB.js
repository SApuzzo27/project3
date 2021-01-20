const mongoose = require("mongoose");
const db = require("../models");
const { mongoOptions } = require("./config");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mern",
  mongoOptions
);

const userSeedAdmin = {
  username: "Admin",
  email: "admin@contact.us",
  password: "1",
};
const userSeeds = [
  {
    username: "JohnDoe",
    email: "John.Doe@example.com",
    password: "Letmein",
  },
  {
    username: "JaneDoe",
    email: "Jane.Doe@example.com",
    password: "Letmein",
  },
  {
    username: "BobDobalina",
    email: "bob@dobalina.io",
    password: "Letmein",
  },
];
const commentsSeeds = [
  {
    body: "🚀 initial seed",
    username: "Admin",
  },
  {
    body: "👾 another",
    username: "Admin",
  },
];
const WatchListSeeds = [
  {
    title: " Step Brothers",
    username: "Admin",
  },
  {
    title: "The Hang Over",
    username: "Admin",
  },
  {
    title: " Wedding Crashers",
    username: "Admin",
  },
];
const GroupSeeds = [
  {
    clubName: "Friday Night",
    username: ["JohnDoe", "Admin"],
  },
  {
    clubName: "Sunday Afternoon",
  },
  {
    clubName: "Saturday Night",
    username: "JaneDoe",
  },
];

const movieSeeds = [
  {
    title: "1917",
    year: "2019",
    rated: "R",
    genre: "Drama, War",
    runtime: "119 min",
    director: "Sam Mendes",
    actors: "Dean-Charles Chapman, George MacKay, Daniel Mays, Colin Firth",
    plot:
      "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg",

    type: "movie",
    imdbID: "tt8579674",
  },
  {
    title: "The Wire",
    year: "2002-2008",
    rated: "TV-MA",
    genre: "Crime, Drama, Thriller",
    runtime: "59 min",
    director: "N/A",
    actors: "Dominic West, John Doman, Deirdre Lovejoy, Wendell Pierce",
    plot:
      "The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZmY5ZDMxODEtNWIwOS00NjdkLTkyMjktNWRjMDhmYjJjN2RmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    type: "series",
    imdbID: "tt0306414",
  },
  {
    title: "The Big Lebowski",
    year: "1998",
    rated: "R",
    runtime: "117 min",
    genre: "Comedy, Crime, Sport",
    director: "Joel Coen, Ethan Coen",
    actors: "Jeff Bridges, John Goodman, Julianne Moore, Steve Buscemi",
    plot:
      'Jeff "The Dude" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.',
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_SX300.jpg",
    type: "movie",
    imdbID: "tt0118715",
  },
  {
    title: "Wonder Woman 1984",
    year: "2020",
    rated: "PG-13",
    genre: "Action, Adventure, Fantasy",
    director: "Patty Jenkins",
    runtime: "151 min",
    actors: "Pedro Pascal, Gal Gadot, Connie Nielsen, Chris Pine",
    plot:
      "Fast forward to the 1980s as Wonder Woman's next big screen adventure finds her facing two all-new foes: Max Lord and The Cheetah.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNWY2NWE0NWEtZGUwMC00NWMwLTkyNzUtNmIxMmIyYzA0MjNiXkEyXkFqcGdeQXVyMTA2OTQ3MTUy._V1_SX300.jpg",
    type: "movie",
    imdbID: "tt7126948",
  },
  {
    title: "Soul",
    year: "2020",
    rated: "PG",
    genre: "Animation, Adventure, Comedy, Family, Fantasy, Music",
    director: "Pete Docter, Kemp Powers(co-director)",
    runtime: "100 min",
    actors: "Jamie Foxx, Tina Fey, Graham Norton, Rachel House",
    plot:
      "A musician who has lost his passion for music is transported out of his body and must find his way back with the help of an infant soul learning about herself.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_SX300.jpg",
    type: "movie",
    imdbID: "tt2948372",
  },
  {
    title: "Watchmen",
    year: "2009",
    rated: "R",
    genre: "Action, Drama, Mystery, Sci-Fi",
    director: "Zack Snyder",
    runtime: "162 min",
    actors: "Malin Akerman, Billy Crudup, Matthew Goode, Jackie Earle Haley",
    plot:
      "In 1985 where former superheroes exist, the murder of a colleague sends active vigilante Rorschach into his own sprawling investigation, uncovering something that could completely change the course of history as we know it.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2IzNGNiODgtOWYzOS00OTI0LTgxZTUtOTA5OTQ5YmI3NGUzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    type: "movie",
    imdbID: "tt0409459",
  },
  {
    title: "Watchmen",
    year: "2019",
    rated: "TV-MA",
    genre: "Action, Drama, Mystery, Sci-Fi",
    director: "N/A",
    runtime: "527 min",
    actors: "Regina King, Yahya Abdul-Mateen II, Tom Mison, Sara Vickers",
    plot:
      "Set in an alternate history where masked vigilantes are treated as outlaws, Watchmen embraces the nostalgia of the original groundbreaking graphic novel of the same name, while attempting to break new ground of its own.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYjhhZDE3NjgtMjkzNC00NzI3LWJhOTItMWQ5ZjljODA5NWNkXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg",
    type: "series",
    imdbID: "tt7049682",
    username: "JaneDoe",
  },
  {
    title: "Pan's Labyrinth",
    year: "2006",
    rated: "R",
    genre: "Drama, Fantasy, War",
    director: "Guillermo del Toro",
    runtime: "118 min",
    actors: "Ivana Baquero, Sergi López, Maribel Verdú, Doug Jones",
    plot:
      "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTU3ODg2NjQ5NF5BMl5BanBnXkFtZTcwMDEwODgzMQ@@._V1_SX300.jpg",
    type: "movie",
    imdbID: "tt0457430",
  },
  {
    title: "The Truman Show",
    year: "1998",
    rated: "PG",

    runtime: "103 min",
    genre: "Comedy, Drama, Sci-Fi",
    director: "Peter Weir",

    actors: "Jim Carrey, Laura Linney, Noah Emmerich, Natascha McElhone",
    plot:
      "An insurance salesman discovers his whole life is actually a reality TV show.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    type: "movie",
    imdbID: "tt0120382",
  },
];

// remove all comments
db.Comment.deleteMany({})
  // remove all WatchList
  .then(() => db.WatchList.deleteMany({}))
  // remove all users
  .then(() => db.User.deleteMany({}))
  //remove all groups
  .then(() => db.Group.deleteMany({}))
  //remove all movies
  .then(() => db.Movie.deleteMany({}))
  //add movies
  .then(() => db.Movie.create(movieSeeds))
  // // add Group
  .then(() => db.Group.create(GroupSeeds))
  // add regular users
  .then(() => db.User.create(userSeeds))
  // add user
  .then(() => db.User.create(userSeedAdmin))
  // add comments seeds
  .then((user) =>
    db.Comment.create(commentsSeeds[0])
      // add comment ref to user
      .then(({ _id }) =>
        db.User.findOneAndUpdate(
          { _id: user._id },
          { $push: { comments: _id } },
          { new: true }
        )
      )
  )
  .then((user) =>
    db.Comment.create(commentsSeeds[1])
      // add comment ref to user
      .then(({ _id }) =>
        db.User.findOneAndUpdate(
          { _id: user._id },
          { $push: { comments: _id } },
          { new: true }
        )
      )
  )
  //.then((user) => console.log("user", user))
  .then((user) =>
    db.WatchList.create(WatchListSeeds[0])
      // add watchlist ref to user
      .then(({ _id }) =>
        db.User.findOneAndUpdate(
          { _id: user._id },
          { $push: { WatchList: _id } },
          { new: true }
        )
      )
  )
  .then((user) =>
    db.WatchList.create(WatchListSeeds[1])
      // add watchlist ref to user
      .then(({ _id }) =>
        db.User.findOneAndUpdate(
          { _id: user._id },
          { $push: { WatchList: _id } },
          { new: true }
        )
      )
  )
  // add group to user
  .then((user) =>
    db.Group.create(GroupSeeds[0])
      // add group ref to user
      .then(({ _id }) =>
        db.User.findOneAndUpdate(
          { _id: user._id },
          { $push: { group: _id } },
          { new: true }
        )
      )
  )
  .then((user) =>
    db.Group.create(GroupSeeds[1])
      // add group ref to user
      .then(({ _id }) =>
        db.User.findOneAndUpdate(
          { _id: user._id },
          { $push: { group: _id } },
          { new: true }
        )
      )
  )

  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
