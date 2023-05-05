const validate = (form) => {
  const errors = {};

  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPhone= /^[0-9]*(.?)[ 0-9]+$/

  if (form.name==='') {
    errors.name = "No debe estar vacio";
  }
  if (!regexEmail.test(form.email)) {
    errors.email = "Debe ser un correo electronico ";
  }
  if (!regexPhone.test(form.phone)) {
    errors.phone = "Solo numeros ";
  }
  if (!form.message) {
    errors.message = "No debe estar vacio";
  }
  return errors
};

export default validate;
