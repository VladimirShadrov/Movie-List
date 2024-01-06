import { FilmForm } from './form.component';
import { FilmList } from './filmList.component';
import { Api } from './api.component';
import { Model } from './model.component';
import { Loader } from './loader.component';

export class Controller {
  constructor() {
    this.init();
  }
  /**
   * Инициализация всех компонентов
   */
  init() {
    this.form = new FilmForm(document.querySelector('.js-film-form'), this.addFilm);
    this.list = new FilmList(document.querySelector('.js-film-list'), this.deleteFilm, this.correctFilmStatus);
    this.api = new Api();
    this.model = new Model();
    this.renderFilmList();
  }

  /**
   * Получает список фильмов и отрисовывает его
   */
  async renderFilmList() {
    const loader = new Loader();
    const films = await this.api.getFilms();
    this.model.mapFilmList(films);
    this.list.renderList(this.model.films);
    loader.hide();
  }

  /**
   * Удаляет фильм
   * @param {string} id
   */
  deleteFilm = async (id) => {
    await this.api.deleteFilm(id);
    this.renderFilmList();
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

  /**
   * @typedef FilmData
   * @property {string} id
   * @property {boolean} viewed
   */

  /**
   * Изменяет статус фильма
   * @param {FilmData} filmData
   */
  correctFilmStatus = async (filmData) => {
    const { id, viewed } = filmData;

    await this.api.correctFilmData(id, viewed);
  };
}
