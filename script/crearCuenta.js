const b = document.getElementById("crearCuenta")
const eUsuario = document.getElementById("usuario");
const eContrasenia = document.getElementById("contraseña");
const eRecontrasenia = document.getElementById("recontraseña");
const eEmail = document.getElementById("email");
const eMSJUsuario = document.getElementById("msjUsuario")
const eMSJContrasenia = document.getElementById("msjContrasenia")
const eMSJRecontrasenia = document.getElementById("msjRecontrasenia")
const eMSJEmail = document.getElementById("msjEmail")
const eMSJCoincidencia = document.getElementById("msjCoincidencia")

b.addEventListener("click", () => {
    let usuario_ = eUsuario.value;
    let contrasenia_ = eContrasenia.value;
    let recontrasenia_ = eRecontrasenia.value;
    let email_ = eEmail.value;

    restaurarComponentes()

    if(validarDatos(usuario_, contrasenia_, recontrasenia_, email_)) {
        // axios.post("https://proyecto-sistemas-web-backend-production.up.railway.app/crearCuenta", {
        axios.post("http://localhost:4567/crearCuenta", {
            usuario: usuario_,
            contrasenia: contrasenia_,
            email: email_
        })
        .then(function (res) {
            document.location = "creacionExitosa.html"
        })
        .catch(function (error) {
            console.log(error)  
        })
    }
})

function validarDatos(usuario, contrasenia, recontrasenia, email) {
    let valido = true;

    if(usuario.length == 0) {
        valido = false;
        eUsuario.style.borderColor = "red"
        eMSJUsuario.style.display = "block"
    }

    if(contrasenia.length == 0) {
        valido = false;
        eContrasenia.style.borderColor = "red"
        eMSJContrasenia.style.display = "block"
    }

    if(recontrasenia.length == 0) {
        valido = false;
        eRecontrasenia.style.borderColor = "red"
        eMSJRecontrasenia.style.display = "block"
    }

    if(email.length == 0) {
        valido = false
        eEmail.style.borderColor = "red"
        eMSJEmail.style.display = "block"
    }

    if(contrasenia != recontrasenia) {
        valido = false;
        eContrasenia.style.borderColor = "red"
        eRecontrasenia.style.borderColor = "red"
        eMSJCoincidencia.style.display = "block"
    }

    return valido
}

function restaurarComponentes() {
    eUsuario.style.borderColor = "transparent"
    eContrasenia.style.borderColor = "transparent"
    eRecontrasenia.style.borderColor = "transparent"
    eEmail.style.borderColor = "transparent"
    eMSJUsuario.style.display = "none"
    eMSJContrasenia.style.display = "none"
    eMSJRecontrasenia.style.display = "none"
    eMSJEmail.style.display = "none"
    eMSJCoincidencia.style.display = "none"
}