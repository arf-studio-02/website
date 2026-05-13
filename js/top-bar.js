/* =========================
   COMPONENT LOADER
========================= */

async function loadComponent(id, file){

    try{

        const response =
        await fetch(file);

        const data =
        await response.text();

        const element =
        document.getElementById(id);

        if(element){

            element.innerHTML = data;

        }

    }catch(error){

        console.error(
            "Component load error:",
            error
        );

    }

}


/* =========================
   INIT MEGA MENU
========================= */

async function initMegaMenu(){

    /* =========================
       LOAD COMPONENTS
    ========================= */

    await loadComponent(
        "mega-wanita-container",
        "../components/mega-wanita.html"
    );


    let activeMenu = null;


    /* =========================
       OPEN MENU
    ========================= */

    function openMegaMenu(id){

        closeMegaMenu();

        const target =
        document.getElementById(id);

        if(!target) return;

        target.classList.add("active");

        document.body.classList.add("no-scroll");

        activeMenu = id;

    }


    /* =========================
       CLOSE MENU
    ========================= */

    function closeMegaMenu(){

        document.querySelectorAll(".mega-menu")
        .forEach(menu => {

            menu.classList.remove("active");

        });

        document.body.classList.remove("no-scroll");

        activeMenu = null;

    }


    /* =========================
       TOGGLE BUTTON
    ========================= */

    document.querySelectorAll("[data-target]")
    .forEach(item => {

        item.addEventListener("click", (e) => {

            e.preventDefault();

            e.stopPropagation();

            const targetId =
            item.dataset.target;

            /* TOGGLE */

            if(activeMenu === targetId){

                closeMegaMenu();

            }else{

                openMegaMenu(targetId);

            }

        });

    });


    /* =========================
       KEEP OPEN INSIDE MENU
    ========================= */

    document.querySelectorAll(".mega-menu")
    .forEach(menu => {

        menu.addEventListener("click", (e) => {

            e.stopPropagation();

        });

    });


    /* =========================
       CLICK OUTSIDE
    ========================= */

    document.addEventListener("click", () => {

        closeMegaMenu();

    });


    /* =========================
       ESC CLOSE
    ========================= */

    document.addEventListener("keydown", (e) => {

        if(e.key === "Escape"){

            closeMegaMenu();

        }

    });

}


/* =========================
   START
========================= */

document.addEventListener("DOMContentLoaded", () => {

    initMegaMenu();

});

/* INIT TOPBAR */

function initTopbar(){

    /* =========================
       LANGUAGE DROPDOWN
    ========================= */

    const langToggle =
    document.getElementById("langToggle");

    const langMenu =
    document.getElementById("langMenu");

    const currentLang =
    document.getElementById("currentLang");

    if(langToggle && langMenu){

        langToggle.addEventListener("click", (e) => {

            e.stopPropagation();

            langMenu.classList.toggle("show");

        });

    }


    /* =========================
       LANGUAGE OPTIONS
    ========================= */

    const langOptions =
    document.querySelectorAll(".lang-option");

    langOptions.forEach(option => {

        option.addEventListener("click", () => {

            const lang =
            option.dataset.lang;

            /* SAVE LANGUAGE */
            setLanguage(lang);

            /* UPDATE UI */
            applyLanguage();

            /* PAGE LANGUAGE */

            if(typeof applyHomeLanguage === "function"){

                applyHomeLanguage();

            }

            if(typeof applyProductsLanguage === "function"){

                applyProductsLanguage();

            }

            /* ACTIVE BUTTON */

            langOptions.forEach(btn => {
                btn.classList.remove("active");
            });

            option.classList.add("active");

            /* UPDATE LABEL */

            if(currentLang){

                currentLang.textContent =
                lang.toUpperCase();

            }

            /* CLOSE MENU */

            if(langMenu){

                langMenu.classList.remove("show");

            }

        });

    });


    /* =========================
       CLOSE LANGUAGE DROPDOWN
    ========================= */

    document.addEventListener("click", (e) => {

        if(
            langToggle &&
            langMenu &&
            !langToggle.contains(e.target) &&
            !langMenu.contains(e.target)
        ){

            langMenu.classList.remove("show");

        }

    });


    /* =========================
       HAMBURGER MENU
    ========================= */

    const hamburger =
    document.getElementById("hamburger");

    const menu =
    document.getElementById("menu");

    if(hamburger && menu){

        hamburger.addEventListener("click", (e) => {

            e.stopPropagation();

            menu.classList.toggle("active");

        });

    }


    /* =========================
       CLOSE MOBILE MENU
    ========================= */

    document.addEventListener("click", (e) => {

        if(
            hamburger &&
            menu &&
            !hamburger.contains(e.target) &&
            !menu.contains(e.target)
        ){

            menu.classList.remove("active");

        }

    });


    /* =========================
       ESC CLOSE
    ========================= */

    document.addEventListener("keydown", (e) => {

        if(e.key === "Escape"){

            if(langMenu){

                langMenu.classList.remove("show");

            }

            if(menu){

                menu.classList.remove("active");

            }

        }

    });

}


/* =========================
   START
========================= */

document.addEventListener("DOMContentLoaded", () => {

    initTopbar();

});
