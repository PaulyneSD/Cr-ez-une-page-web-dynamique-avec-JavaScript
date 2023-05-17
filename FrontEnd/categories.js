fetch("http://localhost:5678/api/categories")
  .then((response) => response.json())
  .then((items) => {
    displayCategories(items);
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des données:", error);
  });

function displayCategories(items) {
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("categoriesContainer");

  const portfolioSection = document.getElementById("portfolio");
  const titleContainer = portfolioSection.querySelector("h2").parentElement;

  const filtersBar = document.createElement("div");
  filtersBar.classList.add("filters-bar");
  containerDiv.appendChild(filtersBar);

  const allButton = document.createElement("button");
  allButton.textContent = "Tous";
  allButton.addEventListener("click", () => {
    // Code à exécuter lorsque le bouton "Tous" est cliqué
  });

  const allButtonDiv = document.createElement("div");
  allButtonDiv.appendChild(allButton);
  filtersBar.appendChild(allButtonDiv);

  items.forEach((item, index) => {
    const { id, name } = item;

    const button = document.createElement("button");
    button.textContent = name;
    button.addEventListener("click", () => {
      // Code à exécuter lorsque le bouton de catégorie est cliqué
    });

    const buttonDiv = document.createElement("div");
    buttonDiv.appendChild(button);
    filtersBar.appendChild(buttonDiv);

    // Ajouter des classes CSS personnalisées à chaque div de bouton
    allButtonDiv.classList.add("all-button-div");
    buttonDiv.classList.add("category-button-div");

    // Ajouter un ID et les styles souhaités pour le premier bouton
    if (index === 0) {
      allButton.id = "firstButton";
      allButtonDiv.style.color = "white";
    }
  });

  // Placer la barre de filtres sous la div "title-container"
  titleContainer.insertAdjacentElement("afterend", containerDiv);

  // Gestionnaire d'événements pour le bouton "Modifier"
  const modifyButton = document.getElementById("modifyButton");
  modifyButton.addEventListener("click", () => {
    // Code pour ouvrir la modale
    const modal = document.getElementById("modal");
    modal.style.display = "block";
  });
}
