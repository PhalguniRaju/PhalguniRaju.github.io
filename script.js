// script.js
document.addEventListener('DOMContentLoaded', function(){
const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.site-nav');
toggle?.addEventListener('click',()=>{
nav.classList.toggle('open');
if(nav.classList.contains('open')){
nav.style.display='flex';nav.style.flexDirection='column';nav.style.position='absolute';
nav.style.right='1rem';nav.style.top='56px';nav.style.background='rgba(10,14,18,0.95)';
nav.style.padding='0.75rem';nav.style.borderRadius='8px';nav.style.gap='0.5rem';
}else{nav.style.display='';nav.style.position='';}
});
});
