/* ============================================================
   GIRAFFE COFFEE — interactions
   i18n (RU/EN) · menu tabs · locations · reveals · parallax
   ============================================================ */

/* ---------------- i18n dictionary ---------------- */
const I18N = {
  ru: {
    "nav.about": "О нас",
    "nav.menu": "Меню",
    "nav.locations": "Филиалы",
    "nav.contacts": "Контакты",
    "hero.sub": "coffee · бишкек",
    "hero.tagline": "Всегда на высоте — кофе, завтраки и тропическая атмосфера в сердце города.",
    "hero.ctaMenu": "Смотреть меню",
    "hero.ctaMap": "Найти кофейню",
    "about.eyebrow": "О бренде",
    "about.title": "Кофейня, где <u>тропики</u> встречают город",
    "about.p1": "Giraffe Coffee — бишкекская сеть кофеен с узнаваемым характером: много зелени, тёплый свет и кофе, сваренный как надо.",
    "about.p2": "Забегайте на фильтр навынос или оставайтесь надолго — за завтраком, десертом и разговором.",
    "about.stat1": "точек по стране",
    "about.stat2": "рейтинг на 2ГИС",
    "about.stat3": "флагман на Медерова",
    "menu.eyebrow": "Меню",
    "menu.title": "Избранное из <u>меню</u>",
    "menu.tab.coffee": "Кофе",
    "menu.tab.cold": "Холодное",
    "menu.tab.dessert": "Десерты",
    "menu.tab.kitchen": "Кухня",
    "menu.note": "Цены в сомах, ориентировочные — полное меню ждёт в кофейнях.",
    "loc.eyebrow": "Филиалы",
    "loc.title": "Ждём вас <u>рядом</u>",
    "loc.all": "Все точки на 2ГИС",
    "loc.route": "Маршрут",
    "footer.tag": "Всегда на высоте!",
    "footer.city": "Бишкек, Кыргызстан",
    marquee: "Кофе&nbsp;✦&nbsp;Завтраки&nbsp;✦&nbsp;Десерты&nbsp;✦&nbsp;Матча&nbsp;✦&nbsp;Смузи&nbsp;✦&nbsp;Выпечка&nbsp;✦&nbsp;"
  },
  en: {
    "nav.about": "About",
    "nav.menu": "Menu",
    "nav.locations": "Locations",
    "nav.contacts": "Contacts",
    "hero.sub": "coffee · bishkek",
    "hero.tagline": "Always on top — coffee, breakfasts and a tropical atmosphere in the heart of the city.",
    "hero.ctaMenu": "See the menu",
    "hero.ctaMap": "Find a café",
    "about.eyebrow": "The brand",
    "about.title": "A café where the <u>tropics</u> meet the city",
    "about.p1": "Giraffe Coffee is a Bishkek-born coffee chain with a signature character: lush greenery, warm light and coffee brewed right.",
    "about.p2": "Grab a filter to go — or stay a while for breakfast, dessert and a good conversation.",
    "about.stat1": "spots nationwide",
    "about.stat2": "rating on 2GIS",
    "about.stat3": "flagship on Mederova",
    "menu.eyebrow": "Menu",
    "menu.title": "Highlights from the <u>menu</u>",
    "menu.tab.coffee": "Coffee",
    "menu.tab.cold": "Cold drinks",
    "menu.tab.dessert": "Desserts",
    "menu.tab.kitchen": "Kitchen",
    "menu.note": "Prices in som, approximate — the full menu awaits you in our cafés.",
    "loc.eyebrow": "Locations",
    "loc.title": "Find us <u>nearby</u>",
    "loc.all": "All spots on 2GIS",
    "loc.route": "Route",
    "footer.tag": "Always on top!",
    "footer.city": "Bishkek, Kyrgyzstan",
    marquee: "Coffee&nbsp;✦&nbsp;Breakfasts&nbsp;✦&nbsp;Desserts&nbsp;✦&nbsp;Matcha&nbsp;✦&nbsp;Smoothies&nbsp;✦&nbsp;Pastry&nbsp;✦&nbsp;"
  }
};

