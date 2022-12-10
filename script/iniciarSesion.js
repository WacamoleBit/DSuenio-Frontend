const b = document.getElementById("iniciarSesion");
const eUsuario = document.getElementById("usuario");
const eContrasenia = document.getElementById("contraseña")

b.addEventListener("click", () => {
    let usuario_ = eUsuario.value
    let contrasenia_ = eContrasenia.value;

    axios.post("https://proyecto-sistemas-web-backend-production.up.railway.app/iniciarSesion", {
    // axios.post("http://localhost:4567/iniciarSesion", {       
        usuario: usuario_,
        contrasenia: contrasenia_
    })
    .then(function (res) {
        if(res.data) {
            document.location = "dsuenio/dsuenio.html"
        }
    })
    .catch(function (error) {
        console.log(error)
    })
})