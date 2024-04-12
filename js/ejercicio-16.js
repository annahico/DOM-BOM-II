const boton = document.getElementById("boton-mostrar-ocultar");
const elemento = Document.getElementById("elemento-mostrar-ocultar");

boton.addEventListener("click", () => {
    if (elemento.style.display === "none") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
});