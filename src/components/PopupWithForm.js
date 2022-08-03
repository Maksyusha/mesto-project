import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(data, selectors, submitCallBack) {
    super(data, selectors);
    this._submitCallBack = submitCallBack;
    this._form = this._popup.querySelector(`.${selectors.form}`);
    this._inputList = this._popup.querySelectorAll(`.${selectors.input}`);
    this._buttonSubmit = this._popup.querySelector(`.${selectors.submitButton}`)
    this._submit = () => {
      this._submitCallBack(this._getInputValues());
    };
  }

  setEventListeners() {
    this._form.addEventListener('submit', this._submit);
    super.setEventListeners();
  }

  removeEventListeners() {
    this._form.removeEventListener('submit', this._submit);
    super.removeEventListeners();
  }

  hidePopup() {
    this._form.reset();
    super.hidePopup();
  }

  setInputValues(data) {
    for (let i = 0; i < this._inputList.length; i++) {
      this._inputList[i].value = data[this._inputList[i].name];
    }
  }

  _getInputValues() {
    const values = {};

    this._inputList.forEach((input) => {
      values[input.name] = input.value;
    });

    return values;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._buttonSubmit.textContent = 'Сохранение...';
    } else {
      this._buttonSubmit.textContent = 'Сохраненить';
    }
  }
}
