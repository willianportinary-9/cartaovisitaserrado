
const input = document.getElementById("busca");
const cards = document.querySelectorAll(".card");

input.addEventListener("keyup", function() {
  const valor = input.value.toLowerCase();

  cards.forEach(card => {
    const texto = card.innerText.toLowerCase();

    if (texto.includes(valor)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
  const titulo = card.querySelector("h3").innerText.toLowerCase();

  
});
