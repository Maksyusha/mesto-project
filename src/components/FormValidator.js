export default class FormValidator {
  constructor(form, selectors) {
    this._form = form;
    this._inputElements = Array.from(
      form.querySelectorAll(`.${selectors.input}`)
    );
    this._button = form.querySelector(`.${selectors.submitButton}`);
    this._submitButton = selectors.submitButton;
    this._submitButtonInactive = selectors.submitButtonInactive;
    this._input = selectors.input;
    this._inputError = selectors.inputError;
    this._popupActive = selectors.popupActive;
  }

  enableValidation() {
    this._toggleButtonState();

    this._setEventListeners();
  }

  _setEventListeners() {
    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);

        this._toggleButtonState();
      });
    });
  }

  _hasInvalidInput() {
    return this._inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._button.classList.add(this._submitButtonInactive);
      this._button.setAttribute("disabled", true);
    } else {
      this._button.classList.remove(this._submitButtonInactive);
      this._button.removeAttribute("disabled");
    }
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._inputError);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this._inputError);
    errorElement.textContent = "";
  }
}
