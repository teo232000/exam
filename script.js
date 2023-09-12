
function emailSend() {
  let name = document.getElementById("name").value;
  let lastname = document.getElementById("lastname").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

   if (name === "" || lastname === "" || email === "" || phone === "" || message === "") {
    swal("Campi mancanti", "Compila tutti i campi obbligatori", "warning");
    return; 
  }
  
  let messageBody = "Name: " + name +
  "<br/>Surname: " + lastname + 
  "<br/>Phone: " + phone + 
  "<br/>Email: " + email + 
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
  }emailSend();
  
  