export const setErrorMessage = (returnValue, el) => {
  const inputControl = el.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  const { isValid, message } = returnValue;
  if (!isValid && message !== null) {
    errorDisplay.innerText = message;
    return;
  }

  if (isValid) {
    errorDisplay.innerText = "";
  }
};
