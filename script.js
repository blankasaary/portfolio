document.addEventListener("DOMContentLoaded", () => {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const aboutSection = document.querySelector("#about");

            aboutSection.innerHTML += `
        <img src="${user.picture.large}" alt="Profilk�p">
        <p>N�v: ${user.name.first} ${user.name.last}</p>
        <p>Orsz�g: ${user.location.country}</p>
      `;
        })
        .catch(error => console.error("Hiba az API lek�r�s sor�n:", error));
});