let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let quantTentativas = 0

var inputField = document.getElementById('input');
inputField.addEventListener('keyup', function(event){
    if (event.key === 'Enter') {
        evento()
    }
})

document.querySelector('.btn-click').addEventListener('click', evento)

function evento(){
    let numero = document.getElementsByClassName('form-control')[0]
    console.log(numero)
    let novoAlert = '';

    let alert = document.getElementById('alert')
    if(numero.value == '' || isNaN(numero.value)){
        novoAlert = 'Nenhum número foi digitado';
    }else{
        let resposta = novoNumero(numero.value);
        if(resposta==1){
            quantTentativas++;
            confetti();
            novoAlert = 'Acertou em ' + quantTentativas + ' tentativas';
            removerElemento();
            numero.disabled = true;
            alert.style.fontSize = '28px'
        }else if(resposta == 0){
            quantTentativas++;
            novoAlert = 'Continue tentando';
        }else if(resposta == 2){
            novoAlert = 'Número fora da escala';
        }
    }
    numero.value  = ''
    alert.innerHTML = novoAlert;

}

document.querySelector('.btn-gerar').addEventListener('click', function(){
    location.reload()
})

function novoNumero(numero){
    if(numero < 1 || numero > 100){
        return 2
    }
    let numerosParagrafo = document.getElementById('numbers')
    let novaDiv = document.createElement("div")
    novaDiv.classList.add('elem')
    let novoNumero = document.createElement("p");
    novoNumero.innerHTML = String(numero);
    novaDiv.append(novoNumero);
    numerosParagrafo.append(novaDiv);
    if(numero == numeroAleatorio){
        return 1
    }
    let diferenca = Math.abs(numeroAleatorio - numero)
    let escala = diferenca/10
    console.log(escala)
    if(escala < 1){
        novaDiv.style.backgroundColor = '#71ff00'
    }else if(escala < 2){
        novaDiv.style.backgroundColor = '#AAFF00'
    }else if(escala < 4){
        novaDiv.style.backgroundColor = '#E2FF00'
    }else if(escala < 5){
        novaDiv.style.backgroundColor = '#FFE200'
    }else if(escala < 6){
        novaDiv.style.backgroundColor = '#FFAA00'
    }else if(escala < 8){
        novaDiv.style.backgroundColor = '#FF7100'
    }else if(escala < 9){
        novaDiv.style.backgroundColor = '#FF3800'
    }else if(escala < 10){
        novaDiv.style.backgroundColor = '#FF0000'
    }
    return 0;
}

function removerElemento(){
    var verificar = document.getElementById( 'verificar' );
    verificar.parentNode.removeChild( verificar );
}
