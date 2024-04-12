const lista = document.getElementById("lista");
const tareaInput = document.getElementById("tareaInput");
const botonInput = document.getElementById("agregarTarea");

const agregarTarea = (event) => {
    if (tareaInput.value.trim() !== "") {
        const nuevaTarea = document.createElement("li"); //agregar tareas en lista
        nuevaTarea.textContent = tareaInput.value.trim();
        lista.appendChild(nuevaTarea);
        tareaInput.value = ""; //borrar en el cuadrado el texto
    }
};

// Add event listener to the button element
botonInput.addEventListener("click", agregarTarea);

tareaInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        agregarTarea();
    }
});

lista.addEventListener("dblclick", (event) => { //eliminar con doble click elemento lista
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});






// agregarTarea.addEventListener("click", () => {
//     if (tareaInput.value.trim() !== "") {
//         // console.log("tarea");
//         // console.log(tareaInput.value.trim().length);
//         const nuevaTarea = document.createElement("li"); //agregar tareas en lista
//         nuevaTarea.textContent = tareaInput.value.trim();
//         lista.appendChild(nuevaTarea);
//         tareaInput.value = ""; //borrar en el cuadrado el texto
//     }
