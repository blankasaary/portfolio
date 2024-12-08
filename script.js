/ Kezeli a kép feltöltését és az előnézetet
document.getElementById('image-upload').addEventListener('change', function (event) {
  const file = event.target.files[0]; // A feltöltött fájl
  const previewDiv = document.getElementById('image-preview'); // Előnézet helye

  // Ellenőrizzük, hogy egy fájl valóban feltöltésre került-e
  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      // Töröljük az előző előnézet tartalmát
      previewDiv.innerHTML = '';

      // Hozzáadjuk a feltöltött kép előnézetét
      const img = document.createElement('img');
      img.src = e.target.result;
      img.alt = 'Feltöltött kép';
      img.style.width = '150px'; // Méretezés
      img.style.height = '150px'; // Méretezés
      img.style.borderRadius = '50%'; // Kerekítés
      img.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Árnyék

      previewDiv.appendChild(img);
    };

    reader.readAsDataURL(file); // Betölti a fájlt és elkészíti az előnézetet
  } else {
    previewDiv.innerHTML = '<p>Válassz egy képet a számítógépedről!</p>';
  }
});
