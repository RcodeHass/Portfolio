
// Initialisation de la carte
const map = L.map('map', {
    scrollWheelZoom: true  // Désactive le zoom avec la molette
}).setView([45.718105, 4.92472], 10.8);

// Ajout d'un fond de carte OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const lieux = {
  'exp-archives': {
    coords: [45.421834, 4.410939],
    label: 'Archives municipales de Saint-Étienne',
    type: 'experience'
  },
  'exp-tp': {
    coords: [49.1193089, 6.1757156],
    label: 'Job été dans le TP',
    type: 'experience'
  },
  'exp-annim': {
    coords: [-12.82771404,45.11312057],
    label: 'Job été annimations',
    type: 'experience'
  },
  'form-lyon2': {
    coords: [45.718105, 4.92472],
    label: 'Université Lyon 2',
    type: 'formation'
  },
  'form-lorraine': {
    coords: [49.12020460, 6.16458561],
    label: 'Université de Lorraine',
    type: 'formation'
  },
  'form-eiffel': {
    coords: [49.2439, 6.1772],
    label: 'Lycée Gustave Eiffel - Talange',
    type: 'formation'
  },
  'form-bac': {
    coords: [-12.8223,45.1321],
    label: 'Lycée Gustave Eiffel - Talange',
    type: 'formation'
  }
};

const formationIcon = L.icon({
  iconUrl: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/icons/mortarboard-fill.svg',
  iconSize: [20, 20]
});

const experienceIcon = L.icon({
  iconUrl: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/icons/briefcase-fill.svg',
  iconSize: [20, 20]
});

// Ajout des marqueurs
Object.entries(lieux).forEach(([id, lieu]) => {
  const icon = lieu.type === 'formation' ? formationIcon : experienceIcon;

  L.marker(lieu.coords, { icon }).addTo(map)
    .bindPopup(lieu.label);
});


function centrerCarte(idLieu) {
  const lieu = lieux[idLieu];
  if (lieu && lieu.coords) {
    map.setView(lieu.coords, 13, { animate: true });
  }
}


// Ajout des écouteurs d'événements sur les blocs
Object.keys(lieux).forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.style.cursor = "pointer"; // pour signaler l’interactivité
    element.addEventListener('click', () => centrerCarte(id));
  }
});

// Definition de la legende
const legend = L.control({ position: "bottomright" });

legend.onAdd = function () {
  const div = L.DomUtil.create("div", "info legend");
  div.innerHTML = `
    <p><i class="bi bi-briefcase-fill" style="color:#007bff"></i> Expérience professionnelle</p>
    <p><i class="bi bi-mortarboard-fill" style="color:#28a745"></i> Formation</p>
  `;
  return div;
};
legend.addTo(map);
