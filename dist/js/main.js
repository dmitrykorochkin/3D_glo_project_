(()=>{"use strict";const e=({idForm:e,somElem:t=[]})=>{const o=document.getElementById(e),n=document.createElement("div");try{if(!o)throw new Error("Ошибка в форме");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),l=new FormData(o),a={};var r;n.textContent="Загрузка...",o.append(n),l.forEach(((e,t)=>{a[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?a[e.id]=t.textContent:"input"===e.type&&(a[e.id]=t.value)})),(e=>{let t=!0;return e.forEach((e=>{e.value||(t=!1),"user_phone"!==e.name||/^[\+]?\(?([0-9]{4})\)?([-]?)([0-9]{3})\2([0-9]{4})+$/g.test(e.value)&&""!==e.value||(alert("Введите корректный номер телефона, пример: +79374564612 "),t=!1),"user_name"===e.name&&(/[^а-яА-Я ]/g.test(e.value)||""===e.value||e.value.length<2)&&(alert("Введите имя на кириллице(не менее 2 букв)"),t=!1),"user_message"===e.name&&/[^а-яА-Я0-9 -.,;:!?"()]/g.test(e.value)&&(t=!1)})),t})(e)?(r=a,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{n.textContent="Спасибо, наш менеджер свяжется с вами!",e.forEach((e=>{e.value=""}))})).catch((e=>{n.textContent="Ошибка..."})):alert("Данные не валидны")})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),l=()=>{let e=(()=>{let e=(new Date("31 july 2022").getTime()-(new Date).getTime())/1e3;return Math.floor(e/60/60/24),{timeRemaining:e,hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.timeRemaining>0&&(e.hours<=9?t.textContent="0"+e.hours:t.textContent=e.hours,e.minutes<=9?o.textContent="0"+e.minutes:o.textContent=e.minutes,e.seconds<=9?n.textContent="0"+e.seconds:n.textContent=e.seconds,e.timeRemaining<=0&&clearInterval(a))},a=setInterval(l,1e3);l()})(),(()=>{const e=document.querySelector("menu"),t=()=>{e.classList.toggle("active-menu")};document.body.addEventListener("click",(o=>{o.target.closest(".menu")||o.target.matches("menu a")?t():o.target.closest("menu")||e.classList.contains("active-menu")&&t()}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup");t.querySelector(".popup-close"),e.forEach((e=>{e.addEventListener("click",(()=>{screen.width>768?(({timing:e,draw:t,duration:o})=>{let n=performance.now();requestAnimationFrame((function l(a){let r=(a-n)/o;r>1&&(r=1);let c=e(r);t(c),r<1&&requestAnimationFrame(l)}))})({duration:800,timing:e=>e,draw(e){t.style.opacity=e,t.style.display="block"}}):t.style.display="block"}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none")}))})(),document.querySelector(".calc-block").addEventListener("input",(e=>{"input"==e.target.localName&&(e.target.value=e.target.value.replace(/\D+/,""))})),(()=>{const e=document.querySelectorAll("input[name = user_name]"),t=document.querySelector("input[name = user_message]"),o=document.querySelectorAll("input[name = user_email]"),n=document.querySelectorAll("input[name = user_phone]");e.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-я-\s]/gi,"")}))})),t.addEventListener("input",(()=>{t.value=t.value.replace(/[^а-я-\s\.,!?:;\"\-]/gi,"")})),o.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d\w\-\@\_\.\!\~\*\']+/gi,"")})),n.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d\-()+']+/gi,"")}))}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let n,l=document.querySelectorAll(".dot"),a=0;(()=>{for(let e=0;e<t.length;e++){let t=document.createElement("li");t.classList=0==e?"dot dot-active":"dot",o.append(t)}l=document.querySelectorAll(".dot")})();const r=(e,t,o)=>{e[t].classList.remove(o)},c=(e,t,o)=>{e[t].classList.add(o)},s=()=>{r(t,a,"portfolio-item-active"),r(l,a,"dot-active"),a++,a>=t.length&&(a=0),c(t,a,"portfolio-item-active"),c(l,a,"dot-active")},i=(e=1500)=>{n=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(r(t,a,"portfolio-item-active"),r(l,a,"dot-active"),e.target.matches("#arrow-right")?a++:e.target.matches("#arrow-left")?a--:e.target.classList.contains("dot")&&l.forEach(((t,o)=>{e.target===t&&(a=o)})),a>=t.length&&(a=0),a<0&&(a=t.length-1),c(t,a,"portfolio-item-active"),c(l,a,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),i(2e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),r=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==o&&t.target!==n&&t.target!==l&&t.target!==a||(()=>{const t=+o.options[o.selectedIndex].value,c=n.value;let s=0,i=1,u=1;l.value>1&&(i+=+l.value/10),a.value&&a.value<5?u=2:a.value&&a.value<10&&(u=1.5),s=t&&c?e*t*c*i*u:0,r.textContent=s})()}))})(100),function(e,t="+7 (__)___-__-__"){const o=document.querySelectorAll(e);function n(e){const o=e.keyCode,n=t,l=n.replace(/\D/g,""),a=this.value.replace(/\D/g,"");console.log(n);let r=0,c=n.replace(/[_\d]/g,(function(e){return r<a.length?a.charAt(r++)||l.charAt(r):e}));r=c.indexOf("_"),-1!=r&&(c=c.slice(0,r));let s=n.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");s=new RegExp("^"+s+"$"),(!s.test(this.value)||this.value.length<5||o>47&&o<58)&&(this.value=c),"blur"==e.type&&this.value.length<5&&(this.value="")}for(const e of o)e.addEventListener("input",n),e.addEventListener("focus",n),e.addEventListener("blur",n)}(),e({idForm:"form1",somElem:[{type:"block",id:"total"}]}),e({idForm:"form2",somElem:[{type:"block",id:"total"}]}),e({idForm:"form3",somElem:[{type:"block",id:"total"}]})})();