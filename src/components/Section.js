export default class Section {
  constructor({ renderer, data }, containerSelector) {
    this._data = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  render() {
    this._data.reverse().forEach((item) => this._renderer(item));
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
