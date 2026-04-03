const products = [
  {
    name: "Netflix",
    logoText: "NETFLIX",
    category: "Streaming Video",
    logoClass: "logo-netflix",
    image: "assets/product-netflix-clean.png",
    plans: [
      { name: "1 Perangkat", price: "Rp 47.500 / bln", duration: "1, 2, 3, 6 bln" },
      { name: "2 Perangkat", price: "Rp 95.000 / bln", duration: "1, 2, 3, 6 bln" },
      { name: "5 Perangkat", price: "Rp 195.000 / bln", duration: "1, 2, 3, 6 bln" },
    ],
  },
  {
    name: "YouTube Premium",
    logoText: "YouTube",
    category: "Streaming Video",
    logoClass: "logo-youtube",
    image: "assets/product-youtube-clean.png",
    plans: [
      { name: "12 Bulan", price: "Rp 38.900 / bln", duration: "12 bln" },
      { name: "3 & 6 Bulan", price: "Rp 38.900 / bln", duration: "3, 6 bln" },
      { name: "Bulanan", price: "Rp 38.900 / bln", duration: "2 bln" },
    ],
  },
  {
    name: "Spotify Premium",
    logoText: "Spotify",
    category: "Musik Premium",
    logoClass: "logo-spotify",
    image: "assets/product-spotify-clean.png",
    badge: "sale",
    plans: [
      { name: "Bulanan", price: "Rp 43.300 / bln", duration: "1, 2, 3, 6, 12 bln" },
      { name: "3 & 6 Bulan", price: "Rp 43.334 / bln", duration: "3, 6 bln" },
      { name: "12 Bulan", price: "Rp 43.417 / bln", duration: "12 bln" },
    ],
  },
  {
    name: "Spotify Platinum",
    logoText: "Spotify",
    category: "Musik Premium",
    logoClass: "logo-spotify",
    image: "assets/product-spotify-clean.png",
    plans: [
      { name: "Bulanan", price: "Rp 73.000 / bln", duration: "1, 2, 3, 6, 12 bln" },
    ],
  },
  {
    name: "CapCut Pro",
    logoText: "CapCut",
    category: "Design & Editing",
    logoClass: "logo-capcut",
    image: "assets/product-capcut-clean.png",
    plans: [
      { name: "Bulanan", price: "Rp 54.500 / bln", duration: "2, 3, 4, 5, 6 bln" },
      { name: "Tahunan", price: "Rp 33.250 / bln", duration: "12 bln" },
    ],
  },
  {
    name: "Disney Plus Hotstar",
    logoText: "Disney hotstar",
    category: "Entertainment",
    logoClass: "logo-disney",
    badge: "sale",
    plans: [
      { name: "1 Perangkat", price: "Rp 36.000 / bln", duration: "1, 2, 3, 6 bln" },
    ],
  },
  {
    name: "ChatGPT Plus",
    logoText: "ChatGPT",
    category: "AI Tools",
    logoClass: "logo-chatgpt",
    image: "assets/product-chatgpt-clean.png",
    plans: [
      { name: "1 Perangkat", price: "Rp 83.000 / bln", duration: "1, 3, 6 bln" },
    ],
  },
  {
    name: "Gemini Advanced",
    logoText: "Gemini",
    category: "AI Tools",
    logoClass: "logo-gemini",
    image: "assets/product-gemini-clean.png",
    badge: "new",
    plans: [
      { name: "Mingguan", price: "Via admin", duration: "1 minggu" },
      { name: "Bulanan", price: "Via admin", duration: "1 bulan" },
    ],
  },
  {
    name: "Grok Premium",
    logoText: "Grok",
    category: "AI Tools",
    logoClass: "logo-grok",
    image: "assets/product-grok-clean.png",
    badge: "new",
    plans: [
      { name: "Mingguan", price: "Via admin", duration: "1 minggu" },
      { name: "Bulanan", price: "Via admin", duration: "1 bulan" },
    ],
  },
  {
    name: "Canva Pro",
    logoText: "Canva",
    category: "Design & Editing",
    logoClass: "logo-canva",
    image: "assets/product-canva-clean.png",
    badge: "new",
    plans: [
      { name: "Mingguan", price: "Via admin", duration: "1 minggu" },
      { name: "Bulanan", price: "Via admin", duration: "1 bulan" },
    ],
  },
  {
    name: "Alight Motion",
    logoText: "Alight Motion",
    category: "Design & Editing",
    logoClass: "logo-alight",
    image: "assets/product-alight-motion-clean.png",
    badge: "new",
    plans: [
      { name: "Mingguan", price: "Via admin", duration: "1 minggu" },
      { name: "Bulanan", price: "Via admin", duration: "1 bulan" },
    ],
  },
  {
    name: "Bundling Hemat 6K",
    logoText: "Spotify Ã— Netflix",
    category: "Entertainment",
    logoClass: "logo-generic",
    badge: "sale",
    plans: [
      { name: "Paket BH6K", price: "Rp 118.500 / bln", duration: "1, 3 bln" },
    ],
  },
  {
    name: "Bundling Hemat 7K",
    logoText: "Disney hotstar Ã— Netflix",
    category: "Entertainment",
    logoClass: "logo-generic",
    badge: "sale",
    plans: [
      { name: "Paket BH7K", price: "Rp 81.500 / bln", duration: "1 bln" },
    ],
  },
  {
    name: "Apple One",
    logoText: "One",
    category: "Entertainment",
    logoClass: "logo-apple",
    plans: [
      { name: "Bulanan", price: "Rp 46.000 / bln", duration: "1, 2, 3, 6 bln" },
    ],
  },
  {
    name: "Apple One Premier",
    logoText: "One",
    category: "Entertainment",
    logoClass: "logo-apple",
    plans: [
      { name: "Bulanan", price: "Rp 69.500 / bln", duration: "1, 3, 6 bln" },
    ],
  },
  {
    name: "Viu Premium",
    logoText: "viu",
    category: "Streaming Video",
    logoClass: "logo-viu",
    image: "assets/product-viu-clean.png",
    plans: [
      { name: "Bulanan", price: "Rp 48.000 / bln", duration: "1, 3, 6 bln" },
    ],
  },
  {
    name: "Vidio Premier",
    logoText: "Vidio",
    category: "Streaming Video",
    logoClass: "logo-vidio",
    image: "assets/product-vidio-rounded.png",
    badge: "new",
    plans: [
      { name: "Mingguan", price: "Via admin", duration: "1 minggu" },
      { name: "Bulanan", price: "Via admin", duration: "1 bulan" },
    ],
  },
  {
    name: "NordVPN",
    logoText: "NordVPN",
    category: "Productivity",
    logoClass: "logo-generic",
    plans: [
      { name: "Bulanan", price: "Rp 34.500 / bln", duration: "1, 3, 6 bln" },
      { name: "Tahunan", price: "Rp 30.000 / bln", duration: "12 bln" },
    ],
  },
  {
    name: "Crunchyroll",
    logoText: "crunchyroll",
    category: "Entertainment",
    logoClass: "logo-generic",
    badge: "sale",
    plans: [
      { name: "Bulanan", price: "Rp 18.500 / bln", duration: "1, 2, 3 bln" },
      { name: "Tahunan", price: "Rp 14.500 / bln", duration: "12 bln" },
    ],
  },
  {
    name: "Microsoft 365",
    logoText: "Microsoft 365",
    category: "Productivity",
    logoClass: "logo-generic",
    plans: [
      { name: "Bulanan", price: "Rp 42.000 / bln", duration: "1, 3, 6 bln" },
    ],
  },
  {
    name: "Google One",
    logoText: "Google One",
    category: "Cloud",
    logoClass: "logo-generic",
    plans: [
      { name: "Cloud Storage", price: "Rp 22.000 / bln", duration: "1, 3, 6, 12 bln" },
    ],
  },
];

