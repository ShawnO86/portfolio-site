(()=>{"use strict";!function(){let e=document.getElementsByTagName("section");const t=document.createElement("nav"),n=document.createElement("ul");for(let t=0;t<=e.length-1;t++){const o=document.createElement("li"),i=document.createElement("button");o.appendChild(i),i.setAttribute("class","navBtn"),i.setAttribute("id",e[t].id+"_Btn"),i.innerText=e[t].id,n.appendChild(o)}t.appendChild(n),document.body.appendChild(t);const o=document.querySelectorAll(".navBtn");for(let t=0;t<o.length;t++)document.getElementById(o[t].id).addEventListener("click",(n=>{n.preventDefault(),e[t].scrollIntoView({block:"start",behavior:"smooth"})}));const i=document.getElementById("goTopLink"),c=document.getElementById("layoutContainer");function s(e){const t=e.getBoundingClientRect();return t.bottom>=100&&t.top<=.85*window.innerHeight}i.addEventListener("click",(e=>{e.preventDefault(),c.scrollIntoView({block:"start",behavior:"smooth"})}));for(let t=0;t<o.length;t++){const n=document.getElementById(o[t].id),i=e[t],c=i.querySelector(".sectionHeader"),a=i.querySelector(".sectionContent");window.addEventListener("scroll",(()=>{s(i)?(n.classList.add("navBtnIsActive"),c.classList.remove("aniSectionHeadOut"),a.classList.remove("aniSectionContentOut"),c.classList.add("aniSectionHeadIn"),a.classList.add("aniSectionContentIn")):(n.classList.remove("navBtnIsActive"),c.classList.remove("aniSectionHeadIn"),a.classList.remove("aniSectionContentIn"),c.classList.add("aniSectionHeadOut"),a.classList.add("aniSectionContentOut"))}))}}()})();