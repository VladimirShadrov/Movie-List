export class Film {
  /**
   * @typedef FilmData
   * @property {string} id - ИД фильма
   * @property {string} name - Название фильма
   * @property {boolean} viewed - Просмотрен или нет фильм
   */

  /**
   * @param {FilmData} filmData - Объект с данными фильма
   * @param {Function} deleteFilmCb - коллбек, который будет вызван в момент удаления фильма
   * @param {Function} correctFilmCb - коллбек, который будет вызван в момент изменения статуса фильма
   */
  constructor(filmData, deleteFilmCb, correctFilmCb) {
    this.$filmElement = this.createFilmElement(filmData);
    this.$filmCheckbox = this.$filmElement.querySelector('.js-film-checkbox');
    this.$deleteBtn = this.$filmElement.querySelector('.js-delete-film-btn');
    this.$filmTitle = this.$filmElement.querySelector('.js-film-title');
    this.deleteFilmCb = deleteFilmCb;
    this.correctFilmCb = correctFilmCb;
    this.filmId = filmData.id;
    this.isFilmChecked = filmData.viewed;

    this.$filmElement.addEventListener('click', this.filmElementClickHandler);
  }

  /**
   * Обработчик клика по фильму
   * @param {MouseEvent} event
   */
  filmElementClickHandler = (event) => {
    if (event.target !== this.$deleteBtn) {
      event.preventDefault();
      this.markFilm();
      this.correctFilmCb({
        id: event.target.closest('.list__item').dataset.id,
        viewed: this.isFilmChecked,
      });
    } else {
      this.deleteFilm();
    }
  };

  /**
   * Помечает фильм просмотренным / не просмотренным
   */
  markFilm() {
    if (!this.isFilmChecked) {
      this.$filmElement.classList.add('list__item-viewed');
      this.$filmTitle.title = 'Посмотреть заново';
    } else {
      this.$filmElement.classList.remove('list__item-viewed');
      this.$filmTitle.title = 'Пометить как просмотренный';
    }

    this.isFilmChecked = !this.isFilmChecked;
  }

  /**
   * Удаляет фильм
   */
  deleteFilm() {
    this.deleteFilmCb(this.filmId);
  }

  /**
   * Создает HTML фильма
   * @param {Object} data
   * @returns HTML фильма
   */
  createFilmElement(data) {
    const { id, name, viewed } = data;
    const filmHtml = `
          <div class="list__item ${viewed ? 'list__item-viewed' : ''}" data-id="${id}">
              <div class="item__film-title">
                  <input class="js-film-checkbox item__checkbox" type="checkbox" id="film-${id}" />
                  <label class="js-film-title item__title" for="film-${id}" title="Пометить как просмотренный">${name}</label>
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

  /**
   * Возвращает HTML фильма
   */
  get element() {
    return this.$filmElement;
  }
}
