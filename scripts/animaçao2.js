
/* ASSIM QUE USUARIO ALTERAR O AMBIENTE DO LABORATORIO PARA A COZINHA IRA CHAMAR UMA ANIMAÇÂO NOVA, ENTRE 2/4 MINUTOS,
SUBISTITUINDO OS ICONES POR OUTROS E COM OUTRAS ANIMAÇOES, NESSE SCRIPT SERA FEITA ESSA SUBISTITUIÇÂO DE ICONS
E ADICIONADOS AS NOVAS ANIMAÇÔES. */


/* variaveis das animaçôes 1 /cozinha*/
var btnGela = document.getElementById("btGela"); 
var btnGela2 = document.getElementById("btGela2");
var esquerda = document.getElementById("setaEsquerda");
var esquerda2 = document.getElementById("setaEsquerda2"); 
var esquerda3 = document.getElementById("setaEsquerda3");
var direita = document.getElementById("setaDireita");
var direita2 = document.getElementById("setaDireita2");
var direita3 = document.getElementById("setaDireita3");
var bata1 = document.getElementById("batata");
var bata = document.getElementById("batata2");
var bac1 = document.getElementById("baicon");
var bac = document.getElementById("baicon2");
var btnLoja = document.getElementById("btLoja");
var btnLoja2 = document.getElementById("btLoja2");
var btnLoja3 = document.getElementById("btLoja3");



/* variaveis das animaçôes 1 /banheiro*/
var btChuve = document.getElementById("btChuverio");
var btChuve2 = document.getElementById("btChuverio2");
var btChuve3 = document.getElementById("btChuverioOFF");
var btSabo = document.getElementById("btSabonete");
var btSabo2 = document.getElementById("btSabonete2");
var btSabo3 = document.getElementById("btSaboneteOFF");


/* variaveis das animaçôes 1/sala de jogos */
var btbo = document.getElementById("btBola");
var btbo2 = document.getElementById("btBola2");
var btbo3 = document.getElementById("btBola3");
var btbo4 = document.getElementById("btBola4");
var btbo5 = document.getElementById("btBola5");
var btbo6 = document.getElementById("btBolaANIMATION");


/* variaveis das animaçôes 1/quarto */
var btAbrirArmar = document.getElementById("btAbrirArma");
var desligarLuz = document.getElementById("btDesligarLuz");
var desligarLuz2 = document.getElementById("btDesligarLuz2");
var acenderLuz = document.getElementById("AcenderlUZ");
var luzOFF = document.getElementById("luzApagada");
var btabriprate = document.getElementById("btAbrirPrate");


/* variaveis das animaçôes 1/laboratorio */
var btAbrirPra = document.getElementById("btAbrirPrate");
var btnLoja2 = document.getElementById("btLoja2");

/* variavel que vai iniciar as animaçôes 2 */
;

/* animaçoes 1 do pou */
var pouNormal0 = document.getElementById("animacaoInicial1");
var pouNormal1 = document.getElementById("animacaoInicial2");
var pouNormal2 = document.getElementById("animacaoInicial3");
var pouNormal3 = document.getElementById("animacaoInicial4");
var pouNormal4 = document.getElementById("animacaoInicial5");
var pouEnsabuado = document.getElementById("PouEnsaboado");


/* animaçoes do pou CANSADO */

var pouCansado1 = document.getElementById("animacaoComsono1");
var pouCansado2 = document.getElementById("animacaoComsono2");
var pouCansado3 = document.getElementById("animacaoComsono3");
var pouCansado4 = document.getElementById("animacaoComsono4");
var pouCansado5 = document.getElementById("animacaoComsono5");


var fome = document.getElementById("frango");
var saude = document.getElementById("saude");
var energia = document.getElementById("energia");
var diver = document.getElementById("diversao");
var chamarCozinANIMA2 = document.getElementById("passarCozinhaVANIMA2");
var chamarCozinV = document.getElementById("passarCozinhaV");
chamarCozinV.addEventListener("click",ocultandoAnimaçoes1)


