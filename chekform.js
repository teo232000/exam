const form = document.getElementById("form");
const usercheck = document.getElementById("usercheck");
const nameuser = document.getElementById("nameuser");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usercheckValue = usercheck.value.trim();
    const nameuserValue = nameuser.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usercheckValue === "") {
        setErrorFor(usercheck, "Compila il campo utente");
    } else {
        setSuccessFor(usercheck);
    }

    if (nameuserValue === "") { 
        setErrorFor(nameuser, "Inserisci il nome");
    } else if (!isName(nameuserValue)) {
        setErrorFor(nameuser, "Inserisci un nome valido");
    } else {
        setSuccessFor(nameuser);
    }

    if (phoneValue === "") {
        setErrorFor(phone, "Inserisci il numero di telefono");
    } else if (!isPhone(phoneValue)) {
        setErrorFor(phone, "Inserisci un numero di telefono valido (10 cifre)");
    } else {
        setSuccessFor(phone);
    }

    if (emailValue === "") {
        setErrorFor(email, "Inserisci un indirizzo email");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Inserisci un indirizzo email valido");
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "Inserisci una password");
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password, "La password deve contenere almeno 8 caratteri, una maiuscola, una minuscola, una cifra e un carattere speciale");
    } else {
        setSuccessFor(password);
    }

    if (password2Value === "") {
        setErrorFor(password2, "Conferma la password");
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, "Le password non corrispondono");
    } else {
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isName(name) {
    return /^[a-zA-Z]+$/.test(name);
}

function isPhone(phone) {
    return /^[0-9]{10}$/.test(phone);
}

function isPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}
   function myFunction() {
        document.getElementById("contactForm").reset();
        swal("Dati eliminati", "Ricompila i campi", "warning")
    }
