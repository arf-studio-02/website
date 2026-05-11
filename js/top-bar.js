/* =========================
   INIT TOPBAR
========================= */

function initTopbar(){

    /* DROPDOWN */

    const langToggle =
    document.getElementById("langToggle");

    const langMenu =
    document.getElementById("langMenu");

    if(langToggle){

        langToggle.addEventListener("click", () => {

            langMenu.classList.toggle("show");

        });

    }

    /* LANGUAGE */

    const langOptions =
    document.querySelectorAll(".lang-option");

    langOptions.forEach(option => {

        option.addEventListener("click", () => {

            const lang =
            option.dataset.lang;

            setLanguage(lang);

            applyLanguage();

            /* PAGE LANGUAGE */

            if(typeof applyHomeLanguage === "function"){

                applyHomeLanguage();

            }

            if(typeof applyProductsLanguage === "function"){

                applyProductsLanguage();

            }

            langMenu.classList.remove("show");

        });

    });

    /* CLOSE */

    document.addEventListener("click", (e) => {

        if(
            langToggle &&
            !langToggle.contains(e.target) &&
            !langMenu.contains(e.target)
        ){

            langMenu.classList.remove("show");

        }

    });

    /* HAMBURGER */

    const hamburger =
    document.getElementById("hamburger");

    const menu =
    document.getElementById("menu");

    if(hamburger){

        hamburger.addEventListener("click", () => {

            menu.classList.toggle("active");

        });

    }

}