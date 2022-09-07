// As 4 primeiras cores da paleta
// let corPreta = document.querySelector('.selected')
let corPaleta = document.getElementsByClassName('color')
let arrayTeste = []
arrayTeste.push(corPaleta)
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

for(let index = 0; index < corPaleta.length; index += 1){
    corPaleta[index].addEventListener('click', pintarPixel)
}

function pintarPixel (clicked){
     let event = clicked.target
     let selected = document.querySelector('.selected');
     selected.classList.remove('selected')
     event.classList.add('selected')
}







// let limparPixels = document.getElementById('clear-board')

// limparPixels.addEventListener('click', () => {
//     for(let index = 0; index < pixel.length; index += 1){
//         pixel[index].style.backgroundColor = 'white'
//     }
// })

// // function limpar (){
// //     // let pixel2 = document.getElementsByClassName('pixel');
// //     for(let index = 0; index < pixel.length; index += 1){
// //         pixel[index].style.backgroundColor = 'white'
// //     }
// // }









