export class Section {
  constructor({renderer, data}, containerSelector) {
    this._data = data.reverse();
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  render() {
    this._data.forEach((item) => this._renderer(item))
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
