const headerBurger = document.getElementById("menu-btn");
const header = document.getElementById("header");

const lockBody = () => document.body.classList.add("lock");
const unlockBody = () => document.body.classList.remove("lock");

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

// Anchor links scroll

const anchorLinks = document.querySelectorAll(".anchor_link");

if (anchorLinks) {
  anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const id = this.getAttribute("href");

      const elementToScroll = document.querySelector(id);

      if (elementToScroll) {
        header.classList.remove("active");
        unlockBody();

        document.querySelector(id).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
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

// Footer Modal

const modalBtns = document.querySelectorAll(".footer__button");

if (modalBtns) {
  modalBtns.forEach(function (btn, idx) {
    btn.addEventListener("click", function () {
      const modalId = `footer-modal-${idx + 1}`;

      const modal = document.getElementById(modalId);

      if (modal) {
        modal.classList.add("active");
        lockBody();
      }
    });
  });
}

const closeBtns = document.querySelectorAll(".footer__modal__cross");

if (closeBtns) {
  closeBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      this.closest(".footer__modal").classList.remove("active");
      unlockBody();
      window.history.pushState("", document.title, window.location.pathname);
    });
  });
}

window.onclick = function (event) {
  if (event.target.classList.contains("footer__modal")) {
    event.target.classList.remove("active");
    unlockBody();
    window.history.pushState("", document.title, window.location.pathname);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(
    `.footer__button[href='${window.location.hash}']`
  );

  if (modal) {
    modal.click();
  }
});
