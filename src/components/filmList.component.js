import { Film } from './film.component';

export class FilmList {
  /**
   * @param {HTMLElement} rootElement - Корневой элемент списка фильмов
   * @param {Function} deleteFilmCb - коллбек, который будет вызван в момент удаления фильма
   */
  constructor(rootElement, deleteFilmCb) {
    this.$filmListContainer = rootElement;
    this.deleteFilmCb = deleteFilmCb;
  }

  /**
   * @typedef FilmData
   * @property {string} id - ИД фильма
   * @property {string} name - Название фильма
   * @property {boolean} viewed - Просмотрен или нет фильм
   */

  /**
   * Отрисовывает список фильмов
   * @param {FilmData[]} filmList
   */
  renderList(filmList) {
    this.$filmListContainer.innerHTML = '';
    filmList.forEach((film) => {
      this.$filmListContainer.append(new Film(film, this.deleteFilmCb).element);
    });

    if (!filmList.length) {
      this.$filmListContainer.innerHTML = '<h2 class="empty-list-title">Здесь пока пусто ))</h2>';
    }
  }
}
