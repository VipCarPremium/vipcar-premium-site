const button=document.getElementById('install');
const guide=document.getElementById('install-guide');
button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));guide.hidden=open;button.textContent=open?'Como Instalar':'Fechar instruções';});
document.getElementById('year').textContent=new Date().getFullYear();
