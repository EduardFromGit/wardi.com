let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}

function myDropdown() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.prog')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  // responsive sec.

  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.box');
    const menu = document.querySelector('.navbar-menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
