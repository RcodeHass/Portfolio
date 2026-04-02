
// Initialisation de la carte
const map = L.map('map', {
    scrollWheelZoom: true  // Désactive le zoom avec la molette
}).setView([45.718105, 4.92472], 10.8);

// Ajout d'un fond de carte OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const lieux = {
  'exp-ccmdl': {
    coords: [45.632122, 4.454904],
    label: 'Communauté de communes du Mont-du-Lyon',
    type: 'experience'
  },
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

const formationIcon = L.divIcon({
  className: 'custom-icon formation',
  html: '<i class="fas fa-graduation-cap"></i>',
  iconSize: [30, 30],
  iconAnchor: [15, 30]
});

const experienceIcon = L.divIcon({
  className: 'custom-icon experience',
  html: '<i class="fas fa-briefcase"></i>',
  iconSize: [30, 30],
  iconAnchor: [15, 30]
});

// Ajout des marqueurs
const markers = {}; // stocker les marqueurs

Object.entries(lieux).forEach(([id, lieu]) => {
  const icon = lieu.type === 'formation' ? formationIcon : experienceIcon;

  const marker = L.marker(lieu.coords, { icon })
    .addTo(map)
    .bindPopup(`<strong>${lieu.label}</strong>`,
      {
        offset: [0, -25],
      }
    );

  markers[id] = marker; // on stocke
});


function centrerCarte(idLieu) {
  const marker = markers[idLieu];

  if (marker) {
    map.flyTo(marker.getLatLng(), 13, {
      duration: 1.5
    });

    setTimeout(() => {
      marker.openPopup();
    }, 500);
  }
}


// Ajout des écouteurs d'événements sur les blocs
Object.keys(lieux).forEach(id => {
  const element = document.getElementById(id);

  if (element) {
    element.style.cursor = "pointer";

    element.addEventListener('click', () => {

      // reset
      document.querySelectorAll('.highlight').forEach(el => {
        el.classList.remove('highlight');
      });

      // highlight
      element.classList.add('highlight');

      centrerCarte(id);
    });
  }
});

// Definition de la legende
const legend = L.control({ position: "bottomright" });

legend.onAdd = function () {
  const div = L.DomUtil.create("div", "info legend");

  div.innerHTML = `
    <div class="legend-item">
      <div class="custom-icon experience">
        <i class="fas fa-briefcase"></i>
      </div>
      <span style="color: #2c2c2c";><strong>Expérience professionnelle </strong></span>
    </div>

    <div class="legend-item">
      <div class="custom-icon formation">
        <i class="fas fa-graduation-cap"></i>
      </div>
      <span style="color: #2c2c2c";><strong>Formation</strong></span>
    </div>
  `;

  return div;
};
legend.addTo(map);
