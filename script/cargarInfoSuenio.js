const seccionEntradas = document.getElementById("entradas");
var entradas = [];

window.onload = () => {
    // axios.get("https://proyecto-sistemas-web-backend-production.up.railway.app/cargarEntradas")
    axios.get("http://localhost:4567/cargarEntradas")
    .then(function (res) {
        if(res.data.length <= 0) {
            seccionEntradas.innerHTML = sinDatos();
        } else {
            seccionEntradas.innerHTML = "<h2>Ultima Entrada</h2>";

            for(let i = 0; i < res.data.length; i++){
                entradas[i] = res.data[i];
                seccionEntradas.appendChild(conDatos(entradas[i]))
            }
        }
    })
    .catch(function (error) {
        console.log(error)
    })
}

function sinDatos() {
    var cadena = "<h2>Ultima Entrada</h2>" 
               + "<article>" 
                   + "<p>No hay sueños anteriores</p>" 
               + "</article>";
    return cadena
}

function conDatos(data) {
    let article = document.createElement("article")
    let br = document.createElement("br")

    let fecha = document.createElement("p")
    fecha.className = "datoEntrada"
    fecha.id = "fecha"
    fecha.textContent = "Fecha: "

    let labelFecha = document.createElement("label")
    labelFecha.setAttribute("for", "fecha")
    labelFecha.textContent = data.fechaCreacion

    fecha.appendChild(labelFecha)

    let horas = document.createElement("p")
    horas.className ="datoEntrada"
    horas.id = "horasDormidas"
    horas.textContent = "Horas dormidas: "

    let labelHoras = document.createElement("label")
    labelHoras.setAttribute("for", "horasDormidas")
    labelHoras.textContent = data.horasDormidas

    horas.appendChild(labelHoras)

    let destacar = document.createElement("p")
    destacar.className = "datoEntrada"
    destacar.id = "adestacar"
    destacar.textContent = "A destacar: "

    let labelDestacar = document.createElement("label")
    labelDestacar.setAttribute("for", "adestacar")
    labelDestacar.textContent = data.aDestacar

    destacar.appendChild(labelDestacar)

    let descripcion = document.createElement("p")
    descripcion.className = "datoEntrada"
    descripcion.id = "descripcion"
    descripcion.textContent = "Descripción: "

    let labelDescripcion = document.createElement("label")
    labelDescripcion.setAttribute("for", "descripcion")
    labelDescripcion.textContent = data.descripcion

    article.appendChild(fecha)
    article.appendChild(horas)
    article.appendChild(destacar)
    article.appendChild(descripcion)
    article.appendChild(br)

    return article;
}