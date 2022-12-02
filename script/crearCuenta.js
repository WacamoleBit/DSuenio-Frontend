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

    axios.post("http://localhost:80/crearCuenta", {
        usuario: usuario_,
        contrasenia: contrasenia_,
        recontrasenia: recontrasenia_,
        email: email_
    })
    .then(function (res) {
        document.location = "creacionExitosa.html"
        // window.open("creacionExitosa.html", '_self')
    })
    .catch(function (error) {
        console.log(error)  
    })
})