/* VARIAVEIS DOS ICONES DAS ANIMAÇOES, IRAO FICAR VISIVEIS 2*/
var camaVermelha = document.getElementById("pouVermelha4");
var camaAzul = document.getElementById("pouAzul4");
var camaLaran = document.getElementById("pouLaranja4");
var camaAmarela = document.getElementById("pouAmarela4");
var pouNormal4 = document.getElementById("animacaoInicial5");


  /* VARIAVEIS DOS ICONES E ANIMAÇOES  DA ANIMAÇAO 2 */

var gelaanimation = document.getElementById("btGelaANIMATION");
var setadireianimation = document.getElementById("setaDireitaANIMATION");
var lojaanimation = document.getElementById("btLojaANIMATION");
var setaesqueanimation = document.getElementById("setaEsquerdaANIMATION");

var chuveanimation = document.getElementById("btChuverioANIMATION");
var saboanimation = document.getElementById("btSaboneteANIMATION");
var bolaanimation = document.getElementById("btBolaANIMATION");
var armaanimation = document.getElementById("btAbrirArmaANIMATION");
var deslluzaniamtion = document.getElementById("btDesligarLuzANIMATION");
var prateanimation = document.getElementById("btAbrirPrateANIMATION");
var lojaaniamtion = document.getElementById("btLoja2ANIMATION");




/* funçao que oculta animaçoes 1 e deixa visivel icones da animaçao 2*/
function ocultandoAnimaçoes1(){

    setTimeout(()=>{

        
        /* OCULTANDO ANIMAÇOES E ICONES DA ANIMAÇAO 1*/
        camaVermelha.style.display = "none";
        camaAzul.style.display = "none";
        camaLaran.style.display = "none";
        camaAmarela.style.display = "none";
        

        pouNormal0.style.display = "none";
        pouNormal1.style.display = "none";
        pouNormal2.style.display = "none";
        pouNormal3.style.display = "none";
        pouNormal4.style.display = "none";
        pouEnsabuado.style.display = "none";        
        btnGela.style.display = "none";
        btnGela2.style.display = "none";
        esquerda.style.display = "none";
        esquerda2.style.display = "none";
        esquerda3.style.display = "none";
        direita.style.display = "none";
        direita2.style.display = "none";
        direita3.style.display = "none";
        bata1.style.display = "none";
        bata.style.display = "none";
        bac1.style.display = "none";
        bac.style.display = "none";
        btnLoja.style.display = "none";
        btnLoja2.style.display = "none";
        btnLoja3.style.display = "none";
        btChuve.style.display = "none";
        btChuve2.style.display = "none";
        btChuve3.style.display = "none";
        btSabo.style.display = "none";
        btSabo2.style.display = "none";
        btSabo3.style.display = "none";
        btbo.style.display = "none";
        btbo2.style.display = "none";
        btbo3.style.display = "none";
        btbo4.style.display = "none";
        btbo5.style.display = "none";
        btAbrirArmar.style.display = "none";
        desligarLuz.style.display = "none";
        desligarLuz2.style.display = "none";
        acenderLuz.style.display = "none";
        luzOFF.style.display = "none";
        btAbrirPra.style.display = "none";
        btnLoja2.style.display = "none";

        fome.style.backgroundColor = "red";
        saude.style.backgroundColor = "red";
        energia.style.backgroundColor = "red";
        diver.style.backgroundColor = "red";
       
        pouCansado1.style.display = "block";
        pouCansado2.style.display = "block";
        pouCansado3.style.display = "block";
        pouCansado4.style.display = "block";
        pouCansado5.style.display = "block";

        pouRed1.style.display = "none";
        pouBlue1.style.display = "none";
        pouLaran1.style.display = "none";
        pouYellow1.style.display = "none";
        pouRed2.style.display = "none";
        pouBlue2.style.display = "none";
        pouLaran2.style.display = "none";
        pouYellow2.style.display = "none";
        pouRed3.style.display = "none";
        pouBlue3.style.display = "none";
        pouLaran3.style.display = "none";
        pouYellow3.style.display = "none";
        pouRed5.style.display = "none";
        pouBlue5.style.display = "none";
        pouLaran5.style.display = "none";
        pouYellow5.style.display = "none";
        chamarCozinV.style.display = "none";
        chamarCozinANIMA2.style.display = "block";
        btabrirComidas.style.display = "none";    
        
        alert("As horas se passaram e pou ficou cansado,com fome a saude abaixou e ele esta sujo");

        /* DEIXANDO VISIVEL ANIMAÇOES E ICONES DA ANIMAÇAO 2 */
        
        gelaanimation.style.display = "block";
        setadireianimation.style.display = "none";
        lojaanimation.style.display = "block"; 
        setaesqueanimation.style.display = "none";

        chuveanimation.style.display = "none";
        chuveanimation2.style.display = "block";
        saboanimation.style.display = "block";

        bolaanimation.style.display = "block";

        armaanimation.style.display = "block";
        deslluzaniamtion.style.display = "block";

        prateanimation.style.display = "block";
        lojaaniamtion.style.display = "block";
        btMenuRemedios.style.display = "block";
        btAR.style.display = "block";
        

    },60000)

}

