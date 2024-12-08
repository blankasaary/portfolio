// Véletlenszerű felhasználó képének betöltése
fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    const user = data.results[0];
    const userImage = document.createElement('img');
    userImage.src = user.picture.large; // Nagy méretű kép
    userImage.alt = `Véletlenszerű felhasználó: ${user.name.first} ${user.name.last}`;

    const randomUserDiv = document.getElementById('random-user');
    randomUserDiv.appendChild(userImage);
  })
  .catch(error => console.error('Hiba a Random User API betöltésekor:', error));