const availableProducts = products.filter((product) => Boolean(product.image));
const availableCategories = new Set([
  "Semua",
  ...availableProducts.map((product) => product.category),
]);
const productGrid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const catalogChips = document.querySelectorAll(".catalog-chip");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.getElementById("site-nav");
const currentYear = document.getElementById("currentYear");
const productModal = document.getElementById("productModal");
const productModalVisual = document.getElementById("productModalVisual");
const productModalTitle = document.getElementById("productModalTitle");
const productModalDescription = document.getElementById("productModalDescription");
const productModalCategory = document.getElementById("productModalCategory");
const productModalPrice = document.getElementById("productModalPrice");
const productModalPriceNote = document.getElementById("productModalPriceNote");
const productModalPlans = document.getElementById("productModalPlans");
const productModalOrder = document.getElementById("productModalOrder");
const productModalNote = document.getElementById("productModalNote");
const mobileMotionQuery = window.matchMedia("(max-width: 820px)");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

const businessContact = {
  // Isi dengan nomor WhatsApp bisnis format 628xxxxxxxxxx saat sudah siap dipasang.
  whatsappNumber: "",
};

const productLookup = new Map(availableProducts.map((product) => [product.name, product]));
const categoryDescriptions = {
  "Streaming Video": "cocok untuk menikmati tontonan premium yang lebih nyaman dan praktis",
  "Musik Premium": "membuat pengalaman mendengarkan musik terasa lebih bebas dan nyaman",
  "AI Tools": "membantu pekerjaan, belajar, dan ide kreatif jadi lebih cepat",
  "Design & Editing": "pas untuk kebutuhan desain, edit video, dan produksi konten harian",
  Entertainment: "memberi akses hiburan digital yang lebih seru dan mudah dijangkau",
  Productivity: "mendukung aktivitas kerja dan belajar agar lebih efisien",
  Cloud: "memudahkan penyimpanan file dan backup data secara fleksibel",
};

