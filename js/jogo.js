
let questao = document.getElementById("questao");
let button = document.getElementById('b1');
let button1 = document.getElementById('B1');
let button22 = document.getElementById('B2');
let parag = document.getElementsByClassName('parag');
let game = document.getElementById('game');
let alterna = document.getElementById('res');
let respos = document.querySelector("div.resposta");
let divjogo = document.querySelector("div.guarda");
let jogo = document.querySelector("div.jogo");
let jogo1 = document.querySelector("div.jogo1");
let grafico = document.querySelector("div.grafico");


 


let pergunta = ["Qual o sentido da Vida?","O que e Deus?","Qual o papel da arte?","Qual profissão gostaria de seguir?Qual profissão gostaria de seguir?","Qual o melhor sistema político?","Qual o papel da ciência?","Qual dessas músicas você prefere?","Qual o seu maior medo?","O que acontece depois da morte?","O que é mais importante na sua vida?"];

let resposta = [["Buscar equilíbrio entre a razão, a coragem e os instintos para sermos felizes.","Contemplar a vida.","O aprimoramento pessoal.","Não tem sentido."],["É o modelo ao homem e a própria liberdade.","É a perfeição suprema","É o que move o mundo.","Deus não existe."],["Algo que pode abrir nossos olhos para a eternidade.","Algo que nos aproxima da imagem ideal do Belo.","Algo universal, a reprodução de coisas existentes através da mão de um talentoso artista.","É o que nos salva do nonsense da existência. De todas as artes, a música é superior."],["escritor","professor","médico","músico"],["Não me interesso muito por política, melhor cuidarmos de quem está mais próximo.","República","Democracia","Talvez anarquismo, pois o Estado é uma focinheira."],["Ajudar na existência material do homem","É mais uma forma de conhecimento.","É importante, pois é componente da razão.","Um conhecimento ilusório, como tudo na existência."],["Anywhere Is - Enya","Sinfonia nº40 - Mozart","Ode a Alegria - Beethoven ","Ave Maria - Bach"],["Eu mesmo","A morte","As pessoas","A vida"],["Rencarnamos","Nos encontramos diante de Deus para nosso julgamento e ir para a vida eterna ou a morte eterna.","Tudo acaba","Não sei e não há como saber"],["O proximo","Criar uma sociedade perfeita","Ser uma boa pessoa","Nada é importante, tudo é passageiro"]];

let gabarito = ["Louis Lavelle","Platão","Aristóteles","Tomás de Aquino","Descartes","Nietzsche","Schopenhauer"]; 
let fotos = ["'http://noticias.universia.com.br/net/images/educacion/f/fi/fil/filosofia-sociologia-enem-2015-noticias.jpg'"];
let aux = 0;
let ctd = 0; 
this.pontos = 0;
console.log(pergunta.length);

button1.addEventListener("click",function(e){
    e.preventDefault();
    game.style.backgroundImage = "none";
    var x = document.querySelector('div#game');    
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
let position =[];
let v=[1,2,3,4,5,6,7,8,9];
respos.addEventListener('click',clicou);
function clicou(event) {
    if(aux<9){
    if (event.target.tagName === 'BUTTON') {
        var x = document.querySelector('div#game');    
        x.style.backgroundImage = `url(${fotos[0]})`;
        for(let g=0; g<pergunta.length;){
            for(let j=0; j<resposta.length; j++){
             if (event.target.textContent == resposta[g][j]) {
                    position.push(j);
            }}
            g++;
        }
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
    button22.style.display = "block";
    if(this.cont<5){
        jogo1.innerHTML="Você obteve poucos acertos, mas não se preocupe! A jornada para o conhecimento nunca termina e tendo em vista que só sabemos que nada sabemos você está exatamente onde deveria estar para começar essa jornada. Numero de Acertos = "+this.cont+" acertos.";
    }else{
        jogo1.innerHTML="Você obteve bons acertos! A jornada para o conhecimento nunca termina e tendo em vista que só sabemos que nada sabemos você está exatamente onde deveria estar para começar essa jornada. Numero de Acertos = "+this.cont+" acertos.";
    }}
}
button22.addEventListener("click",function(e){
    button22.style.display = "none";
    jogo1.style.display = "none";
    grafico.style.display = "block";
    for(let j=0; j<10; j++){
        for(let i=1; i<=position.length; i++){
            if(position[j] == v[i]){
                var x = document.querySelector(`div#a${j}`);    
                x.style.heigth += 2;
            }
        }}


});


function muda() {
    document.getElementById('parag').innerHTML="Acertos"+this.pontos;
    for (let i = 1; i <= 4; i++) {
        document.getElementById('questao').innerHTML = pergunta[aux];
        button = document.getElementById('b'+i);
        button.textContent = resposta[aux][i-1];
        
    } 
}

