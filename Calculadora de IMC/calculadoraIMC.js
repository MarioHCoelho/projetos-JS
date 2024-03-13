const calcular = document.getElementById ('calcular');

function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('alt').value;
    const peso = document.getElementById ('peso').value;
    const resultado = document.getElementById ('resultado');

if (nome !== '' && altura !== '' && peso !== ''){
    const valorIMC = (peso/(altura*altura)).toFixed(1)
    let classifi = ' '
    if (valorIMC < 18.5){
        classifi = 'Abaixo do peso.'
    }else if (valorIMC < 25 ){
        classifi = 'Pré-obeso'
    }else if (valorIMC < 30 ){
        classifi = 'Obesidade Grau I'
    }else if (valorIMC < 35 ){
        classifi = 'Obesidade Grau II'
    }else if (valorIMC >= 40){
        classifi = 'Obesidade Grau III'
    }
    resultado.textContent = `${nome} seu IMC é de ${valorIMC}, você se encontra com ${classifi}`
    }

}

calcular.addEventListener('click', imc);

