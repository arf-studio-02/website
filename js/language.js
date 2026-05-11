/* =========================
   TRANSLATIONS
========================= */

const translations = {

    id: {
        home: "Beranda",
        products: "Produk",
        about: "Tentang",
        contact: "Kontak",
        login: "Masuk",
        search: "Cari..."
    },

    en: {
        home: "Home",
        products: "Products",
        about: "About",
        contact: "Contact",
        login: "Login",
        search: "Search..."
    },

    jp: {
        home: "ホーム",
        products: "商品",
        about: "約",
        contact: "接触",
        login: "ログイン",
        search: "検索..."
    },

    kr: {

        home: "홈",
        products: "제품",
        about: "소개",
        contact: "연락처",
        login: "로그인",
        search: "검색...",

    },
    cn: {

        home: "主页",
        products: "产品",
        about: "关于",
        contact: "联系",
        login: "登录",
        search: "搜索...",
    }
}

/* APPLY LANGUAGE */

function applyLanguage(){

    const lang =
    localStorage.getItem("language") || "id";

    document
    .querySelectorAll("[data-translate]")
    .forEach(element => {

        const key =
        element.dataset.translate;

        if(translations[lang][key]){

            element.innerText =
            translations[lang][key];

        }

    });

    document
    .querySelectorAll("[data-placeholder]")
    .forEach(element => {

        const key =
        element.dataset.placeholder;

        if(translations[lang][key]){

            element.placeholder =
            translations[lang][key];

        }

    });

    /* ACTIVE BUTTON */

    document
    .querySelectorAll(".lang-option")
    .forEach(option => {

        option.classList.remove("active");

    });

    const activeButton =
    document.querySelector(`[data-lang="${lang}"]`);

    if(activeButton){

        activeButton.classList.add("active");

    }

    /* CURRENT TEXT */

    const currentLang =
    document.getElementById("currentLang");

    if(currentLang){

        currentLang.innerText =
        lang.toUpperCase();

    }

}

/* SET LANGUAGE */

function setLanguage(lang){

    localStorage.setItem("language", lang);

    applyLanguage();

}