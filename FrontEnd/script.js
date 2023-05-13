//Récupération des travaux dans l'API 

fetch("http://localhost:5678/api/works")
  .then((response) => response.json())
  .then((items) => {
    displayItems(items);
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des données:", error);
  });

function displayItems(items) {
  items.forEach(item => {
    const {title, imageUrl} = item;

    const figure = document.createElement('figure');

    const img = document.createElement('img')
    img.src = imageUrl
    figure.appendChild(img)

    const figcaption = document.createElement('figcaption')
    figcaption.textContent = title
    figure.appendChild(figcaption)

    document.querySelector(".gallery").appendChild(figure)

  });
}

function displayCategories(items) {
  const containerDiv = document.createElement("div");

  items.forEach((item) => {
    const { id, name } = item;

    const div = document.createElement("div");
    div.classList.add("categoriesContainer");

    const p = document.createElement("p");
    p.textContent = name;

    div.appendChild(p);
    containerDiv.appendChild(div);
  });

  const portfolioSection = document.getElementById("portfolio");
  portfolioSection.querySelector("h2").insertAdjacentElement("afterend", containerDiv);
}

