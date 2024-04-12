const lista = document.getElementById("lista");

lista.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        // console.log(event.target.textContent);
        event.target.remove();
    }
});