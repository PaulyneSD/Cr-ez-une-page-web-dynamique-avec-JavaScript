const form = document.getElementById("login-form");
const forgotPasswordLink = document.getElementById("forgot-password-link");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  // Vérification des informations de connexion
  if (password === "S0phie") {
    alert("Connexion réussie !");
    window.location.href =
      "http://127.0.0.1:5500/FrontEnd/"; // Définit l'URL de la page d'accueil à charger
  } else {
    alert("Mot de passe incorrect");
  }
});

const editModeBarContainer = document.getElementById('edit-mode-bar-container');

if (password === 'S0phie') {
  editModeBarContainer.style.display = 'block';
} else {
  editModeBarContainer.style.display = 'none';
}

forgotPasswordLink.addEventListener("click", () => {
  // Ajoutez ici le code pour envoyer un e-mail de réinitialisation de mot de passe
  alert("Un e-mail de réinitialisation de mot de passe a été envoyé.");
});

const loginForm = document.getElementById('login-form');
const modifyButton = document.createElement('button');
modifyButton.setAttribute('id', 'modify-button');
modifyButton.textContent = 'Modifier';

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  // Vérification des informations de connexion
  if (password === 'S0phie') {
    alert('Connexion réussie !');
    loginForm.style.display = 'none'; // Masquer le formulaire de connexion
    loginForm.reset(); // Réinitialiser le formulaire de connexion
    document.body.appendChild(modifyButton); // Ajouter le bouton "Modifier" à la page
  } else {
    alert('Mot de passe incorrect');
  }
});
