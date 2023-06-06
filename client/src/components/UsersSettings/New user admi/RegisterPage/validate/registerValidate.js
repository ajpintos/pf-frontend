export default function registerValidate(input) {
    const errors = {};
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
    const LETTERS_ONLY_REGEX = /^[a-zA-Z]+$/;

    if (!EMAIL_REGEX.test(input.email) && input.email.length > 0) errors.email = "Invalid email";
    if (!PASSWORD_REGEX.test(input.password) && input.password.length > 0) errors.password = "Password must have at least 1 upper case letter , 1 number and be 8-20 characters long";
    if (input.passwordRepeat.length !== input.password.length || input.password !== input.passwordRepeat) errors.passwordRepeat = "Password do not match";

    if (!LETTERS_ONLY_REGEX.test(input.firstname) ) errors.firstname = "First Name must not have numbers included";
    if (input.firstname.length <1) errors.firstname = "Should not be empty";

    if (!LETTERS_ONLY_REGEX.test(input.lastname)) errors.lastname = "Last Name must not have numbers included";
    
    if ( input.address.length <1) errors.address = "Should not be empty";
    if ( input.cp.length <1) errors.cp = "Should not be empty";
    if ( input.city.length <1) errors.city = "Should not be empty";
    if ( input.country.length <1) errors.country = "Should not be empty";
    if ( input.phone.length <1) errors.phone = "Should not be empty";
    

    return errors;
}