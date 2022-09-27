let tituloPagina = document.getElementById ("tituloPagina")
console.log(tituloPagina.innerText);

tituloPagina.innerText = "Contacteme!"
console.log(tituloPagina.innerText);

const formulario = document.querySelector(".formulario");
formulario.addEventListener("mouseenter", () => {
    console.log("Complete el formulario");
})

const nombre = document.querySelector(".nombre");
nombre.addEventListener("keydown", () => {
    console.log("Escribiendo...");
})

const apellido = document.querySelector(".apellido");
apellido.addEventListener("keydown", () => {
    console.log("Escribiendo...");
})

const email = document.querySelector(".email");
email.addEventListener("input", (e) => {
    console.log(e.target.value);
})