const b = document.getElementById("iniciarSesion");
const eUsuario = document.getElementById("usuario");
const eContrasenia = document.getElementById("contraseña")

b.addEventListener("click", () => {
    let usuario_ = eUsuario.value
    let contrasenia_ = eContrasenia.value;

    axios.post("http://localhost:iniciarSesion," {
        usuario: usuario_,
        contrasenia: contrasenia_
    })
    .then(function (res) {
        document.location = "dsuenio/dsuenio.html"
    })
    .catch(function (error) {
        console.log(error)
    })
})