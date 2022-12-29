const isValidEmail = (email) => {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return reg.test(String(email).toLowerCase());
};

const isValidPassword = (password) => {
  const reg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
  return reg.test(String(password));
};

export const validateFields = (value, fieldName, returnValue) => {
  if (fieldName !== "") {
    if (fieldName === "name") {
      if (value.length < 3) {
        returnValue.message =
          "The name field should contain at least 3 characters";
        return;
      } else {
        returnValue.isValid = true;
      }
    }

    if (fieldName === "email") {
      if (value === "") {
        returnValue.message = "Add email";
        return;
      } else if (!isValidEmail(value)) {
        returnValue.message = "Invalid email address";
        return;
      } else {
        returnValue.isValid = true;
      }
      return returnValue;
    }

    if (fieldName === "password") {
      if (value === "") {
        returnValue.message = "Add password";
        return;
      } else if (!isValidPassword(value)) {
        returnValue.message =
          "Password should contain min 8 max 16 characters, at least 1 symbol, upper and lower case letters and a number";
        return;
      } else {
        returnValue.isValid = true;
      }
      return returnValue;
    }
  }
};
