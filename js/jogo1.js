
let questao = document.getElementById("questao");
let button = document.getElementById('b1');
let button1 = document.getElementById('B1');
let button2 = document.getElementById('B2');
let parag = document.getElementsByClassName('parag');
let image = document.getElementById('image');
let alterna = document.getElementById('res');
let respos = document.querySelector("div.resposta");
let divjogo = document.querySelector("div.guarda");
let jogo = document.querySelector("div.jogo");
 

let pergunta = ["Qual desses filósofos propôs a classificação das ciências em três grupos: Ciência da Imaginação (poesia), Ciência da Memória (História) e Ciência da Razão (Filosofia)?","Quais dessas frases foram ditas por Francis Bacon?","Bacon é considerado o pai do empirismo moderno por ter formulado os fundamentos dos métodos de análise e pesquisa da ciência moderna. Pois para ele:","Como Emanuel Kant (1724-1804), entendia e defendia o conceito da beleza?","Como Kant encara o ‘’Sentimento’’ e o ‘’ Prazer’’?","O discurso sobre o Método é obra de qual filosofo?","Para Descartes como era a sua base para a formação da Estética?","Quais dessas frases são do filósofo René Descartes?","Qual filósofo foi considerado um dos mais importantes pensadores do chamado iluminismo escocês e da própria filosofia ocidental?","Quais dessas frases são de David hume?"];

let resposta = [["David Hume (1711-1776)","René Descartes (1596-1650)","Francis Bacon (1561-1626)","Immanuel Kant (1724-1804)"],["(A)Todas as alternativas.","(B)A verdade aparece mais facilmente do erro do que da confusão.","(C)As esposas são amantes dos homens mais novos, companheiras para os de meia-idade e amas para os idosos.","A verdade aparece mais facilmente do erro do que da confusão."],["(A)O empirismo é a escola do pensamento filosófico relacionada à teoria do conhecimento.","(B)A obtenção dos fatos verdadeiros se dava através da observação e experimentação.","(C)A questão de como é possível o conhecimento afirmando o papel constitutivo de mundo pelo sujeito transcendental.","(D)Todo o conhecimento tem origem na experiência, sendo os dados ou impressões sensíveis as suas unidades básicas."],["(A)Uma dimensão objetiva.","(B)objetiva","(C)Todas estão corretas.","(D)É subjetiva."],["(A)É conhecimento.","(B)Algo especifico e particular.","(C)Acompanha a intuição.","(D)Nenhuma das alternativas."],["(A)John Locke (1632-1704)","(B)Aristóteles (384 a.C.-322 a.C.)","(C)René Descartes (1596-1650)","(D)Francis Bacon (1561-1626)"],["(A)Todas as alternativas.","(B)É para estabelecer uma relação entre o método, a formação do gosto e os fundamentos da estética, que serão encontrados posteriormente como disciplina do conhecimento.","(C)É a ideia de beleza, e sua consequente fruição estética, vário conforme as transformações das sociedades humanas no tempo.","(D)É para determinarmos que algo é belo precisamos de uma coincidência entre o juízo e os sentimento, todo olhar racional pode sentir."],["(A)O primeiro passo para o bem é não fazer o mal.","(B)Sábio é aquele que conhece os limites da própria ignorância.","(C)Tente mover o mundo o primeiro passo será mover a si mesmo.","(D)Não há nada no mundo que esteja melhor repartido do que a razão: todos estão convencidos de que a tem de sobra."],["(A)David Hume (1711-1776)","(B)Immanuel Kant (1724-1804)","(C)Francis Bacon (1561-1626)","(D)René Descartes (1596-1650)"],["(A)Afirmações extraordinárias necessitam de provas extraordinárias.","(B)Muitas vezes as coisas que me pareceram verdadeiras quando comecei a concebê-las tornaram-se falsas quando quis coloca-las sobre o papel.","(C)’’Não somos ricos pelo que temos e sim pelo que não precisamos ter.","(D)’’A verdade aparece mais facilmente do erro do que da confusão’’."]];

let gabarito = ["Francis Bacon (1561-1626)","(A)Todas as alternativas.","(B)A obtenção dos fatos verdadeiros se dava através da observação e experimentação.","(D)É subjetiva.","(B)Algo especifico e particular.","(C)René Descartes (1596-1650)","(B)A obtenção dos fatos verdadeiros se dava através da observação e experimentação.","(D)Não há nada no mundo que esteja melhor repartido do que a razão: todos estão convencidos de que a tem de sobra.","(A)David Hume (1711-1776)","(A)Afirmações extraordinárias necessitam de provas extraordinárias."];  

let fotos = ["'http://noticias.universia.com.br/net/images/educacion/f/fi/fil/filosofia-sociologia-enem-2015-noticias.jpg'"];
let aux = 0;
let ctd = 0; 
this.pontos = 0;
console.log(pergunta.length);

button1.addEventListener("click",function(e){
    e.preventDefault();
    image.style.backgroundImage = "none";
    var x = document.querySelector('div#image');    
    x.style.backgroundImage = `url(${fotos[0]})`;
    button1.style.display = "none";
    alterna.style.display = "block";
    document.getElementById('parag').innerHTML="Acertos:"+this.pontos;
    for (let i = 1; i <= 4; i++) {
        document.getElementById('questao').innerHTML = pergunta[aux];
        button = document.getElementById('b'+i);
        button.textContent = resposta[aux][i-1];
    }   
});
respos.addEventListener('click',clicou);
function clicou(event) {
    if(aux<9){
    if (event.target.tagName === 'BUTTON') {
        var x = document.querySelector('div#image');    
        x.style.backgroundImage = `url(${fotos[0]})`;
    if (event.target.textContent == gabarito[ctd]) {
        document.getElementById('parag').innerHTML = "pontos: "+this.pontos;
        this.pontos++;
        for (let i = 1; i <= 4; i++) {
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
    if(this.cont<5){
        jogo.innerHTML="Você obteve poucos acertos, mas não se preocupe! A jornada para o conhecimento nunca termina e tendo em vista que só sabemos que nada sabemos você está exatamente onde deveria estar para começar essa jornada. Numero de Acertos = "+this.cont+" acertos.";
    }else{
        jogo.innerHTML="Você obteve bons acertos! A jornada para o conhecimento nunca termina e tendo em vista que só sabemos que nada sabemos você está exatamente onde deveria estar para começar essa jornada. Numero de Acertos = "+this.cont+" acertos.";
    }}
}
function muda() {
    document.getElementById('parag').innerHTML="Acertos"+this.pontos;
    for (let i = 1; i <= 4; i++) {
        document.getElementById('questao').innerHTML = pergunta[aux];
        button = document.getElementById('b'+i);
        button.textContent = resposta[aux][i-1];
        
    } 
}