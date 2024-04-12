const caja = document.getElementById("caja");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");

boton1.addEventListener("click", () => {
    caja.classList.add("fondo-1");
    caja.classList.remove("fondo-2");
    caja.classList.remove("fondo-3");
});

boton2.addEventListener("click", () => {
    caja.classList.add("fondo-2");
    caja.classList.remove("fondo-1");
    caja.classList.remove("fondo-3");
});

boton3.addEventListener("click", () => {
    caja.classList.add("fondo-3");
    caja.classList.remove("fondo-1");
    caja.classList.remove("fondo-2");
});