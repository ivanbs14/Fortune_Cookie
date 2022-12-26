/* VARIAVEIS */
const btnTry = document.querySelector("#btnTry")
const btnReturn = document.querySelector("#btnReturn")

/* EVENTOS */
//adicionando atributos as variaveis
btnTry.addEventListener('click', handleTryClick)
btnReturn.addEventListener('click', handleReturn)

function handleTryClick(event) {
    event.preventDefault()

        document.querySelector(".box1").classList.add("hide")
        document.querySelector(".box2").classList.remove("hide")
}

function handleReturn(event) {
    event.preventDefault()

        document.querySelector(".box2").classList.add("hide")
        document.querySelector(".box1").classList.remove("hide")
}

