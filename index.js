import{S as g,a as m,i as n}from"./assets/vendor-Db2TdIkw.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const c=document.querySelector(".gallery"),p=new g(".gallery a",{captionDelay:250});function y(o){const a=o.map(e=>`<li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img alt="${e.tags}" src="${e.webformatURL}" class="gallery-img" />
        </a>
        <ul class="gallery-text-list">
          <li class="gallery-text-items">
            <h2 class="gallery-text-title">Likes</h2>
            <p class="gallery-text-parag">${e.likes}</p>
          </li>
          <li class="gallery-text-items">
            <h2 class="gallery-text-title">Views</h2>
            <p class="gallery-text-parag">${e.views}</p>
          </li>
          <li class="gallery-text-items">
            <h2 class="gallery-text-title">Comments</h2>
            <p class="gallery-text-parag">${e.comments}</p>
          </li>
          <li class="gallery-text-items">
            <h2 class="gallery-text-title">Downloads</h2>
            <p class="gallery-text-parag">${e.downloads}</p>
          </li>
        </ul>
      </li>`).join("");c.insertAdjacentHTML("beforeend",a),p.refresh()}function f(){c.innerHTML=""}function h(){document.querySelector(".loader").classList.add("open")}function x(){document.querySelector(".loader").classList.remove("open")}const u=document.querySelector(".non-active");function L(){u.classList.add("is-active")}function S(){u.classList.remove("is-active")}const b=document.querySelector(".gallery");async function i(o,a){try{const e=await m.get("https://pixabay.com/api/",{params:{key:"49632762-ccb8ac978f5dd2d4af8186ee2",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a}});y(e.data.hits),e.data.totalHits<=b.children.length+15?S():L()}catch{n.error({message:"Request error",position:"topRight",timeout:2e3,imageWidth:50,maxWidth:432,messageSize:"16px",messageLineHeight:"24px",messageColor:"#FAFAFB",backgroundColor:"#EF4040"})}}const d=document.querySelector("form");d.addEventListener("submit",v);async function v(o){o.preventDefault(),f();const a=d.elements[0].value;let e=1;h(),await i(a,e);try{let t=function(){e+=1,i(a,e)};document.querySelector(".is-active").addEventListener("click",t)}catch{n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,imageWidth:50,maxWidth:432,messageSize:"16px",messageLineHeight:"24px",messageColor:"#FAFAFB",backgroundColor:"#EF4040"})}finally{x()}}
//# sourceMappingURL=index.js.map
