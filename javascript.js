const currentPlayer = document.querySelector(".currentPlayer");
let selected = [];
let player = "X";
//Começo

//Meio
function checarVitoria() {
  const combinacoesVitoria=
    [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  for (const combinacao of combinacoesVitoria) {
    const [a,b,c]=combinacao;
  
     
