import { Film } from './film.component';

export class FilmList {
  constructor(root) {
    this.$filmListContainer = root;
    this.filmList = [];

    this.addListeners();
    this.renderList();
  }

  addListeners() {
    document.body.addEventListener('addNewFilm', this.addFilm.bind(this));
    document.body.addEventListener('deleteFilm', this.deleteFilm.bind(this));
  }

  addFilm(event) {
    this.filmList.push(new Film(event.detail).filmData);
    this.renderList();
  }

  deleteFilm(event) {
    const filmIndex = this.filmList.findIndex((film) => film.filmId === event.detail);
    this.filmList.splice(filmIndex, 1);
    this.renderList();
  }

  renderList() {
    this.$filmListContainer.innerHTML = '';
    this.filmList.forEach((film) => this.$filmListContainer.append(film.element));

    if (!this.filmList.length) {
      this.$filmListContainer.innerHTML = '<h2 class="empty-list-title">Здесь пока пусто ))</h2>';
    }
  }
}
