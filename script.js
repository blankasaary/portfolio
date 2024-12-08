document.addEventListener('DOMContentLoaded', () => {
  const userImageContainer = document.getElementById('random-user');
  const imageUrl = 'YOUR_IMAGE_URL'; // Itt add meg a saját képed URL-jét

  // Új img elem létrehozása
  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = 'Saáry Blanka képe';

  // Kép hozzáadása a random-user div-hez
  userImageContainer.appendChild(img);
});

