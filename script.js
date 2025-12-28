// ====== CONFIG ======
const WHATSAPP_NUMBER_E164 = "447700900123"; // <-- REPLACE with your dad’s number (digits only, no +)
const WHATSAPP_DEFAULT_MSG = "Hi Kong Exotics! I’d like to check availability and reserve a fish.";

// ====== DATA (9 dummy listings) ======
const fishData = [
  {
    id: "discus-red-turquoise",
    name: "Discus — Red Turquoise",
    category: "freshwater",
    priceGBP: 75,
    size: "10–12 cm",
    featured: true,
    image: "https://images.unsplash.com/photo-1544551763-cede2d235d03?auto=format&fit=crop&w=1200&q=80",
    description: "A classic centrepiece discus with vivid patterning. Best in stable, mature tanks with excellent filtration.",
    care: {
      "Recommended tank": "250L+",
      "Temperature": "28–30°C",
      "pH": "6.0–7.2",
      "Diet": "Quality pellets + frozen",
      "Difficulty": "Intermediate"
    },
    compatibility: "Peaceful warm-water tankmates. Avoid fin-nippers."
  },
  {
    id: "clownfish-designer-pair",
    name: "Designer Clownfish — Pair",
    category: "marine",
    priceGBP: 95,
    size: "5–7 cm",
    featured: true,
    image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=1200&q=80",
    description: "A striking designer morph clownfish pair. Hardy with stable marine parameters.",
    care: {
      "Recommended tank": "100L+",
      "Temperature": "24–26°C",
      "Salinity": "1.024–1.026 SG",
      "Diet": "Marine pellets + frozen",
      "Difficulty": "Beginner+"
    },
    compatibility: "Generally peaceful in pairs; can be territorial around their chosen spot."
  },
  {
    id: "yellow-tang",
    name: "Yellow Tang",
    category: "marine",
    priceGBP: 120,
    size: "10–12 cm",
    featured: false,
    image: "https://images.unsplash.com/photo-1559757175-5700dde67536?auto=format&fit=crop&w=1200&q=80",
    description: "Iconic reef grazer. Needs swimming space, stable salinity, and frequent greens (nori).",
    care: {
      "Recommended tank": "300L+",
      "Temperature": "24–26°C",
      "Salinity": "1.024–1.026 SG",
      "Diet": "Nori + herbivore pellets",
      "Difficulty": "Intermediate"
    },
    compatibility: "Can be territorial with other tangs; best introduced carefully."
  },
  {
    id: "betta-halfmoon",
    name: "Betta — Halfmoon Male",
    category: "freshwater",
    priceGBP: 22,
    size: "6–7 cm",
    featured: false,
    image: "https://images.unsplash.com/photo-1520301255226-bf5f144451a3?auto=format&fit=crop&w=1200&q=80",
    description: "Solo stunner with dramatic fins. Prefers warm water, gentle flow, and plenty of resting spots.",
    care: {
      "Recommended tank": "20L+",
      "Temperature": "25–28°C",
      "pH": "6.5–7.5",
      "Diet": "Betta pellets + frozen",
      "Difficulty": "Beginner"
    },
    compatibility: "Male should be kept alone (generally). Avoid fin-nippers."
  },
  {
    id: "electric-blue-acara",
    name: "Electric Blue Acara",
    category: "freshwater",
    priceGBP: 28,
    size: "8–10 cm",
    featured: false,
    image: "https://images.unsplash.com/photo-1518991791750-749fdb00bc63?auto=format&fit=crop&w=1200&q=80",
    description: "Shimmering blue cichlid that’s calmer than many cichlids — with the right tank size and mates.",
    care: {
      "Recommended tank": "200L+",
      "Temperature": "24–28°C",
      "pH": "6.5–7.5",
      "Diet": "Pellets + frozen foods",
      "Difficulty": "Beginner+"
    },
    compatibility: "Semi-aggressive during breeding. Avoid tiny fish."
  },
  {
    id: "german-blue-ram",
    name: "German Blue Ram",
    category: "freshwater",
    priceGBP: 18,
    size: "4–6 cm",
    featured: false,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80",
    description: "A colourful dwarf cichlid that thrives in warm, clean, stable water. Sensitive to poor water quality.",
    care: {
      "Recommended tank": "80L+",
      "Temperature": "26–30°C",
      "pH": "5.5–7.0",
      "Diet": "Small pellets + frozen",
      "Difficulty": "Intermediate"
    },
    compatibility: "Peaceful community fish only. Keep nitrates low."
  },
  {
    id: "cardinal-tetra-school",
    name: "Cardinal Tetra (School of 10)",
    category: "freshwater",
    priceGBP: 35,
    size: "3–4 cm",
    featured: false,
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80",
    description: "A classic planted-tank schooling fish. Looks best in a proper group with softer, warmer water.",
    care: {
      "Recommended tank": "60L+",
      "Temperature": "24–28°C",
      "pH": "5.5–7.2",
      "Diet": "Micro pellets + frozen",
      "Difficulty": "Beginner+"
    },
    compatibility: "Great with peaceful fish. Avoid predators."
  },
  {
    id: "bristlenose-pleco",
    name: "Bristlenose Pleco",
    category: "freshwater",
    priceGBP: 16,
    size: "6–9 cm",
    featured: false,
    image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=1200&q=80",
    description: "Hard-working algae grazer (still needs proper food). Provide driftwood and hiding spaces.",
    care: {
      "Recommended tank": "80L+",
      "Temperature": "23–27°C",
      "pH": "6.5–7.8",
      "Diet": "Algae wafers + veg",
      "Difficulty": "Beginner"
    },
    compatibility: "Generally peaceful. Provide caves/hides."
  },
  {
    id: "koi-show-grade",
    name: "Koi — Show Grade",
    category: "freshwater",
    priceGBP: 180,
    size: "18–22 cm",
    featured: true,
    image: "https://images.unsplash.com/photo-1599819811279-d3b1b6b1f6e4?auto=format&fit=crop&w=1200&q=80",
    description: "Bold patterning for ponds or very large systems. Koi grow quickly and need serious filtration and oxygenation.",
    care: {
      "Recommended tank": "Pond / 1,000L+ system",
      "Temperature": "10–25°C",
      "pH": "7.0–8.5",
      "Diet": "Koi pellets + seasonal feeding",
      "Difficulty": "Intermediate"
    },
    compatibility: "Peaceful but large. Keep with suitable pond fish only."
  }
];

