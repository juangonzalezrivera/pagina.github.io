const btniniciar = document.getElementById("iniciarsecion"),
    btnregistrar = document.getElementById("registrarse"),
    fromregistro= document.querySelector(".registro"),
    frominicio= document.querySelector(".inicio");

btniniciar.addEventListener("click", e => {
    fromregistro.classList.add("hide");
    frominicio.classList.remove("hide")
    })

btnregistrar.addEventListener("click", e => {
    frominicio.classList.add("hide");
    fromregistro.classList.remove("hide")
    })

