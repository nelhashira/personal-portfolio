const selectElement = (s) => document.querySelector(s);
const selectElementAll = (s) => document.querySelectorAll(s);

const toggleOpen = selectElement("#toggle-open");
const toggleCLose = selectElement("#toggle-close");
const navBar = selectElement("#nav-bar-open");

// Toggle open on click
toggleOpen.addEventListener("click", () => {
   navBar.classList.add("toggle");
});

const close = () => {
   navBar.classList.remove("toggle");
};

// Toggle close on click
toggleCLose.addEventListener("click", () => {
   close();
});

// Close sidebar after clicking the links
const links = selectElementAll(".nav-link");

links.forEach((link) => {
   link.addEventListener("click", () => {
      close();
   });
});

const toggleModal = selectElementAll(".open-project-modal");
const myModal = selectElement("#project-modal");

// Open Project Modal
toggleModal.forEach((btn) => {
   btn.addEventListener("click", () => {
      myModal.style.display = "block";
   });
});

// CLose Modal
myModal.addEventListener("click", (e) => {
   // myModal.style.display = "none";
   if (e.target.classList.contains("project-modal-bg")) {
      myModal.style.display = "none";
   }
});

// SLideshow
const slides = selectElementAll(".slide");
const prev = selectElement("#prev");
const next = selectElement("#next");

var slideIndex = 1;

prev.addEventListener("click", () => {
   slideShow(--slideIndex);
});

next.addEventListener("click", () => {
   slideShow(++slideIndex);
});

const slideShow = (index) => {
   if (index > slides.length) {
      slideIndex = 1;
   }

   if (index < 1) {
      slideIndex = slides.length;
   }

   for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   slides[slideIndex - 1].style.display = "block";
};

slideShow(slideIndex);
