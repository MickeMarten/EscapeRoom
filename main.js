const mobileMenuContainer = document.querySelector('#mobileMenuContainer__ID');
const menuBtn = document.querySelector('#header__menubutton');
const exitBtn = document.querySelector('#MobileMenuContainer__ExitBtn');
menuBtn.addEventListener('click', function() {
mobileMenuContainer.classList.toggle('mobileMenuContainer');
mobileMenuContainer.classList.remove('mobileMenuContainer__hidden');
});
exitBtn.addEventListener('click', function(){
mobileMenuContainer.classList.toggle('mobileMenuContainer__hidden');
mobileMenuContainer.classList.remove('mobileMenuContainer');  
})



