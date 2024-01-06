export class Api {
  constructor() {
    this.url = 'https://movie-list-app-3a1e8-default-rtdb.firebaseio.com/films.json';
  }
  /**
   * Получает список фильмов из Firebase
   * @returns
   */
  async getFilms() {
    try {
      const response = await fetch(this.url);

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(`Что-то пошло не так: ${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`Что-то пошло не так: ${error}`);
    }
  }

  /**
   * @typedef FilmData
   * @property {string} name - Название фильма
   * @property {boolean} viewed - Просмотрен или нет фильм
   */

  /**
   * Добавляет новый фильм из Firebase
   * @param {FilmData} data - Данные для создания записи
   */
  async addNewFilm(data) {
    try {
      const request = new Request(this.url, {
        method: 'post',
        body: JSON.stringify(data),
      });
      const response = await fetch(request);

      if (response.ok) {
        return true;
      } else {
        const errorMessage = await response.text();
        throw new Error(`Что-то пошло не так: ${errorMessage}`);
      }
    } catch (error) {
      throw new Error(`Что-то пошло не так: ${error}`);
    }
  }

  async deleteFilm() {
    try {
    } catch (error) {
      throw new Error(`Что-то пошло не так: ${error}`);
    }
  }

  async correctFilmData() {
    try {
    } catch (error) {
      throw new Error(`Что-то пошло не так: ${error}`);
    }
  }
}
