import { FilmForm } from './form.component';
import { FilmList } from './filmList.component';
import { Api } from './api.component';
import { Model } from './model.component';

export class Controller {
  constructor() {
    this.init();
  }
  async init() {
    this.form = new FilmForm(document.querySelector('.js-film-form'));
    this.list = new FilmList(document.querySelector('.js-film-list'));
    this.api = new Api();
    this.model = new Model();

    const films = await this.api.getFilms();
    this.model.mapFilmList(films);
    this.list.renderList(this.model.films);
  }
}