let activeProduct = null;
let activePlanIndex = 0;
let previousFocusedElement = null;
let mobileRevealObserver = null;

function registerMediaQueryListener(query, handler) {
  if (typeof query.addEventListener === "function") {
    query.addEventListener("change", handler);
    return;
  }

  if (typeof query.addListener === "function") {
    query.addListener(handler);
  }
}

function configureMobileMotionElements() {
  const revealGroups = [
    { selector: ".header-contact-link", baseDelay: 0, step: 60 },
    { selector: ".hero-copy", baseDelay: 0, step: 0 },
    { selector: ".hero-visual", baseDelay: 120, step: 0 },
    { selector: ".stat-card", baseDelay: 0, step: 70 },
    { selector: ".benefit-item", baseDelay: 0, step: 55 },
    { selector: ".catalog-panel", baseDelay: 0, step: 0 },
    { selector: ".product-card", baseDelay: 0, step: 70 },
    { selector: ".step-card", baseDelay: 0, step: 55 },
    { selector: ".testimonial-card", baseDelay: 0, step: 70 },
    { selector: ".footer-intro", baseDelay: 0, step: 0 },
    { selector: ".footer-bottom", baseDelay: 110, step: 0 },
  ];

  revealGroups.forEach(({ selector, baseDelay = 0, step = 0, maxDelay = 360 }) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.setAttribute("data-mobile-reveal", "");
      element.style.setProperty(
        "--mobile-reveal-delay",
        `${Math.min(baseDelay + index * step, maxDelay)}ms`,
      );
    });
  });
}

function observeMobileMotionElements() {
  if (mobileRevealObserver) {
    mobileRevealObserver.disconnect();
  }

  mobileRevealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        mobileRevealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  document.querySelectorAll("[data-mobile-reveal]").forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isAlreadyVisible = rect.top < window.innerHeight * 0.9;

    if (isAlreadyVisible) {
      element.classList.add("is-visible");
      return;
    }

    mobileRevealObserver.observe(element);
  });
}

function syncMobileMotionState() {
  const shouldAnimate = mobileMotionQuery.matches && !reducedMotionQuery.matches;

  configureMobileMotionElements();
  document.body.classList.toggle("mobile-motion", shouldAnimate);

  if (!shouldAnimate) {
    if (mobileRevealObserver) {
      mobileRevealObserver.disconnect();
    }

    document.querySelectorAll("[data-mobile-reveal]").forEach((element) => {
      element.classList.add("is-visible");
    });

    return;
  }

  document.querySelectorAll("[data-mobile-reveal]").forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top >= window.innerHeight * 0.9) {
      element.classList.remove("is-visible");
    }
  });

  observeMobileMotionElements();
}

