import {selectors} from './utils.js';



function showInputError(formElement, inputElement, errorMessage, selectors) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(selectors.inputError);
  errorElement.textContent = errorMessage;
}

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(selectors.inputError);
  errorElement.textContent = '';
}

function checkInputValidity(formElement, inputElement, selectors) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, selectors);
  } else {
    hideInputError(formElement, inputElement, selectors);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  });
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(selectors.submitButtonInactive);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(selectors.submitButtonInactive);
    buttonElement.removeAttribute('disabled');
  }
}

function setEventListeners(formElement, selectors) {
  const inputList = Array.from(formElement.querySelectorAll(`.${selectors.input}`));
  const buttonElement = formElement.querySelector(`.${selectors.submitButton}`);

  toggleButtonState(inputList, buttonElement, selectors);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, selectors);

      toggleButtonState(inputList, buttonElement, selectors);
    })
  })
}

function enableValidation(selectors) {
  const formList = Array.from(document.querySelectorAll(`.${selectors.form}`));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, selectors)
  });
}



export {enableValidation};
