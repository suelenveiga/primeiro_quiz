
let questao = document.getElementById("questao");
let button = document.getElementById('b1');
let button1 = document.getElementById('B1');
let button2 = document.getElementById('B2');
let parag = document.getElementsByClassName('parag');
let image3 = document.getElementById('image3');
let alterna = document.getElementById('res');
let respos = document.querySelector("div.resposta");
let divjogo = document.querySelector("div.guarda");
let jogo = document.querySelector("div.jogo");

let pergunta = ["Qual filósofo grego escreveu a obra literária, A apologia de Sócrates?","Na obra, a apologia de Sócrates, o autor exprime sua versão da defesa feita por outro filósofo, Sócrates, em seu próprio julgamento. Do que Sócrates foi acusado?","Na visão de Platão, Sócrates havia sido vítima do poder do discurso político, que agiu contra o raciocínio filosófico. Para Platão existia entre a filosofia e a política uma relação de ordenação entre as duas, a qual uma deveria dirigir os rumos da outra. Quem possuía a superioridade para Platão?","Foi o único na obra a falar durante a defesa de Sócrates, caindo em contradição sobre a natureza da acusação feita ao filósofo, afirmando num momento que este pregava o ateísmo, e em outro, que acreditava em semideuses.","Em uma passagem da obra, Xenofonte, amigo de infância de Sócrates e também discípulo, teria perguntado à Pitonisa, que era a sacerdotisa do templo de Delfos, se existia alguém mais sábio que Sócrates. A Pitonisa respondeu que não. A resposta teria deixado o filósofo intrigado, pois ele mesmo não se considerava a pessoa mais sábia de todas.",];

let resposta = [["(A)Platão","(B)Aristófanes"],["(A)Acusado de se apropriar, como autor, da frase “conhece-te a ti mesmo”. Frase que pertencia ao Templo de Apolo, em Delfos.","(B)Acusado de corromper a juventude e de não aceitar os deuses que são reconhecidos pelo estado, introduzindo novos cultos."],["(A)Política","(B)Filosofia"],["(A)Ânito","(B)Meleto"],["(A)Verdadeiro","(B)Falso"]];

let gabarito = ["(A)Platão","(B)Acusado de corromper a juventude e de não aceitar os deuses que são reconhecidos pelo estado, introduzindo novos cultos.","(B)Filosofia","(B)Meleto","(A)Verdadeiro"]; 

let fotos = ["'http://noticias.universia.com.br/net/images/educacion/f/fi/fil/filosofia-sociologia-enem-2015-noticias.jpg'"];
let aux = 0;
ctd = 0; 
this.pontos = 0; 
console.log(pergunta.length);

button1.addEventListener("click",function(e){
    e.preventDefault();
    image3.style.backgroundImage = "none";
    var x = document.querySelector('div#image3');    
    x.style.backgroundImage = `url(${fotos[0]})`;
    button1.style.display = "none";
    alterna.style.display = "block";
    document.getElementById('parag').innerHTML="Acertos:"+this.pontos;
    for (let i = 1; i <= 2; i++) {
        document.getElementById('questao').innerHTML = pergunta[aux];
        button = document.getElementById('b'+i);
        button.textContent = resposta[aux][i-1];
    }   
});
respos.addEventListener('click',clicou);
function clicou(event) {
    if(aux<4){
    if (event.target.tagName === 'BUTTON') {
        var x = document.querySelector('div#image3');    
        x.style.backgroundImage = `url(${fotos[0]})`;
    if (event.target.textContent == gabarito[ctd]) {
        document.getElementById('parag').innerHTML = "pontos: "+this.pontos;
        this.pontos++;
        for (let i = 1; i <= 2; i++) {
        let button = document.getElementById('b'+i);
        button.textContent = resposta[aux][i-1];
        document.getElementById('questao').innerHTML = pergunta[aux];            
        }
            console.log("acertei");
            ctd++;
            aux++;
            muda();

    } else {
        aux++;            
        muda();
    }    
}
console.log(ctd);
this.cont = ctd;
console.log(this.cont);
}else{
    divjogo.style.display = "none";
    button2.style.display = "block";
    if(this.cont<3){
        jogo.innerHTML="Você obteve poucos acertos, mas não se preocupe! A jornada para o conhecimento nunca termina e tendo em vista que só sabemos que nada sabemos você está exatamente onde deveria estar para começar essa jornada. Numero de Acertos = "+this.cont+" acertos.";
    }else{
        jogo.innerHTML="Você obteve bons acertos! A jornada para o conhecimento nunca termina e tendo em vista que só sabemos que nada sabemos você está exatamente onde deveria estar para começar essa jornada. Numero de Acertos = "+this.cont+" acertos.";
    }
}
}
function muda() {
    document.getElementById('parag').innerHTML="Acertos"+this.pontos;
    for (let i = 1; i <= 2; i++) {
        document.getElementById('questao').innerHTML = pergunta[aux];
        button = document.getElementById('b'+i);
        button.textContent = resposta[aux][i-1];
        
    } 
}