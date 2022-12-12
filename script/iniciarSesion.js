const b = document.getElementById("iniciarSesion");
const eUsuario = document.getElementById("usuario");
const eContrasenia = document.getElementById("contraseña")
const eMSJUsuario = document.getElementById("msjUsuario")
const eMSJContrasenia = document.getElementById("msjContrasenia")
const eMSJNoEncontrado = document.getElementById("msjNoEncotrado")

b.addEventListener("click", () => {
    let usuario_ = eUsuario.value
    let contrasenia_ = eContrasenia.value;

    restaurarComponentes()

    if(validar(usuario_, contrasenia_)) {
        axios.post("https://proyecto-sistemas-web-backend-production.up.railway.app/iniciarSesion", {
        // axios.post("http://localhost:4567/iniciarSesion", {       
            usuario: usuario_,
            contrasenia: contrasenia_
        })
        .then(function (res) {
            if(res.data) {
                document.location = "dsuenio/dsuenio.html"
            } else {
                eMSJNoEncontrado.style.display = "block"
            }
        })
        .catch(function (error) {
            console.log(error)
        })
    }
})

function validar(usuario, contrasenia) {
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

    return valido;
}

function restaurarComponentes() {
    eUsuario.style.borderColor = "transparent"
    eContrasenia.style.borderColor = "transparent"
    eMSJUsuario.style.display = "none";
    eMSJContrasenia.style.display = "none";
    eMSJNoEncontrado.style.display = "none";
}