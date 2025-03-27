document.addEventListener("DOMContentLoaded", function () {
  var backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
      // Show the button only after scrolling past the first section
      if (window.scrollY > window.innerHeight) {
          backToTop.style.display = "block";  // Show button
      } else {
          backToTop.style.display = "none";   // Hide button
      }
  });

  // Smooth Scroll to Top
  backToTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

