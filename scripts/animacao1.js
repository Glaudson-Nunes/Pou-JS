/* 1-Animaçâo do ambiente banherio */

var btChuve = document.getElementById("btChuverio");
var btChuve2 = document.getElementById("btChuverio2");

var btSabo = document.getElementById("btSabonete");
var btSabo2 = document.getElementById("btSabonete2");

var pouNormal1 = document.getElementById("animacaoInicial2");

var pouEnsaboando = document.getElementById("PouSeEnsabuando");

var pouEnsabuado = document.getElementById("PouEnsaboado");

var pouChuveiro = document.getElementById("PouChuverio");



btSabo.addEventListener("click",sabonete);
btChuve.addEventListener("click",chueveiro);




function sabonete(){

    pouNormal1.style.display = "none";
    pouEnsaboando.style.display = "block"; 
    btChuve.style.display = "none";
    btChuve2.style.display = "block";


    setTimeout(()=>{

        esabuado();
    
    },4000)

    
}

function esabuado(){

    pouEnsaboando.style.display = "none";
    pouEnsabuado.style.display = "block";
    btSabo.style.display = "none";
    btSabo2.style.display = "block";
    btChuve.style.display = "block";
    btChuve2.style.display = "none";

}

function chueveiro(){

    pouChuveiro.style.display = "block";
    pouEnsabuado.style.display = "none";  
    pouNormal1.style.display = "none";
    pouEnsaboando.style.display = "none";

   
   setTimeout(()=>{

    TerminouBanho();


   },4000)

}

function TerminouBanho(){

    pouChuveiro.style.display = "none";
    pouNormal1.style.display = "block";
    pouEnsaboando.style.display = "none";
    pouEnsabuado.style.display = "none";

    btChuve.style.display = "none";
    btChuve2.style.display = "block";

    btSabo.style.display = "block";
    btSabo2.style.display = "none";

    pouLaran1.style.display = "none";
    pouLaran2.style.display = "none";
    pouLaran3.style.display = "none";
    camaLaran.style.display = "none";
    pouLaran5.style.display = "none";

    pouBlue1.style.display = "none";
    pouBlue2.style.display = "none";
    pouBlue3.style.display = "none";
    camaAzul.style.display = "none";
    pouBlue5.style.display = "none";

    pouRed1.style.display = "none";
    pouRed2.style.display = "none";
    pouRed3.style.display = "none";
    camaVermelha.style.display = "none";
    pouRed5.style.display = "none";

    pouYellow1.style.display = "none";
    pouYellow2.style.display = "none";
    pouYellow3.style.display = "none";
    camaAmarela.style.display = "none";
    pouYellow5.style.display = "none";
}


/* 2-Animaçâo sera do ambiente da sala de jogos */

var btbo = document.getElementById("btBola");
var btbo2 = document.getElementById("btBola2");
var btbo3 = document.getElementById("btBola3");
var btbo4 = document.getElementById("btBola4");
var btbo5 = document.getElementById("btBola5");

var pouNormal2 = document.getElementById("animacaoInicial3");

var pouBrin = document.getElementById("pouBrincandoLimpo");

btbo.addEventListener("click",Brincando);

function Brincando(){


    pouNormal2.style.display = "none";
    pouBrin.style.display = "block";

        audioBola();


    setTimeout(()=>{

        BrincandoOFF();

    },6000)
}

function BrincandoOFF(){

    pouNormal2.style.display = "block";
    pouBrin.style.display = "none";
}


/* 3-Animaçâo sera do ambiente quarto */

var pouNormal3 = document.getElementById("animacaoInicial4");

var pouDorm = document.getElementById("pouDormindo");

var pouIndo = document.getElementById("pouIndoDormi");

var desligarLuz = document.getElementById("btDesligarLuz");
var desligarLuz2 = document.getElementById("btDesligarLuz2");

var luzOFF = document.getElementById("luzApagada");

var acenderLuz = document.getElementById("AcenderlUZ");

desligarLuz.addEventListener("click",apagandoLuz);
luzOFF.addEventListener("click",acordando);