/* FUNCÇOES DE ALERTAS */

gelaanimation.addEventListener("click",alertaSaude);
bolaanimation.addEventListener("click",alertaCansado);
prateanimation.addEventListener("click",alertaBanho);

function alertaSaude(){

    alert("Pou esta triste e nâo consegue comer agora, Va ate a sala de jogos e brinque um pouco com ele.");

}

function alertaCansado(){

    alert("Pou esta cansado e nâo pode brincar assim, va ao laboratorio e der um energetico a ele.");

}

function alertaBanho(){

    alert("Pou esta sujo, cansado e com a saúde baixa, der um banho nele para ter acesse ao laboratorio");
}


/* ANIMAÇÂO DO BANHO */

/* animaçoes do pou no BANHEIRO ANIMA2 */

var pouseEnsaSujo = document.getElementById("pouSeEnsaboandoANIMA2");
var pouEnsabuSujo = document.getElementById("PouEnsabuadoANIMA2");
var pouNoChuveiroSujo = document.getElementById("PouChuverioANIMA2");

var chuveanimation2 = document.getElementById("btChuverioANIMATION2");
var saboanimation2 = document.getElementById("btSaboneteANIMATION2");

var prateanimation = document.getElementById("btAbrirPrateANIMATION");
var prateanimation2 = document.getElementById("btAbrirPrateANIMATION2");

var pouTRISTE1 = document.getElementById("poutriste1");
var pouTRISTE2 = document.getElementById("poutriste2");
var pouTRISTE3 = document.getElementById("poutriste3");
var pouTRISTE4 = document.getElementById("poutriste4");
var pouTRISTE5 = document.getElementById("poutriste5");

saboanimation.addEventListener("click",ANIMAÇAOsabonete);
chuveanimation.addEventListener("click",ANIMAÇAOchuveiro);
prateanimation2.addEventListener("click",PRATELEIRAANIMA2);


function ANIMAÇAOsabonete(){

    pouCansado2.style.display = "none";
    pouseEnsaSujo.style.display = "block";

    setTimeout(()=>{

        ANIMAÇAOensabuado();

    },5000)

}

function ANIMAÇAOensabuado(){

    pouCansado2.style.display = "none";
    pouseEnsaSujo.style.display = "none";
    pouEnsabuSujo.style.display = "block";

    saboanimation.style.display = "none";
    saboanimation2.style.display = "block";

    chuveanimation.style.display = "block";
    chuveanimation2.style.display = "none";

}


function ANIMAÇAOchuveiro(){

    pouCansado2.style.display = "none";
    pouseEnsaSujo.style.display = "none";
    pouEnsabuSujo.style.display = "none";
    pouNoChuveiroSujo.style.display = "block";

    setTimeout(()=>{

        ANIMAÇÂOnormal1();

    },5000)

}

