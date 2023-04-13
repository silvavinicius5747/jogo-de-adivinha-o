// Define as figuras disponíveis
const figures = [
  { url: "https://i.ibb.co/p1KCj46/hang-niu-Tn8-DLxwu-DMA-unsplash.jpg", name: "gato" },
  { url: "https://i.ibb.co/48bKnpF/richard-brutyo-Sg3-Xwu-Epyb-U-unsplash.jpg", name: "cachorro" },
  { url: "https://i.ibb.co/Fz8j2mZ/joshua-j-cotten-Qx-W15-Bm-Jx-OQ-unsplash.jpg", name: "rato" },
  { url: "https://i.ibb.co/frVh02z/canguro.jpg", name: "cangurú" },
  { url: "https://i.ibb.co/Z2WJtxk/leao.jpg", name: "leão" },
  { url: "https://i.ibb.co/C6sWYPT/rinoceronte.jpg", name: "rinoceronte" },
  { url: "https://i.ibb.co/RDPGKHF/lobo.jpg", name: "lobo" },
  { url: "https://i.ibb.co/yS7q1nc/baleia.jpg", name: "baleia" }
];

// Seleciona uma figura aleatória, garantindo que não seja a mesma que a anterior
let previousFigureIndex = -1;
let selectedFigureIndex = Math.floor(Math.random() * figures.length);
while (selectedFigureIndex === previousFigureIndex) {
  selectedFigureIndex = Math.floor(Math.random() * figures.length);
}
previousFigureIndex = selectedFigureIndex;
const selectedFigure = figures[selectedFigureIndex];

// Obtém os elementos HTML
const figureElement = document.getElementById("figure");
const guessElement = document.getElementById("guess");
const resultElement = document.getElementById("result");
const checkButton = document.getElementById("check-button");

// Define a figura selecionada
figureElement.style.backgroundImage = `url(${selectedFigure.url})`;

// Define um contador de acertos
let numCorrectAnswers = 0;

// Função para verificar a resposta
function checkAnswer() {
  const guess = guessElement.value.toLowerCase();
  if (guess === selectedFigure.name) {
    numCorrectAnswers++;
    resultElement.textContent = "Parabéns, você acertou!";
    setTimeout(() => location.reload(), 2000); // recarrega a página após 2 segundos
  } else {
    resultElement.textContent = "Ops, tente novamente.";
  }
}

// Adiciona um evento de clique ao botão
checkButton.addEventListener("click", checkAnswer);