/* ---------------- menu data (prices in KGS) ---------------- */
const MENU = {
  coffee: {
    img: "assets/img/menu-coffee.jpg",
    items: [
      { ru: "Фильтр-кофе", en: "Filter coffee", price: "150 / 200" },
      { ru: "Латте с солёной карамелью", en: "Salted caramel latte", price: "210" },
      { ru: "Айс-капучино", en: "Iced cappuccino", price: "210 / 260" },
      { ru: "Айс-матча латте с кофе", en: "Iced matcha latte with espresso", price: "280 / 330" }
    ]
  },
  cold: {
    img: "assets/img/menu-matcha.jpg",
    items: [
      { ru: "Айс-матча латте", en: "Iced matcha latte", price: "250 / 300" },
      { ru: "Айс-бамбл гранат-розмарин", en: "Iced bumble pomegranate-rosemary", price: "250" },
      { ru: "Айс-матча манго на кокосовом молоке", en: "Iced mango matcha on coconut milk", price: "300 / 400" },
      { ru: "Смузи клубника-банан", en: "Strawberry-banana smoothie", price: "280 / 340" },
      { ru: "Смузи банан-киви-шпинат", en: "Banana-kiwi-spinach smoothie", price: "280 / 340" }
    ]
  },
  dessert: {
    img: "assets/img/menu-dessert.jpg",
    items: [
      { ru: "Круассан с шоколадом", en: "Chocolate croissant", price: "220" },
      { ru: "Круассан Рафаэлло", en: "Raffaello croissant", price: "220" },
      { ru: "Мусс манго-маракуйя", en: "Mango-passionfruit mousse", price: "230" },
      { ru: "Трайфл Сникерс", en: "Snickers trifle", price: "280" },
      { ru: "Чизкейк New York", en: "New York cheesecake", price: "315" },
      { ru: "Чизкейк Oreo", en: "Oreo cheesecake", price: "315" }
    ]
  },
  kitchen: {
    img: "assets/img/menu-breakfast.jpg",
    items: [
      { ru: "Шакшука с брынзой", en: "Shakshuka with feta", price: "505" },
      { ru: "Цезарь с курицей", en: "Chicken Caesar", price: "555" },
      { ru: "Ньокки с грибами", en: "Gnocchi with mushrooms", price: "565" },
      { ru: "Бургер классический", en: "Classic burger", price: "675" },
      { ru: "Боул с сёмгой", en: "Salmon bowl", price: "815" },
      { ru: "Том-ям с рисом", en: "Tom yum with rice", price: "875" }
    ]
  }
};

/* ---------------- locations ---------------- */
const LOCATIONS = [
  {
    name: { ru: "Медерова, 81", en: "Mederova, 81" },
    meta: { ru: "Флагман · круглосуточно", en: "Flagship · open 24/7" },
    badge: "24/7",
    url: "https://2gis.kg/bishkek/firm/70000001027438208"
  },
  {
    name: { ru: "Боконбаева, 101", en: "Bokonbayeva, 101" },
    meta: { ru: "7:00 – 00:00", en: "7:00 – 00:00" },
    url: "https://2gis.kg/bishkek/firm/70000001039961248"
  },
  {
    name: { ru: "Горького, 172", en: "Gorkogo, 172" },
    meta: { ru: "7:00 – 00:00 · веранда", en: "7:00 – 00:00 · terrace" },
    url: "https://2gis.kg/bishkek/firm/70000001047103551"
  },
  {
    name: { ru: "Суюмбаева, 142/2", en: "Suyumbayeva, 142/2" },
    meta: { ru: "Bishkek City · 7:00 – 23:00", en: "Bishkek City · 7:00 – 23:00" },
    url: "https://2gis.kg/bishkek/firm/70000001033447044"
  }
];

/* ---------------- state ---------------- */
const urlLang = new URLSearchParams(location.search).get("lang");
let lang = (urlLang === "en" || urlLang === "ru") ? urlLang : (localStorage.getItem("giraffe-lang") || "ru");
let activeTab = "coffee";

