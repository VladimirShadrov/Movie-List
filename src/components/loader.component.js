export class Loader {
  constructor() {
    this.show();
  }

  /**
   * Создает HTML лоадера
   * @returns {HTMLElement}
   */
  createLoader() {
    const loaderLayout = `
        <div class="loader">
          <div class="loader__item"></div>
        </div>
        `;
    const parser = new DOMParser();
    const loaderHTML = parser.parseFromString(loaderLayout, 'text/html').body.firstElementChild;

    return loaderHTML;
  }

  /**
   * Добавляет лоадер в дом дерево
   */
  show() {
    this.loader = this.createLoader();
    document.body.append(this.loader);
  }

  /**
   * Удаляет лоадер из дом дерева
   */
  hide() {
    this.loader.remove();
  }
}
