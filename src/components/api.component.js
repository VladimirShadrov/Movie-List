export class Api {
  constructor() {
    this.url = 'https://movie-list-app-3a1e8-default-rtdb.firebaseio.com/films.json';
  }
  async getFilms() {
    try {
      const response = await fetch(this.url);

      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      throw new Error(`Что-то пошло не так: ${error}`);
    }
  }

  addFilm() {}

  deleteFilm() {}
}
