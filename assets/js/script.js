document.addEventListener("DOMContentLoaded", () => {
  /* Commencez à coder du javascript entre ces balises */
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
});
