var popup = document.querySelectorAll(".nav__list--show");
var nojs = document.querySelectorAll(".nav__list--show");
var button1 = document.querySelector(".nav__button");
var button2 = document.querySelector(".nav__button--closed");

document.addEventListener("DOMContentLoaded", function () {
  for (var i = 0; i < nojs.length; i++) {
    nojs[i].classList.add("nav__list--hidden");
  }
});

button1.addEventListener("click", function (evt) {
  evt.preventDefault();
  for (var i = 0; i < popup.length; i++) {
    popup[i].classList.toggle("nav__list--hidden");
  }
  button2.classList.toggle("nav__button--opened");
});


var cart = document.querySelectorAll(".cart");
var modal = document.querySelector(".modal");
var add = document.querySelector(".modal__button");
var overlay = document.querySelector(".modal__overlay");

if (modal) {
  for (var i = 0; i < cart.length; i++) {
    cart[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.add("modal-show");
      overlay.classList.add("modal__overlay-show");
    });
  }
  add.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
    overlay.classList.remove("modal__overlay-show");
  });
}


function initMap() {
  var uluru = { lat: 59.9387942, lng: 30.323083300000008 };
  var map = new google.maps.Map(document.querySelector(".contacts__map--img"), {
      zoom: 17,
      center: uluru
  });
  var image = "img/icon-map-pin.svg";
  var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      icon: image
  });
}
