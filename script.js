document.addEventListener("DOMContentLoaded", () => {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const aboutSection = document.querySelector("#about");

            aboutSection.innerHTML += `
        <img src="${user.picture.large}" alt="Profilkép">
        <p>Név: ${user.name.first} ${user.name.last}</p>
        <p>Ország: ${user.location.country}</p>
      `;
        })
        .catch(error => console.error("Hiba az API lekérés során:", error));
});