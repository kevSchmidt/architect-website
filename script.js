// ========== Display class ===
window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

// =========== Change class ===
document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

// ========== Scroll behavior ===
document.querySelector(".scroll-btn").addEventListener("click", () => {
  // set smooth scroll on click
  document.querySelector("html").style.scrollBehavior = "smooth";
  // set back normal scroll after 1s
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});
