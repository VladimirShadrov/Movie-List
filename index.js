class FilmForm {
  constructor(root) {
    this.$formContainer = root;
    this.$filmInput = this.$formContainer.querySelector('.js-film-input');
    this.$addBtn = this.$formContainer.querySelector('.js-add-film-btn');

    this.addListeners();
  }
  addListeners() {
    this.$addBtn.addEventListener('click', this.addFilm.bind(this));
  }

  addFilm() {
    if (this.$filmInput.value) {
      const event = new CustomEvent('addNewFilm', { detail: this.$filmInput.value });
      document.body.dispatchEvent(event);
      this.$filmInput.value = '';
    }
  }
}

class FilmList {
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

class Film {
  constructor(title) {
    this.filmId = Math.random();
    this.$filmElement = this.createFilmElement(title);
    this.$filmCheckbox = this.$filmElement.querySelector('.js-film-checkbox');
    this.$deleteBtn = this.$filmElement.querySelector('.js-delete-film-btn');
    this.$filmTitle = this.$filmElement.querySelector('.js-film-title');

    this.addListeners();
  }

  addListeners() {
    this.$filmCheckbox.addEventListener('change', this.markFilm.bind(this));
    this.$deleteBtn.addEventListener('click', this.deleteFilm.bind(this));
  }

  markFilm() {
    if (this.$filmCheckbox.checked) {
      this.markAsViewed();
      this.$filmTitle.title = 'Посмотреть заново';
    } else {
      this.markAsNotViewed();
      this.$filmTitle.title = 'Пометить как просмотренный';
    }
  }

  markAsViewed() {
    this.$filmElement.classList.add('list__item-viewed');
  }

  markAsNotViewed() {
    this.$filmElement.classList.remove('list__item-viewed');
  }

  deleteFilm() {
    const event = new CustomEvent('deleteFilm', { detail: this.filmId });
    document.body.dispatchEvent(event);
  }

  createFilmElement(title) {
    const filmHtml = `
        <div class="list__item">
            <div class="item__film-title">
                <input class="js-film-checkbox item__checkbox" type="checkbox" id="film-${this.filmId}" />
                <label class="js-film-title item__title" for="film-${this.filmId}" title="Пометить как просмотренный">${title}</label>
            </div>
            <button class="js-delete-film-btn item__delete-btn" title="Удалить фильм">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity="0.3"
                        d="M22.3575 3.74463L14.6021 11.5L22.3575 19.2554C22.7689 19.6667 23 20.2247 23 20.8064C23 21.3882 22.7689 21.9462 22.3575 22.3575C21.9462 22.7689 21.3882 23 20.8064 23C20.2247 23 19.6667 22.7689 19.2554 22.3575L11.5 14.6022L3.74463 22.3575C3.33326 22.7689 2.77532 23 2.19355 23C1.61179 23 1.05385 22.7689 0.642476 22.3575C0.231106 21.9462 7.3961e-07 21.3882 7.3961e-07 20.8064C7.3961e-07 20.2247 0.231106 19.6667 0.642476 19.2554L8.39785 11.5L0.642476 3.74463C0.231106 3.33326 0 2.77532 0 2.19355C0 1.61179 0.231106 1.05385 0.642476 0.642477C1.05385 0.231106 1.61178 7.3961e-07 2.19355 7.3961e-07C2.77532 7.3961e-07 3.33326 0.231106 3.74463 0.642477L11.5 8.39785L19.2554 0.642477C19.6667 0.231106 20.2247 0 20.8064 0C21.3882 0 21.9462 0.231106 22.3575 0.642477C22.7689 1.05385 23 1.61178 23 2.19355C23 2.77532 22.7689 3.33326 22.3575 3.74463Z"
                        fill="#F3F6F9"
                    />
                </svg>
            </button>
        </div>
        `;
    const filmElement = new DOMParser().parseFromString(filmHtml, 'text/html').body.firstElementChild;

    return filmElement;
  }

  get filmData() {
    return {
      element: this.$filmElement,
      filmId: this.filmId,
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new FilmForm(document.querySelector('.js-film-form'));
  new FilmList(document.querySelector('.js-film-list'));
});
