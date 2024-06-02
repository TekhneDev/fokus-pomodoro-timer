const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
//
const botaoIniciar = document.querySelector('.app__card-primary-button');
const displayTempo = document.querySelector('#timer');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title')


focoBt.addEventListener('click', () => {
    alterarContexto('foco')
})

//elemento.addEventListener(evento, callback);
/*
    elemento: É o elemento HTML ao qual queremos associar o evento.
    evento: É uma string que representa o tipo de evento que desejamos capturar.
    callback: É a função que será chamada quando o evento ocorrer.
*/

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagens/${contexto}.png`)
}

/*
const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 
*/