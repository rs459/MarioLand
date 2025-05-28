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

// Animation de la carapace qui se déplace de gauche à droite dans le footer

const carapace = document.querySelector(".carapace");
const footer = document.querySelector(".main-footer");
if (carapace && footer) {
  carapace.style.left = "0px";
  carapace.style.transition = "left 0.5s linear";

  let isLooping = false;
  let goingRight = true;
  const speed = 700; // px/sec

  function animateCarapace() {
    const footerRect = footer.getBoundingClientRect();
    const carapaceRect = carapace.getBoundingClientRect();
    const distance = footerRect.width - carapaceRect.width;

    const currentLeft = parseInt(getComputedStyle(carapace).left, 10) || 0;
    let target, duration;

    if (goingRight) {
      target = distance;
      duration = Math.abs((distance - currentLeft) / speed);
    } else {
      target = 0;
      duration = Math.abs(currentLeft / speed);
    }

    carapace.style.transition = `left ${duration}s linear`;
    carapace.style.left = target + "px";

    carapace.addEventListener("transitionend", onTransitionEnd);
  }

  function onTransitionEnd() {
    carapace.removeEventListener("transitionend", onTransitionEnd);
    if (isLooping) {
      goingRight = !goingRight;
      animateCarapace();
    }
  }

  footer.addEventListener("mouseenter", () => {
    if (!isLooping) {
      isLooping = true;
      const footerRect = footer.getBoundingClientRect();
      const carapaceRect = carapace.getBoundingClientRect();
      const distance = footerRect.width - carapaceRect.width;
      const currentLeft = parseInt(getComputedStyle(carapace).left, 10) || 0;

      if (Math.abs(currentLeft - distance) < 2) {
        goingRight = false;
      } else if (currentLeft <= 0) {
        goingRight = true;
      }
      animateCarapace();
    }
  });

  footer.addEventListener("mouseleave", () => {
    isLooping = false;
    carapace.style.transition = "";
  });

  carapace.addEventListener("mouseover", () => {
    if (isLooping) {
      goingRight = !goingRight;
      carapace.style.transition = "";
      const currentLeft = parseInt(getComputedStyle(carapace).left, 10) || 0;
      carapace.style.left = currentLeft + "px";
      setTimeout(animateCarapace, 10);
    }
  });
}
