
let questao = document.getElementById("questao");
let button = document.getElementById('b1');
let button1 = document.getElementById('B1');
let button2 = document.getElementById('B2');
let parag = document.getElementsByClassName('parag');
let image2 = document.getElementById('image2');
let alterna = document.getElementById('res');
let respos = document.querySelector("div.resposta");
let divjogo = document.querySelector("div.guarda");
let jogo = document.querySelector("div.jogo");


let pergunta = ["Por vezes as pessoas não querem ouvir a verdade porque não desejam que suas ilusões sejam destruídas.","Não desejo que as mulheres tenham poder sobre os homens, mas sobre si mesmas.","É preciso que compreenda que não existe liberdade sem igualdade e que a realização da maior liberdade na mais perfeita igualdade de direito e de fato, política, econômica e social ao mesmo tempo, é a justiça...","Não sou nem ateniense, nem grego, mas sim um cidadão do mundo.","O sábio fala porque tem alguma coisa a dizer, o tolo porque tem que dizer alguma coisa.","A História nos ensina que a História não nos ensina nada.","Imagine que não exista a ideia de 'posse', você consegue imaginar? Não existiria fome e não existiria a ganância, viveríamos em uma irmandade de homens.","Não pensem que vim trazer paz. Vim trazer a espada. Vim causar a divisão entre filho e pai, filha e mãe, nora e sogra. Criar inimigos dentro da própria casa.","A dúvida é o preço da pureza.","O primeiro pecado da humanidade foi a fé; a primeira virtude foi a dúvida."];

let resposta = [["(A)Sócrates","(B)Nietzsche","(C)Confúcio"],["(A)Marie Curie","(B)Simone de Beauvoir","(C)Mary Wollstonecraft"],["(A)John Locke","(B)Miximilien Robespierre","(C)Bakunin"],["(A)Aristóteles","(B)Platão","(C)Sócrates"],["(A)Immanuel Kant","(B)Voltaire","(C)Platão"],["(A)Friedrich Hegel","(B)Friedrich Engels","(C)Karl Marx"],["(A)Michael Bakunin","(B)Max Stirner","(C)John Lennon"],["(A)Lenin","(B)Jesus de Nazaré","(C)Karl Marx"],["(A)Carl Sagan","(B)Aristóteles","(C)Humberto Gessinger"],["(A)Carl Sagan","(B)Voltaire","(C)Nietzche"]];

let gabarito = ["(B)Nietzsche","(C)Mary Wollstonecraft","(C)Bakunin","(C)Sócrates","(C)Platão","(A)Friedrich Hegel","(C)John Lennon","(B)Jesus de Nazaré","(C)Humberto Gessinger","(A)Carl Sagan"];  

let fotos = ["'http://noticias.universia.com.br/net/images/educacion/f/fi/fil/filosofia-sociologia-enem-2015-noticias.jpg'"];
let aux = 0;
ctd = 0; 
this.pontos = 0;
console.log(pergunta.length);

button1.addEventListener("click",function(e){
    e.preventDefault();
    image2.style.backgroundImage = "none";
    var x = document.querySelector('div#image2');    
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
        var x = document.querySelector('div#image2');    
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
}
}
}
function muda() {
    document.getElementById('parag').innerHTML="Acertos"+this.pontos;
    for (let i = 1; i <= 4; i++) {
        document.getElementById('questao').innerHTML = pergunta[aux];
        button = document.getElementById('b'+i);
        button.textContent = resposta[aux][i-1];
        
    } 
}