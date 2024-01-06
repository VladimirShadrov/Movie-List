import { Film } from './film.component';

export class FilmList {
  constructor(rootElement) {
    this.$filmListContainer = rootElement;
    // this.filmList = [];

    this.addListeners();
    // this.renderList();
  }

  addListeners() {
    document.body.addEventListener('addNewFilm', this.addFilm);
    document.body.addEventListener('deleteFilm', this.deleteFilm);
  }

  addFilm = (event) => {
    // this.filmList.push(new Film(event.detail).filmData);
    this.renderList();
  };

  deleteFilm = (event) => {
    const filmIndex = this.filmList.findIndex((film) => film.filmId === event.detail);
    this.filmList.splice(filmIndex, 1);
    this.renderList();
  };

  renderList(filmList) {
    console.log('Films: ', filmList);
    this.$filmListContainer.innerHTML = '';
    filmList.forEach((film) => {
      this.$filmListContainer.append(new Film(film).element);
    });

    if (!filmList.length) {
      this.$filmListContainer.innerHTML = '<h2 class="empty-list-title">Здесь пока пусто ))</h2>';
    }
  }
}
