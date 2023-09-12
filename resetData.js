function resetData() {
  
  // Reset the form data.
  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  
 
  swal("Dati Cancellati", "Ricompila i campi correttamente", "warning");
}resetData()