function ANIMAÇÂOnormal1(){

    pouCansado1.style.display = "none";
    pouCansado2.style.display = "none";
    pouCansado3.style.display = "none";
    pouCansado4.style.display = "none";
    pouCansado5.style.display = "none";
    pouseEnsaSujo.style.display = "none";
    pouEnsabuSujo.style.display = "none";
    pouNoChuveiroSujo.style.display = "none";


    saboanimation.style.display = "none";
    saboanimation2.style.display = "block";

    chuveanimation.style.display = "none";
    chuveanimation2.style.display = "block";

    pouTRISTE1.style.display = "block";
    pouTRISTE2.style.display = "block";
    pouTRISTE3.style.display = "block";
    pouTRISTE4.style.display = "block";
    pouTRISTE5.style.display = "block";
    prateanimation.style.display = "none";
    prateanimation2.style.display = "block";

    
    deslluzaniamtion.style.display = "none";
    desligarLuz.style.display = "none";
    desligarLuz2.style.display = "none";
    acenderLuz.style.display = "none";
    acenderLuzAnimation.style.display = "none";

    animaoff1.style.display = "block";
    animaoff2.style.display = "none";
    

}


/* PRATELEIRA ANIMAÇAO 2 */
var btMais1 = document.getElementById("btmaisANIMA2");
var btMais2 = document.getElementById("bt2maisANIMA2");

var btaddener = document.getElementById("AddENERGETICOAnimation");
var btaddsaude = document.getElementById("AddSAUDEAnimation");

btMais1.addEventListener("click",addENERGETICO);
btMais2.addEventListener("click",addSAUDE);

function PRATELEIRAANIMA2(){

    SubMenuPrateleiras.style.display = "block";

}

function addENERGETICO(){

    btaddener.style.display = "block";
    btaddsaude.style.display = "none";
    SubMenuRemedios2.style.display = "none";
    SubMenuLoja.style.display = "none";
    SubMenuLoja2.style.display = "none";
    btaddsaudeOFF.style.display = "none";

}


function addSAUDE(){

    btaddener.style.display = "none";
    btaddsaude.style.display = "block";
    SubMenuRemedios2.style.display = "none";
    SubMenuLoja.style.display = "none";
    SubMenuLoja2.style.display = "none";
    btaddenerOFF.style.display = "none";
}

/* ANIMAÇAO POU TOMANDO PORÇAO SAUDE/ ENERGETICO */

var pouTomandoEner = document.getElementById("pouTomandoENERANIMATION");
var btaddenerOFF = document.getElementById("AddENERGETICOAnimationOFF");
var btaddsaudeOFF = document.getElementById("AddSAUDEAnimationOFF");
var iconEnergia = document.getElementById("energia");

btaddener.addEventListener("click",pouTOMANDOENERGETICO);
btaddsaude.addEventListener("click",pouTOMANDOPORÇAOSAUDE);
btaddenerOFF.addEventListener("click",alertaENERGIACHEIA);



function pouTOMANDOENERGETICO(){

    pouTRISTE5.style.display = "none";
    pouTomandoEner.style.display = "block";

    setTimeout(()=>{

        ANIMAÇÂOnormal2();

    },3000)



}


function ANIMAÇÂOnormal2(){

    pouTRISTE5.style.display = "block";
    pouTomandoEner.style.display = "none";
    btaddener.style.display = "none";
    btaddenerOFF.style.display = "block";
    iconEnergia.style.backgroundColor =  "rgb(0, 255, 38)";
    btbo6.style.display = "none";
    btbo7.style.display = "block";
    btMais1.style.display = "none";
}

function alertaENERGIACHEIA(){

    alert("Pou Ja esta com as energias recarregadas");

}

/* DEPOIS QUE O POU TOMAR O ENERGETICO ELE LIBERA O BOTAO QUE DE BRINCAR NA SALA DE JOGOS*/


var pouBrinTriste = document.getElementById("pouBrincandotristeANIMA2");
var btbo6 = document.getElementById("btBolaANIMATION");
var btbo7 = document.getElementById("btBolaANIMATION2");
var btbo8 = document.getElementById("btBolaANIMATION2FELIZ");
var iconDiversao = document.getElementById("diversao");

var gelaanimation = document.getElementById("btGelaANIMATION");
var gelaanimation2 = document.getElementById("btGelaANIMATION2");

