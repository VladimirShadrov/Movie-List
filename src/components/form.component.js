export class FilmForm {
  constructor(root) {
    this.$formContainer = root;
    this.$filmInput = this.$formContainer.querySelector('.js-film-input');
    this.$addBtn = this.$formContainer.querySelector('.js-add-film-btn');

    this.addListeners();
  }
  addListeners() {
    this.$addBtn.addEventListener('click', this.addFilm);
    this.$filmInput.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        this.addFilm();
      }
    });
  }

  addFilm = () => {
    if (!this.$filmInput.value) {
      return;
    }

    const event = new CustomEvent('addNewFilm', { detail: this.$filmInput.value });
    document.body.dispatchEvent(event);
    this.$filmInput.value = '';
  };
}
