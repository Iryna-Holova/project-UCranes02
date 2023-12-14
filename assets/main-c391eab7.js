import{a as l,i as p}from"./vendor-2f7d7b6c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const n={burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),nav_home:document.querySelector(".nav-home"),nav_favorites:document.querySelector(".nav-favorites"),quote:document.querySelector(".js-quote")},u="https://your-energy.b.goit.study/api/",h={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class v{constructor({filter:t="muscles",subFilter:s="",keyword:a="",page:i=1,limit:r=8}){this.filter=t,this.subFilter=s,this.keyword=a,this.page=i,this.limit=r}async getFilters(){return(await l.get(`${u}filters`,{params:{filter:h[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await l.get(`${u}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(t){return(await l.get(`${u}exercises/${t}`)).data}async getQuote(){return(await l.get(`${u}quote`)).data}}const o=new v({});function x(e){return e.map(({filter:t,name:s,imgURL:a})=>`<li data-subfilter="${s}" class="exercises-item">
      <a class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${a}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${t}</p>
        </div>
      </a>
    </li>`).join("")}function y(e){return e.map(({_id:t,bodyPart:s,name:a,target:i,rating:r,burnedCalories:c,time:m})=>`
      <li data-id="${t}">
        <a class="link-exercise-card" href="">
          <!-- Top place card -->
          <div class="cont-rating-btn-title">
            <div class="const-text-exer">
              <p class="text-card-exer">WORKOUT</p>
            </div>
            <div class="cont-card-rating">
              <p class="card-rating-exer">${r}</p>
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
            <p>${a}</p>
          </div>
          <!-- End place card -->
          <ul class="list-info-exer">
            <li class="item-card-exer">
              <p class="text-title-item-exer">Burned calories:</p>
              <p class="text-info-exer">${c}/${m}</p>
            </li>
            <li class="item-card-exer">
              <p class="text-title-item-exer">Body part:</p>
              <p class="text-info-exer">${s}</p>
            </li>
            <li class="item-card-exer">
              <p class="text-title-item-exer">Target:</p>
              <p class="text-info-exer">${i}</p>
            </li>
          </ul>
          </a>
        </li>`).join("")}function d({author:e,quote:t}){return`
          <p class="text-quote list-item-text">${t}</p>
          <p class="autor-quote list-item-text">${e}</p>
        `}async function b(){const e=await o.getExercises();n.gallery.innerHTML=y(e.results)}async function g(){const e=await o.getFilters();n.gallery.innerHTML=x(e.results)}const f={LS_KEY_QUOTE:"quote"};async function E(){try{const e=new Date,t=`${e.getDate()}/${e.getMonth()}/${e.getFullYear()}`;let s;const a=JSON.parse(localStorage.getItem(f.LS_KEY_QUOTE));a?t!==a.date?(s=await o.getQuote(),s.date=t,localStorage.setItem(f.LS_KEY_QUOTE,JSON.stringify(s)),n.quote.insertAdjacentHTML("beforeend",d(s))):n.quote.insertAdjacentHTML("beforeend",d(a)):(s=await o.getQuote(),s.date=t,localStorage.setItem(f.LS_KEY_QUOTE,JSON.stringify(s)),n.quote.insertAdjacentHTML("beforeend",d(s)))}catch{}}function L(e){e.target.hasAttribute("data-filter")&&(o.filter=e.target.dataset.filter,g())}async function S(e){e.preventDefault(),e.target.closest("[data-subfilter]")&&(o.subFilter=e.target.closest("[data-subfilter]").dataset.subfilter,b())}p.settings({timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX"});function $(e){p.show({backgroundColor:"#87D662",message:e})}async function w(e){if(e.preventDefault(),!e.target.closest("[data-id]"))return;const t=e.target.closest("[data-id]").dataset.id,s=await o.getExerciseById(t);console.log(s),$(t)}function q(){if(location.href.includes("index.html")){n.nav_home.classList.add("active-item"),n.nav_favorites.classList.remove("active-item");return}if(location.href.includes("favorites.html")){n.nav_favorites.classList.add("active-item"),n.nav_home.classList.remove("active-item");return}}n.filter.addEventListener("click",L);n.gallery.addEventListener("click",S);n.gallery.addEventListener("click",w);q();g();E();
//# sourceMappingURL=main-c391eab7.js.map