btbo7.addEventListener("click",pouBrincando);
btbo8.addEventListener("click",pouBrincandoFELZIANIMA2);


function pouBrincando(){

    pouTRISTE3.style.display = "none";
    pouBrinTriste.style.display = "block";

    setTimeout(()=>{

        ANIMAÇÂOnormal3();

    },4000)

}


function ANIMAÇÂOnormal3(){

    pouTRISTE1.style.display = "none";
    pouTRISTE2.style.display = "none";
    pouTRISTE3.style.display = "none";
    pouTRISTE4.style.display = "none";
    pouTRISTE5.style.display = "none";
    pouBrinTriste.style.display = "none";

    chuveanimation.style.display = "none";
    chuveanimation2.style.display = "block";
    saboanimation.style.display = "none";
    saboanimation2.style.display = "block";

    pouNormal0.style.display = "block";
    pouNormal1.style.display = "block";
    pouNormal2.style.display = "block";
    pouNormal3.style.display = "block";
    pouNormal4.style.display = "block";
    gelaanimation.style.display = "none";
    gelaanimation2.style.display = "block";
    btbo6.style.display = "none";
    btbo7.style.display = "none";
    btbo8.style.display = "block";
    iconDiversao.style.backgroundColor = "rgb(0, 255, 38)";
    setadireianimation.style.display = "block";
    setaesqueanimation.style.display = "block";
    btMais2.style.display = "none";

   
}


function pouBrincandoFELZIANIMA2(){

    pouNormal2.style.display = "none";
    pouBrin.style.display = "block";

    audio4.play();


    setTimeout(()=>{

        ANIMAÇÂOnormal5();

    },6000)
}


function ANIMAÇÂOnormal5(){

    pouNormal2.style.display = "block";
    pouBrin.style.display = "none";
    iconDiversao.style.backgroundColor = "green";
   

}


/* GELADEIRA ANIMAÇAO ANIMA2 */

var btaddsaude = document.getElementById("AddSAUDEAnimation");
var btaddsaudeOFF = document.getElementById("AddSAUDEAnimationOFF");
var baiconanimation = document.getElementById("baiconANIMATION");
var bataanimation = document.getElementById("batataANIMATION");
var pouTomandoSaudeANIMA = document.getElementById("pouTomandopocaoSaudeANIMA2");
var iconSaude = document.getElementById("saude");

btaddsaude.addEventListener("click",pouTOMANDOPORÇAOSAUDE);
gelaanimation2.addEventListener("click",GELADEIRAANIMA2);
btaddsaudeOFF.addEventListener("click",alertaSAUDECHEIA);


function pouTOMANDOPORÇAOSAUDE(){

    pouTRISTE5.style.display = "none";
    pouTomandoSaudeANIMA.style.display = "block";

    setTimeout(()=>{

        ANIMAÇÂOnormal4();

    },3000)


}


function ANIMAÇÂOnormal4(){

    pouTRISTE5.style.display = "block";
    pouTomandoSaudeANIMA.style.display = "none";
    btMais2.style.display = "none";
    btaddsaude.style.display = "none";
    btaddsaudeOFF.style.display = "block";
    iconSaude.style.backgroundColor = "rgb(0, 255, 38)";

}

function GELADEIRAANIMA2(){

    SubMenuGela.style.display = "block";  
    bataanimation.style.display = "block";
    baiconanimation.style.display = "block";

}

function alertaSAUDECHEIA(){

    alert("Pou ja esta com a sua saúde recuperada.");
}


/* ANIMAÇAO PU COMENDO FELIZ */

var baiconanimation = document.getElementById("baiconANIMATION");
var bataanimation = document.getElementById("batataANIMATION");

var AddBatata = document.getElementById("batataAddANIMATION");
var AddBaicon = document.getElementById("baiconAddANIMATION");

var setadireianimation = document.getElementById("setaDireitaANIMATION");
var setaesqueanimation = document.getElementById("setaEsquerdaANIMATION");

