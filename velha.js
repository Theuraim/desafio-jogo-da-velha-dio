var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

class Interface {
    constructor(){
      this.vencedor = null
      this.jogador = null
    }

    escolherQuadrado(id){
        if (this.vencedor !== null) {
            return;
        }
       
        var quadrado = document.getElementById(id);
        if (quadrado.innerHTML !== '-') {
            return;
        }
     
        quadrado.innerHTML = this.jogador;
        this.mudaCorQuadrado([quadrado]);
    
        if (this.jogador === 'X') {
            this.jogador = 'O';
        } else {
            this.jogador = 'X';
            console.log('else')
        }
    
        this.mudarJogador(this.jogador);
        this.checaVencedor();
    }

    mudarJogador(valor){
      this.jogador = valor;
      jogadorSelecionado.innerHTML = this.jogador;
    }

    mudaCorQuadrado(quadrados) {
        console.log(quadrados);
     
        if (this.vencedor !== null) {
            quadrados[0].style.background = '#0f0';
            quadrados[1].style.background = '#0f0';
            quadrados[2].style.background = '#0f0';
        }
        else if (this.jogador === 'X') {
            quadrados[0].style.background = '#6A5ACD';
            console.log(quadrados[0].style.background);
        }
        else if (this.jogador === 'O')  {
            quadrados[0].style.background = '#8B4513';
            console.log(quadrados[0].style.background);
        }
    }

    checaSequencia(quadrado1, quadrado2, quadrado3) {
        var eigual = false;
    
        if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
            eigual = true;
        }
    
        return eigual;
    }

    mudarVencedor(quadrado) {
        this.vencedor = quadrado.innerHTML;
        vencedorSelecionado.innerHTML = this.vencedor;
    }

    checaVencedor(){
        var quadrado1 = document.getElementById(1);
        var quadrado2 = document.getElementById(2);
        var quadrado3 = document.getElementById(3);
        var quadrado4 = document.getElementById(4);
        var quadrado5 = document.getElementById(5);
        var quadrado6 = document.getElementById(6);
        var quadrado7 = document.getElementById(7);
        var quadrado8 = document.getElementById(8);
        var quadrado9 = document.getElementById(9);
    
        if (this.checaSequencia(quadrado1, quadrado2, quadrado3)) {
            this.mudarVencedor(quadrado1);
            this.mudaCorQuadrado([quadrado1, quadrado2, quadrado3]);
            return;
        }
    
        if (this.checaSequencia(quadrado4, quadrado5, quadrado6)) {
            this.mudarVencedor(quadrado4);
            this.mudaCorQuadrado([quadrado4, quadrado5, quadrado6]);
            return;
        }
    
        if (this.checaSequencia(quadrado7, quadrado8, quadrado9)) {
            this.mudarVencedor(quadrado7);
            this.mudaCorQuadrado([quadrado7, quadrado8, quadrado9]);
            return;
        }
    
        if (this.checaSequencia(quadrado1, quadrado4, quadrado7)) {
            this.mudarVencedor(quadrado1);
            this.mudaCorQuadrado([quadrado1, quadrado4, quadrado7]);
            return;
        }
    
        if (this.checaSequencia(quadrado2, quadrado5, quadrado8)) {
            this.mudarVencedor(quadrado2);
            this.mudaCorQuadrado([quadrado2, quadrado5, quadrado8]);
            return;
        }
    
        if (this.checaSequencia(quadrado3, quadrado6, quadrado9)) {
            this.mudarVencedor(quadrado3);
            this.mudaCorQuadrado([quadrado3, quadrado6, quadrado9]);
            return;
        }
    
        if (this.checaSequencia(quadrado1, quadrado5, quadrado9)) {
            this.mudarVencedor(quadrado1);
            this.mudaCorQuadrado([quadrado1, quadrado5, quadrado9]);  
            return;
        }
    
        if (this.checaSequencia(quadrado3, quadrado5, quadrado7)) {
            this.mudarVencedor(quadrado3);
            this.mudaCorQuadrado([quadrado3, quadrado5, quadrado7]);
        }
    }
    
}

let interface = new Interface();

interface.mudarJogador('X');

function reiniciar()
{
    interface.vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    interface.mudarJogador('X');
}