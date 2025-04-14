import{S as g,a as m,i}from"./assets/vendor-Db2TdIkw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c=document.querySelector(".gallery"),p=new g(".gallery a",{captionDelay:250});function y(a){const o=a.map(t=>`<li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img alt="${t.tags}" src="${t.webformatURL}" class="gallery-img" />
        </a>
        <ul class="gallery-text-list">
          <li class="gallery-text-items">
            <h2 class="gallery-text-title">Likes</h2>
            <p class="gallery-text-parag">${t.likes}</p>
          </li>
          <li class="gallery-text-items">
            <h2 class="gallery-text-title">Views</h2>
            <p class="gallery-text-parag">${t.views}</p>
          </li>
          <li class="gallery-text-items">
            <h2 class="gallery-text-title">Comments</h2>
            <p class="gallery-text-parag">${t.comments}</p>
          </li>
          <li class="gallery-text-items">
            <h2 class="gallery-text-title">Downloads</h2>
            <p class="gallery-text-parag">${t.downloads}</p>
          </li>
        </ul>
      </li>`).join("");c.insertAdjacentHTML("beforeend",o),p.refresh()}function f(){c.innerHTML=""}function h(){document.querySelector(".loader").classList.add("open")}function n(){document.querySelector(".loader").classList.remove("open")}const x=document.querySelector(".non-active");function L(){x.classList.remove("is-active")}function v(a){let o=1;document.querySelector(".non-active").addEventListener("click",s);function s(){o+=1,u(a,o);const e=document.querySelector("li");if(!e)return;const r=e.getBoundingClientRect().height;setTimeout(()=>{window.scrollBy({top:r*2,left:0,behavior:"smooth"})},500)}}document.querySelector(".gallery");async function u(a,o){const t=await m.get("https://pixabay.com/api/",{params:{key:"49632762-ccb8ac978f5dd2d4af8186ee2",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}});try{y(t.data.hits);const s=document.querySelector(".non-active"),e=Math.ceil(t.data.totalHits/15);o<e?s.classList.add("is-active"):s.classList.remove("is-active")}catch(s){console.log(s.message),i.error({message:"Request error",position:"topRight",timeout:2e3,imageWidth:50,maxWidth:432,messageSize:"16px",messageLineHeight:"24px",messageColor:"#FAFAFB",backgroundColor:"#EF4040"})}}const d=document.querySelector("form");d.addEventListener("submit",S);async function S(a){let o=1;a.preventDefault(),f();const t=d.elements[0].value.trim();if(h(),t===""||t===" "){n(),L(),i.error({message:"You should type not empty value!",position:"topRight",timeout:2e3,icon:"",imageWidth:50,maxWidth:432,messageSize:"16px",messageLineHeight:"24px",messageColor:"#FAFAFB",backgroundColor:"#EF4040"});return}else{await u(t,o);try{v(t)}catch(s){console.log(s.message),i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,imageWidth:50,maxWidth:432,messageSize:"16px",messageLineHeight:"24px",messageColor:"#FAFAFB",backgroundColor:"#EF4040"})}finally{n()}}}
//# sourceMappingURL=index.js.map
