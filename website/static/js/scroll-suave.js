(function(){
 /*
  Seleciona os <a> da nav, quando cada um for clicado, de forma suave,
  levar até a section q é passada como parametro na função smoothscroll
  */
 document.getElementById('link-sobre').addEventListener('click',
 function () {
  smoothScroll('.sobre', 1000)
 }, false)
 
 document.getElementById('link-outro').addEventListener('click',
 function () {
  smoothScroll('.contact', 1000)
 }, false)
 
 document.getElementById('link-inicio').addEventListener('click',
 function () {
  smoothScroll('header', 1000)
 }, false)

})()
function smoothScroll(target, duration) {


// ------------------------- NÃO CONSIGO EXPLICAR MAS TEM VIDEO NO YT -------------------------
// https://www.youtube.com/watch?v=oUSvlrDTLi4&t=1007s
 target = document.querySelector(target)
 let targetPosition = target.getBoundingClientRect().top
 let startPosition = window.pageYOffset
 let distance = targetPosition - startPosition
 let startTime = null

 function animation(currentTime) {
   if (startTime === null) startTime = currentTime;

   let timeElapsed = currentTime - startTime
   let run = ease(timeElapsed, startPosition, distance, duration)
   window.scrollTo(0, run)
   if (timeElapsed < duration) requestAnimationFrame(animation);

 }

 function ease(t, b, c, d) {
   t /= d / 2;

   if (t < 1) return c / 2 * t * t + b
   t--;
   return -c / 2 * (t * (t - 2) - 1) + b;
 }

 requestAnimationFrame(animation)
}
// ----------------------------modal login ----------------------

let login = document.getElementById('modal');
let mostrar = document.querySelector('.btnmostar');
let feche = document.querySelector('.btnfechar');

function inicarLogin() {
    login.style.display = 'flex';
    console.log('ok baby');
}
function fecharLogin(){
    login.style.display ='none';
}
 mostrar.onclick = inicarLogin;

feche.onclick= fecharLogin;