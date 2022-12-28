import { validateFields } from "./validate";
import { setErrorMessage } from "./errorMessage";

const form = document.getElementById("form");

const onSubmitForm = (event) => {
  event.preventDefault();
  const formElelemnts = event.currentTarget.elements;
  let isSubmit = [];

  Array.prototype.slice.call(formElelemnts).forEach((el) => {
    const { name: fieldName } = el;
    const value = el.value?.trim();

    const returnValue = {
      isValid: false,
      message: null
    };

    validateFields(value, fieldName, returnValue);
    setErrorMessage(returnValue, el);

    if (fieldName !== "") {
      isSubmit.push(returnValue.isValid);
    }
  });

  if (isSubmit.every((el) => el)) {
    form.submit();
  }
};

form.addEventListener("submit", onSubmitForm);
