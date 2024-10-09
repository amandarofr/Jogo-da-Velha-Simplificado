let jogador = "X";
const estadoJogo = ["", "", "", "", "", "", "", "", ""]; //Nova alteracao
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

function checarVitoria() {
    return combinacoesVitoria
        .map(combinacao => {
            const [a, b, c] = combinacao;
            return estadoJogo[a] && estadoJogo[a] === estadoJogo[b] && estadoJogo[a] === estadoJogo[c] ? estadoJogo[a] : null;
        }) //Nova alteracao
        .find(v => v) || null;
}

function exibirMensagem(mensagem) {
    const mensagemElement = document.getElementById('mensagem');
    mensagemElement.textContent = mensagem;
    mensagemElement.style.display = 'block';
}

function jogar(celula) {
    const index = Array.from(document.querySelectorAll('.quadrado')).indexOf(celula);
    if (estadoJogo[index] === "") {
        estadoJogo[index] = jogador;
        celula.innerHTML = jogador; //nova alteracao
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
    estadoJogo.fill(""); // Nova alteracao
    jogador = "X";
    document.getElementById('mensagem').style.display = 'none'; 
}

window.addEventListener("load", function () {
    document.querySelectorAll('.quadrado').forEach(quadrado => quadrado.addEventListener("click", (e) => jogar(quadrado)));
    document.getElementById("botao").addEventListener("click", reiniciar);
});
     