// ====== HELPERS ======
const £ = (n) => `£${Number(n).toFixed(0)}`;
const waLink = (text) => `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(text)}`;

// ====== RENDER CARDS ======
const cardsEl = document.getElementById("cards");

function renderCards() {
  cardsEl.innerHTML = "";

  fishData.forEach((f) => {
    const card = document.createElement("article");
    card.className = "card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open details for ${f.name}`);

    card.innerHTML = `
      <div class="card__img" style="background-image:url('${f.image}')"></div>
      <div class="card__body">
        <div class="card__title">${f.name}</div>
        <div class="card__meta">
          <div class="price">${£(f.priceGBP)}</div>
          <div class="size">${f.size}</div>
        </div>
      </div>
    `;

    const open = () => openModal(f.id);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });

    cardsEl.appendChild(card);
  });
}

// ====== MODAL ======
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const modalCare = document.getElementById("modalCare");
const modalCompat = document.getElementById("modalCompat");
const modalChips = document.getElementById("modalChips");
const modalWhatsApp = document.getElementById("modalWhatsApp");

let lastFocusedEl = null;

function openModal(id) {
  const f = fishData.find((x) => x.id === id);
  if (!f) return;

  lastFocusedEl = document.activeElement;

  modalImg.src = f.image;
  modalImg.alt = f.name;
  modalTitle.textContent = f.name;
  modalPrice.textContent = `${£(f.priceGBP)} • Size: ${f.size}`;
  modalDesc.textContent = f.description;

  modalChips.innerHTML = `
    <span class="badge">${String(f.category).toUpperCase()}</span>
    ${f.featured ? `<span class="badge">FEATURED</span>` : ""}
  `;

  modalCare.innerHTML = "";
  Object.entries(f.care || {}).forEach(([k, v]) => {
    const item = document.createElement("div");
    item.className = "careItem";
    item.innerHTML = `<div class="careItem__k">${k}</div><div class="careItem__v">${v}</div>`;
    modalCare.appendChild(item);
  });

  modalCompat.textContent = f.compatibility || "";

  const msg =
    `Hi Kong Exotics! I'd like to reserve: ${f.name} (${£(f.priceGBP)}, ${f.size}). Is it available?\n\n` +
    `My tank details:\n- Tank size:\n- Temperature:\n- pH:\n- Current fish:\n`;

  modalWhatsApp.href = waLink(msg);

  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const closeBtn = modal.querySelector("[data-close]");
  closeBtn && closeBtn.focus();
}

function closeModal() {
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocusedEl && lastFocusedEl.focus) lastFocusedEl.focus();
}

modal.addEventListener("click", (e) => {
  if (e.target.matches("[data-close]")) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (modal.getAttribute("aria-hidden") === "false" && e.key === "Escape") closeModal();
});

// ====== WHATSAPP CTAs ======
function wireWhatsAppLinks() {
  const links = [
    document.getElementById("waTop"),
    document.getElementById("waHero"),
    document.getElementById("waBottom"),
  ].filter(Boolean);

  links.forEach((a) => (a.href = waLink(WHATSAPP_DEFAULT_MSG)));
}

// ====== INIT ======
document.getElementById("year").textContent = new Date().getFullYear();
wireWhatsAppLinks();
renderCards();