function apagandoLuz(){

    pouNormal3.style.display = "none";
    pouIndo.style.display = "none";
    pouDorm.style.display = "block";
    desligarLuz.style.display = "none";
    acenderLuz.style.display = "block";

    setTimeout(()=>{

        dormindo();
    

    },1000)

}

function dormindo(){

    pouIndo.style.display = "none";
    pouDorm.style.display = "block";
    pouNormal3.style.display = "none";
    luzOFF.style.display = "block";

}

function acordando(){

    pouNormal3.style.display = "block";
    pouDorm.style.display = "none";
    pouIndo.style.display = "none";
    desligarLuz.style.display = "block";
    acenderLuz.style.display = "none";
    luzOFF.style.display = "none";
    pouCansado4.style.display = "none";
    animaçaopouDormSujo.style.display = "none";
}

/* ARMARIO OPÇÂO TROCAR DE ROUPAS */

var blusaAMARELA = document.getElementById("BTAmarela");

var blusaAZUL = document.getElementById("BTAzul");

var blusaLaranja = document.getElementById("BTLaranja");

var blusaVermelha = document.getElementById("BTVermelha");


var pouRed1 = document.getElementById("pouVermelha1");
var pouBlue1 = document.getElementById("pouAzul1");
var pouLaran1 = document.getElementById("pouLaranja1");
var pouYellow1 = document.getElementById("pouAmarela1");  
var pouNormal0 = document.getElementById("animacaoInicial1");

var camaVermelha = document.getElementById("pouVermelha4QUARTO");
var camaAzul = document.getElementById("pouAzul4QUARTO");
var camaLaran = document.getElementById("pouLaranja4QUARTO");
var camaAmarela = document.getElementById("pouAmarela4QUARTO");
var pouNormal4 = document.getElementById("animacaoInicial4QUARTO");

var pouRed2 = document.getElementById("pouVermelha2");
var pouBlue2 = document.getElementById("pouAzul2");
var pouLaran2 = document.getElementById("pouLaranja2");
var pouYellow2 = document.getElementById("pouAmarela2"); 

var pouRed3 = document.getElementById("pouVermelha3");
var pouBlue3 = document.getElementById("pouAzul3");
var pouLaran3 = document.getElementById("pouLaranja3");
var pouYellow3 = document.getElementById("pouAmarela3");

var pouRed5 = document.getElementById("pouVermelha5");
var pouBlue5 = document.getElementById("pouAzul5");
var pouLaran5 = document.getElementById("pouLaranja5");
var pouYellow5 = document.getElementById("pouAmarela5");
var pouNormal5 = document.getElementById("animacaoInicial5");
var btChuve3 = document.getElementById("btChuverioOFF");
var btSabo3 = document.getElementById("btSaboneteOFF");
var btt = document.getElementById("batataOFF");

var esquerda = document.getElementById("setaEsquerda");
var direita = document.getElementById("setaDireita");
var esquerda2 = document.getElementById("setaEsquerda2");
var direita2 = document.getElementById("setaDireita2");
var esquerda3 = document.getElementById("setaEsquerda3");
var direita3 = document.getElementById("setaDireita3");
var btnGela = document.getElementById("btGela");
var btnGela2 = document.getElementById("btGela2");
var btnLoja = document.getElementById("btLoja");
var btnLoja3 = document.getElementById("btLoja3");



blusaVermelha.addEventListener("click",BlusaVermelha);

blusaAZUL.addEventListener("click",BlusaAzul)

blusaLaranja.addEventListener("click",BlusaLaranja);

blusaAMARELA.addEventListener("click",BlusaAmarela);


