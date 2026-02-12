document.addEventListener("DOMContentLoaded", function () {


  const buttons = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      const target = button.getAttribute("data-tab");

      buttons.forEach(btn => btn.classList.remove("active"));
      contents.forEach(content => content.classList.remove("active"));

      button.classList.add("active");

      document
        .querySelector(`[data-content="${target}"]`)
        .classList.add("active");

    });
  });


const modal = document.getElementById("videoModal");
const cards = document.querySelectorAll(".trailers__card")

cards.forEach(card => {
  card.addEventListener("click", () => {
    const videoUrl = card.getAttribute("data-video");

    modal.innerHTML =`
    <div class="video-modal__content">
    <span class="video-modal__close">&times;</span>
    <iframe
    src="${videoUrl}"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen>
    </iframe>
    </div>
    `;

   modal.classList.add("active");

    modal.querySelector(".video-modal__close").addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal){
        modal.classList.remove("active");
        }
      })
  })
})

const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("faq__item--active");
  });
});

const header = document.querySelector(".header");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const heroHeight = hero.offsetHeight;

  if (window.scrollY > heroHeight - 100) {
    header.classList.add("header--hidden");
  } else {
    header.classList.remove("header--hidden");
  }
});

/* ===== CONTROLE DO MENU MOBILE ===== */

const toggleButton = document.querySelector('.header__toggle');
const mobileNav = document.querySelector('.header__nav');

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    mobileNav.classList.toggle('is-open');
  });
}





});