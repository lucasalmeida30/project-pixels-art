// As 4 primeiras cores da paleta
// let corPreta = document.querySelector('.selected')
let corPaleta = document.getElementsByClassName('color')
// corPreta.style.backgroundColor = 'black'
corPaleta[1].style.backgroundColor = 'blue'
corPaleta[2].style.backgroundColor = 'red'
corPaleta[3].style.backgroundColor = 'green'

// Função para gerar cor aleatorio
function gerarCorAleatoria() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
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
    localStorage.clear()
    const coresString = JSON.stringify(arrayCores)
    localStorage.setItem('colorPalette', coresString)

}

function manterCores() {
    const teste = localStorage.getItem('colorPalette');
    const teste2 = JSON.parse(teste);
    corPaleta[1].style.backgroundColor = teste2[0]
    corPaleta[2].style.backgroundColor = teste2[1]
    corPaleta[3].style.backgroundColor = teste2[2]
}
manterCores()



// function pixel() {
//     let pixel = document.getElementsByClassName('pixel');

//     for (let index = 0; index < pixel.length; index += 1) {
//         pixel[index].addEventListener('click', () => {
            

//         })
//     }
// }

// pixel()









