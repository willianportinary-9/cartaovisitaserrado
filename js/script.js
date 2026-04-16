
function filtrar() {
  let input = document.getElementById("busca").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(function(card) {
    let texto = card.textContent.toLowerCase();

    if (texto.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
function abrirModal(img) {
  const modal = document.getElementById("modal");
  const imgModal = document.getElementById("imgModal");

  modal.style.display = "flex"; 
  imgModal.src = img.src;
}

// FECHAR MODAL
function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// FECHAR AO CLICAR FORA DA IMAGEM
const modal = document.getElementById("modal");

modal.addEventListener("click", function(e) {
  if (e.target === modal) {
    fecharModal();
  }
});



