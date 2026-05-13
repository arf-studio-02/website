// ===============================
// 🍔 HAMBURGER MENU
// ===============================
function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  if (!hamburger || !menu) return;

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}
// ===============================
// 🌐 LANGUAGE DATA
// ===============================
const TEXT = {
  ID: {
    home: "Beranda",
    product: "Produk",
    contact: "Kontak",
    search: "Cari...",
    login: "Masuk"
  },
  EN: {
    home: "Home",
    product: "Products",
    contact: "Contact",
    search: "Search...",
    login: "Login"
  }
};

// ===============================
// 🌐 APPLY LANGUAGE
// ===============================
function applyLanguage() {
  const lang = localStorage.getItem("lang") || "ID";
  const t = TEXT[lang];

  document.getElementById("nav-home")?.innerText = t.home;
  document.getElementById("nav-product")?.innerText = t.product;
  document.getElementById("nav-contact")?.innerText = t.contact;

  const searchInput = document.querySelector(".search-box input");
  if (searchInput) searchInput.placeholder = t.search;

  const loginBtn = document.querySelector(".btn-login");
  if (loginBtn) loginBtn.innerText = t.login;
}

// ===============================
// 🌐 LANGUAGE TOGGLE BUTTON
// ===============================
function initLanguageToggle() {
  const langBtn = document.getElementById("langToggle");
  if (!langBtn) return;

  // set awal
  let currentLang = localStorage.getItem("lang") || "ID";
  langBtn.innerText = currentLang;

  langBtn.addEventListener("click", () => {
    // toggle
    currentLang = currentLang === "ID" ? "EN" : "ID";

    // simpan
    localStorage.setItem("lang", currentLang);

    // update button
    langBtn.innerText = currentLang;
const heroTitle = document.getElementById("hero-title");
if (heroTitle) {
  heroTitle.innerText =
    lang === "EN"
      ? "Build Your Website Easily"
      : "Buat Website Dengan Mudah";
}
    // apply ulang
    applyLanguage();
  });
}
function initFooter() {
  const el = document.getElementById("copyright");
  if (el) {
    el.innerText =
      "© " + new Date().getFullYear() + " Arf.Store. All rights reserved.";
  }
}