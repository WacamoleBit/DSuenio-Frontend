const b = document.getElementById("crearCuenta")
const eUsuario = document.getElementById("usuario");
const eContrasenia = document.getElementById("contraseña");
const eRecontrasenia = document.getElementById("recontraseña");
const eEmail = document.getElementById("email");

b.addEventListener("click", () => {
    let usuario_ = eUsuario.value;
    let contrasenia_ = eContrasenia.value;
    let recontrasenia_ = eRecontrasenia.value;
    let email_ = eEmail.value;

    axios.post("https://proyecto-sistemas-web-backend-production.up.railway.app/crearCuenta", {
    // axios.post("http://localhost:4567/crearCuenta", {
        usuario: usuario_,
        contrasenia: contrasenia_,
        recontrasenia: recontrasenia_,
        email: email_
    })
    .then(function (res) {
        document.location = "creacionExitosa.html"
    })
    .catch(function (error) {
        console.log(error)  
    })
})