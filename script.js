document.addEventListener('DOMContentLoaded', () => {
  const userImageContainer = document.getElementById('random-user');
  const imageUrl = 'https://github.com/blankasaary/portfolio/blob/main/340062889_610776987767061_881245899614018749_n.jpg'; // Itt add meg a saját képed URL-jét

  // Új img elem létrehozása
  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = 'Saáry Blanka képe';

  // Kép hozzáadása a random-user div-hez
  userImageContainer.appendChild(img);
});

