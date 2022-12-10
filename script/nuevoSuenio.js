const b = document.getElementById("guardar")
const eHoras = document.getElementById("horas")
const eDescanso = document.getElementById("descanso")
const eDescripcion = document.getElementById("descripcion")
const eADestacar = document.getElementById("adestacar")

b.addEventListener("click", () => {
    let horas_ = eHoras.value
    let descanso_ = eDescanso.value
    let descripcion_ = eDescripcion.value
    let aDestacar_ = eADestacar.value

    // axios.post("https://proyecto-sistemas-web-backend-production.up.railway.app/crearEntrada", {
    axios.post("http://localhost:4567/crearEntrada", {
        horas: horas_,
        descanso: descanso_,
        descripcion: descripcion_,
        aDestacar: aDestacar_
    })
    .then (function (res) {
        document.location = "suenioRegistrado.html"
    })
    .catch(function (error) {
        console.log(error)
    })
})