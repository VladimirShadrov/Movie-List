export class Model {
  constructor() {
    this.filmList = [];
  }

  mapFilmList(dataObj) {
    this.filmList = Object.keys(dataObj).map((film) => {
      const { name, viewed } = dataObj[film];
      return {
        id: film,
        name,
        viewed,
      };
    });
  }

  get films() {
    return this.filmList;
  }
}
