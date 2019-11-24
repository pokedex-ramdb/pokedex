export const validationForm = ({ email, password }) => {
    let errors = {};

    if (!email) {
        errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        errors.email = "Invalid email format";
    }

    if (!password) {
        errors.password = "Required";
    } 

    return errors;
};
