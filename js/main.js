const selectElement = (s) => document.querySelector(s);

// Toggle open on click
selectElement("#toggle-open").addEventListener("click", () => {
   selectElement("#nav-bar-open").classList.add("toggle");
});

// Toggle close on click
selectElement("#toggle-close").addEventListener("click", () => {
   selectElement("#nav-bar-open").classList.remove("toggle");
});

// Mouse over
selectElement("#project-item-container").addEventListener("mouseover", () => {
   selectElement("#project-hover-modal").classList.add("active-hover");
});

// Mouse out
selectElement("#project-item-container").addEventListener("mouseout", () => {
   selectElement("#project-hover-modal").classList.remove("active-hover");
});
