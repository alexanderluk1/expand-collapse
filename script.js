document.addEventListener("click", (e) => {
  if (!e.target.matches(".expand-button")) return;

  // Gets the parent element for card
  const parent = e.target.closest(".card");
  const cardBody = parent.querySelector(".card-body");
  const button = e.target;

  // Alternate between all the different classes in cardBody "show & blank"
  cardBody.classList.toggle("show");
  button.innerText = button.innerText === "Collapse" ? "Expand" : "Collapse";
});
