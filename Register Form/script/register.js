const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const password = document.getElementById("password");

Div-SignIn.addEventListener("submit", e =>{
    e.preventDefault()
    if(nombre.value.length <6){
        alert("Nombre muy corto")
    }
    if(password.value.length <6){
        alert("Contrasena muy corta")
    } 
})