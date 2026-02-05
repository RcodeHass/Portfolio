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
            <img src="${src}" class="d-block w-100 rounded" loading="lazy">
        `;

        container.appendChild(item);
    });
}


document.addEventListener("DOMContentLoaded", () => {

    buildCarousel(competencesmasterstage2, "carouselStageM2Inner");
    // buildCarousel(competencesmasterstage2, "carouselStageM2ModalInner");

    buildCarousel(competencesFme, "carouselFmeInner");
    // buildCarousel(competencesFme, "carouselFmeModalInner");
    
    buildCarousel(competencesAgriculture, "carouselAgricultureInner");
    // buildCarousel(competencesAgriculture, "carouselAgricultureModalInner");

    buildCarousel(competencesAnalyse, "carouselAnalyseInner");
    // buildCarousel(competencesAnalyse, "carouselAnalyseModalInner");

    buildCarousel(competencesImages, "carouselCompetencesInner");
    // buildCarousel(competencesImages, "carouselCompetencesModalInner");

    buildCarousel(exp_etude_impact, "carouselEtudeImpactInner");
    // buildCarousel(exp_etude_impact, "carouselEtudeImpactModalInner");
});