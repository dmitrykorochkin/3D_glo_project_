(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");console.log(e);const l=setInterval((()=>{(()=>{let s=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return Math.floor(t/60/60/24),{timeRemaining:t,hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();s.timeRemaining>0&&(s.hours<=9?t.textContent="0"+s.hours:t.textContent=s.hours,s.minutes<=9?n.textContent="0"+s.minutes:n.textContent=s.minutes,s.seconds<=9?o.textContent="0"+s.seconds:o.textContent=s.seconds,s.timeRemaining<=0&&clearInterval(l))})()}),1e3);console.log(setInterval)})("31 june 2022"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a");console.log(o);const l=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",l),n.addEventListener("click",l),o.forEach((e=>e.addEventListener("click",l)))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-close");e.forEach((e=>{e.addEventListener("click",(()=>{screen.width>768?(({timing:e,draw:t,duration:n})=>{let o=performance.now();requestAnimationFrame((function l(s){let c=(s-o)/n;c>1&&(c=1);let r=e(c);t(r),c<1&&requestAnimationFrame(l)}))})({duration:800,timing:e=>e,draw(e){t.style.opacity=e,t.style.display="block"}}):t.style.display="block"}))})),n.addEventListener("click",(()=>{t.style.display="none"}))})()})();