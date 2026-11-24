//preferencia visual sin rastreo
const root=document.documentElement;const toggle=document.querySelector('[data-theme-toggle]');
try{root.dataset.theme=localStorage.getItem('felos-theme')||'dark'}catch{root.dataset.theme='dark'}
function sync(){if(toggle){toggle.setAttribute('aria-pressed',String(root.dataset.theme==='light'));toggle.textContent=root.dataset.theme==='light'?'☾':'☀'}}
sync();toggle?.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='light'?'dark':'light';try{localStorage.setItem('felos-theme',root.dataset.theme)}catch{}sync()});
//impresion del curriculum
document.querySelector('[data-print]')?.addEventListener('click',()=>window.print());
