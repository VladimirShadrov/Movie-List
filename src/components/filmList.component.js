import { Film } from './film.component';

export class FilmList {
  /**
   * @param {HTMLElement} rootElement - Корневой элемент списка фильмов
   * @param {Function} deleteFilmCb - коллбек, который будет вызван в момент удаления фильма
   * @param {Function} correctFilmCb - коллбек, который будет вызван в момент изменения статуса фильма
   */
  constructor(rootElement, deleteFilmCb, correctFilmCb) {
    this.$filmListContainer = rootElement;
    this.deleteFilmCb = deleteFilmCb;
    this.correctFilmCb = correctFilmCb;
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
      this.$filmListContainer.append(new Film(film, this.deleteFilmCb, this.correctFilmCb).element);
    });

    if (!filmList.length) {
      this.$filmListContainer.innerHTML = '<h2 class="empty-list-title">Здесь пока пусто ))</h2>';
    }
  }
}
