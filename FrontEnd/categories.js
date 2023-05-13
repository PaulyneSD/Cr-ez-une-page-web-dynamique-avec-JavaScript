//Récupérer les titres et id des différentes catégories

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
  
    const allButton = document.createElement("button");
    allButton.textContent = "Tous";
    allButton.addEventListener("click", () => {
      // Code à exécuter lorsque le bouton "Tous" est cliqué
    });
  
    const allButtonDiv = document.createElement("div");
    allButtonDiv.appendChild(allButton);
    containerDiv.appendChild(allButtonDiv);
  
    items.forEach((item, index) => {
      const { id, name } = item;
  
      const button = document.createElement("button");
      button.textContent = name;
      button.addEventListener("click", () => {
        // Code à exécuter lorsque le bouton de catégorie est cliqué
      });
  
      const buttonDiv = document.createElement("div");
      buttonDiv.appendChild(button);
      containerDiv.appendChild(buttonDiv);
  
      // Ajouter des classes CSS personnalisées à chaque div de bouton
      allButtonDiv.classList.add("all-button-div");
      buttonDiv.classList.add("category-button-div");
  
      // Ajouter un ID et les styles souhaités pour le premier bouton
      if (index === 0) {
        allButton.id = "firstButton";
        allButtonDiv.style.color = "white";
      }
    });
  
    //Placer les boutons filtre sous le H2
    const portfolioSection = document.getElementById("portfolio");
    const h2 = portfolioSection.querySelector("h2");
    h2.insertAdjacentElement("afterend", containerDiv);
  }
  
     