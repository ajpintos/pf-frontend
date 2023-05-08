export default function loginValidate(input) {

    const errors = {};
    
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;

    if (!EMAIL_REGEX.test(input.email) && input.email.length > 0) errors.email = "Invalid email";
    if (!PASSWORD_REGEX.test(input.password) && input.password.length > 0) errors.password = "Password must have at least 1 upper case letter , 1 number and be 8-20 characters long";


    return errors;
}