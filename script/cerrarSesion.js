window.onload = () => {
    // axios.get("https://proyecto-sistemas-web-backend-production.up.railway.app/cerrarSesion")
    axios.get("http://localhost:4567/cerrarSesion")
    .then(function (res) {
        if(res.data) {
            document.location = "../index.html"
        } else {
            document.location = "../dsuenio/dsuenio.html"
        }
    })
    .catch(function (error) {
        console.log(error)
    })
}