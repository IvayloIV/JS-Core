function simpleEmail(input) {
    let pattern = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/;

    console.log(pattern.test(input) ? "Valid" : "Invalid");
}
simpleEmail("valid@email.bg");
simpleEmail("invalid@emai1.bg");