function validate() {
    var cred=['vyn','2403']
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    if (user == "" || pass == "" ) {
      alert("Usuario y/o contraseña vacía");
      return;
    }
    if(user==cred[0] && pass==cred[1]){
        location.replace("index.html",)
    }else{
        alert("Usuario y/o contraseña incorrectos");
    }
  }