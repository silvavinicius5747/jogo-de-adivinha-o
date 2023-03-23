// Define as figuras disponíveis
const figures = [
    { url: "https://i.ibb.co/p1KCj46/hang-niu-Tn8-DLxwu-DMA-unsplash.jpg", name: "gato" },
    { url: "https://i.ibb.co/48bKnpF/richard-brutyo-Sg3-Xwu-Epyb-U-unsplash.jpg", name: "cachorro" },
    { url: "https://i.ibb.co/Fz8j2mZ/joshua-j-cotten-Qx-W15-Bm-Jx-OQ-unsplash.jpg", name: "rato" }
  ];
  
  // Seleciona uma figura aleatória
  const selectedFigure = figures[Math.floor(Math.random() * figures.length)];
  
  // Obtém os elementos HTML
  const figureElement = document.getElementById("figure");
  const guessElement = document.getElementById("guess");
  const resultElement = document.getElementById("result");
  const checkButton = document.getElementById("check-button");
  
  // Define a figura selecionada
  figureElement.style.backgroundImage = `url(${selectedFigure.url})`;
  
  // Função para verificar a resposta
  function checkAnswer() {
    const guess = guessElement.value.toLowerCase();
    if (guess === selectedFigure.name) {
      resultElement.textContent = "Parabéns, você acertou!";
      setTimeout(() => location.reload(), 2000); // recarrega a página após 2 segundos
    } else {
      resultElement.textContent = "Ops, tente novamente.";
    }
  }
  
  // Adiciona um evento de clique ao botão
  checkButton.addEventListener("click", checkAnswer);
  