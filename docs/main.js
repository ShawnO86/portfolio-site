(()=>{"use strict";!function(){let e=document.getElementsByTagName("section");const t=document.createElement("nav"),n=document.createElement("ul"),i=document.getElementById("mainHead");for(let t=0;t<=e.length-1;t++){const i=document.createElement("li"),o=document.createElement("a");i.appendChild(o),o.setAttribute("class","navBtn"),o.setAttribute("id",e[t].id+"_Btn"),o.setAttribute("href","#"+e[t].id),o.innerText=e[t].id,n.appendChild(i)}t.appendChild(n),document.body.appendChild(t);const o=document.querySelectorAll(".navBtn");for(let t=0;t<o.length;t++)document.getElementById(o[t].id).addEventListener("click",(n=>{n.preventDefault(),e[t].scrollIntoView({block:"start",behavior:"smooth"})}));function s(e){const t=e.getBoundingClientRect();return t.top<=.75*window.innerHeight&&t.bottom>=.75*window.innerHeight}const c=document.querySelector(".topLinkContainer"),a=document.getElementById("goTopLink");window.addEventListener("scroll",(()=>{s(i)?(c.classList.remove("aniSectionContentIn"),c.classList.add("hideArea")):(c.classList.add("aniSectionContentIn"),c.classList.remove("hideArea"),a.addEventListener("click",(()=>{i.scrollIntoView({block:"start",behavior:"smooth"})})))}));for(let t=0;t<o.length;t++){const n=document.getElementById(o[t].id),i=e[t],c=i.querySelector(".sectionHeader"),a=i.querySelector(".sectionContent");window.addEventListener("scroll",(()=>{s(i)?(n.classList.add("navBtnIsActive"),c.classList.remove("aniSectionHeadOut"),a.classList.remove("aniSectionContentOut"),c.classList.add("aniSectionHeadIn"),a.classList.add("aniSectionContentIn")):(n.classList.remove("navBtnIsActive"),c.classList.remove("aniSectionHeadIn"),a.classList.remove("aniSectionContentIn"),c.classList.add("aniSectionHeadOut"),a.classList.add("aniSectionContentOut"))}))}}()})();