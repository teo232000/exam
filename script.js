
function emailSend() {
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  
  let messageBody = "Name: " + name +
  "<br/>Surname: " + surname + 
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
  
  