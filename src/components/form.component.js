export class FilmForm {
  /**
   * @param {HTMLElement} rootElement - Корневой элемент списка фильмов
   * @param {Function} addFilmCb - коллбек, который будет вызван в момент добавления нового фильма
   */
  constructor(rootElement, addFilmCb) {
    this.$formContainer = rootElement;
    this.$filmInput = this.$formContainer.querySelector('.js-film-input');
    this.$addBtn = this.$formContainer.querySelector('.js-add-film-btn');
    this.addFilmCb = addFilmCb;

    this.addListeners();
  }
  /**
   * Добавляет слушатели событий
   */
  addListeners() {
    this.$addBtn.addEventListener('click', this.addFilm);
    this.$filmInput.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        this.addFilm();
        this.$filmInput.blur();
      }
    });
  }

  /**
   * Добавляет новый фильм
   * @returns
   */
  addFilm = () => {
    if (!this.$filmInput.value) {
      return;
    }

    const filmData = {
      name: this.$filmInput.value,
      viewed: false,
    };
    this.addFilmCb(filmData);
    this.$filmInput.value = '';
  };
}
