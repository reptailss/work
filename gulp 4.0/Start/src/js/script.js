"use strict";
 

// let number = 5;
// const leftb = 1;
// let vf = [5, 'fdf', {
//   kek: 'eewe',
//   fef: 'ewe'
// }]

// console.log(vf[2])

// alert('eeee')

// const result = confirm('are you?');
// console.log(result)
// const answer = +prompt("dвава?" , "18");
// console.log(answer +5);

// const answers = [];

// answers [0] = prompt('как ваше имя?', '');
// answers [1] = prompt('как ваше фамилия?', '');
// answers [2] = prompt('сколько вам лет?', '');

// console.log(typeof(answers) );

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5` )

// const user = 'ivan';
// alert(`привет, ${user}`)


// console.log( +4+ +' 8');

// let incr = 10,
//     decr = 10;

//     incr++;
//     decr--;

//     console.log(incr);
//     console.log(decr);

// console.log(5%2);
// console.log(2*4 === 8);

// const isChek = true,
//     isClose = true;

// console.log(isChek && !isClose);
// console.log(isChek || isClose);

let number0films = prompt('Cколько фильмов вы уже посмотрели?', '0');


let personalMovieDB = {
    count: number0films,
    movies: {

    },
    actors:{

    },
    genres:[

    ],
    privat: false


} 


let a = prompt('один из просмотренных фильмов?');
let b = prompt('насколько оцените его?');
let c = prompt('один из просмотренных фильмов?');
let d = prompt('насколько оцените его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);