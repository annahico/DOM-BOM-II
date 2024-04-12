const parrafo = document.getElementById("parrafo");
const botonReset = document.getElementById("reset");

parrafo.addEventListener("dblclick", () => {
    parrafo.classList.add("resaltado");
});

botonReset.addEventListener("click", () =>{
    parrafo.classList.remove("resaltado");
});

