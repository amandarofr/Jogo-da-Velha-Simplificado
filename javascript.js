let jogador = "X";
const combinacoesVitoria = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]  
];
//*Função de checar vitoria, através de um array feito pela classe .quadrado e validado através da variavel combinacoesVitoria
function checarVitoria() {
    const cells = Array.from(document.querySelectorAll('.quadrado'));
    for (const combinacao of combinacoesVitoria) {
        const [a, b, c] = combinacao;
        if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
            return cells[a].innerHTML;
        }
    }
    return null;
}
//*Função de mensagem quando há um ganhador
function exibirMensagem(mensagem) {
    const mensagemElement = document.getElementById('mensagem');
    mensagemElement.textContent = mensagem;
    mensagemElement.style.display = 'block';
}

function jogar(celula) {
    if (celula.innerHTML === "") {
        celula.innerHTML = jogador;
        const vencedor = checarVitoria();
        if (vencedor) {
            exibirMensagem(`Parabéns, jogador ${vencedor} ganhou!`);
            return; 
        }

        
        jogador = jogador === "X" ? "O" : "X";
    }
}
function reiniciar() {
    document.querySelectorAll('.quadrado').forEach(celula => {
        celula.innerHTML = "";
    });
    jogador = "X";}
     