function BlusaVermelha(){

    pouNormal0.style.display = "none";
    pouRed1.style.display = "block";

    camaVermelha.style.display = "block";
    pouNormal4.style.display = "none";

    pouNormal1.style.display = "none";
    pouRed2.style.display = "block";

    pouNormal2.style.display = "none";
    pouRed3.style.display = "block";

    pouNormal5.style.display = "none";
    pouRed5.style.display = "Block";

    pouNormal3.style.display = "none";

    pouBlue1.style.display = "none";
    pouBlue2.style.display = "none";
    pouBlue3.style.display = "none";
    camaAzul.style.display = "none";
    pouBlue5.style.display = "none";

    pouLaran1.style.display = "none";
    pouLaran2.style.display = "none";
    pouLaran3.style.display = "none";
    camaLaran.style.display = "none";
    pouLaran5.style.display = "none";

    pouYellow1.style.display = "none";
    pouYellow2.style.display = "none";
    pouYellow3.style.display = "none";
    camaAmarela.style.display = "none";
    pouYellow5.style.display = "none";


    btChuve.style.display = "none";
    btChuve2.style.display = "none";
    btSabo2.style.display = "none";
    btSabo.style.display = "none";
    btChuve3.style.display = "block";
    btSabo3.style.display = "block";

    desligarLuz.style.display = "none";
    desligarLuz2.style.display = "block";

    btbo.style.display = "none";
    btbo2.style.display = "none";
    btbo3.style.display = "none";
    btbo4.style.display = "none";
    btbo5.style.display = "block"

    esquerda.style.display = "none";
    direita.style.display = "none";
    esquerda2.style.display = "none";
    direita2.style.display = "none";
    btnGela.style.display = "none";
    btnGela2.style.display = "block";
    esquerda3.style.display = "block";
    direita3.style.display = "block";
    btnLoja.style.display = "none";
    btnLoja3.style.display = "block";

}   

function BlusaAzul(){

    pouNormal0.style.display = "none";
    pouNormal1.style.display = "none";
    pouNormal2.style.display = "none";
    pouNormal3.style.display = "none";
    pouNormal4.style.display = "none";
    pouNormal5.style.display = "none";

    pouBlue1.style.display = "block";
    pouBlue2.style.display = "block";
    pouBlue3.style.display = "block";
    camaAzul.style.display = "block";
    pouBlue5.style.display = "block";

    pouLaran1.style.display = "none";
    pouLaran2.style.display = "none";
    pouLaran3.style.display = "none";
    camaLaran.style.display = "none";
    pouLaran5.style.display = "none";

    pouYellow1.style.display = "none";
    pouYellow2.style.display = "none";
    pouYellow3.style.display = "none";
    camaAmarela.style.display = "none";
    pouYellow5.style.display = "none";

    pouRed1.style.display = "none";
    pouRed2.style.display = "none";
    pouRed3.style.display = "none";
    camaVermelha.style.display = "none";
    pouRed5.style.display = "none";

    btChuve.style.display = "none";
    btChuve2.style.display = "none";
    btSabo2.style.display = "none";
    btSabo.style.display = "none";
    btChuve3.style.display = "block";
    btSabo3.style.display = "block";

    desligarLuz.style.display = "none";
    desligarLuz2.style.display = "block";

    btbo.style.display = "none";
    btbo2.style.display = "none";
    btbo3.style.display = "block";
    btbo4.style.display = "none";
    btbo5.style.display = "none"

    esquerda.style.display = "none";
    direita.style.display = "none";
    esquerda2.style.display = "none";
    direita2.style.display = "none";
    btnGela.style.display = "none";
    btnGela2.style.display = "block";
    esquerda3.style.display = "block";
    direita3.style.display = "block";
    btnLoja.style.display = "none";
    btnLoja3.style.display = "block";

}


function BlusaLaranja(){

    pouNormal0.style.display = "none";
    pouNormal1.style.display = "none";
    pouNormal2.style.display = "none";
    pouNormal3.style.display = "none";
    pouNormal4.style.display = "none";
    pouNormal5.style.display = "none";

    pouLaran1.style.display = "block";
    pouLaran2.style.display = "block";
    pouLaran3.style.display = "block";
    camaLaran.style.display = "block";
    pouLaran5.style.display = "block";

    pouBlue1.style.display = "none";
    pouBlue2.style.display = "none";
    pouBlue3.style.display = "none";
    camaAzul.style.display = "none";
    pouBlue5.style.display = "none";

    pouYellow1.style.display = "none";
    pouYellow2.style.display = "none";
    pouYellow3.style.display = "none";
    camaAmarela.style.display = "none";
    pouYellow5.style.display = "none";

    pouRed1.style.display = "none";
    pouRed2.style.display = "none";
    pouRed3.style.display = "none";
    camaVermelha.style.display = "none";
    pouRed5.style.display = "none";


    btChuve.style.display = "none";
    btChuve2.style.display = "none";
    btSabo2.style.display = "none";
    btSabo.style.display = "none";
    btChuve3.style.display = "block";
    btSabo3.style.display = "block";

    desligarLuz.style.display = "none";
    desligarLuz2.style.display = "block";

    btbo.style.display = "none";
    btbo2.style.display = "none";
    btbo3.style.display = "none";
    btbo4.style.display = "block";
    btbo5.style.display = "none";

    esquerda.style.display = "none";
    direita.style.display = "none";
    esquerda2.style.display = "none";
    direita2.style.display = "none";
    btnGela.style.display = "none";
    btnGela2.style.display = "block";
    esquerda3.style.display = "block";
    direita3.style.display = "block";
    btnLoja.style.display = "none";
    btnLoja3.style.display = "block";

}

