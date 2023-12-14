var k=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var _=(e,t,s)=>(k(e,t,"read from private field"),s?s.call(e):t.get(e)),P=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},$=(e,t,s,a)=>(k(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s);import{a as f,i as L}from"./vendor-2f7d7b6c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const n={burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),nav_home:document.querySelector(".nav-home"),nav_favorites:document.querySelector(".nav-favorites"),pagination:document.querySelector(".js-pagination"),subscribe_form:document.querySelector(".js-subscribe-form"),quote:document.querySelector(".js-quote")};function I(e,t){let s=[];for(let a=1;a<=t;a+=1)s.push(`<li class="elm"><button type="button" class="pagination-el ${a===e?"active":"unactive"}" data-page="${a}" >${a}</button></li>`);return s.join("")}let T=1;function j(e){[...document.querySelector(".js-pagination").children].forEach(({firstElementChild:s})=>{const a=parseInt(s.dataset.page);a===e?(s.disabled="true",s.classList.replace("unactive","active")):a===T&&(s.classList.replace("active","unactive"),s.removeAttribute("disabled"))}),T=e}function A(e,t){n.pagination.innerHTML=I(e,t)}const m="https://your-energy.b.goit.study/api/",F={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class N{constructor({filter:t="muscles",subFilter:s="",keyword:a="",page:r=1,limit:i=8}){this.filter=t,this.subFilter=s,this.keyword=a,this.page=r,this.limit=i,this.id=""}async getFilters(){return(await f.get(`${m}filters`,{params:{filter:F[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await f.get(`${m}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(t){const s=await f.get(`${m}exercises/${t}`);return this.id=t,s.data}async updateExerciseRating({rate:t,email:s,review:a}){return(await f.patch(`${m}exercises/${this.id}/rating`,{rate:t,email:s,review:a})).data}async getQuote(){return(await f.get(`${m}quote`)).data}async subscribe({email:t}){return(await f.post(`${m}subscription`,{email:t})).data}}const c=new N({});function D(e){return e.map(({filter:t,name:s,imgURL:a})=>`<li data-subfilter="${s}" class="exercises-item">
      <a class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${a}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${t}</p>
        </div>
      </a>
    </li>`).join("")}function H(e){return e.map(({_id:t,bodyPart:s,name:a,target:r,rating:i,burnedCalories:o,time:d})=>`
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
            <p class="text-info-exer size-time">${o}/${d}</p>
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
    </li>`).join("")}function Q({bodyPart:e,equipment:t,gifUrl:s,name:a,target:r,description:i,rating:o,burnedCalories:d,time:u,popularity:h,_id:x}){let p=Math.round(o),g=!1;const q=JSON.parse(localStorage.getItem("favorites"));return q&&(g=q.some(E=>E._id===x)),`
  <div class="exercise-modal-backdrop" >
    <div class="exercise-modal">
        <button class="exercise-card-close-btn" type="button">
            <svg class="exercise-card-close-icon" aria-label="Modal window close icon">
                <use href="./img/icons.svg#icon-close"></use>
            </svg>
        </button>
        <div class="exercise-card">
            <div class="exercise-card-img-wrap">
                <img src=${s} alt="">
            </div>
                <div class="exercise-card-info">
                    <div>
                        <h2 class="exercise-card-title">${a}</h2>
                        ${p?` <div class="exercise-card-rating"><span>${p?p+".0":""}</span>
                        ${[1,2,3,4,5].map(E=>`
                        <svg aria-label="Rating star" width="16" height="16" stroke="var(--black)" fill=${p>=E?"var(--yellow)":"var(--white-transparent-20)"} >
                            <use href="./img/icons.svg#icon-star"></use>
                        </svg>`).join("")}
                          </div>`:""}
                            
                        <ul class="exercise-card-details-list">
                        ${r?`<li class="exercise-card-details-item">
                        <p class="details-name">Target</p>
                        <p class="details-value">${r}</p>
                        </li>`:""}
                        ${e?`<li class="exercise-card-details-item">
                              <p class="details-name">Body Part</p>
                              <p class="details-value">${e}</p>
                          </li>`:""}
                          ${t?`<li class="exercise-card-details-item">
                              <p class="details-name">Equipment</p>
                              <p class="details-value">${t}</p>
                          </li>`:""}
                          ${h?`<li class="exercise-card-details-item">
                              <p class="details-name">Popular</p>
                              <p class="details-value">${h}</p>
                          </li>`:""}
                          ${d&&u?`<li class="exercise-card-details-item">
                              <p class="details-name">Burned calories</p>
                              <p class="details-value">${d}/${u} min</p>
                          </li>`:""}
                         
                        </ul>
                        <p class="exercise-card-description">${i||""}</p>
                    </div>
                    <div class="exercise-card-btn-group">
                        <button class="card-btn add-favorites-btn">
                            <span>${g?"Remove from favorites":"Add to favorites"}</span>
                            <svg class="favorites-icon" aria-label="Favorite icon" width="20" height="20" >
                                <use href="./img/icons.svg#icon-${g?"remove":"heart"}"></use>
                            </svg>
                        </button>
                        <button class="card-btn add-rating-btn">Give a rating</button>
                </div>
            </div>
        </div>
    </div>
</div>`}function b({author:e,quote:t}){return`
          <p class="text-quote list-item-text">${t}</p>
          <p class="autor-quote list-item-text">${e}</p>
        `}async function M(e){e&&(c.page=e);const t=await c.getExercises();n.gallery.innerHTML=H(t.results),e||A(Number(t.page),t.totalPages)}async function w(e){e&&(c.page=e);const t=await c.getFilters();n.gallery.innerHTML=D(t.results),e||A(Number(t.page),t.totalPages)}const y={LS_KEY_QUOTE:"quote",BASE_QUOTE:{author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."}};async function U(){const e=new Date,t=`${e.getDate()}/${e.getMonth()}/${e.getFullYear()}`;let s;const a=JSON.parse(localStorage.getItem(y.LS_KEY_QUOTE));if(a)if(t!==a.date){try{if(s=await c.getQuote(),!s.author||!s.quote)throw Error("empty data")}catch(r){n.quote.insertAdjacentHTML("beforeend",b(y.BASE_QUOTE)),console.log(r.message);return}s.date=t,localStorage.setItem(y.LS_KEY_QUOTE,JSON.stringify(s)),n.quote.insertAdjacentHTML("beforeend",b(s))}else n.quote.insertAdjacentHTML("beforeend",b(a));else{try{if(s=await c.getQuote(),!s.author||!s.quote)throw Error("empty data")}catch(r){n.quote.insertAdjacentHTML("beforeend",b(y.BASE_QUOTE)),console.log(r.message);return}s.date=t,localStorage.setItem(y.LS_KEY_QUOTE,JSON.stringify(s)),n.quote.insertAdjacentHTML("beforeend",b(s))}}var v;class C{constructor(){P(this,v,void 0);$(this,v,1),this.state="subfilters"}get page(){return _(this,v)}set page(t){switch(this.state){case"subfilters":w(t);break;case"exercises":M(t);break}$(this,v,t)}load(){U(),w()}}v=new WeakMap;const S=new C;function R(e){e.target.hasAttribute("data-filter")&&(c.filter=e.target.dataset.filter,c.page=1,S.state="subfilters",w())}async function J(e){e.preventDefault(),e.target.closest("[data-subfilter]")&&(c.subFilter=e.target.closest("[data-subfilter]").dataset.subfilter,c.page=1,S.state="exercises",M())}L.settings({timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX",maxWidth:335,theme:"dark",backgroundColor:"#242424"});function B(e){L.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:e})}function K(e){L.show({progressBarColor:"#4FAC40",message:e})}function Y(e){const t=document.querySelector(".add-favorites-btn");t&&t.addEventListener("click",s);function s(a){const r=localStorage.getItem("favorites"),i=JSON.parse(r);if(r)if(!i.some(o=>o._id===e._id))i.push(e),localStorage.setItem("favorites",JSON.stringify(i)),t.querySelector("span").textContent="Remove from favorites",t.querySelector("use").setAttribute("href","./img/icons.svg#icon-remove");else{const o=i.map(d=>d._id).indexOf(e._id);i.splice(o,1),localStorage.setItem("favorites",JSON.stringify(i)),t.querySelector("span").textContent="Add to favorites",t.querySelector("use").setAttribute("href","./img/icons.svg#icon-heart")}else{const o=JSON.stringify([e]);localStorage.setItem("favorites",o)}}}const l={detailsPopup:!1,ratingPopup:!1},O=e=>e.stopPropagation(),z=(e,{closeCallback:t,submitCallback:s})=>{const a=e.querySelector(".modal__close-btn"),r=e.querySelector(".give_a_rating");a.addEventListener("click",()=>{t()}),r.addEventListener("submit",i=>{i.preventDefault(),s(i)})},G=(e,t)=>{const s=document.createElement("div");s.innerHTML=e;const a=s.querySelector(".exercise-modal-backdrop"),r=s.querySelector(".exercise-modal"),i=s.querySelector(".exercise-card-close-btn"),o=s.querySelector(".add-rating-btn"),d=s.querySelector(".add-favorites-btn"),u=document.querySelector("#modal-template").content.firstElementChild.cloneNode(!0),h=()=>{l.detailsPopup=!1,l.ratingPopup=!1,a==null||a.remove()},x=()=>{u.remove(),a.innerHTML="",l.ratingPopup=!1,a.append(r)},p=()=>{switch(!0){case(l.detailsPopup&&!l.ratingPopup):h();return;case(l.detailsPopup&&l.ratingPopup):x();return;default:h();return}};window.addEventListener("keydown",g=>{g.code==="Escape"&&p()}),r.addEventListener("click",O),u.addEventListener("click",O),a.addEventListener("click",()=>{p()}),i.addEventListener("click",()=>{a.remove()}),o.addEventListener("click",()=>{l.ratingPopup=!0,a.innerHTML="",a.append(u)}),d.addEventListener("click",g=>{Y(t)}),z(u,{closeCallback:x,submitCallback:()=>{}}),l.detailsPopup=!0,document.body.append(a)};async function W(e,t){if(e.preventDefault(),!!e.target.closest("[data-id]"))try{const s=e.target.closest("[data-id]").dataset.id,a=await c.getExerciseById(s),r=Q(a),i=G(r,a)}catch(s){console.error(s),B("Something went wrong. Please try again later.")}}function X(){if(location.href.includes("index.html")){n.nav_home.classList.add("active-item"),n.nav_favorites.classList.remove("active-item");return}if(location.href.includes("favorites.html")){n.nav_favorites.classList.add("active-item"),n.nav_home.classList.remove("active-item");return}}function V({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);j(t),S.page=t}async function Z(e){e.preventDefault();const t=new FormData(e.currentTarget),s={};t.forEach((a,r)=>{s[r]=a}),e.currentTarget.reset();try{const a=await c.subscribe({email:s.subscribe});K(a.message)}catch(a){B(a.response.data.message)}}n.filter.addEventListener("click",R);n.gallery.addEventListener("click",J);n.gallery.addEventListener("click",W);n.pagination.addEventListener("click",V);n.subscribe_form.addEventListener("submit",Z);X();S.load();
//# sourceMappingURL=main-717b4988.js.map
