document.addEventListener("DOMContentLoaded", function () {
  const imgs = document.querySelectorAll(".carrossel-sobre .img-carrossel");
  let idx = 0;

  function mostrarImagem(i) {
    imgs.forEach((img, j) => {
      img.style.display = i === j ? "block" : "none";
    });
  }

  mostrarImagem(idx);

  setInterval(() => {
    idx = (idx + 1) % imgs.length;
    mostrarImagem(idx);
  }, 2000);
});

const cards = document.querySelectorAll(".review-card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let current = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    card.classList.remove("active");
    if (i === index) card.classList.add("active");
  });
}

prevBtn.addEventListener("click", () => {
  current = (current - 1 + cards.length) % cards.length;
  showCard(current);
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % cards.length;
  showCard(current);
});

// autoplay a cada 5 segundos
setInterval(() => {
  current = (current + 1) % cards.length;
  showCard(current);
}, 5000);
