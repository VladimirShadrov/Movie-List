export class Model {
  constructor() {
    this.filmList = [];
  }

  /**
   * @typedef DataObject
   * @property {string} name
   * @property {boolean} viewed
   */

  /**
   * Приводит список фильмов к нужной структуре
   * @param {DataObject} dataObj
   */
  mapFilmList(dataObj) {
    if (dataObj && Object.keys(dataObj).length) {
      this.filmList = Object.keys(dataObj).map((film) => {
        const { name, viewed } = dataObj[film];
        return {
          id: film,
          name,
          viewed,
        };
      });
    } else {
      this.filmList = [];
    }
  }

  get films() {
    return this.filmList;
  }
}
