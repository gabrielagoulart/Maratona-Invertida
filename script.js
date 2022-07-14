/*
CRIAR CARD DA TEMPORADA
LISTAR CARD
CRIAR CARD DA TEMPORADA SELECIONADA
ADICIONAR UM EVENTO PARA ADICIONAR A TEMPORADA A FILA
LISTAR AS TEMPORADAS SELECIONADAS
REMOVERA TEMPORADA SELECIONADA
*/

//CRIAR CARD DA TEMPORADA
const container = document.querySelector('.main_vitrine')

function cardPrincipal(temporada) {
    const article = document.createElement('article')
    article.classList.add("main_card")

    const mainCardTop = document.createElement("div")
    mainCardTop.classList.add("main_card_top")

    const h2 = document.createElement("h2")
    h2.innerText = temporada.nome

    const span = document.createElement("span")
    span.innerText = temporada.temporada 

    const mainCardBottom = document.createElement("div")
    mainCardBottom.classList.add("main_card_bottom")

    const p = document.createElement("p")
    p.innerText = temporada.sinopse 

    const button = document.createElement('button')
    button.innerText = 'Adicionar a fila'
    button.id = temporada.id
    button.type = "button"

    mainCardTop.append(h2, span)
    mainCardBottom.append(p, button)
    article.append(mainCardTop, mainCardBottom)

    return article
}

//LISTAR CARD
function listarTemporadas() {
    for (let i = 0; i < temporadas.length; i++) {
        let card = cardPrincipal(temporadas[i])
        container.appendChild(card)
    }
}

listarTemporadas()

//CRIAR CARD DA TEMPORADA SELECIONADA