function BlusaAmarela(){

    pouNormal0.style.display = "none";
    pouNormal1.style.display = "none";
    pouNormal2.style.display = "none";
    pouNormal3.style.display = "none";
    pouNormal4.style.display = "none";
    pouNormal5.style.display = "none";

    pouLaran1.style.display = "none";
    pouLaran2.style.display = "none";
    pouLaran3.style.display = "none";
    camaLaran.style.display = "none";
    pouLaran5.style.display = "none";

    pouBlue1.style.display = "none";
    pouBlue2.style.display = "none";
    pouBlue3.style.display = "none";
    camaAzul.style.display = "none";
    pouBlue5.style.display = "none";

    pouYellow1.style.display = "block";
    pouYellow2.style.display = "block";
    pouYellow3.style.display = "block";
    camaAmarela.style.display = "block";
    pouYellow5.style.display = "block";

    pouRed1.style.display = "none";
    pouRed2.style.display = "none";
    pouRed3.style.display = "none";
    camaVermelha.style.display = "none";
    pouRed5.style.display = "none";


    btChuve.style.display = "none";
    btChuve2.style.display = "none";
    btSabo2.style.display = "none";
    btSabo.style.display = "none";
    btChuve3.style.display = "block";
    btSabo3.style.display = "block";

    desligarLuz.style.display = "none";
    desligarLuz2.style.display = "block";

    btbo.style.display = "none";
    btbo2.style.display = "block";
    btbo3.style.display = "none";
    btbo4.style.display = "none";
    btbo5.style.display = "none";

    esquerda.style.display = "none";
    direita.style.display = "none";
    esquerda2.style.display = "none";
    direita2.style.display = "none";
    btnGela.style.display = "none";
    btnGela2.style.display = "block";
    esquerda3.style.display = "block";
    direita3.style.display = "block";
    btnLoja.style.display = "none";
    btnLoja3.style.display = "block";

}




/* ANIMAÇOES POU BRINCANDO COM ROUPAS */

btbo2.addEventListener("click",brincandoComRoupaAma);
btbo3.addEventListener("click",brincandoComRoupaAzul);
btbo4.addEventListener("click",brincandoComRoupaLaranja);
btbo5.addEventListener("click",brincandoComRoupaVerme);

var pou01 = document.getElementById("pou1");
var pou02 = document.getElementById("pou2");
var pou03 = document.getElementById("pou3");
var pou04 = document.getElementById("pou4");

function brincandoComRoupaAma(){

    pouYellow3.style.display = "none";
    pou01.style.display = "block";
    pou02.style.display = "none";
    pou03.style.display = "none";
    pou04.style.display = "none";

    audio4.play();
    

    setTimeout(()=>{

        normalAmarelo();

    },5000)
    
}

function normalAmarelo(){

    pouYellow3.style.display = "block";
    pou01.style.display = "none";
}


/* --------------------------------------------------------------------*/

function brincandoComRoupaAzul(){

    pouBlue3.style.display = "none";
    pou02.style.display = "block";
    pou01.style.display = "none";
    pou03.style.display = "none";
    pou04.style.display = "none";


    audio4.play();


    setTimeout(()=>{

        normalAzul();

    },3000)
    

}

function normalAzul(){

    pouBlue3.style.display = "block";
    pou02.style.display = "none";
}

