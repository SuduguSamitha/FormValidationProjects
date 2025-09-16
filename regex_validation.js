function validateFormInputs(name, email, password) {
    const nameRegex = /^[A-Za-z]{2,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/;

    return {
        name: nameRegex.test(name),
        email: emailRegex.test(email),
        password: passwordRegex.test(password)
    };
}
