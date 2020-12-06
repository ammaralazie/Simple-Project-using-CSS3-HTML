var menu=document.getElementById('mobile_menu')
var menuLink=document.querySelector('.navbar__menu')

menu.addEventListener('click',function(){
    menu.classList.toggle('is_active')  
    menuLink.classList.toggle('active')
    
})