window.onload = () => {
    // axios.get("https://proyecto-sistemas-web-backend-production.up.railway.app/cerrarSesion")
    axios.get("http://localhost:4567/cerrarSesion")
    .then(function (res) {
        console.log("exito")
        document.location = "/index.html"
    })
    .catch(function (error) {
        console.log(error)
        document.location = "/dsuenio/dsuenio.html"
    })
}