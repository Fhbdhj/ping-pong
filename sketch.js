//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, 
      raqueteAltura);​
22
let colidiu = false;
23
​
24
//placar do jogo
25
let meusPontos = 0;
26
let pontosDoOponente = 0;
27
​
28
function setup() {
29
  createCanvas(600, 400);
30
}
31
​
32
function draw() {
33
  background(0);
34
  mostraBolinha();
35
  movimentaBolinha();
36
  verificaColisaoBorda();
37
  mostraRaquete(xRaquete, yRaquete);
38
  movimentaMinhaRaquete();
39
  //verificaColisaoRaquete();
40
  verificaColisaoRaquete(xRaquete, yRaquete);
41
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
42
  movimentaRaqueteOponente();
43
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
44
  incluiPlacar();
45
  marcaPonto();
46
}
47
​
48
function mostraBolinha(){
49
  circle(xBolinha, yBolinha, diametro);
50
}
51
​
52
function movimentaBolinha(){
53
  xBolinha += velocidadeXBolinha;
54
  yBolinha += velocidadeYBolinha;
55
}
56
​
57
function verificaColisaoBorda(){
58
  if (xBolinha + raio> width ||
59
     xBolinha - raio< 0){
60
    velocidadeXBolinha *= -1;
61
  }
62
  if (yBolinha + raio> height ||
63
     yBolinha - raio < 0){
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && 
      yBolinha - raio < yRaquete + raqueteAltura && 
      yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function verificaColisaoRaquete(x, y){
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar(){
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26)
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
  }
}
function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
 



   fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}