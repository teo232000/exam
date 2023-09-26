
    
    const form = document.getElementById("form");
    // const usercheck = document.getElementById("usercheck");
    const nameuser = document.getElementById("nameuser");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");
    const message = document.getElementById("message");
    
    form.addEventListener("submit", e => {
        e.preventDefault();
        checkInputs();
    });
    
    function checkInputs() {
        // const usercheckValue = usercheck.value;
        const nameuserValue = nameuser.value;
        const phoneValue = phone.value;
        const emailValue = email.value;
        const passwordValue = password.value;
        const password2Value = password2.value;
        const messageValue = message.value;
        // usercheck
        // if (usercheckValue === "") {
        //     setErrorFor(usercheck, "Compila il campo utente");
        // } else {
        //     setSuccessFor(usercheck);
        // }
        //User name
        if (nameuserValue === "") { 
            setErrorFor(nameuser, "Inserisci il nome");
        } else if (!isName(nameuserValue)) {
            setErrorFor(nameuser, "Inserisci un nome valido");
        } else {
            setSuccessFor(nameuser);
        }
        //user phone
        if (phoneValue === "") {
            setErrorFor(phone, "Inserisci il numero di telefono");
        } else if (!isPhone(phoneValue)) {
            setErrorFor(phone, "Inserisci un numero di telefono valido (10 cifre)");
        } else {
            setSuccessFor(phone);
        }
        //user email
        if (emailValue === "") {
            setErrorFor(email, "Inserisci un indirizzo email");
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, "Inserisci un indirizzo email valido");
        } else {
            setSuccessFor(email);
        }
        //user password 
        if (passwordValue === "") {
            setErrorFor(password, "Inserisci una password");
        } else if (!isPassword(passwordValue)) {
            setErrorFor(password, "La password deve contenere almeno 8 caratteri, una maiuscola, una minuscola, una cifra e un carattere speciale");
        } else {
            setSuccessFor(password);
        }
        //user repet password
        if (password2Value === "") {
            setErrorFor(password2, "Conferma la password");
        } else if (passwordValue !== password2Value) {
            setErrorFor(password2, "Le password non corrispondono");
        } else {
            setSuccessFor(password2);
        }
        //user message const message = document.getElementById("message");
        
        if(messageValue === ""){
            setErrorFor(message, "Inserisci messaggio")
        }else{
            setSuccessFor(message)
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
    
    
    function isName(name) {
        return /^[a-zA-Z]+$/.test(name);
    }
    
    function isPhone(phone) {
        return /^[0-9]{10}$/.test(phone);
    }
    
    function isPassword(password) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    }
   
    function emailSend() {

    let messageBody =
    //  "usercheck: " + usercheck +
    "<br/>nameuser: " + nameuser + 
    "<br/>Phone: " + phone + 
    "<br/>Email: " + email + 
    "<br/>password: " + password + 
    "<br/>password2: " + password2 + 
    "<br/>Message: " + message; 
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "teodoropitu@gmail.com",
        Password : "3EAD0E31159198335F06ECE1E8B5274146AE",
        To : 'teodoropitu@gmail.com',
        From : email,
        Subject : "This is the subject",
        Body : messageBody
    }).then(
        message => {
            if(message == "OK"){
                swal("Messagio inviato con successo!", "Operazione presa in carico!", "success")
            }else{
                swal("Messagio fallito", "Ti invitiamo a riprovare più tardi", "error")
            }
        }
        );
    };

   