const burgerButton = document.getElementById("burgerButton");
const closeButton = document.getElementById("closeButton");
const searchButton = document.getElementById("searchButton");
const site = document.getElementById("siteWrapper");
const bodyTag = document.getElementsByTagName('body')[0];
const mobileNavbar = document.getElementsByClassName('main-navbar')[0];
const userSetting1 = document.getElementById("usersetting1");
const userSetting2 = document.getElementById("usersetting2");

burgerButton.addEventListener('click', function() {
    site.classList.remove('navbar-deactive-site-wrapper')
    site.classList.add('navbar-active-site-wrapper')
    bodyTag.classList.add('active-navbar-body')
    mobileNavbar.classList.remove('hidden')
});

 closeButton.addEventListener('click', function() {
    site.classList.remove('navbar-active-site-wrapper')
    site.classList.add('navbar-deactive-site-wrapper')
    bodyTag.classList.remove('active-navbar-body')
   removeDeactiveClass()
});

function removeDeactiveClass () {
    setTimeout(() => {
        site.classList.remove('navbar-deactive-site-wrapper')
        mobileNavbar.classList.add('hidden')
}, 500);
}  


  //example of inline function on button click
  function usersettingfunction()
  {
      document.getElementById("usersetting2").classList.toggle('hidden');
  }
  function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }
  window.usersettingfunction = usersettingfunction;
  
  window.myFunction = myFunction;





