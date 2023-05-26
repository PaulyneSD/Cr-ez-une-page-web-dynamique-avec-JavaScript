// Récupération des travaux depuis l'API
fetch("http://localhost:5678/api/works")
  .then((response) => response.json())
  .then((items) => {
    displayItems(items);
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des données:", error);
  });

// Affichage des travaux dans la galerie et dans la fenêtre modale
function displayItems(items) {
  const gallery = document.getElementById("gallery");
  const modalContent = document.querySelector(".modal-content");

  items.forEach((item) => {
    const { title, imageUrl } = item;

    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = imageUrl;
    figure.appendChild(img);

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = title;
    figure.appendChild(figcaption);

    // Événement au clic sur une image pour afficher en grand dans la fenêtre modale
    figure.addEventListener("click", () => {
      if (editButtonClicked) {
        openImageModal(imageUrl);
      }
    });

    gallery.appendChild(figure);

    // Également ajouter l'image à la fenêtre modale avec la case à cocher
    const modalFigure = document.createElement("figure");
    const modalImg = document.createElement("img");
    modalImg.src = imageUrl;
    modalFigure.appendChild(modalImg);

    // Création de la case à cocher dans la fenêtre modale
    const modalCheckbox = document.createElement("input");
    modalCheckbox.type = "checkbox";
    modalCheckbox.classList.add("modal-checkbox"); // Ajoutez une classe pour la sélectionner facilement
    modalFigure.appendChild(modalCheckbox);

    modalContent.appendChild(modalFigure);
  });

  // Ajout du bouton "Ajouter" dans la première modale
  const addButtonModal = document.createElement("button");
  addButtonModal.textContent = "Ajouter une photo";
  addButtonModal.style.display = "block";
  addButtonModal.style.margin = "0 auto"; // Centrer le bouton horizontalement
  modalContent.appendChild(addButtonModal);

  // Ajout du bouton "Supprimer" dans la première modale
  const deleteButtonModal = document.createElement("button");
  deleteButtonModal.textContent = "Supprimer la galerie";
  deleteButtonModal.style.display = "block";
  deleteButtonModal.style.margin = "0 auto"; // Centrer le bouton horizontalement
  modalContent.appendChild(deleteButtonModal);

  // Événement au clic sur le bouton "Ajouter" pour passer à la deuxième modale
  addButtonModal.addEventListener("click", () => {
    modal.style.display = "none";
    secondModal.style.display = "block";
  });

  // Événement au clic sur le bouton "Supprimer" pour supprimer une image de la galerie
  deleteButtonModal.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(".modal-checkbox");
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const figure = checkbox.parentNode;
        const modalContent = figure.parentNode;
        modalContent.removeChild(figure);
      }
    });
  });
}

// Récupération des éléments
const editButton = document.getElementById("editButton");
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close");
const mediaForm = document.getElementById("mediaForm");
let editButtonClicked = false;

// Récupération du nouvel élément "Modifier"
const modifyButton = document.getElementById("modifyButton");

// Fonction d'ouverture de la fenêtre modale
function openModal() {
  modal.style.display = "block";
  modal.classList.add("fixed-modal"); // Ajout de la classe pour rendre la modale fixe
}

// Fonction de fermeture de la fenêtre modale
function closeModal() {
  modal.style.display = "none";
  secondModal.style.display = "none"; // Ferme la deuxième modale également
  editButtonClicked = false;
  modal.classList.remove("fixed-modal"); // Suppression de la classe pour désactiver la modal fixe
}

// Événement au clic sur le bouton Modifier
editButton.addEventListener("click", () => {
  editButtonClicked = true;
  openModal();
});

// Événement au clic sur le bouton Modifier (nouvel élément)
modifyButton.addEventListener("click", () => {
  // Code à exécuter lorsque le bouton "Modifier" (nouvel élément) est cliqué
});

// Événement au clic sur la croix de fermeture
closeButton.addEventListener("click", closeModal);

// Événement au clic en dehors de la fenêtre modale pour la fermer
window.addEventListener("click", (event) => {
  if (event.target === modal || event.target === secondModal) {
    closeModal();
  }
});

// Fonction pour ouvrir la fenêtre modale avec une image en grand
function openImageModal(imageUrl) {
  const modalContent = document.querySelector(".modal-content");

  // Supprimer l'image précédente de la fenêtre modale s'il y en a une
  const existingImage = modalContent.querySelector("img");
  if (existingImage) {
    modalContent.removeChild(existingImage);
  }

  const img = document.createElement("img");
  img.src = imageUrl;
  modalContent.appendChild(img);
  openModal();
}

const addButton = document.getElementById("addButton");
const secondModal = document.getElementById("secondModal");
const backIcon = document.getElementById("backIcon");
const secondModalCloseButton = document.querySelector("#secondModal .close");

function openSecondModal() {
  secondModal.style.display = "block";
}

function goBackToFirstModal() {
  secondModal.style.display = "none";
  modal.style.display = "block";
}

addButton.addEventListener("click", openSecondModal);
backIcon.addEventListener("click", goBackToFirstModal);
secondModalCloseButton.addEventListener("click", goBackToFirstModal);

// Fermer la modale lorsqu'on clique en dehors
window.addEventListener("click", function (event) {
  if (event.target === modal || event.target === secondModal) {
    closeModal();
  }
});

modalContent.appendChild(modalFigure);
modalFigure.classList.add("modal-gallery"); // Ajoutez la classe "modal-gallery"
