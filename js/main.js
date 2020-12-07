// // 'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', ''),
					b = prompt('На сколько оцените его?', '');
			if (a != '' && b != '' && a != null && b != null && a.length < 50){
				console.log('done');
				personalMovieDB.movies[a] = b;
			}else{
				console.log('error');
				i--;
			}
		}
	},
	detectPersonsalLevel: function() {
		if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
			console.log("Просмотрено довольно мало фильмов");
		} else { if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
			console.log("Вы классический зритель");
			} else { if (personalMovieDB.count >30) {
				console.log("Вы киноман");
				} else {console.log("Произошла ошибка");}
			}
		}
	},
	// toggleVisibleMyDB: function() {
	// 	if (personalMovieDB.privat == true) {
	// 		personalMovieDB.privat = false;
	// 	} else {
	// 		personalMovieDB.privat = true;
	// 	}
	// },
	// showMyDB: function() {
	// 	if (personalMovieDB.privat == false) {
	// 		console.log(personalMovieDB);
	// 	}
	// },
	writeYourGenres: function() {
		for (let i = 1; i <= 3; i++) {
			let genres = prompt('Ваш любимый жанр под номером ' + i, '');
			if (genres === '' || genres === null) {
				i--;
			} else {
				personalMovieDB.genres[i-1] = genres;
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр #${i + 1} - это ${item}`);
		});
	}
};

personalMovieDB.writeYourGenres();

// // let numberOfFilms;
// // // function start() {
// // // 	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// // // 	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// // // 		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// // // 	}
// // // }

// start();

// function showMyDB() {
// 	if (personalMovieDB.privat == false) {
// 		console.log(personalMovieDB);
// 	}
// }

// showMyDB();

// function rememberMyFilms() {
// 	for (let i = 0; i < 2; i++) {
// 		const a = prompt('Один из последних просмотренных фильмов?', ''),
// 				b = prompt('На сколько оцените его?', '');
// 		if (a != '' && b != '' && a != null && b != null && a.length < 50){
// 			console.log('done');
// 			personalMovieDB.movies[a] = b;
// 		}else{
// 			console.log('error');
// 			i--;
// 		}
// 	}
// }

// rememberMyFilms();

// function writeYourGenres() {
// 	for (let i = 1; i <= 3; i++) {
// 		personalMovieDB.genres[i-1] = prompt('Ваш любимый жанр под номером ' + i, '');
// 	}
// }
//
// writeYourGenres();

// function detectPersonsalLevel() {
// 	if (numberOfFilms < 10 && numberOfFilms > 0) {
// 		console.log("Просмотрено довольно мало фильмов");
// 	} else { if (numberOfFilms >= 10 && numberOfFilms <= 30) {
// 		console.log("Вы классический зритель");
// 		} else { if (numberOfFilms >30) {
// 			console.log("Вы киноман");
// 			} else {console.log("Произошла ошибка");}
// 		}
// 	}
// }

// detectPersonsalLevel();