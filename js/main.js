const competencesmission_ep = [
    "../assets/images/mission_ep/ep_ccmdl_1.png",
    "../assets/images/mission_ep/ep_ccmdl_2.png",
    "../assets/images/mission_ep/ep_ccmdl_3.png",
    "../assets/images/mission_ep/ep_ccmdl_4.png",
    "../assets/images/mission_ep/ep_ccmdl_5.png",
];
const competencesmasterstage2 = [
    "../assets/images/stage_m2/stg_m2_1.png",
    "../assets/images/stage_m2/stg_m2_2.png",
    "../assets/images/stage_m2/stg_m2_3.png",
    "../assets/images/stage_m2/stg_m2_4.png",
    "../assets/images/stage_m2/stg_m2_5.png",
    "../assets/images/stage_m2/stg_m2_6.png"
];

const competencesImages = [
    "../assets/images/stage_m1/stage_1.png",
    "../assets/images/stage_m1/stage_2.png",
    "../assets/images/stage_m1/stage_3.png",
    "../assets/images/stage_m1/stage_4.png",
    "../assets/images/stage_m1/stage_5.png",
    "../assets/images/stage_m1/stage_6.png"
];

const competencesFme = [
    "../assets/images/fme/fme_1.png",
    "../assets/images/fme/fme_2.png",
    "../assets/images/fme/fme_3.png"
];

const competencesAgriculture = [
    "../assets/images/chambre-agriculture/agri_1.png",
    "../assets/images/chambre-agriculture/agri_2.png",
    "../assets/images/chambre-agriculture/agri_3.png",
    "../assets/images/chambre-agriculture/agri_4.png",
    "../assets/images/chambre-agriculture/agri_5.png"
];

const competencesAnalyse = [
    "../assets/images/analyse-spatial/as_1.png",
    "../assets/images/analyse-spatial/as_2.png",
    "../assets/images/analyse-spatial/as_3.png",
    "../assets/images/analyse-spatial/as_4.png"
];

const exp_etude_impact = [
    "../assets/images/etude-impact/impact_1.png",
    "../assets/images/etude-impact/impact_2.JPG",
    "../assets/images/etude-impact/impact_3.png",
    "../assets/images/etude-impact/impact_4.png",
    "../assets/images/etude-impact/impact_5.png"
];

// Construit un texte alternatif lisible à partir du nom de fichier
function altFromSrc(src) {
    const file = src.split("/").pop().replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ");
    return file;
}

function buildCarousel(images, containerId) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.warn(`Container introuvable : ${containerId}`);
        return;
    }

    container.innerHTML = "";

    images.forEach((src, index) => {
        const item = document.createElement("div");
        item.className = "carousel-item" + (index === 0 ? " active" : "");

        item.innerHTML = `
            <img src="${src}" class="d-block w-100 rounded" loading="lazy" alt="${altFromSrc(src)}">
        `;

        container.appendChild(item);
    });
}


// Remplit le carousel du modal partagé à partir du carousel cliqué
function setupModalCarousel() {
    const modalElement = document.getElementById("modalCompetences");

    if (!modalElement) {
        return;
    }

    modalElement.addEventListener("show.bs.modal", (event) => {
        const trigger = event.relatedTarget;

        if (!trigger) {
            return;
        }

        // Récupère les images du carousel qui a déclenché le modal
        const images = trigger.querySelectorAll(".carousel-item img");
        const inner = document.getElementById("carouselModalCompetencesInner");

        if (inner) {
            inner.innerHTML = "";

            images.forEach((img, index) => {
                const item = document.createElement("div");
                item.className = "carousel-item" + (index === 0 ? " active" : "");

                const src = img.getAttribute("src");
                const alt = img.alt || altFromSrc(src);

                item.innerHTML = `
                    <img src="${src}" class="d-block w-100 rounded" alt="${alt}">
                `;

                inner.appendChild(item);
            });
        }

        // Titre repris depuis l'accordéon parent
        const accordionItem = trigger.closest(".accordion-item");
        const titleElement = accordionItem
            ? accordionItem.querySelector(".accordion-button h5, .accordion-button h4")
            : null;
        const title = titleElement ? titleElement.textContent.trim() : "";

        const modalTitle = document.getElementById("modalCompetencesTitle");
        if (modalTitle) {
            modalTitle.textContent = title || "Aperçu";
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {

    buildCarousel(competencesmission_ep, "carouselmission_epInner");

    buildCarousel(competencesmasterstage2, "carouselStageM2Inner");

    buildCarousel(competencesFme, "carouselFmeInner");

    buildCarousel(competencesAgriculture, "carouselAgricultureInner");

    buildCarousel(competencesAnalyse, "carouselAnalyseInner");

    buildCarousel(competencesImages, "carouselCompetencesInner");

    buildCarousel(exp_etude_impact, "carouselEtudeImpactInner");

    setupModalCarousel();
});