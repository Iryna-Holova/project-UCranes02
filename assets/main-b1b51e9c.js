import{a as l,i as f}from"./vendor-2f7d7b6c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const n={burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),nav_home:document.querySelector(".nav-home"),nav_favorites:document.querySelector(".nav-favorites")},u="https://your-energy.b.goit.study/api/",h={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class x{constructor({filter:s="muscles",subFilter:t="",keyword:r="",page:i=1,limit:a=8}){this.filter=s,this.subFilter=t,this.keyword=r,this.page=i,this.limit=a}async getFilters(){return(await l.get(`${u}filters`,{params:{filter:h[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await l.get(`${u}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(s){return(await l.get(`${u}exercises/${s}`)).data}async getQuote(){return(await l.get(`${u}quote`)).data}}const c=new x({});function y(e){return e.map(({filter:s,name:t,imgURL:r})=>`<li data-subfilter="${t}" class="exercises-item">
      <a class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${r}" alt="${t}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${t}</h4>
          <p class="exercises-item-type">${s}</p>
        </div>
      </a>
    </li>`).join("")}function b(e){return e.map(({_id:s,bodyPart:t,name:r,target:i,rating:a,burnedCalories:o,time:v})=>`
      <li data-id="${s}">
        <a class="link-exercise-card" href="">
          <!-- Top place card -->
          <div class="cont-rating-btn-title">
            <div class="const-text-exer">
              <p class="text-card-exer">WORKOUT</p>
            </div>
            <div class="cont-card-rating">
              <p class="card-rating-exer">${a}</p>
              <svg class="icon-card-exer" width="18" height="18">
                <use href="../img/icons.svg#icon-star"></use>
              </svg>
            </div>
            <div class="block-btn-icon-exer">
              <button class="btn-card-exer">Start</button>
              <svg class="icon-card-btn" width="16" height="16">
                <use href="../img/icons.svg#icon-arrow"></use>
              </svg>
            </div>
          </div>
          <!-- Middle place card -->
          <div class="cont-icon-name-text">
            <svg class="icon-people-card" width="24" height="24">
              <use href="../img/icons.svg#icon-running-stick-figure"></use>
            </svg>
            <p>${r}</p>
          </div>
          <!-- End place card -->
          <ul class="list-info-exer">
            <li class="item-card-exer">
              <p class="text-title-item-exer">Burned calories:</p>
              <p class="text-info-exer">${o}/${v}</p>
            </li>
            <li class="item-card-exer">
              <p class="text-title-item-exer">Body part:</p>
              <p class="text-info-exer">${t}</p>
            </li>
            <li class="item-card-exer">
              <p class="text-title-item-exer">Target:</p>
              <p class="text-info-exer">${i}</p>
            </li>
          </ul>
          </a>
        </li>`).join("")}function d({author:e,quote:s}){return`
          <p class="text-quote list-item-text">${s}</p>
          <p class="autor-quote list-item-text">${e}</p>
        `}async function L(){const e=await c.getExercises();n.gallery.innerHTML=b(e.results)}async function m(){const e=await c.getFilters();n.gallery.innerHTML=y(e.results)}const p={LS_KEY_QUOTE:"quote"};async function S(){try{const e=new Date,s=`${e.getDate()}/${e.getMonth()}/${e.getFullYear()}`;let t;const r=JSON.parse(localStorage.getItem(p.LS_KEY_QUOTE));r?s!==r.date?(t=await c.getQuote(),t.date=s,localStorage.setItem(p.LS_KEY_QUOTE,JSON.stringify(t)),n.quote.insertAdjacentHTML("beforeend",d(t))):n.quote.insertAdjacentHTML("beforeend",d(r)):(t=await c.getQuote(),t.date=s,localStorage.setItem(p.LS_KEY_QUOTE,JSON.stringify(t)),n.quote.insertAdjacentHTML("beforeend",d(t)))}catch{}}function $(e){e.target.hasAttribute("data-filter")&&(c.filter=e.target.dataset.filter,m())}async function E(e){e.preventDefault(),e.target.closest("[data-subfilter]")&&(c.subFilter=e.target.closest("[data-subfilter]").dataset.subfilter,L())}f.settings({timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX"});function w(e){f.show({backgroundColor:"#87D662",message:e})}async function q(e){if(e.preventDefault(),!e.target.closest("[data-id]"))return;const s=e.target.closest("[data-id]").dataset.id,t=await c.getExerciseById(s);console.log(t),w(s)}function O(){if(location.href.includes("index.html")){n.nav_home.classList.add("active-item"),n.nav_favorites.classList.remove("active-item");return}if(location.href.includes("favorites.html")){n.nav_favorites.classList.add("active-item"),n.nav_home.classList.remove("active-item");return}}let g=1;function _(e){[...document.querySelector(".js-pagination").children].forEach(({firstElementChild:t})=>{const r=parseInt(t.dataset.page);r===e?(t.disabled="true",t.classList.replace("unactive","active"),console.log(t)):r===g&&(console.log(t,"element  page === page"),t.classList.replace("active","unactive"),t.removeAttribute("disabled"))}),g=e}function k({target:e}){e.hasAttribute("data-page")&&_(parseInt(e.dataset.page))}n.filter.addEventListener("click",$);n.gallery.addEventListener("click",E);n.gallery.addEventListener("click",q);n.paginationEl.addEventListener("click",k);O();m();S();
//# sourceMappingURL=main-b1b51e9c.js.map
