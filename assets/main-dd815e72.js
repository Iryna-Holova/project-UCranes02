var v=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var y=(e,t,s)=>(v(e,t,"read from private field"),s?s.call(e):t.get(e)),x=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},g=(e,t,s,a)=>(v(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s);import{a as c,i as b}from"./vendor-2f7d7b6c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const n={burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),nav_home:document.querySelector(".nav-home"),nav_favorites:document.querySelector(".nav-favorites"),pagination:document.querySelector(".js-pagination"),subscribe_form:document.querySelector(".js-subscribe-form")};function q(e,t){let s=[];for(let a=1;a<=t;a+=1)s.push(`<li class="elm"><button type="button" class="pagination-el ${a===e?"active":"unactive"}" data-page="${a}" >${a}</button></li>`);return s.join("")}let $=1;function _(e){[...document.querySelector(".js-pagination").children].forEach(({firstElementChild:s})=>{const a=parseInt(s.dataset.page);a===e?(s.disabled="true",s.classList.replace("unactive","active")):a===$&&(s.classList.replace("active","unactive"),s.removeAttribute("disabled"))}),$=e}function E(e,t){n.pagination.innerHTML=q(e,t)}const l="https://your-energy.b.goit.study/api/",k={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class O{constructor({filter:t="muscles",subFilter:s="",keyword:a="",page:r=1,limit:i=8}){this.filter=t,this.subFilter=s,this.keyword=a,this.page=r,this.limit=i,this.id=""}async getFilters(){return(await c.get(`${l}filters`,{params:{filter:k[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await c.get(`${l}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(t){const s=await c.get(`${l}exercises/${t}`);return this.id=t,s.data}async updateExerciseRating({rate:t,email:s,review:a}){return(await c.patch(`${l}exercises/${this.id}/rating`,{rate:t,email:s,review:a})).data}async getQuote(){return(await c.get(`${l}quote`)).data}async subscribe({email:t}){return(await c.post(`${l}subscription`,{email:t})).data}}const o=new O({});function T(e){return e.map(({filter:t,name:s,imgURL:a})=>`<li data-subfilter="${s}" class="exercises-item">
      <a class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${a}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${t}</p>
        </div>
      </a>
    </li>`).join("")}function M(e){return e.map(({_id:t,bodyPart:s,name:a,target:r,rating:i,burnedCalories:d,time:S})=>`
      <li class="main-item_card-exercises" data-id="${t}">
      <a class="link-exercise-card" href="">
        <!-- Top place card -->
        <div class="cont-rating-btn-title">
          <div class="const-text-exer">
            <p class="text-card-exer">WORKOUT</p>
          </div>
          <div class="cont-card-rating">
            <p class="card-rating-exer">${i}</p>
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
            <use href="../img/icons.svg#icon-run-man"></use>
          </svg>
          <p class="text-name-exercises-card">${a}</p>
        </div>
        <!-- End place card -->
        <ul class="list-info-exer">
          <li class="item-card-exer">
            <p class="text-title-item-exer big">Burned calories:</p>
            <p class="text-info-exer size-time">${d}/${S}</p>
          </li>
          <li class="item-card-exer">
            <p class="text-title-item-exer medium">Body part:</p>
            <p class="text-info-exer size-body">${s}</p>
          </li>
          <li class="item-card-exer">
            <p class="text-title-item-exer small">Target:</p>
            <p class="text-info-exer size-target">${r}</p>
          </li>
        </ul>
      </a>
    </li>`).join("")}function f({author:e,quote:t}){return`
          <p class="text-quote list-item-text">${t}</p>
          <p class="autor-quote list-item-text">${e}</p>
        `}async function L(e){e&&(o.page=e);const t=await o.getExercises();n.gallery.innerHTML=M(t.results),e||E(Number(t.page),t.totalPages)}async function h(e){e&&(o.page=e);const t=await o.getFilters();n.gallery.innerHTML=T(t.results),e||E(Number(t.page),t.totalPages)}const m={LS_KEY_QUOTE:"quote"};async function j(){try{const e=new Date,t=`${e.getDate()}/${e.getMonth()}/${e.getFullYear()}`;let s;const a=JSON.parse(localStorage.getItem(m.LS_KEY_QUOTE));a?t!==a.date?(s=await o.getQuote(),s.date=t,localStorage.setItem(m.LS_KEY_QUOTE,JSON.stringify(s)),n.quote.insertAdjacentHTML("beforeend",f(s))):n.quote.insertAdjacentHTML("beforeend",f(a)):(s=await o.getQuote(),s.date=t,localStorage.setItem(m.LS_KEY_QUOTE,JSON.stringify(s)),n.quote.insertAdjacentHTML("beforeend",f(s)))}catch{}}var u;class I{constructor(){x(this,u,void 0);g(this,u,1),this.state="subfilters"}get page(){return y(this,u)}set page(t){switch(this.state){case"subfilters":h(t);break;case"exercises":L(t);break}g(this,u,t)}load(){j(),h()}}u=new WeakMap;const p=new I;function A(e){e.target.hasAttribute("data-filter")&&(o.filter=e.target.dataset.filter,o.page=1,p.state="subfilters",h())}async function F(e){e.preventDefault(),e.target.closest("[data-subfilter]")&&(o.subFilter=e.target.closest("[data-subfilter]").dataset.subfilter,o.page=1,p.state="exercises",L())}b.settings({timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX",maxWidth:335,theme:"dark",backgroundColor:"#242424"});function B(e){b.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:e})}function w(e){b.show({progressBarColor:"#4FAC40",message:e})}async function N(e){if(e.preventDefault(),!e.target.closest("[data-id]"))return;const t=e.target.closest("[data-id]").dataset.id,s=await o.getExerciseById(t);console.log(s),w(t)}function Q(){if(location.href.includes("index.html")){n.nav_home.classList.add("active-item"),n.nav_favorites.classList.remove("active-item");return}if(location.href.includes("favorites.html")){n.nav_favorites.classList.add("active-item"),n.nav_home.classList.remove("active-item");return}}function D({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);_(t),p.page=t}async function H(e){e.preventDefault();const t=new FormData(e.currentTarget),s={};t.forEach((a,r)=>{s[r]=a}),e.currentTarget.reset();try{const a=await o.subscribe({email:s.subscribe});w(a.message)}catch(a){B(a.response.data.message)}}n.filter.addEventListener("click",A);n.gallery.addEventListener("click",F);n.gallery.addEventListener("click",N);n.pagination.addEventListener("click",D);n.subscribe_form.addEventListener("submit",H);Q();p.load();
//# sourceMappingURL=main-dd815e72.js.map
