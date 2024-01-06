import { initializeApp } from 'firebase/app';
import { getDatabase, ref, update, remove } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDTAeTMQa1sas8Uixn2x291Cu3gZ9i07WM',
  authDomain: 'movie-list-app-3a1e8.firebaseapp.com',
  databaseURL: 'https://movie-list-app-3a1e8-default-rtdb.firebaseio.com',
  projectId: 'movie-list-app-3a1e8',
  storageBucket: 'movie-list-app-3a1e8.appspot.com',
  messagingSenderId: '652350244976',
  appId: '1:652350244976:web:369575e7bee91841778cb5',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

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

  /**
   * Удаляет фильм
   * @param {string} id
   */
  async deleteFilm(id) {
    try {
      const filmToRemove = ref(db, `films/${id}`);
      await remove(filmToRemove);
    } catch (error) {
      throw new Error(`Что-то пошло не так: ${error}`);
    }
  }

  /**
   * Изменяет статус фильма (просмотрен или нет)
   * @param {string} id
   * @param {boolean} viewed
   */
  async correctFilmData(id, viewed) {
    try {
      const filmToUpdate = ref(db, `films/${id}`);
      const updatedData = { viewed };

      await update(filmToUpdate, updatedData);
    } catch (error) {
      throw new Error(`Что-то пошло не так: ${error}`);
    }
  }
}
