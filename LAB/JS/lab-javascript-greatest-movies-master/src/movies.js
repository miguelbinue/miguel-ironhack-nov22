// import { movies } from './data.js';
// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const rawlist = moviesArray.map((movie) => movie.director)
    return rawlist;
//     const arrDirectors = [];
//     for (i = 0; i < movies.length; i++) {
//         arrDirectors[i] = movies[i].director;
//     }
//     return arrDirectors;
}   
console.log('1. Not Clean list');
console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) { 
    const dramaMovies = movies.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    return dramaMovies
}

console.log("2. Lista de pelis de drama del sr. Spielberg");
console.log(howManyMovies(movies));
//     const arr = [];
//     for (i = 0; i < data.length; i++) {
//         const spielbergAppears = data[i].director;
//         if (arr.length != 0 && data[i].genre.indexOf("Drama" != -1) && data[i].director.indexOf("Steven Spielberg" != -1)) {
//             arr.push(spielbergAppears);    
//         } else if (data[i].director != "Steven Spielberg") {
//             return 0;
//         } else {
//             return 0;
         
//         }
//     } 
// } 


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const arrayWithScore = moviesArray.filter(movie => typeof(movie.score) === "number");
    const totalScore = arrayWithScore.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.score;
    },0);
    return +(totalScore / moviesArray.length).toFixed(2);
}
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const drama = moviesArray.filter((movieDrama) => {
        return movieDrama.genre.includes("Drama")
    })

    const scores = drama.map((movie) => movie.score)

    let total = 0;
    scores.forEach((scores) => (total += scores))
    return (total / drama.length).toFixed(2)
    {
        
    });
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
