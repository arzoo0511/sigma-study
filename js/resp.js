burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
leftnav=document.querySelector('.leftnav')
rightnav=document.querySelector('.rightnav')


burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');
    leftnav.classList.toggle('v-class-resp');

})
