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


// let num = 50;
// while (num <= 55){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while(num < 55 );

// for (let i = 1; i < 8; i++)
// {
//     if (i === 6){
//         // break;
//         continue;
//     }
//     console.log(i);

// }








let number0films = +prompt('Cколько фильмов вы уже посмотрели?', '0');


let personalMovieDB = {
    count: number0films,
    movies: {

    },
    actors: {

    },
    genres: [

    ],
    privat: false


}

for (let i = 0; i < 4; i++) {
    const a = prompt('один из просмотренных фильмов?', '');
    const b = prompt('насколько оцените его?', '');
    if (a !== null && b !== null && a !== '' && b !== '' && a.length < 10) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } 
    else {
        console.log('error');
        i--;
    }

}
if (personalMovieDB.count < 10) {
    console.log('Просмотренно слишком мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('ну норм');
} else if (personalMovieDB.count > 30) {
    console.log('ну вы киноман');
} else {
    console.log('произошла ошибка')
}


console.log(personalMovieDB);