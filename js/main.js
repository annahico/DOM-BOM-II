const formulario = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");

formulario.addEventListener("submit", () => {
    if (nombreInput.value === "" || emailInput.value === "") {
        alert("Por favor, complete todos los campos");
    } else {
        alert("Formulario enviado correctamente"); //toda la logica para enviar el formulario
    }
});