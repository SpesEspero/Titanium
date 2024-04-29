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

// Header scroll

const headerLinks = document.querySelectorAll(".header__menu__link");

if (headerLinks) {
  headerLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const id = this.getAttribute("href");

      const elementToScroll = document.querySelector(id);

      if (elementToScroll) {
        header.classList.remove("active");
        document.body.classList.remove("lock");

        document.querySelector(id).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
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

// FAQ

const faqButtons = document.querySelectorAll(".faq__button");

if (faqButtons) {
  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");

      const content = button.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}

// Modal

const modalBtns = document.querySelectorAll(".footer__button");

if (modalBtns) {
  modalBtns.forEach(function (btn, idx) {
    btn.addEventListener("click", function () {
      const modalId = `footer-modal-${idx + 1}`;

      const modal = document.getElementById(modalId);

      if (modal) {
        modal.classList.add("active");
      }
    });
  });
}

const closeBtns = document.querySelectorAll(".footer__modal__cross");

if (closeBtns) {
  closeBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      this.closest(".footer__modal").style.display = "none";
    });
  });
}

window.onclick = function (event) {
  if (event.target.classList.contains("footer__modal")) {
    event.target.classList.remove("active");
  }
};
