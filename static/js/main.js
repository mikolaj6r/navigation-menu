let hamburger = document.querySelector(".hamburger"),
    menuContainer = document.querySelector('.header__links-container');

hamburger.addEventListener("click", function(){
  this.classList.toggle("is-active");
  menuContainer.classList.toggle('is-active');
});