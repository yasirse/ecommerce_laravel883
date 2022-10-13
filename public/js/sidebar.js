/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./resources/js/sidebar.js ***!
  \*********************************/
var burgerButton = document.getElementById("burgerButton");
var closeButton = document.getElementById("closeButton");
var searchButton = document.getElementById("searchButton");
var site = document.getElementById("siteWrapper");
var bodyTag = document.getElementsByTagName('body')[0];
var mobileNavbar = document.getElementsByClassName('main-navbar')[0];
var userSetting1 = document.getElementById("usersetting1");
var userSetting2 = document.getElementById("usersetting2");
burgerButton.addEventListener('click', function () {
  site.classList.remove('navbar-deactive-site-wrapper');
  site.classList.add('navbar-active-site-wrapper');
  bodyTag.classList.add('active-navbar-body');
  mobileNavbar.classList.remove('hidden');
});
closeButton.addEventListener('click', function () {
  site.classList.remove('navbar-active-site-wrapper');
  site.classList.add('navbar-deactive-site-wrapper');
  bodyTag.classList.remove('active-navbar-body');
  removeDeactiveClass();
});

function removeDeactiveClass() {
  setTimeout(function () {
    site.classList.remove('navbar-deactive-site-wrapper');
    mobileNavbar.classList.add('hidden');
  }, 500);
} //example of inline function on button click


function usersettingfunction() {
  document.getElementById("usersetting2").classList.toggle('hidden');
}

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}

window.usersettingfunction = usersettingfunction;
window.myFunction = myFunction;
/******/ })()
;