/* --------------------------------------------------------------------*/

function brincandoComRoupaLaranja(){

    pouLaran3.style.display = "none";
    pou03.style.display = "block";
    pou01.style.display = "none";
    pou02.style.display = "none";
    pou04.style.display = "none";

    audio4.play();


    setTimeout(()=>{

        normalLaranja();

    },4000)


}

function normalLaranja(){

    pou03.style.display = "none";
    pouLaran3.style.display = "block";

}

/* --------------------------------------------------------------------*/


function brincandoComRoupaVerme(){

    pouRed3.style.display = "none";
    pou04.style.display = "block";
    pou01.style.display = "none";
    pou02.style.display = "none";
    pou03.style.display = "none";

    

    audio4.play();


    setTimeout(()=>{

        normalVermelho();

    },4000)

}

function normalVermelho(){

    pouRed3.style.display = "block";
    pou04.style.display = "none";
}


/* ANIMAÇAO DA TELA COZINHA /geladeira --------------------------------------------------------------------*/


var addBatata = document.getElementById("mais1");
var addBaicon = document.getElementById("mais2");

var bata1 = document.getElementById("batata");
var bata = document.getElementById("batata2");
var bac = document.getElementById("baicon2");
var bac1 = document.getElementById("baicon");
var esquerda = document.getElementById("setaEsquerda");
var direita = document.getElementById("setaDireita");

var esquerda2 = document.getElementById("setaEsquerda2");
var direita2 = document.getElementById("setaDireita2");
var pouCB = document.getElementById("comendobata");
var pouCN = document.getElementById("comendodoBaicon");
var fran = document.getElementById("frango");


addBatata.addEventListener("click",addBat);
addBaicon.addEventListener("click",addBaiconF);

esquerda2.addEventListener("click",avanEsquerda);
direita2.addEventListener("click",avanDireita);


function addBat(){

bata.style.display = "block";
bata1.style.display = "block";

bac1.style.display = "none";

esquerda.style.display = "none";
direita.style.display = "none";

esquerda2.style.display = "block";
direita2.style.display = "block";

SubMenuComidas2.style.display = "none";
SubMenuComidas.style.display = "none";
SubMenuLoja.style.display = "none";
SubMenuLoja2.style.display = "none";

}

function addBaiconF(){

    bac.style.display = "block";
    bac1.style.display = "block";

    bata1.style.display = "none";

    esquerda.style.display = "none";
    direita.style.display = "none";

    esquerda2.style.display = "block";
    direita2.style.display = "block";

    SubMenuComidas2.style.display = "none";
    SubMenuComidas.style.display = "none";

    SubMenuLoja.style.display = "none";
    SubMenuLoja2.style.display = "none";


}


function avanDireita(){

    bata1.style.display = "block";
    bac1.style.display = "none";

}

function avanEsquerda(){

    bata1.style.display = "none";
    bac1.style.display = "block";
}


/* ANIMAÇAO COMENDO */


bata1.addEventListener("click",pouComendoB);
bac1.addEventListener("click",pouCoemndoBai);

function pouComendoB(){

    pouNormal0.style.display = "none";
    pouCB.style.display = "block";
    bata1.style.display = "none";
    bata.style.display = "none";
    
      
    setTimeout(()=>{

        audioComendo();

    },1000)


    setTimeout(()=>{

        animacaoNormal();
        fran.style.backgroundColor = "rgb(0, 255, 38)";

    },3000)

}


function animacaoNormal(){

    pouNormal0.style.display = "block";
    pouCB.style.display = "none";
}

/* ------------------------------*/

function pouCoemndoBai(){

    pouNormal0.style.display = "none";
    pouCN.style.display = "block";

    bac1.style.display = "none";
    bac.style.display = "none";
   
    setTimeout(()=>{

        audioComendo();

    },1000)

    setTimeout(()=>{

        animacaoNormal2();
        fran.style.backgroundColor = "rgb(0, 255, 38)";
        fran.style.border = "2px solid green";
    },3000)

}

function animacaoNormal2(){

    pouNormal0.style.display = "block";
    pouCN.style.display = "none";

}

function audioComendo(){

    audio1.play();
}

function audioBola(){

    audio4.play();
}