/* ---------------- renderers ---------------- */
function applyI18n() {
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.body.dataset.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.langBtn === lang);
  });

  buildMarquee(dict.marquee);
  renderMenu();
  renderLocations();
  localStorage.setItem("giraffe-lang", lang);
}

function buildMarquee(text) {
  const track = document.getElementById("marqueeTrack");
  if (!track) return;
  const chunk = `<span>${text.repeat(3)}</span>`;
  track.innerHTML = chunk + chunk; /* duplicated for seamless -50% loop */
}

function renderMenu() {
  const list = document.getElementById("menuList");
  const img = document.getElementById("menuImage");
  const data = MENU[activeTab];
  if (!list || !data) return;

  list.innerHTML = data.items.map((item, i) => `
    <li class="menu__item" style="--i:${i}">
      <span class="menu__item-name">${item[lang]}</span>
      <span class="menu__item-dots"></span>
      <span class="menu__item-price">${item.price} <small>с</small></span>
    </li>
  `).join("");

  if (img && !img.src.endsWith(data.img)) {
    img.classList.add("is-switching");
    const next = new Image();
    next.onload = () => {
      img.src = data.img;
      img.classList.remove("is-switching");
    };
    next.onerror = () => { img.src = data.img; img.classList.remove("is-switching"); };
    next.src = data.img;
  }
}

function renderLocations() {
  const grid = document.getElementById("locationsGrid");
  if (!grid) return;
  grid.innerHTML = LOCATIONS.map(loc => `
    <a class="loc-card reveal is-in" href="${loc.url}" target="_blank" rel="noopener">
      ${loc.badge ? `<span class="loc-card__badge">${loc.badge}</span>` : ""}
      <span class="loc-card__name">${loc.name[lang]}</span>
      <span class="loc-card__meta">${loc.meta[lang]}</span>
      <span class="loc-card__go">${I18N[lang]["loc.route"]}
        <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
    </a>
  `).join("");
}

/* ---------------- interactions ---------------- */
function initLangToggle() {
  document.querySelectorAll("[data-lang-btn]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.langBtn !== lang) {
        lang = btn.dataset.langBtn;
        applyI18n();
      }
    });
  });
}

function initTabs() {
  const tabs = document.getElementById("menuTabs");
  if (!tabs) return;
  tabs.addEventListener("click", e => {
    const btn = e.target.closest(".menu__tab");
    if (!btn) return;
    activeTab = btn.dataset.tab;
    tabs.querySelectorAll(".menu__tab").forEach(t => t.classList.toggle("is-active", t === btn));
    renderMenu();
  });
}

function initHeader() {
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initBurger() {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  if (!burger || !nav) return;
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
  nav.addEventListener("click", e => {
    if (e.target.closest(".nav__link")) {
      nav.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  });
}

function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

function initParallax() {
  const layers = document.querySelectorAll("[data-parallax]");
  if (!layers.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    layers.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.1;
      el.style.transform = `translate3d(0, ${y * speed}px, 0) rotate(${el.dataset.baseRot || 0}deg)`;
    });
    ticking = false;
  };
  /* remember base rotations from CSS classes */
  const rots = { "leaf--1": 28, "leaf--2": -140, "leaf--3": 105 };
  layers.forEach(el => {
    for (const cls in rots) if (el.classList.contains(cls)) el.dataset.baseRot = rots[cls];
  });
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
}

function initTilt() {
  document.querySelectorAll("[data-tilt]").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotate(0deg) perspective(900px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });
}

/* ---------------- boot ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  if (new URLSearchParams(location.search).has("noanim")) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-in"));
    document.documentElement.style.scrollBehavior = "auto";
    document.documentElement.classList.add("noanim");
    if (location.hash) {
      const t = document.querySelector(location.hash);
      if (t) setTimeout(() => t.scrollIntoView(), 50);
    }
  }
  document.getElementById("year").textContent = new Date().getFullYear();
  applyI18n();
  initLangToggle();
  initTabs();
  initHeader();
  initBurger();
  initReveal();
  initParallax();
  initTilt();
});
