const menuButton=document.getElementById('menuBtn');
const navLinks=document.getElementById("navLinks");

menuButton.addEventListener('click', function(){
    navLinks.classList.toggle('show');
});