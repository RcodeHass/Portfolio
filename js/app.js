const openMenu = () => {
    const menu = document.querySelector (".header-menu");
    menu.classList.toggle("activ");
    if(menu.classList.contains("activ")){
        document.querySelector("header .material-symbols-outlined").innerHTML = "close"
    }
    else{ 
        document.querySelector("header .material-symbols-outlined").innerHTML = "menu"
    }
}


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
