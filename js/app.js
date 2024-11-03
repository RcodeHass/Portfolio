// const openMenu = () => {
//     const menu = document.querySelector (".header-menu");
//     menu.classList.toggle("activ");
//     if(menu.classList.contains("activ")){
//         document.querySelector("header .material-symbols-outlined").innerHTML = "close"
//     }
//     else{ 
//         document.querySelector("header .material-symbols-outlined").innerHTML = "menu"
//     }
// }


// Les boutton switch

// const carousel = document.querySelector (".carousel");
// const arrowBtns = document.querySelectorAll (".wrapper .fleche");
// const firtCardWidth = carousel.querySelector (".card").offsetWidth; 

// let isDragging = false, startX, startScrollLeft;


// arrowBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         carousel.scrollLeft += btn.id === "left" ? - firtCardWidth : firtCardWidth;
//     })
// })

// const dragStart = (e) => {
//     isDragging = true;
//     carousel.classList.add("dragging");
//     startX = e.pageX;
//     startScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     if(!isDragging) return;
//     carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// }
// const dragStop = () => {
//     isDragging = false;
//     carousel.classList.remove ("dradding");
// }
// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("mouseup", dragStop);

const carousels = document.querySelectorAll(".carousel");

carousels.forEach((carousel, index) => {
    const arrowBtns = document.querySelectorAll(`#glr_${index + 1} .fleche`); // Flèches spécifiques à chaque galerie
    const firstCardWidth = carousel.querySelector(".card").offsetWidth; 

    let isDragging = false, startX, startScrollLeft;

    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };

    // Ajout des événements pour chaque carousel
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", dragStop);
});


// Centre la visualisation 
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (event) {
        // Empêche le comportement par défaut de l'ancre
        event.preventDefault();
        
        // Obtenir la cible à partir de l'attribut href du lien
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Faire défiler vers l'élément avec alignement centré
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    });
});

const openMenu = () => {
    const menu = document.querySelector(".header-menu");
    menu.classList.toggle("activ");
    if (menu.classList.contains("activ")) {
        document.querySelector(".header-menu-mobile .material-symbols-outlined").innerHTML = "close";
    } else {
        document.querySelector(".header-menu-mobile .material-symbols-outlined").innerHTML = "menu";
    }
};

// Masquer le menu après un clic sur un lien
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.header-menu').classList.remove('activ');
        document.querySelector(".header-menu-mobile .material-symbols-outlined").innerHTML = "menu"; // Réinitialiser l'icône
    });
});