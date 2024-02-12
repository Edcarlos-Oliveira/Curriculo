/*Chamando o menu*/

function mudouTamanho() {
    if (window.innerWidth >= 1055) {
        navegacao.style.display = 'block'
    }
    else {
        navegacao.style.display = 'none'
    }
}
function clicMenu() {
    if (navegacao.style.display == 'block') {
        navegacao.style.display = 'none'
    }
    else {
        navegacao.style.display = 'block'
    }
}
