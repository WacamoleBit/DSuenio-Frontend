const b = document.getElementById("guardar")
const eHoras = document.getElementById("horas")
const eDescanso = document.getElementById("descanso")
const eDescripcion = document.getElementById("descripcion")
const eADestacar = document.getElementById("adestacar")
const eMSJHoras = document.getElementById("msjHoras")
const eMSJDescripcion = document.getElementById("msjDescripcion")
const eMSJDestacar = document.getElementById("msjDestacar")

b.addEventListener("click", () => {
    let horas_ = eHoras.value
    let descanso_ = eDescanso.value
    let descripcion_ = eDescripcion.value
    let aDestacar_ = eADestacar.value

    restaurarComponentes()

    if(validarSueño(horas_, descripcion_, aDestacar_)) {
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
    }
})

function validarSueño(horas, descripcion, aDestacar) {
    let valido = true;

    if(horas.length == 0) {
        valido = false;
        eHoras.style.borderColor = "red"
        eMSJHoras.style.display = "block"
    }

    if(descripcion.length == 0) {
        valido = false;
        eDescripcion.style.borderColor = "red"
        eMSJDescripcion.style.display = "block"
    }

    if(aDestacar.length == 0) {
        valido = false;
        eADestacar.style.borderColor = "red"
        eMSJDestacar.style.display = "block"
    }

    return valido
}

function restaurarComponentes() {
    eHoras.style.borderColor = "transparent"
    eDescripcion.style.borderColor = "transparent"
    eADestacar.style.borderColor = "transparent"
    eMSJHoras.style.display = "none"
    eMSJDescripcion.style.display = "none"
    eMSJDestacar.style.display = "none"
}