
function buscar() {
  let input = document.getElementById("inputBusca").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let texto = card.innerText.toLowerCase();
    card.style.display = texto.includes(input) ? "block" : "none";
  });
}
