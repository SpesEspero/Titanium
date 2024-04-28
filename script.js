const headerBurger = document.getElementById("menu-btn");
const header = document.querySelector(".header");

if (headerBurger && header) {
  headerBurger.addEventListener("click", () => {
    header.classList.toggle("active");
    document.body.classList.toggle("lock");
  });
}
