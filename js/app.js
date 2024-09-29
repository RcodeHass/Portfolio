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