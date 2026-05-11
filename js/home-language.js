/* =========================
   HOME PAGE TRANSLATIONS
========================= */

const homeTranslations = {

    id: {

        heroTitle:
        "Bangun Website Dengan Mudah",

        heroDesc:
        "Website modern untuk bisnis anda",

        productTitle:
        "Website Basic",

        productDesc:
        "Landing page sederhana"

    },

    en: {

        heroTitle:
        "Build Your Website Easily",

        heroDesc:
        "Modern website for your business",

        productTitle:
        "Basic Website",

        productDesc:
        "Simple landing page"

    },

    jp: {

        heroTitle:
        "簡単にウェブサイトを作成",

        heroDesc:
        "あなたのビジネス向けのモダンなウェブサイト",

        productTitle:
        "基本ウェブサイト",

        productDesc:
        "シンプルなランディングページ"

    },

    kr: {

        heroTitle:
        "쉽게 웹사이트 만들기",

        heroDesc:
        "비즈니스를 위한 현대적인 웹사이트",

        productTitle:
        "기본 웹사이트",

        productDesc:
        "간단한 랜딩 페이지"

    },

    cn: {

        heroTitle:
        "轻松创建网站",

        heroDesc:
        "适用于您业务的现代网站",

        productTitle:
        "基础网站",

        productDesc:
        "简单的登陆页面"

    }

};

/* =========================
   APPLY HOME LANGUAGE
========================= */

function applyHomeLanguage(){

    const lang =
    localStorage.getItem("language") || "id";

    if(!homeTranslations[lang]) return;

    document
    .querySelectorAll("[data-home]")
    .forEach(element => {

        const key =
        element.dataset.home;

        if(homeTranslations[lang]?.[key]){

            element.textContent =
            homeTranslations[lang][key];

        }

    });

}

