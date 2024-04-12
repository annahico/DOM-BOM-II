const formulario = document.getElementById("formulario");
const camposDiv = document.getElementById("campos");
const botonAgregar = document.getElementById("agregar-campo");
let contadorCampos = 1;

botonAgregar.addEventListener("click", (e) => {
    e.preventDefault();
    const nuevoCampo = document.createElement("input");
    nuevoCampo.type = "text";
    nuevoCampo.placeholder = "Campo " + contadorCampos;
    camposDiv.appendChild(nuevoCampo);
    contadorCampos++;
});
