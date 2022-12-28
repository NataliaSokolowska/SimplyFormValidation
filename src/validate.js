const isValidEmail = (email) => {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return reg.test(String(email).toLowerCase());
};

export const validateFields = (value, fieldName, returnValue) => {
  if (fieldName !== "") {
    if (fieldName === "name") {
      if (value.length < 3) {
        returnValue.message = "Pole imię musi mieć przynajmniej 3 znaki";
        return;
      } else {
        returnValue.isValid = true;
      }
    }

    if (fieldName === "email") {
      if (value === "") {
        returnValue.message = "Wpisz email";
        return;
      } else if (!isValidEmail(value)) {
        returnValue.message = "Pole email jest błędne";
        return;
      } else {
        returnValue.isValid = true;
      }
      return returnValue;
    }
  }
};
