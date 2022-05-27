var botao = document.getElementById('botao')
var lamp = document.getElementById('lampada')


console.log(botao.value)

botao.onclick = function(){
    //alert('Clicado!')
    
    if(botao.value == 'Acender'){
        //alert(botao.value)
        lamp.src = './img/acesa.png'
        botao.value = 'Apagar'
        botao.innerHTML = 'Apagar'
    }
    else{
        lamp.src = './img/apagada.png'
        botao.value = 'Acender'
        botao.innerHTML = 'Acender'
    }
}
 