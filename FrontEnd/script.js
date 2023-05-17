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
  const gallery = document.getElementById('gallery');
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

    // Également ajouter l'image à la fenêtre modale
    const modalImg = document.createElement("img");
    modalImg.src = imageUrl;
    modalContent.appendChild(modalImg);
  });
}

// Récupération des éléments
const editButton = document.getElementById('editButton');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close');
const mediaForm = document.getElementById('mediaForm');
let editButtonClicked = false;

// Récupération du nouvel élément "Modifier"
const modifyButton = document.getElementById('modifyButton');

// Fonction d'ouverture de la fenêtre modale
function openModal() {
  modal.style.display = 'block';
}

// Fonction de fermeture de la fenêtre modale
function closeModal() {
  modal.style.display = 'none';
  editButtonClicked = false;
}

// Événement au clic sur le bouton Modifier
editButton.addEventListener('click', () => {
  editButtonClicked = true;
  openModal();
});

// Événement au clic sur le bouton Modifier (nouvel élément)
modifyButton.addEventListener('click', () => {
  // Code à exécuter lorsque le bouton "Modifier" (nouvel élément) est cliqué
});

// Événement au clic sur la croix de fermeture
closeButton.addEventListener('click', closeModal);

// Événement au clic en dehors de la fenêtre modale pour la fermer
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Événement de soumission du formulaire d'ajout de média
mediaForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Effectuer le traitement d'ajout de média ici
  closeModal();
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

