var u = document.getElementById('usuario')
var p = document.getElementById('password')
function Login() {
    var done = 0;
    
    if (usuario.value == "cns" && password.value == "direccion2020") {
        window.location = "tipos.html";
    }
    if (usuario.value == "USUARIO2" && password.value == "CONTRASEÑA2") {
        window.location = "tipos.html";
    }
    else{
        $('#myModalExito').modal('show');
    }
} 