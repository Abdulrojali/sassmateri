let toggle=document.querySelector('div .headertoggle i');
let links=document.querySelector('.headerlinks');
toggle.addEventListener('click',function(){
    links.classList.toggle('add')
})