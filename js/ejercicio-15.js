const caja = document.getElementById("caja");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");

boton1.addEventListener("click", () => {
    caja.style.backgroundColor = "red";
});

boton2.addEventListener("click", () => {
    caja.style.backgroundColor = "blue";
});

boton3.addEventListener("click", () => {
    caja.style.backgroundColor = "green";
});