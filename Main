// ====== CONFIG ======
const WHATSAPP_NUMBER_E164 = "447700900123"; // <-- REPLACE with your dad's number, digits only (UK example)
const WHATSAPP_DEFAULT_MSG = "Hi Kong Exotics! I'm interested in your fish listings. Can I reserve one?";

// ====== DATA (12 dummy listings) ======
const fishData = [
  {
    id: "discus-red-turquoise",
    name: "Discus — Red Turquoise",
    category: "freshwater",
    priceGBP: 75,
    size: "10–12 cm",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1544551763-cede2d235d03?auto=format&fit=crop&w=1200&q=80",
    short: "Show-stopping colour. Best for stable, mature tanks.",
    description:
      "A classic centrepiece discus with vivid patterning. Discus thrive in stable, warm water and reward good husbandry with calm, confident behaviour and impressive colour.",
    care: {
      "Recommended tank": "250L+ (larger is better; keep in groups)",
      "Temperature": "28–30°C",
      "pH": "6.0–7.2 (stable)",
      "Diet": "Quality pellets, frozen foods, occasional live treats",
      "Difficulty": "Intermediate",
      "Min group": "5–6 recommended",
    },
    compatibility:
      "Best with peaceful, warm-water tankmates. Avoid fin-nippers and aggressive cichlids. Keep water pristine; discus hate drama and bad water equally.",
    tags: ["Featured", "Peaceful", "Warm water"],
  },

  {
    id: "koi-show-grade",
    name: "Koi — Show Grade",
    category: "freshwater",
    priceGBP: 180,
    size: "18–22 cm",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1599819811279-d3b1b6b1f6e4?auto=format&fit=crop&w=1200&q=80",
    short: "Bold patterning for ponds or very large systems.",
    description:
      "High-impact koi with strong pattern definition. Ideal for established ponds with excellent filtration. Koi are long-lived and grow quickly in the right conditions.",
    care: {
      "Recommended tank": "Pond / 1,000L+ system",
      "Temperature": "10–25°C (seasonal tolerant)",
      "pH": "7.0–8.5",
      "Diet": "Koi pellets, occasional vegetables, seasonal feeding",
      "Difficulty": "Intermediate",
      "Min group": "Pairs or groups in ponds",
    },
    compatibility:
      "Generally peaceful but will outgrow most tanks. Keep with other pond fish of suitable size. Protect from predators and maintain high oxygenation.",
    tags: ["Featured", "Pond", "Large"],
  },

  {
    id: "clownfish-designer-pair",
    name: "Designer Clownfish — Pair",
    category: "marine",
    priceGBP: 95,
    size: "5–7 cm",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=1200&q=80",
    short: "Hardy marine favourite with huge personality.",
    description:
      "A striking designer morph clownfish pair. Great for reef setups and beginners (with proper marine basics). Known for their bold character and fascinating behaviour.",
    care: {
      "Recommended tank": "100L+ (stable marine/reef)",
      "Temperature": "24–26°C",
      "Salinity": "1.024–1.026 SG",
      "Diet": "Marine pellets, frozen mysis/brine, varied foods",
      "Difficulty": "Beginner+",
      "Min group": "Pair recommended",
    },
    compatibility:
      "Generally peaceful in pairs. Can be territorial around their chosen 'home'. Avoid mixing with aggressive damsels unless you enjoy soap operas.",
    tags: ["Featured", "Reef-safe", "Hardy"],
  },

  {
    id: "betta-halfmoon",
    name: "Betta — Halfmoon Male",
    category: "freshwater",
    priceGBP: 22,
    size: "6–7 cm",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1520301255226-bf5f144451a3?auto=format&fit=crop&w=1200&q=80",
    short: "Solo stunner. Keep warm and calm.",
    description:
      "Halfmoon bettas are famous for dramatic fins and vibrant colour. They do best in a heated, filtered setup with gentle flow and plenty of resting spots.",
    care: {
      "Recommended tank": "20L+ heated and filtered",
      "Temperature": "25–28°C",
      "pH": "6.5–7.5",
      "Diet": "Betta pellets, frozen bloodworm, daphnia",
      "Difficulty": "Beginner",
      "Min group": "Solo (male)",
    },
    compatibility:
      "Males must be kept alone (or with very careful tankmate selection). Avoid fin-nippers and anything that looks like another betta.",
    tags: ["Beginner", "Solo", "Colour pop"],
  },

  {
    id: "electric-blue-acara",
    name: "Electric Blue Acara",
    category: "freshwater",
    priceGBP: 28,
    size: "8–10 cm",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1518991791750-749fdb00bc63?auto=format&fit=crop&w=1200&q=80",
    short: "A calmer cichlid with serious shimmer.",
    description:
      "Electric Blue Acaras bring stunning colour without the full ‘cichlid chaos’ reputation. Great in a community of robust, compatible fish in the right tank size.",
    care: {
      "Recommended tank": "200L+",
      "Temperature": "24–28°C",
      "pH": "6.5–7.5",
      "Diet": "Pellets, frozen foods, occasional veggies",
      "Difficulty": "Beginner+",
      "Min group": "Pair or single",
    },
    compatibility:
      "Semi-aggressive, especially during breeding. Avoid tiny fish. Works well with larger tetras, catfish, and other mild-mannered cichlids.",
    tags: ["Shimmer", "Cichlid", "Community+"],
  },

  {
    id: "african-cichlid-peacock",
    name: "Peacock Cichlid (Aulonocara)",
    category: "freshwater",
    priceGBP: 26,
    size: "9–11 cm",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1200&q=80",
    short: "Colourful, active — needs a Malawi-style setup.",
    description:
      "Peacock cichlids are bright, active fish best kept in appropriately stocked African cichlid aquariums with rockwork and strong filtration.",
    care: {
      "Recommended tank": "250L+",
      "Temperature": "24–27°C",
      "pH": "7.8–8.6",
      "Diet": "High quality cichlid pellets; avoid fatty foods",
      "Difficulty": "Intermediate",
      "Min group": "Harem-style stocking",
    },
    compatibility:
      "Keep with other Malawi species of similar temperament. Avoid mixing with peaceful community fish. If you want calm vibes, pick a tetra. 🙂",
    tags: ["Active", "Malawi", "Hard water"],
  },

  {
    id: "german-blue-ram",
    name: "German Blue Ram",
    category: "freshwater",
    priceGBP: 18,
    size: "4–6 cm",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80",
    short: "Small, gorgeous, but likes stable warm water.",
    description:
      "A popular dwarf cichlid known for iridescent blues and gentle behaviour. Sensitive to water quality; best in mature tanks.",
    care: {
      "Recommended tank": "80L+",
      "Temperature": "26–30°C",
      "pH": "5.5–7.0",
      "Diet": "Small pellets, frozen foods, live treats",
      "Difficulty": "Intermediate",
      "Min group": "Pair recommended",
    },
    compatibility:
      "Peaceful with calm community fish. Avoid aggressive tankmates. Keep nitrates low and you’ll be rewarded with fantastic colour.",
    tags: ["Dwarf cichlid", "Peaceful", "Warm water"],
  },

  {
    id: "cardinal-tetra-school",
    name: "Cardinal Tetra (School of 10)",
    category: "freshwater",
    priceGBP: 35,
    size: "3–4 cm",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80",
    short: "Classic neon-red-blue schooling fish.",
    description:
      "Cardinals look best in a proper group and bring instant movement to planted tanks. Prefer softer, warmer water and subdued lighting.",
    care: {
      "Recommended tank": "60L+ planted",
      "Temperature": "24–28°C",
      "pH": "5.5–7.2",
      "Diet": "Micro pellets, frozen foods",
      "Difficulty": "Beginner+",
      "Min group": "10+ ideal",
    },
    compatibility:
      "Great with peaceful tankmates. Avoid large predatory fish (they’ll see these as snacks, not friends).",
    tags: ["Schooling", "Planted", "Peaceful"],
  },

  {
    id: "pleco-bristlenose",
    name: "Bristlenose Pleco",
    category: "freshwater",
    priceGBP: 16,
    size: "6–9 cm",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=1200&q=80",
    short: "Hard-working algae grazer (still needs feeding!).",
    description:
      "A popular, manageable pleco species. Great at grazing but should still receive dedicated foods and driftwood for digestion.",
    care: {
      "Recommended tank": "80L+",
      "Temperature": "23–27°C",
      "pH": "6.5–7.8",
      "Diet": "Algae wafers, veg, driftwood, pellets",
      "Difficulty": "Beginner",
      "Min group": "Single or pair (space-dependent)",
    },
    compatibility:
      "Generally peaceful. Provide hiding spaces. Don’t expect it to clean the tank for you — it’s a fish, not a staff member.",
    tags: ["Hardy", "Bottom-dweller", "Useful"],
  },

  {
    id: "mangrove-snapper-brackish",
    name: "Mangrove Jack (Brackish Juvenile)",
    category: "brackish",
    priceGBP: 55,
    size: "10–12 cm",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1504472478235-9bc48ba4d60f?auto=format&fit=crop&w=1200&q=80",
    short: "Predatory brackish species — grows large.",
    description:
      "A powerful brackish fish best suited to experienced keepers with large systems. Juveniles can start brackish and often require more marine conditions as they mature.",
    care: {
      "Recommended tank": "400L+ (adult much larger)",
      "Temperature": "24–28°C",
      "pH": "7.5–8.5",
      "Salinity": "Brackish (species/age dependent)",
      "Diet": "Meaty foods, quality predator pellets",
      "Difficulty": "Advanced",
    },
    compatibility:
      "Not community-safe. Will eat smaller fish. Best in species or predator setups with appropriate tankmates.",
    tags: ["Brackish", "Predator", "Advanced"],
  },

  {
    id: "mandarin-dragonet",
    name: "Mandarin Dragonet",
    category: "marine",
   
