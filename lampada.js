//Variaveis
const imgLampada = document.querySelector('#lamp');
const btnLigar = document.querySelector('#turnOn');
const btnDesligar = document.querySelector('#turnOff');

//Funcoes
function ligarLampada() {
    return imgLampada.src = '/img/ligada.jpg'
};

function desligarLampada() {
    return imgLampada.src = '/img/desligada.jpg'
};

function lampBroken() {
    return imgLampada.src = '/img/quebrada.jpg'
}


//Eventos
btnLigar.addEventListener('click', (e) => {ligarLampada();});
btnDesligar.addEventListener('click',  () => {desligarLampada();});
lamp.addEventListener('mouseover', () => {ligarLampada();});
lamp.addEventListener('mouseout', () => {desligarLampada();});
lamp.addEventListener('dblclick', () => {lampBroken();});