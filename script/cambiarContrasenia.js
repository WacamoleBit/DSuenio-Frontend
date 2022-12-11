const b = document.getElementById("cambiarContraseña");
const eContrasenia = document.getElementById("contraseña")
const eRecontrasenia = document.getElementById("recontraseña")
const eMSJContrasenia = document.getElementById("msjContrasenia")
const eMSJRecontrasenia = document.getElementById("msjRecontrasenia")
const eMSJCoincidencia = document.getElementById("msjCoincidencia")

b.addEventListener("click", () => {
    let contrasenia_ = eContrasenia.value
    let recontrasenia_ = eRecontrasenia.value

    restaurarComponentes()

    if(validarContrasenia(contrasenia_, recontrasenia_)) {
        // axios.post("https://proyecto-sistemas-web-backend-production.up.railway.app/cambiarContrasenia", {
        axios.post("http://localhost:4567/cambiarContrasenia", {       
            contrasenia: contrasenia_,
        })
        .then(function (res) {
            document.location = "cambioContraseniaExitosa.html"
        })
        .catch(function (error) {
            console.log(error)
        })
    }
})

function validarContrasenia(contrasenia, recontrasenia) {
    let valido = true;

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

    if(contrasenia != recontrasenia) {
        valido = false;
        eContrasenia.style.borderColor = "red"
        eRecontrasenia.style.borderColor = "red"
        eMSJCoincidencia.style.display = "block"
    }

    return valido
}

function restaurarComponentes() {
    eContrasenia.style.borderColor = "transparent"
    eRecontrasenia.style.borderColor = "transparent"
    eMSJContrasenia.style.display = "none"
    eMSJRecontrasenia.style.display = "none"
    eMSJCoincidencia.style.display = "none"
}