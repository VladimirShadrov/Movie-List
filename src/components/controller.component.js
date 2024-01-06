import { FilmForm } from './form.component';
import { FilmList } from './filmList.component';
import { Api } from './api.component';
import { Model } from './model.component';

export class Controller {
  constructor() {
    this.init();
  }
  /**
   * Инициализация всех компонентов
   */
  init() {
    this.form = new FilmForm(document.querySelector('.js-film-form'), this.addFilm);
    this.list = new FilmList(document.querySelector('.js-film-list'), this.deleteFilm);
    this.api = new Api();
    this.model = new Model();
    this.renderFilmList();
  }

  /**
   * Получает список фильмов и отрисовывает его
   */
  async renderFilmList() {
    const films = await this.api.getFilms();
    this.model.mapFilmList(films);
    this.list.renderList(this.model.films);
  }

  /**
   * Удаляет фильм
   * @param {string} id
   */
  deleteFilm = (id) => {
    console.log('Delete film: ', id);
  };

  /**
   * @typedef FilmData
   * @property {string} name - Название фильма
   * @property {boolean} viewed - Просмотрен или нет фильм
   */

  /**
   * Вызывает метод Api для добавления нового фильма в Firebase
   * @param {FilmData} filmData
   */
  addFilm = async (filmData) => {
    await this.api.addNewFilm(filmData);
    this.renderFilmList();
  };

  correctFilmStatus() {}
}
