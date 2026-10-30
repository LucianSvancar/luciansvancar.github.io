(function(){
var b=document.querySelector('.burger'),m=document.getElementById('mnav');
if(b&&m){b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded','false')}})}
var cm=document.querySelector('.cmp');
if(cm){var r=cm.querySelector('.cmp-r');var up=function(){cm.style.setProperty('--p',r.value+'%')};r.addEventListener('input',up);up()}
var st=document.querySelector('.sticky'),ct=document.getElementById('contact');
if(st&&ct&&'IntersectionObserver' in window){new IntersectionObserver(function(e){st.classList.toggle('off',e[0].isIntersecting)}).observe(ct)}
var els=document.querySelectorAll('.rv');
if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:.08});
els.forEach(function(e){io.observe(e)});
})();
