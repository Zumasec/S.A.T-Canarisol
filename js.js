var u = document.getElementById('usuario');
var p = document.getElementById('password');

// var informes = document.getElementById('informes');
var tipo = document.getElementById('tipo');

function Login() {
    var done = 0;
    
    if (usuario.value == "CNS" && password.value == "DIRECCION20") {
// window.location = "https://zumasec.github.io/S.A.T-Canarisol/tipos.html";
        document.getElementById("informes").style.display="none"
        document.getElementById("tipo").style.display="block"

    }
} 

// btncomercial.addEventListener("click", function(){
//     document.getElementById("tipo").style.display="none"
//     document.getElementById("titulo").style.display="none"
//     document.getElementById("ventas").style.display="none"
//     document.getElementById("comercial").style.display="block"
//     document.getElementById("menu").style.display="block"

// }); 
// btnventas.addEventListener("click", function(){
//     document.getElementById("tipo").style.display="none"
//     document.getElementById("titulo").style.display="none"
//     document.getElementById("comercial").style.display="none"
//     document.getElementById("ventas").style.display="block"
//     document.getElementById("menu").style.display="block"

// }); 

// menusito.addEventListener("click", function(){
//     document.getElementById("comercial").style.display="none"
//     document.getElementById("ventas").style.display="none"
//     document.getElementById("tipo").style.display="block"
//     document.getElementById("titulo").style.display="block"
//     // menu
//     document.getElementById("menu").style.display="none"

// });

function comercial(){
    document.getElementById("tipo").style.display="none"
    document.getElementById("titulo").style.display="none"
    document.getElementById("ventas").style.display="none"
    document.getElementById("comercial").style.display="block"
    document.getElementById("menu").style.display="block"

}
function ventas(){
    document.getElementById("tipo").style.display="none"
    document.getElementById("titulo").style.display="none"
    document.getElementById("comercial").style.display="none"
    document.getElementById("ventas").style.display="block"
    document.getElementById("menu").style.display="block"
}
function menu(){
    document.getElementById("comercial").style.display="none"
    document.getElementById("ventas").style.display="none"
    document.getElementById("tipo").style.display="block"
    document.getElementById("titulo").style.display="block"
    // menu
    document.getElementById("menu").style.display="none"
}