var v=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var x=(t,e,s)=>(v(t,e,"read from private field"),s?s.call(t):e.get(t)),y=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},g=(t,e,s,i)=>(v(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s);import{a as o,i as $}from"./vendor-2f7d7b6c.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const n={burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),nav_home:document.querySelector(".nav-home"),nav_favorites:document.querySelector(".nav-favorites"),pagination:document.querySelector(".js-pagination")};function w(t,e){let s=[];for(let i=1;i<=e;i+=1)s.push(`<li class="elm"><button type="button" class="pagination-el ${i===t?"active":"unactive"}" data-page="${i}" >${i}</button></li>`);return s.join("")}let b=1;function q(t){[...document.querySelector(".js-pagination").children].forEach(({firstElementChild:s})=>{const i=parseInt(s.dataset.page);i===t?(s.disabled="true",s.classList.replace("unactive","active")):i===b&&(s.classList.replace("active","unactive"),s.removeAttribute("disabled"))}),b=t}function L(t,e){n.pagination.innerHTML=w(t,e)}const l="https://your-energy.b.goit.study/api/",k={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class O{constructor({filter:e="muscles",subFilter:s="",keyword:i="",page:a=1,limit:r=8}){this.filter=e,this.subFilter=s,this.keyword=i,this.page=a,this.limit=r,this.id=""}async getFilters(){return(await o.get(`${l}filters`,{params:{filter:k[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await o.get(`${l}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(e){const s=await o.get(`${l}exercises/${e}`);return this.id=e,s.data}async updateExerciseRating({rate:e,email:s,review:i}){return(await o.patch(`${l}exercises/${this.id}/rating`,{rate:e,email:s,review:i})).data}async getQuote(){return(await o.get(`${l}quote`)).data}async subscribe({email:e}){return(await o.post(`${l}subscription`,{email:e})).data}}const c=new O({});function _(t){return t.map(({filter:e,name:s,imgURL:i})=>`<li data-subfilter="${s}" class="exercises-item">
      <a class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${i}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${e}</p>
        </div>
      </a>
    </li>`).join("")}function M(t){return t.map(({_id:e,bodyPart:s,name:i,target:a,rating:r,burnedCalories:d,time:S})=>`
      <li class="main-item_card-exercises" data-id="${e}">
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
            <use href="../img/icons.svg#icon-run-man"></use>
          </svg>
          <p class="text-name-exercises-card">${i}</p>
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
            <p class="text-info-exer size-target">${a}</p>
          </li>
        </ul>
      </a>
    </li>`).join("")}function f({author:t,quote:e}){return`
          <p class="text-quote list-item-text">${e}</p>
          <p class="autor-quote list-item-text">${t}</p>
        `}async function E(t){t&&(c.page=t);const e=await c.getExercises();n.gallery.innerHTML=M(e.results),t||L(Number(e.page),e.totalPages)}async function h(t){t&&(c.page=t);const e=await c.getFilters();n.gallery.innerHTML=_(e.results),t||L(Number(e.page),e.totalPages)}const m={LS_KEY_QUOTE:"quote"};async function T(){try{const t=new Date,e=`${t.getDate()}/${t.getMonth()}/${t.getFullYear()}`;let s;const i=JSON.parse(localStorage.getItem(m.LS_KEY_QUOTE));i?e!==i.date?(s=await c.getQuote(),s.date=e,localStorage.setItem(m.LS_KEY_QUOTE,JSON.stringify(s)),n.quote.insertAdjacentHTML("beforeend",f(s))):n.quote.insertAdjacentHTML("beforeend",f(i)):(s=await c.getQuote(),s.date=e,localStorage.setItem(m.LS_KEY_QUOTE,JSON.stringify(s)),n.quote.insertAdjacentHTML("beforeend",f(s)))}catch{}}var u;class I{constructor(){y(this,u,void 0);g(this,u,1),this.state="subfilters"}get page(){return x(this,u)}set page(e){switch(this.state){case"subfilters":h(e);break;case"exercises":E(e);break}g(this,u,e)}load(){T(),h()}}u=new WeakMap;const p=new I;function j(t){t.target.hasAttribute("data-filter")&&(c.filter=t.target.dataset.filter,c.page=1,p.state="subfilters",h())}async function A(t){t.preventDefault(),t.target.closest("[data-subfilter]")&&(c.subFilter=t.target.closest("[data-subfilter]").dataset.subfilter,c.page=1,p.state="exercises",E())}$.settings({timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX",maxWidth:335,theme:"dark",backgroundColor:"#242424"});function F(t){$.show({progressBarColor:"#4FAC40",message:t})}async function N(t){if(t.preventDefault(),!t.target.closest("[data-id]"))return;const e=t.target.closest("[data-id]").dataset.id,s=await c.getExerciseById(e);console.log(s),F(e)}function Q(){if(location.href.includes("index.html")){n.nav_home.classList.add("active-item"),n.nav_favorites.classList.remove("active-item");return}if(location.href.includes("favorites.html")){n.nav_favorites.classList.add("active-item"),n.nav_home.classList.remove("active-item");return}}function B({target:t}){if(!t.hasAttribute("data-page"))return;const e=parseInt(t.dataset.page);q(e),p.page=e}n.filter.addEventListener("click",j);n.gallery.addEventListener("click",A);n.gallery.addEventListener("click",N);n.pagination.addEventListener("click",B);Q();p.load();
//# sourceMappingURL=main-20c7a147.js.map
