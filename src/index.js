import { FilmForm } from './components/form.component';
import { FilmList } from './components/filmList.component';

document.addEventListener('DOMContentLoaded', () => {
  new FilmForm(document.querySelector('.js-film-form'));
  new FilmList(document.querySelector('.js-film-list'));
});
