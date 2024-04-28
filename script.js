const headerBurger = document.getElementById("menu-btn");
const header = document.getElementById("header");

if (headerBurger && header) {
  headerBurger.addEventListener("click", () => {
    header.classList.toggle("active");
    document.body.classList.toggle("lock");
  });
}

const bannerCloseButton = document.getElementById("banner-btn");
const banner = document.getElementById("banner");

if (bannerCloseButton && banner) {
  bannerCloseButton.addEventListener("click", () => {
    banner.style.display = "none";
  });
}

// Swiper

if (Swiper) {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 16,
    slidesPerView: "auto",
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 36,
      },
    },
  });
}
