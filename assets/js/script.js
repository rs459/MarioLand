document.addEventListener("DOMContentLoaded", () => {
  // Animation des Mario sortant des différents tuyaux
  const marioPeace = document.querySelector(".marioPeace");
  const marioMini = document.querySelector(".marioMini");
  const marioDead = document.querySelector(".marioDead");

  document.querySelector(".grandTuyau").addEventListener("mouseover", () => {
    marioPeace.style.bottom = "30%";
  });
  document.querySelector(".grandTuyau").addEventListener("mouseleave", () => {
    marioPeace.style.bottom = "14%";
  });

  document.querySelector(".petitTuyau").addEventListener("mouseover", () => {
    marioMini.style.bottom = "15%";
  });
  document.querySelector(".petitTuyau").addEventListener("mouseleave", () => {
    marioMini.style.bottom = "0%";
  });

  document.querySelector(".moyenTuyau").addEventListener("mouseover", () => {
    marioDead.style.bottom = "25%";
  });
  document.querySelector(".moyenTuyau").addEventListener("mouseleave", () => {
    marioDead.style.bottom = "10%";
  });

  // animation de la bar de nav pour le menu burger

  const toggleBtn = document.getElementById("menu-toggle");
  const nav = document.querySelector(".main-nav-mobile");

  toggleBtn.addEventListener("click", () => {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";

    toggleBtn.setAttribute("aria-expanded", String(!isExpanded));
    nav.hidden = isExpanded;
  });

  document.querySelector(".moyenTuyau").addEventListener("mouseleave", () => {
    marioDead.style.bottom = "10%";
  });
});
document.querySelector(".moyenTuyau").addEventListener("mouseleave", () => {
  marioDead.style.bottom = "10%";
});

// animation de la bar de nav pour le menu burger

const toggleBtn = document.getElementById("menu-toggle");
const nav = document.querySelector(".main-nav-mobile");

toggleBtn.addEventListener("click", () => {
  const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";

  toggleBtn.setAttribute("aria-expanded", String(!isExpanded));
  nav.hidden = isExpanded;
});
