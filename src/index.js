import './index.css';
import { FilmForm } from './components/form.component';
import { FilmList } from './components/filmList.component';

//-------------------
import { db } from './firebase/firebase';

document.addEventListener('DOMContentLoaded', () => {
  new FilmForm(document.querySelector('.js-film-form'));
  new FilmList(document.querySelector('.js-film-list'));
});

async function getFilms() {
  const url = 'https://movie-list-app-3a1e8-default-rtdb.firebaseio.com/films.json';
  // const request = new Request(url, {
  //   method: 'post',
  //   body: JSON.stringify(filmData),
  // });

  const response = await fetch(url);
  const data = await response.json();
  console.log('Films: ', data);
}

getFilms();