function createProductDescription(product) {
  const categoryBlurb = categoryDescriptions[product.category] || "mendukung kebutuhan digital harian";
  const totalPlans = product.plans.length;
  const planCopy = totalPlans > 1 ? `${totalPlans} pilihan paket` : "1 pilihan paket";

  return `${product.name} termasuk kategori ${product.category.toLowerCase()} dan ${categoryBlurb}. Produk ini tersedia dengan ${planCopy} yang bisa langsung Anda pilih sebelum order.`;
}

function createProductVisualMarkup(product) {
  if (product.image) {
    return `
      <span class="product-visual-media ${product.logoClass}">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </span>
    `;
  }

  return `<span class="product-thumb-label">${product.logoText}</span>`;
}

function normalizeWhatsAppNumber(value) {
  return String(value || "").replace(/[^\d]/g, "");
}

function buildWhatsAppLink(product, plan) {
  const whatsappNumber = normalizeWhatsAppNumber(businessContact.whatsappNumber);

  if (!whatsappNumber) {
    return "#kontak";
  }

  const message = [
    "Halo JupiStore, saya ingin order APK premium.",
    `Produk: ${product.name}`,
    `Kategori: ${product.category}`,
    `Paket: ${plan.name}`,
    `Durasi: ${plan.duration}`,
    `Harga: ${plan.price}`,
    "",
    "Mohon info langkah lanjut order ya.",
  ].join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function createProductCard(product) {
  const leadPlan = product.plans[0];
  const imageMarkup = `
        <div class="product-thumb${product.image ? "" : " product-thumb-fallback"}">
          ${createProductVisualMarkup(product)}
        </div>
      `;
  const planMarkup = product.plans
    .map(
      (plan) => `
        <li class="product-plan">
          <div class="product-plan-copy">
            <span class="product-plan-name">${plan.name}</span>
            <div class="product-plan-duration-wrap">
              <span class="product-plan-duration-label">Durasi</span>
              <span class="product-plan-duration">${plan.duration}</span>
            </div>
          </div>
          <span class="product-plan-price">${plan.price}</span>
        </li>
      `,
    )
    .join("");
  const priceFocusMarkup = leadPlan
    ? `
        <div class="product-price-focus">
          <span>Paket mulai dari</span>
          <strong>${leadPlan.price}</strong>
          <small>${leadPlan.name}</small>
        </div>
      `
    : "";

  return `
    <article
      class="product-card"
      role="button"
      tabindex="0"
      data-product-name="${product.name}"
      aria-label="Lihat detail ${product.name}"
    >
      ${imageMarkup}
      <div class="product-card-head">
        <div class="product-heading">
          <div class="product-meta-row">
            <span class="product-logo ${product.logoClass}">${product.name}</span>
          </div>
        </div>
        <span class="product-category">${product.category}</span>
      </div>
      ${priceFocusMarkup}
      <ul class="product-plans">${planMarkup}</ul>
      <div class="product-links">
        <button class="product-secondary-link" type="button" data-open-product="${product.name}">Lihat Detail</button>
        <button class="product-order-button" type="button" data-open-product="${product.name}">Pilih Produk</button>
      </div>
    </article>
  `;
}

function renderProducts() {
  const keyword = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;

  const filteredProducts = availableProducts.filter((product) => {
    const searchText = [
      product.name,
      product.logoText,
      product.category,
      ...product.plans.map((plan) => `${plan.name} ${plan.price} ${plan.duration}`),
    ]
      .join(" ")
      .toLowerCase();

    const matchKeyword = searchText.includes(keyword);
    const matchCategory = category === "Semua" || product.category === category;

    return matchKeyword && matchCategory;
  });

  productGrid.innerHTML = filteredProducts.map(createProductCard).join("");
  emptyState.hidden = filteredProducts.length > 0;

  catalogChips.forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.category === category);
  });

  syncMobileMotionState();
}

