export default function registerValidate(input) {
    const errors = {};
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!EMAIL_REGEX.test(input.email) && input.email.length > 0) errors.email = "Invalid email";
    if (!PASSWORD_REGEX.test(input.password) && input.password.length > 0 && input.password.length < 8 && input.password.length > 20) errors.pasword = "Password must have at least 1 upper case lleter , 1 number and be 8-20 characters long";
    if (Number(input.first_name)) errors.first_name = "First Name incorrect";
    if (Number(input.last_name)) errors.last_name = "Last Name incorrect";

    return errors;
}