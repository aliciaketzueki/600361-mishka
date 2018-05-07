var button1 = document.querySelector(".nav__button");
var popup1 = document.querySelector(".nav__list--nav");
var popup2 = document.querySelector(".nav__list--tools");
var button2 = document.querySelector(".nav__button--closed");

button1.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup1.classList.toggle("nav__list--show");
  popup2.classList.toggle("nav__list--show");
  button2.classList.toggle("nav__button--opened");
});


var cart = document.querySelectorAll(".cart");
var modal = document.querySelector(".modal");
var add = document.querySelector(".modal__button");
var overlay = document.querySelector(".modal__overlay");

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


function initMap() {
  var uluru = { lat: 59.9387942, lng: 30.323083300000008 };
  var map = new google.maps.Map(document.querySelector(".contacts__map--img"), {
      zoom: 16,
      center: uluru
  });
  var image = "../img/icon-map-pin.svg";
  var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      icon: image
  });
}