setadireianimation.addEventListener("click",AvanDireita);
setaesqueanimation.addEventListener("click",AvanEsquerda);


bataanimation.addEventListener("click",ADDbaTT);
baiconanimation.addEventListener("click",ADDbaic);
AddBatata.addEventListener("click",pouCOMENDOFELIZANIMA2);
AddBaicon.addEventListener("click",PouComendoBaiconANIMA2);

function ADDbaTT(){

    AddBatata.style.display = "block";
    AddBaicon.style.display = "none";
    SubMenuComidas2.style.display = "none";
    SubMenuComidas.style.display = "none"; 
    SubMenuLoja.style.display = "none";
    SubMenuLoja2.style.display = "none";
    SubMenuGela.style.display = "none"; 

}

function ADDbaic(){

    AddBatata.style.display = "none";
    AddBaicon.style.display = "block";
    SubMenuComidas2.style.display = "none";
    SubMenuComidas.style.display = "none"; 
    SubMenuLoja.style.display = "none";
    SubMenuLoja2.style.display = "none";
    SubMenuGela.style.display = "none"; 

}


function AvanDireita(){

    AddBatata.style.display = "block";
    AddBaicon.style.display = "none";


}

function AvanEsquerda(){

    AddBatata.style.display = "none";
    AddBaicon.style.display = "block";

}


/* ANIMAÇAO DO POU COMENDO BATATA ANIMA2 */


function pouCOMENDOFELIZANIMA2(){

    pouNormal0.style.display = "none";
    pouCB.style.display = "block";

      
    setTimeout(()=>{

        audioComendo();

    },1000)

setTimeout(()=>{

    ANIMAÇÂOnormal6();
    iconSaude.style.backgroundColor = "rgb(0, 255, 38)";
    fran.style.backgroundColor = "rgb(0, 255, 38)";

},3000)


}

function ANIMAÇÂOnormal6(){

    pouNormal0.style.display = "block";
    pouCB.style.display = "none";


}

/* ANIMAÇAO DO POU COMENDO BAICON ANIMA2 */



function PouComendoBaiconANIMA2(){

    pouNormal0.style.display = "none";
    pouCN.style.display = "block";

      
    setTimeout(()=>{

        audioComendo();

    },1000)

    setTimeout(()=>{

        ANIMAÇÂOnormal7();

    },3000)

}

function ANIMAÇÂOnormal7(){

    pouNormal0.style.display = "block";
    pouCN.style.display = "none";
}


/* ANIMAÇAO QUARTO ANIMA 2*/

var acenderLuzAnimation = document.getElementById("AcenderlUZANIMATION");
var animaçaopouDormSujo = document.getElementById("pouDoriminSujoANIMATION");

var animaoff1 = document.getElementById("btDesligarLuzANIMATIONOFF");
var animaoff2 = document.getElementById("AcenderlUZANIMATION");

var luzzoff2 = document.getElementById("luzApagada2");

deslluzaniamtion.addEventListener("click",ApagandoLuzANIMA2);
luzzoff2.addEventListener("click",acordandoANIMA2);





/* ANIMAÇAO POU DOMRINDO LIMPO ANIMA2 */



function ApagandoLuzANIMA2(){

    pouCansado4.style.display = "none";
    animaçaopouDormSujo.style.display = "block";
    deslluzaniamtion.style.display = "none";
    acenderLuzAnimation.style.display = "block";

    setTimeout(()=>{

        dormindoANIMA2();

    },1000)

}

function dormindoANIMA2(){

    pouCansado4.style.display = "none";
    animaçaopouDormSujo.style.display = "block";
    luzzoff2.style.display = "block";
}

function acordandoANIMA2(){

    pouNormal3.style.display = "none"
    pouCansado4.style.display = "block";
    animaçaopouDormSujo.style.display = "none";
    luzzoff2.style.display = "none";
    acenderLuzAnimation.style.display = "none";
    deslluzaniamtion.style.display = "block";
    desligarLuz.style.display = "none";
    desligarLuz2.style.display = "none";
    iconEnergia.style.backgroundColor = "rgba(0, 128, 0, 0.682)";
}

