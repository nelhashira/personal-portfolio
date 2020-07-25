const selectElement = (s) => document.querySelector(s);

// Toggle open on click
selectElement("#toggle-open").addEventListener("click", () => {
   selectElement("#nav-bar-open").classList.add("toggle");
});

// Toggle close on click
selectElement("#toggle-close").addEventListener("click", () => {
   selectElement("#nav-bar-open").classList.remove("toggle");
});
