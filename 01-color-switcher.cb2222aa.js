const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");t.disabled=!0;let a=null;function r(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1,d.style.backgroundColor=r,a=setInterval((()=>{const e=r();d.style.backgroundColor=e}),1e3)})),t.addEventListener("click",(()=>{t.disabled=!0,e.disabled=!1,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.cb2222aa.js.map