/* =========================
   TRANSLATIONS
========================= */

const translations = {
    id: {

        WOMEN: "WANITA",
        MAN: "PRIA",
        CHILDREN: "ANAK",
        SPORT: "OLAHRAGA",
        MUSLIM: "MUSLIM",
        HOME: "Beranda",
        PRODUCTS: "Produk",
        ABOUT: "Tentang",
        CONTACT: "Kontak",
        LOGIN: "Masuk / Daftar",
        SEARCH: "Cari..."

    },
    en: {

        WOMEN: "WOMEN",
        MAN: "MEN",
        CHILDREN: "CHILDREN",
        SPORT: "SPORT",
        MUSLIM: "MUSLIM",
        HOME: "Home",
        PRODUCTS: "Products",
        ABOUT: "About",
        CONTACT: "Contact",
        LOGIN: "Login / Register",
        SEARCH: "Search..."

    },
    jp: {

        WOMEN: "女性",
        MAN: "男性",
        CHILDREN: "子供",
        SPORT: "スポーツ",
        MUSLIM: "ムスリム",
        HOME: "ホーム",
        PRODUCTS: "商品",
        ABOUT: "概要",
        CONTACT: "連絡先",
        LOGIN: "ログイン / 新規登録",
        SEARCH: "検索..."

    },
    kr: {

        WOMEN: "여성",
        MAN: "남성",
        CHILDREN: "어린이",
        SPORT: "스포츠",
        MUSLIM: "무슬림",
        HOME: "홈",
        PRODUCTS: "제품",
        ABOUT: "소개",
        CONTACT: "연락처",
        LOGIN: "로그인 / 회원가입",
        SEARCH: "검색..."

    },
    cn: {

        WOMEN: "女装",
        MAN: "男装",
        CHILDREN: "儿童",
        SPORT: "运动",
        MUSLIM: "穆斯林",
        HOME: "主页",
        PRODUCTS: "产品",
        ABOUT: "关于",
        CONTACT: "联系",
        LOGIN: "登录 / 注册",
        SEARCH: "搜索..."

    },
    ar: {

        WOMEN: "نساء",
        MAN: "رجال",
        CHILDREN: "أطفال",
        SPORT: "رياضة",
        MUSLIM: "مسلم",
        HOME: "الرئيسية",
        PRODUCTS: "المنتجات",
        ABOUT: "حول",
        CONTACT: "اتصال",
        LOGIN: "تسجيل الدخول / إنشاء حساب",
        SEARCH: "بحث..."

    },
    fr: {

        WOMEN: "FEMME",
        MAN: "HOMME",
        CHILDREN: "ENFANT",
        SPORT: "SPORT",
        MUSLIM: "MUSULMAN",
        HOME: "Accueil",
        PRODUCTS: "Produits",
        ABOUT: "À propos",
        CONTACT: "Contact",
        LOGIN: "Connexion / Inscription",
        SEARCH: "Rechercher..."

    },
    de: {

        WOMEN: "DAMEN",
        MAN: "HERREN",
        CHILDREN: "KINDER",
        SPORT: "SPORT",
        MUSLIM: "MUSLIM",
        HOME: "Startseite",
        PRODUCTS: "Produkte",
        ABOUT: "Über uns",
        CONTACT: "Kontakt",
        LOGIN: "Anmelden / Registrieren",
        SEARCH: "Suchen..."

    },
    es: {

        WOMEN: "MUJER",
        MAN: "HOMBRE",
        CHILDREN: "NIÑOS",
        SPORT: "DEPORTE",
        MUSLIM: "MUSULMÁN",
        HOME: "Inicio",
        PRODUCTS: "Productos",
        ABOUT: "Acerca de",
        CONTACT: "Contacto",
        LOGIN: "Iniciar sesión / Registrarse",
        SEARCH: "Buscar..."

    }

};

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
