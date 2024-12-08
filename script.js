document.addEventListener('DOMContentLoaded', () => {
  const userImageContainer = document.getElementById('random-user');
  const imageUrl = 'https://drive.google.com/file/d/12tA3aRwXbwuxrMUf9HOw1RlRgcQrq1oV/view?usp=drive_link'; // Itt add meg a saját képed URL-jét

  // Új img elem létrehozása
  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = 'Saáry Blanka képe';

  // Kép hozzáadása a random-user div-hez
  userImageContainer.appendChild(img);
});

