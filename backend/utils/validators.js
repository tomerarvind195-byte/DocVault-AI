const isValidEmail = (email) => {
    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
};

const isValidPassword = (password) => {
    return (
        typeof password === "string" &&
        password.length >= 6
    );
};

const isValidName = (name) => {
    return (
        typeof name === "string" &&
        name.trim().length >= 2
    );
};

module.exports = {
    isValidEmail,
    isValidPassword,
    isValidName
};