const mobileMenuContainer = document.querySelector('#mobileMenuContainer__ID');
const menuBtn = document.querySelector('#header__menubutton');
const exitBtn = document.querySelector('#MobileMenuContainer__ExitBtn');
//menuBtn.addEventListener('click', function() {
//mobileMenuContainer.classList.toggle('mobileMenuContainer');
//mobileMenuContainer.classList.remove('mobileMenuContainer__hidden');
//});
//exitBtn.addEventListener('click', function(){
//mobileMenuContainer.classList.toggle('mobileMenuContainer__hidden');
//mobileMenuContainer.classList.remove('mobileMenuContainer');  
//})

// Make function that toogles between to classes.
function toggleMobileMenu () {
    mobileMenuContainer.classList.toggle('mobileMenuContainer');
    mobileMenuContainer.classList.toggle('mobileMenuContainer__hidden');

}

// EventListener on menubutton and menuExitBtn with the toggleMobileMenu function. Makes the menu open or close.

menuBtn.addEventListener('click', toggleMobileMenu);
exitBtn.addEventListener('click', toggleMobileMenu);




