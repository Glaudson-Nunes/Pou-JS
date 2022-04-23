
var chamarBanhe = document.getElementById("passarBanheiro");

var chamarCozin = document.getElementById("passarCozinha");
var chamarJogos = document.getElementById("passarSalaJogos");

var chamarBanheV = document.getElementById("passarBanheiroV");
var chamarQuarto = document.getElementById("passarQuarto");

var chamarJogosV = document.getElementById("passarjogosV");
var chamarLabo = document.getElementById("passarLaboratorio");

var chamarQuartV = document.getElementById("passarQuartoV");
var chamarCozinV = document.getElementById("passarCozinhaV");
var chamarCozinANIMA2 = document.getElementById("passarCozinhaVANIMA2");

var chamarLaboDV = document.getElementById("passarLaboratorio1");

chamarBanhe.addEventListener("click",banheiro);
chamarCozin.addEventListener("click",cozinha);
chamarJogos.addEventListener("click",jogos);
chamarBanheV.addEventListener("click",banheiro);
chamarQuarto.addEventListener("click",quarto);
chamarJogosV.addEventListener("click",jogos);
chamarLabo.addEventListener("click",laboratorio);
chamarQuartV.addEventListener("click",quarto);
chamarCozinV.addEventListener("click",cozinha);
chamarCozinANIMA2.addEventListener("click",cozinha);

chamarLaboDV.addEventListener("click",laboratorioV);



var telaCozinha = document.getElementById("cozinha");

var telaBanheiro = document.getElementById("banheiro");

var telaJogos = document.getElementById("sala_de_jogos");

var telaQuarto = document.getElementById("quarto");

var telaLaboratorio = document.getElementById("laboratorio");


var telaCozinhaV = document.getElementById("cozinhaV");

var telaBanheiroV = document.getElementById("banheiroV");

var telaJogosV = document.getElementById("sala_de_jogosV");

var telaQuartoV = document.getElementById("quartoV");

var telaLaboratorioV = document.getElementById("laboratorioV");

var audio1 = document.getElementById("aduio1Comendo");
var audio2 = document.getElementById("audio2Transicao");
var audio3 = document.getElementById("ok2");
var audio4 = document.getElementById("audio3Bola");


function banheiro(){

    telaBanheiro.style.display = "block";
    
    telaCozinha.style.display = "none";
    telaJogos.style.display = "none";
    telaQuarto.style.display = "none";
    telaLaboratorio.style.display = "none";

    audio2.play();


}

function jogos(){

    telaBanheiro.style.display = "none";
    telaCozinha.style.display = "none";
    telaJogos.style.display = "block";
    telaQuarto.style.display = "none";
    telaLaboratorio.style.display = "none";
    audio2.play()

}

function quarto(){

    telaBanheiro.style.display = "none";
    telaCozinha.style.display = "none";
    telaJogos.style.display = "none";
    telaQuarto.style.display = "block";
    telaLaboratorio.style.display = "none";
    audio2.play()

}

function laboratorio(){

    telaBanheiro.style.display = "none";
    telaCozinha.style.display = "none";
    telaJogos.style.display = "none";
    telaQuarto.style.display = "none";
    telaLaboratorio.style.display = "block";
    audio2.play()
}

function cozinha(){

    telaBanheiro.style.display = "none";
    telaCozinha.style.display = "block";
    telaJogos.style.display = "none";
    telaQuarto.style.display = "none";
    telaLaboratorio.style.display = "none";
    audio2.play()
}


function laboratorioV(){

    telaBanheiro.style.display = "none";
    telaCozinha.style.display = "none";
    telaJogos.style.display = "none";
    telaQuarto.style.display = "none";
    telaLaboratorio.style.display = "block";
    audio2.play()

}
