document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById("showButton");
  const imageModal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeButton = document.getElementById("closeButton");

  showButton.addEventListener("click", function () {
    imageModal.style.display = "block";
    modalImage.src =
      "https://github-production-user-asset-6210df.s3.amazonaws.com/96565316/273779712-804b9f71-b5cb-4e56-8f0d-f0f6cf74acbe.png";
    document.body.style.overflow = "hidden";
  });

  closeButton.addEventListener("click", function () {
    imageModal.style.display = "none";
    document.body.style.overflow = "auto";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const goToTopButton = document.getElementById("goToTopButton");

  // Function to handle scroll event
  function handleScroll() {
    if (window.scrollY > 100) {
      goToTopButton.style.display = "block";
    } else {
      goToTopButton.style.display = "none";
    }
  }

  window.addEventListener("scroll", handleScroll);

  // Scroll to top when the button is clicked
  goToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

const projectContainers = document.querySelectorAll(".project-container");
let currentIndex = 0;

function showProject(index) {
  projectContainers.forEach((container, i) => {
    if (i === index) {
      container.classList.add("visible");
    } else {
      container.classList.remove("visible");
    }
  });
}
