//Começo , tabuleiro está vazio

const linha = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
        let jogadorAtual = 'X';

function armazenarNaLinha(linha, posicao, letra) {
            linha[posicao] = letra;
        }
//Meio , atualizar a celula com a letra X ou O no tabuleiro

function atualizarCelula(indice, letra) {
    const celula = document.querySelector(`.celula[data-index="${indice}"]`);
            celula.textContent = letra;

  document.querySelectorAll('.celula').forEach(celula => {
            celula.addEventListener('click', function() {
const indice = parseInt(this.getAttribute('data-index'));

if (linha[indice] === ' ')
  armazenarNaLinha(linha, indice, jogadorAtual);
        atualizarCelula(indice, jogadorAtual);
              
jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
                }
            });
        });

//Meio , vitoria disponivel a partir da 5 jogada
  
function checarVitoria() {
  const combinacoesVitoria=
    [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  for (const combinacao of combinacoesVitoria) {
    const [a,b,c]=combinacao;

//Fim - Empate
  
     
