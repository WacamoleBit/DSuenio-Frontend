const b = document.getElementById("cambiarContraseña");
const eContrasenia = document.getElementById("contraseña")
const eRecontrasenia = document.getElementById("recontraseña")

b.addEventListener("click", () => {
    let contrasenia_ = eContrasenia.value
    let recontrasenia_ = eRecontrasenia.value

    axios.post("https://proyecto-sistemas-web-backend-production.up.railway.app/cambiarContrasenia", {
    // axios.post("http://localhost:4567/cambiarContrasenia", {       
        contrasenia: contrasenia_,
    })
    .then(function (res) {
        document.location = "cambioContraseniaExitosa.html"
    })
    .catch(function (error) {
        console.log(error)
    })
})