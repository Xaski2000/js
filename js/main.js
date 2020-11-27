// 'use strict';
let numberOfFilms;
function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privet: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
				b = prompt('На сколько оцените его?', '');
		if (a != '' && b != '' && a != null && b != null && a.length < 50 ){
			console.log('done');
			personalMovieDB.movies[a] = b;
		}else{
			console.log('error');
			i--;
		}
	}
}

rememberMyFilms();

function detectPersonsalLevel() {
	if (numberOfFilms < 10 && numberOfFilms > 0) {
		console.log("Просмотрено довольно мало фильмов");
	} else { if (numberOfFilms >= 10 && numberOfFilms <= 30) {
		console.log("Вы классический зритель");
		} else { if (numberOfFilms >30) {
			console.log("Вы киноман");
			} else {console.log("Произошла ошибка");}
		}
	}
}

detectPersonsalLevel();

console.log(personalMovieDB);