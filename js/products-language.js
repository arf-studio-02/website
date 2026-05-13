/* =========================
   PRODUCTS TRANSLATIONS
========================= */

const productsTranslations = {

    /* =========================
       INDONESIA
    ========================= */

    id: {

        title:
        "Produk Kami",

        desc:
        "Pilih layanan terbaik untuk bisnis anda",

        webTitle:
        "Website Basic",

        webDesc:
        "Website landing page sederhana",

        shopTitle:
        "Toko Online",

        shopDesc:
        "Toko online modern untuk bisnis anda",

        appTitle:
        "Aplikasi Mobile",

        appDesc:
        "Pembuatan aplikasi Android",

        buyNow:
        "Beli Sekarang"

    },

    /* =========================
       ENGLISH
    ========================= */

    en: {

        title:
        "Our Products",

        desc:
        "Choose the best service for your business",

        webTitle:
        "Website Basic",

        webDesc:
        "Simple landing page website",

        shopTitle:
        "Online Shop",

        shopDesc:
        "Modern online store for your business",

        appTitle:
        "Mobile App",

        appDesc:
        "Android application development",

        buyNow:
        "Buy Now"

    },

    /* =========================
       JAPANESE
    ========================= */

    jp: {

        title:
        "私たちの商品",

        desc:
        "あなたのビジネスに最適なサービスを選択してください",

        webTitle:
        "基本ウェブサイト",

        webDesc:
        "シンプルなランディングページ",

        shopTitle:
        "オンラインショップ",

        shopDesc:
        "あなたのビジネスのためのモダンなオンラインストア",

        appTitle:
        "モバイルアプリ",

        appDesc:
        "Androidアプリ開発",

        buyNow:
        "今すぐ購入"

    },

    /* =========================
       KOREAN
    ========================= */

    kr: {

        title:
        "우리의 제품",

        desc:
        "비즈니스에 가장 적합한 서비스를 선택하세요",

        webTitle:
        "기본 웹사이트",

        webDesc:
        "간단한 랜딩 페이지 웹사이트",

        shopTitle:
        "온라인 쇼핑몰",

        shopDesc:
        "비즈니스를 위한 현대적인 온라인 스토어",

        appTitle:
        "모바일 앱",

        appDesc:
        "안드로이드 앱 개발",

        buyNow:
        "지금 구매"

    },

    /* =========================
       CHINESE
    ========================= */

    cn: {

        title:
        "我们的产品",

        desc:
        "为您的业务选择最佳服务",

        webTitle:
        "基础网站",

        webDesc:
        "简单的登陆页面网站",

        shopTitle:
        "网上商店",

        shopDesc:
        "适用于您业务的现代在线商店",

        appTitle:
        "移动应用",

        appDesc:
        "安卓应用开发",

        buyNow:
        "立即购买"

    }

};

/* =========================
   APPLY PRODUCTS LANGUAGE
========================= */

function applyProductsLanguage(){

    const lang =
    localStorage.getItem("language") || "id";

    if(!productsTranslations[lang]) return;

    document
    .querySelectorAll("[data-products]")
    .forEach(element => {

        const key =
        element.dataset.products;

        if(productsTranslations[lang]?.[key]){

            element.textContent =
            productsTranslations[lang][key];

        }

    });

}