function updateProductModal() {
  if (!activeProduct || !productModal) {
    return;
  }

  const selectedPlan = activeProduct.plans[activePlanIndex] || activeProduct.plans[0];
  const whatsappNumber = normalizeWhatsAppNumber(businessContact.whatsappNumber);

  productModalVisual.innerHTML = createProductVisualMarkup(activeProduct);
  productModalTitle.textContent = activeProduct.name;
  productModalDescription.textContent = createProductDescription(activeProduct);
  productModalCategory.textContent = activeProduct.category;
  productModalPrice.textContent = selectedPlan.price;
  productModalPriceNote.textContent = `${selectedPlan.name} â€¢ Durasi ${selectedPlan.duration}`;
  productModalPlans.innerHTML = activeProduct.plans
    .map(
      (plan, index) => `
        <button
          class="product-modal-plan${index === activePlanIndex ? " is-active" : ""}"
          type="button"
          data-plan-index="${index}"
        >
          <span class="product-modal-plan-copy">
            <span class="product-modal-plan-name">${plan.name}</span>
            <span class="product-modal-plan-meta">
              <span class="product-modal-plan-duration">${plan.duration}</span>
            </span>
          </span>
          <span class="product-modal-plan-price">${plan.price}</span>
        </button>
      `,
    )
    .join("");

  productModalOrder.href = buildWhatsAppLink(activeProduct, selectedPlan);

  if (whatsappNumber) {
    productModalOrder.classList.remove("is-disabled");
    productModalOrder.setAttribute("target", "_blank");
    productModalOrder.setAttribute("rel", "noopener noreferrer");
    productModalNote.textContent = "Pilih paket yang diinginkan, lalu tekan tombol order untuk langsung chat admin via WhatsApp.";
  } else {
    productModalOrder.classList.add("is-disabled");
    productModalOrder.removeAttribute("target");
    productModalOrder.removeAttribute("rel");
    productModalNote.textContent = "Tombol order ini akan langsung menuju WhatsApp admin setelah nomor bisnis ditambahkan.";
  }
}

function openProductModal(productName) {
  const product = productLookup.get(productName);

  if (!product || !productModal) {
    return;
  }

  previousFocusedElement = document.activeElement;
  activeProduct = product;
  activePlanIndex = 0;
  updateProductModal();
  productModal.hidden = false;
  document.body.classList.add("modal-open");
  productModalOrder.focus();
}

function closeProductModal() {
  if (!productModal || productModal.hidden) {
    return;
  }

  productModal.hidden = true;
  document.body.classList.remove("modal-open");
  activeProduct = null;
  activePlanIndex = 0;

  if (previousFocusedElement instanceof HTMLElement) {
    previousFocusedElement.focus();
  }
}

if (productGrid && searchInput && categorySelect) {
  categorySelect.querySelectorAll("option").forEach((option) => {
    option.hidden = !availableCategories.has(option.value);
  });

  catalogChips.forEach((chip) => {
    chip.hidden = !availableCategories.has(chip.dataset.category || "");
  });

  if (!availableCategories.has(categorySelect.value)) {
    categorySelect.value = "Semua";
  }

  renderProducts();
  searchInput.addEventListener("input", renderProducts);
  categorySelect.addEventListener("change", renderProducts);
  catalogChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      categorySelect.value = chip.dataset.category || "Semua";
      renderProducts();
    });
  });

  productGrid.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open-product], .product-card[data-product-name]");

    if (!trigger) {
      return;
    }

    const card = trigger.closest(".product-card[data-product-name]");
    const productName = trigger.dataset.openProduct || card?.dataset.productName;

    if (productName) {
      openProductModal(productName);
    }
  });

  productGrid.addEventListener("keydown", (event) => {
    const card = event.target.closest(".product-card[data-product-name]");

    if (!card) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProductModal(card.dataset.productName || "");
    }
  });
}

if (productModal && productModalPlans && productModalOrder) {
  productModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-modal]")) {
      closeProductModal();
    }
  });

  productModalPlans.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-plan-index]");

    if (!trigger || !activeProduct) {
      return;
    }

    activePlanIndex = Number(trigger.dataset.planIndex || 0);
    updateProductModal();
  });

  productModalOrder.addEventListener("click", (event) => {
    if (productModalOrder.classList.contains("is-disabled")) {
      event.preventDefault();
    }
  });
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProductModal();
  }
});

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

registerMediaQueryListener(mobileMotionQuery, syncMobileMotionState);
registerMediaQueryListener(reducedMotionQuery, syncMobileMotionState);
syncMobileMotionState();

