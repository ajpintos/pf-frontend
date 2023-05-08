const validate = (form) => {
    const errors = {};
  
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPhone = /^([0-9])*$/;
  
    if (form.name === "") {
      errors.name = "Debe escribir el nombre";
    }
    if (!regexEmail.test(form.email)) {
      errors.email = "Debe ser un email valido ";
    }
    if (!regexPhone.test(form.phone)) {
      errors.phone = "Solo numeros ";
    }
    if (form.phone === "") {
      errors.phone = "Digite el telefono";
    }
    if (form.message.length === 0) {
      errors.message = "Escribanos un mensaje";
    }
    return errors;
  };
  
  export default validate;
  