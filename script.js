// As 4 primeiras cores da paleta

let corPaleta = document.getElementsByClassName('color')
let arrayTeste = []
arrayTeste.push(corPaleta)
corPaleta[0].style.backgroundColor = 'black'
corPaleta[1].style.backgroundColor = 'blue'
corPaleta[2].style.backgroundColor = 'red'
corPaleta[3].style.backgroundColor = 'green'
let teste = JSON.stringify(arrayTeste)
let teste2 = localStorage.setItem('cores', teste)
// Função para gerar cor aleatorio
function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * letras.length)];
    }
    return color;
}

// função do click do botão
let button = document.getElementById('button-random-color')
button.addEventListener('click', gerarPaleta)

function gerarPaleta() {
    let arrayCores = [];
    for (let index = 1; index < corPaleta.length; index += 1) {
        let corAleatorio = corPaleta[index].style.backgroundColor = gerarCorAleatoria()
        arrayCores.push(corAleatorio);
    }
    const coresString = JSON.stringify(arrayCores)
    localStorage.setItem('colorPalette', coresString)

}

function manterCores() {
    const coresStorage = localStorage.getItem('colorPalette');
    const coresFixa = JSON.parse(coresStorage);
    if (coresFixa !== null) {
        corPaleta[1].style.backgroundColor = coresFixa[0]
        corPaleta[2].style.backgroundColor = coresFixa[1]
        corPaleta[3].style.backgroundColor = coresFixa[2]
    }

}
manterCores()

for (let index = 0; index < corPaleta.length; index += 1) {
    corPaleta[index].addEventListener('click', classSelected)
}

function classSelected(clicked) {
    let event = clicked.target
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected')
    event.classList.add('selected')
}
const select = document.getElementsByClassName('selected');
const pixels = document.querySelectorAll('.pixel');
for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', teste3);
}

function teste3(event) {

    let tgr = event.target;
    tgr.style.backgroundColor = select[0].style.backgroundColor;

}


let limparPixels = document.getElementById('clear-board')
limparPixels.addEventListener('click', limpar)
function limpar() {
    for (let index = 0; index < pixels.length; index += 1){
        pixels[index].style.backgroundColor = 'white'
    }
}









