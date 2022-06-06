document.getElementById("calcular").onclick = function(){
    var ano = document.getElementById('ano')
    console.log(ano.value)
    var radios = document.getElementsByName("sexo")
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            console.log("Escolheu: " + radios[i].value)
            var sexo = radios[i].value
        }
    }

    console.log(sexo)
    var idade = 2022 - ano.value
    console.log('Sua idade é...' + idade)
    console.log('Você é do sexo...' + sexo)

    if (sexo == "Masculino"){
        if(idade <= 5){
            image.src = "./img/cascaobebe.jpg"}
        
        if(idade>=6 && idade<= 10){
            image.src = "./img/Cascão.png"
        }

        if(idade>=11 && idade<=20){
            image.src = "./img/cascaojovem.jpg"
        }

        if(idade>=21 && idade<=49){
            image.src = "./img/cascaoadulto.png"
        }

        if(idade>=50){
            image.src = "./img/cascaovelho.png"}
    }

    else{
        if(idade <= 5){
            image.src = "./img/monicabebe.jpg"}
        
        if(idade>=6 && idade<= 10){
            image.src = "./img/monica.jpg"
        }

        if(idade>=11 && idade<=20){
            image.src = "./img/monicajovem.jpg"
        }

        if(idade>=21 && idade<=49){
            image.src = "./img/monicaadulta.png"
        }

        if(idade>=50){
            image.src = "./img/monicavelha.png"
        }
    }

    textoresultado.innerHTML = "Você é do sexo " + sexo + " e tem " + idade + " anos de idade"

}