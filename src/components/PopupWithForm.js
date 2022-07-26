import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(data, selectors, submitCallBack) {
    super(data, selectors);
    this._submitCallBack = submitCallBack;
    this._form = document
      .querySelector(".popup_type_profile")
      .querySelector(".popup__form");
    this._inputList = document
      .querySelector(".popup_type_profile")
      .querySelectorAll(".popup__item");
    this._submit = () => {
      this._submitCallBack(this._getInputValues());
      this._hidePopup();
    };
  }

  setEventListeners() {
    this._form.addEventListener("submit", this._submit);
    super.setEventListeners();
  }

  removeEventListeners() {
    this._form.removeEventListener("submit", this._submit);
    super.removeEventListeners();
  }

  _hidePopup() {
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
    console.log(values);
    return values;
  }
}
