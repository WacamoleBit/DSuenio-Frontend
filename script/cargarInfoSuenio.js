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
                seccionEntradas.innerHTML = conDatos(entradas[i])
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
    var cadena = "<article>"
               + "<p class='datoEntrada' id='fecha'>Fecha: <label for='fecha'>" + data.fechaCreacion + "</label></p>"
               + "<p class='datoEntrada' id='horasDormidas'>Horas dormidas: <label for='horasDormidas'>" + data.horasDormidas + "</label></p>"
               + "<p class='datoEntrada' id='adestacar'>A destacar: <label for='adestacar'>" + data.aDestacar + "</label></p>"
               + "<p class='datoEntrada' id='descripcion' display='none'>Descripción: <label for='descripcion'>" + data.descripcion+ "</label></p>"
               + "</article>"

    return cadena;
}