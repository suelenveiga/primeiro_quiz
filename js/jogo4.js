
let questao = document.getElementById("questao");
let button = document.getElementById('b1');
let button1 = document.getElementById('B1');
let button2 = document.getElementById('B2');
let parag = document.getElementsByClassName('parag');
let image4 = document.getElementById('image4');
let alterna = document.getElementById('res');
let respos = document.querySelector("div.resposta");
let divjogo = document.querySelector("div.guarda");
let jogo = document.querySelector("div.jogo");

let pergunta = ["A necessidade que é a mãe da invenção.","...Acho que o dia mais triste da minha vida, foi quando descobri que podia derrotar meu pai em quase tudo.","O começo é a metade do todo.","Amor - uma grave doença mental.","O livro é um mestre que fala mas que não responde.","Sempre pensei se havia um deus.E agora eu sei que há…", "Não se culpe para sempre… Culpe-se uma vez só!","Deus não é culpado. A culpa é de quem escolhe.","Filhos, vocês tentaram, deram o seu melhor, e falharam miseravelmente.","Todo homem é poeta quando está apaixonado."];

let resposta = [["Platão","Homer Simpson"],["Platão","Homer Simpson"],["Platão","Homer Simpson"],["Platão","Homer Simpson"],["Platão","Homer Simpson"],["Platão","Homer Simpson"],["Platão","Homer Simpson"],["Platão","Homer Simpson"],["Platão","Homer Simpson"],["Platão","Homer Simpson"]];

let gabarito = ["Platão","Homer Simpson","Platão","Platão","Platão","Homer Simpson","Homer Simpson","Platão","Homer Simpson","Platão"]; 
let fotos = ["'http://noticias.universia.com.br/net/images/educacion/f/fi/fil/filosofia-sociologia-enem-2015-noticias.jpg'"];
let aux = 0;
let ctd = 0; 
this.pontos = 0; 
console.log(pergunta.length);

button1.addEventListener("click",function(e){
    e.preventDefault();
    image4.style.backgroundImage = "none";
    var x = document.querySelector('div#image4');    
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
    if(aux<9){
    if (event.target.tagName === 'BUTTON') {
        var x = document.querySelector('div#image4');    
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
    if(this.cont<5){
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