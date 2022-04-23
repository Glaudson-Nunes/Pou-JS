/* BOTOES QUE CHAMAS OS SUBMENUS */

/* INICIO LOJA 1*/
var btnGela = document.getElementById("btGela");
var btnLoja = document.getElementById("btLoja");
var btnLoja2 = document.getElementById("btLoja2");
var btabrirComidas = document.getElementById("btAbrirComidas");
var btfecharGeladeira = document.getElementById("btfecharGeladeira");
var btMenuComidas = document.getElementById("btabriMenuComidas");
var btMenuRemedios = document.getElementById("abrirMenuRemedios");
var btVoltarLoja = document.getElementById("btvoltarLoja1");
var btFecharcomidas = document.getElementById("btfecharComidass");
var btfechandoLj2 = document.getElementById("btvoltarLoja2");
var btfechandoReme = document.getElementById("btFecharRemedios");


var SubMenuGela = document.getElementById("geladeira");
var SubMenuLoja = document.getElementById("loja_total");
var SubMenuLoja2 = document.getElementById("loja_total2");
var SubMenuComidas = document.getElementById("comidas");
var SubMenuRemedios = document.getElementById("remedios");

var btnFecharLoja = document.getElementById("btfecharLoja");
var btnFecharLoja2 = document.getElementById("btFecharLoja2");


btnFecharLoja.addEventListener("click",fechandoLoja);
btnFecharLoja2.addEventListener("click",fechandoLoja2);
btnGela.addEventListener("click",TelaGeladeira);
btnLoja.addEventListener("click",TelaLoja);
btnLoja2.addEventListener("click",TelaLoja2);
btabrirComidas.addEventListener("click",TelaSubComidas);
btfecharGeladeira.addEventListener("click",fechandoGeladeira);
btMenuComidas.addEventListener("click",TelaMenuComidas);
btMenuRemedios.addEventListener("click",TelaMenuRemedios);
btVoltarLoja.addEventListener("click",voltarLoja1);
btFecharcomidas.addEventListener("click",fechandoComidas);
btfechandoLj2.addEventListener("click",voltarLoja2);
btfechandoReme.addEventListener("click",fechandoRemedios);


/* FUNÇOES QUE EXIBEM OS SUBMENUS CHAMADOS */

function TelaGeladeira(){

    SubMenuGela.style.display = "block";    

}

function TelaLoja(){

    SubMenuLoja.style.display = "block";

}

function TelaLoja2(){

    SubMenuLoja2.style.display = "block";

}

function fechandoLoja(){

    SubMenuLoja.style.display = "none";
}

function fechandoLoja2(){

    SubMenuLoja2.style.display = "none";

}

function TelaSubComidas(){

    SubMenuLoja.style.display = "block";
    SubMenuComidas.style.display = "block";
    SubMenuGela.style.display = "none";
}

function TelaMenuComidas(){

   SubMenuComidas.style.display = "block";
}

function TelaMenuRemedios(){

    SubMenuRemedios.style.display = "block";

 }

function fechandoGeladeira(){

    SubMenuGela.style.display = "none";
}

function voltarLoja1(){

    SubMenuComidas.style.display = "none";
    SubMenuLoja.style.display = "block";

}

function fechandoComidas(){

    SubMenuComidas.style.display = "none";
    SubMenuLoja.style.display = "none";
}

function voltarLoja2(){

    SubMenuRemedios.style.display = "none";

}

function fechandoRemedios(){

    SubMenuRemedios.style.display = "none";
    SubMenuLoja.style.display = "none";

} /* FIM DA LOJA1 */


/*INICIO LOJA 2 */

var btAC = document.getElementById("bt01AComi");
var btAR = document.getElementById("bt02AReme");
var btVL3 = document.getElementById("btvoltarLoja3");
var fechaL3 = document.getElementById("btFecharLoja3");
var btVL4 = document.getElementById("btvoltarLoja4");
var btF4 = document.getElementById("btFeLoja4");
var btAbrirPra = document.getElementById("btAbrirPrate");
var btnVprate = document.getElementById("btVPrate");
var btnAbriRemed = document.getElementById("btAbrirReme");
var btAbrirArmar = document.getElementById("btAbrirArma");
var btnVa = document.getElementById("btVarma");

var SubMenuComidas2 = document.getElementById("comidas2");
var SubMenuRemedios2 = document.getElementById("remedios2");
var SubMenuPrateleiras = document.getElementById("prateleira");
var SubMenuArmario = document.getElementById("armario");
var LuzApagada = document.getElementById("luzApagada");

btAC.addEventListener("click",TelaMenuComidas2);
btAR.addEventListener("click",TelaMenuRemedios2);
btVL3.addEventListener("click",voltarLoja4);
fechaL3.addEventListener("click",btFecharLoja4);
btVL4.addEventListener("click",voltarLoja5)
btF4.addEventListener("click",fechandoRemedios2);
btAbrirPra.addEventListener("click",TelaMenuPrateleiras);
btnVprate.addEventListener("click",voltarPrate);
btnAbriRemed.addEventListener("click",AbrirReme);
btAbrirArmar.addEventListener("click",TelaArmario);
btnVa.addEventListener("click",voltaArmario);


function TelaMenuComidas2(){

    SubMenuComidas2.style.display = "block";
}


function TelaMenuRemedios2(){

    SubMenuRemedios2.style.display = "block";

}

function voltarLoja4(){

    SubMenuComidas2.style.display = "none";

}

function btFecharLoja4(){

    SubMenuLoja2.style.display = "none";
    SubMenuComidas2.style.display = "none";

}

function voltarLoja5(){

    SubMenuRemedios2.style.display = "none";

}

function fechandoRemedios2(){

    SubMenuRemedios2.style.display = "none";
    SubMenuLoja2.style.display = "none";

}

function TelaMenuPrateleiras(){

    SubMenuPrateleiras.style.display = "block";
}

function voltarPrate(){

    SubMenuPrateleiras.style.display = "none";

}

function AbrirReme(){

    SubMenuRemedios2.style.display = "block";
    SubMenuLoja2.style.display = "block";
    SubMenuPrateleiras.style.display = "none";

}

function TelaArmario(){

    SubMenuArmario.style.display = "block";

}

function voltaArmario(){

    SubMenuArmario.style.display = "none";
}

/* OCULTAR TELA INSTRUÇOES */

var btok = document.getElementById("ok");
var telInstru = document.getElementById("Instrucoes");

btok.addEventListener("click",TelaInstruçoes);

function TelaInstruçoes(){

telInstru.style.display = "none";
btMenuRemedios.style.display = "none";
btAR.style.display = "none";
audio3.play();
}