(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),r=()=>{let e=(()=>{let e=(new Date("31 june 2022").getTime()-(new Date).getTime())/1e3;return Math.floor(e/60/60/24),{timeRemaining:e,hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.timeRemaining>0&&(e.hours<=9?t.textContent="0"+e.hours:t.textContent=e.hours,e.minutes<=9?n.textContent="0"+e.minutes:n.textContent=e.minutes,e.seconds<=9?o.textContent="0"+e.seconds:o.textContent=e.seconds,e.timeRemaining<=0&&clearInterval(i))},i=setInterval(r,1e3);r()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a");console.log(o);const r=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",r),n.addEventListener("click",r),o.forEach((e=>e.addEventListener("click",r)))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-close");e.forEach((e=>{e.addEventListener("click",(()=>{screen.width>768?(({timing:e,draw:t,duration:n})=>{let o=performance.now();requestAnimationFrame((function r(i){let c=(i-o)/n;c>1&&(c=1);let l=e(c);t(l),c<1&&requestAnimationFrame(r)}))})({duration:800,timing:e=>e,draw(e){t.style.opacity=e,t.style.display="block"}}):t.style.display="block"}))})),n.addEventListener("click",(()=>{t.style.display="none"}))})()})();