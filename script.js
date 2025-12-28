const WHATSAPP_NUMBER_E164 = "447700900123"; // <-- replace with your dad’s number (digits only)
const WHATSAPP_DEFAULT_MSG = "Hi Kong Exotics! I’d like to check availability and reserve a fish.";

const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(text)}`;

function wireWhatsAppLinks() {
  const links = [
    document.getElementById("waTop"),
    document.getElementById("waHero"),
    document.getElementById("waBottom"),
  ].filter(Boolean);

  links.forEach((a) => (a.href = waLink(WHATSAPP_DEFAULT_MSG)));
}

document.getElementById("year").textContent = new Date().getFullYear();
wireWhatsAppLinks();
