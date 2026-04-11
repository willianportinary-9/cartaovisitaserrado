
function buscar() {
  let input = document.getElementById("inputBusca").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let texto = card.innerText.toLowerCase();
    card.style.display = texto.includes(input) ? "block" : "none";
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
