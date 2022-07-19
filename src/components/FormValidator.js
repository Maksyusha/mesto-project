export default class FormValidator {
  constructor(selectors, form) {
    this.form = form;
    this.inputElements = Array.from(form.querySelectorAll(`.${selectors.input}`));
    this.button = form.querySelector(`.${selectors.submitButton}`);
    this.submitButton = selectors.submitButton;
    this.submitButtonInactive = selectors.submitButtonInactive;
    this.input = selectors.input;
    this.inputError = selectors.inputError;
    this.popupActive = selectors.popupActive;
  }

  setEventListners() {
    this.toggleButtonState();

    this.inputElements.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this.checkInputValidity(inputElement)

        this.toggleButtonState();
      });
    })
  }

  hasInvalidInput() {
    return this.inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  toggleButtonState() {
    if (this.hasInvalidInput()) {
      this.button.classList.add(this.submitButtonInactive);
      this.button.setAttribute('disabled', true);
    } else {
      this.button.classList.remove(this.submitButtonInactive);
      this.button.removeAttribute('disabled');
    }
  }

  checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this.showInputError(inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError(inputElement);
    }
  }

  showInputError(inputElement, errorMessage) {
    const errorElement = this.form.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this.inputError);
    errorElement.textContent = errorMessage;
  }

  hideInputError(inputElement) {
    const errorElement = this.form.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this.inputError);
    errorElement.textContent = '';
  }
}
