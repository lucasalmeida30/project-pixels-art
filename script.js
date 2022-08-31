// função para as 4 primeiras cores da paleta

let corPaleta = document.getElementsByClassName('color')
corPaleta[0].style.backgroundColor = 'black'
corPaleta[1].style.backgroundColor = 'blue'
corPaleta[2].style.backgroundColor = 'red'
corPaleta[3].style.backgroundColor = 'green'

function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
    
  }


let button = document.getElementById('button-random-color')
button.addEventListener('click', gerarCorAleatoria)
function gerarCorAleatoria() {
    for(let index = 1; index < corPaleta.length; index += 1){
        corPaleta[index].style.backgroundColor = generateColor()
    }
}



