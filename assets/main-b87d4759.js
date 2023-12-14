var q=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var P=(e,t,s)=>(q(e,t,"read from private field"),s?s.call(e):t.get(e)),_=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},S=(e,t,s,a)=>(q(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s);import{a as f,i as w}from"./vendor-2f7d7b6c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const c={burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),nav_home:document.querySelector(".nav-home"),nav_favorites:document.querySelector(".nav-favorites"),pagination:document.querySelector(".js-pagination"),subscribe_form:document.querySelector(".js-subscribe-form")};function B(e,t){let s=[];for(let a=1;a<=t;a+=1)s.push(`<li class="elm"><button type="button" class="pagination-el ${a===e?"active":"unactive"}" data-page="${a}" >${a}</button></li>`);return s.join("")}let O=1;function F(e){[...document.querySelector(".js-pagination").children].forEach(({firstElementChild:s})=>{const a=parseInt(s.dataset.page);a===e?(s.disabled="true",s.classList.replace("unactive","active")):a===O&&(s.classList.replace("active","unactive"),s.removeAttribute("disabled"))}),O=e}function M(e,t){c.pagination.innerHTML=B(e,t)}const m="https://your-energy.b.goit.study/api/",N={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class D{constructor({filter:t="muscles",subFilter:s="",keyword:a="",page:i=1,limit:r=8}){this.filter=t,this.subFilter=s,this.keyword=a,this.page=i,this.limit=r,this.id=""}async getFilters(){return(await f.get(`${m}filters`,{params:{filter:N[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await f.get(`${m}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(t){const s=await f.get(`${m}exercises/${t}`);return this.id=t,s.data}async updateExerciseRating({rate:t,email:s,review:a}){return(await f.patch(`${m}exercises/${this.id}/rating`,{rate:t,email:s,review:a})).data}async getQuote(){return(await f.get(`${m}quote`)).data}async subscribe({email:t}){return(await f.post(`${m}subscription`,{email:t})).data}}const o=new D({});function j(e){return e.map(({filter:t,name:s,imgURL:a})=>`<li data-subfilter="${s}" class="exercises-item">
      <a class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${a}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${t}</p>
        </div>
      </a>
    </li>`).join("")}function H(e){return e.map(({_id:t,bodyPart:s,name:a,target:i,rating:r,burnedCalories:n,time:d})=>`
      <li class="main-item_card-exercises" data-id="${t}">
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
          <p class="text-name-exercises-card">${a}</p>
        </div>
        <!-- End place card -->
        <ul class="list-info-exer">
          <li class="item-card-exer">
            <p class="text-title-item-exer big">Burned calories:</p>
            <p class="text-info-exer size-time">${n}/${d}</p>
          </li>
          <li class="item-card-exer">
            <p class="text-title-item-exer medium">Body part:</p>
            <p class="text-info-exer size-body">${s}</p>
          </li>
          <li class="item-card-exer">
            <p class="text-title-item-exer small">Target:</p>
            <p class="text-info-exer size-target">${i}</p>
          </li>
        </ul>
      </a>
    </li>`).join("")}function C({bodyPart:e,equipment:t,gifUrl:s,name:a,target:i,description:r,rating:n,burnedCalories:d,time:u,popularity:h,_id:b}){let p=Math.round(n),g=!1;const k=JSON.parse(localStorage.getItem("favorites"));return k&&(g=k.some(y=>y._id===b)),`
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
                        ${[1,2,3,4,5].map(y=>`
                        <svg aria-label="Rating star" width="16" height="16" stroke="var(--black)" fill=${p>=y?"var(--yellow)":"var(--white-transparent-20)"} >
                            <use href="./img/icons.svg#icon-star"></use>
                        </svg>`).join("")}
                          </div>`:""}
                            
                        <ul class="exercise-card-details-list">
                        ${i?`<li class="exercise-card-details-item">
                        <p class="details-name">Target</p>
                        <p class="details-value">${i}</p>
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
                        <p class="exercise-card-description">${r||""}</p>
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
</div>`}function $({author:e,quote:t}){return`
          <p class="text-quote list-item-text">${t}</p>
          <p class="autor-quote list-item-text">${e}</p>
        `}async function I(e){e&&(o.page=e);const t=await o.getExercises();c.gallery.innerHTML=H(t.results),e||M(Number(t.page),t.totalPages)}async function L(e){e&&(o.page=e);const t=await o.getFilters();c.gallery.innerHTML=j(t.results),e||M(Number(t.page),t.totalPages)}const E={LS_KEY_QUOTE:"quote"};async function Q(){try{const e=new Date,t=`${e.getDate()}/${e.getMonth()}/${e.getFullYear()}`;let s;const a=JSON.parse(localStorage.getItem(E.LS_KEY_QUOTE));a?t!==a.date?(s=await o.getQuote(),s.date=t,localStorage.setItem(E.LS_KEY_QUOTE,JSON.stringify(s)),c.quote.insertAdjacentHTML("beforeend",$(s))):c.quote.insertAdjacentHTML("beforeend",$(a)):(s=await o.getQuote(),s.date=t,localStorage.setItem(E.LS_KEY_QUOTE,JSON.stringify(s)),c.quote.insertAdjacentHTML("beforeend",$(s)))}catch{}}var v;class R{constructor(){_(this,v,void 0);S(this,v,1),this.state="subfilters"}get page(){return P(this,v)}set page(t){switch(this.state){case"subfilters":L(t);break;case"exercises":I(t);break}S(this,v,t)}load(){Q(),L()}}v=new WeakMap;const x=new R;function J(e){e.target.hasAttribute("data-filter")&&(o.filter=e.target.dataset.filter,o.page=1,x.state="subfilters",L())}async function U(e){e.preventDefault(),e.target.closest("[data-subfilter]")&&(o.subFilter=e.target.closest("[data-subfilter]").dataset.subfilter,o.page=1,x.state="exercises",I())}w.settings({timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX",maxWidth:335,theme:"dark",backgroundColor:"#242424"});function A(e){w.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:e})}function K(e){w.show({progressBarColor:"#4FAC40",message:e})}function Y(e){const t=document.querySelector(".add-favorites-btn");t&&t.addEventListener("click",s);function s(a){const i=localStorage.getItem("favorites"),r=JSON.parse(i);if(i)if(!r.some(n=>n._id===e._id))r.push(e),localStorage.setItem("favorites",JSON.stringify(r)),t.querySelector("span").textContent="Remove from favorites",t.querySelector("use").setAttribute("href","./img/icons.svg#icon-remove");else{const n=r.map(d=>d._id).indexOf(e._id);r.splice(n,1),localStorage.setItem("favorites",JSON.stringify(r)),t.querySelector("span").textContent="Add to favorites",t.querySelector("use").setAttribute("href","./img/icons.svg#icon-heart")}else{const n=JSON.stringify([e]);localStorage.setItem("favorites",n)}}}const l={detailsPopup:!1,ratingPopup:!1},T=e=>e.stopPropagation(),z=(e,{closeCallback:t,submitCallback:s})=>{const a=e.querySelector(".modal__close-btn"),i=e.querySelector(".give_a_rating");a.addEventListener("click",()=>{t()}),i.addEventListener("submit",r=>{r.preventDefault(),s(r)})},G=(e,t)=>{const s=document.createElement("div");s.innerHTML=e;const a=s.querySelector(".exercise-modal-backdrop"),i=s.querySelector(".exercise-modal"),r=s.querySelector(".exercise-card-close-btn"),n=s.querySelector(".add-rating-btn"),d=s.querySelector(".add-favorites-btn"),u=document.querySelector("#modal-template").content.firstElementChild.cloneNode(!0),h=()=>{l.detailsPopup=!1,l.ratingPopup=!1,a==null||a.remove()},b=()=>{u.remove(),a.innerHTML="",l.ratingPopup=!1,a.append(i)},p=()=>{switch(!0){case(l.detailsPopup&&!l.ratingPopup):h();return;case(l.detailsPopup&&l.ratingPopup):b();return;default:h();return}};window.addEventListener("keydown",g=>{g.code==="Escape"&&p()}),i.addEventListener("click",T),u.addEventListener("click",T),a.addEventListener("click",()=>{p()}),r.addEventListener("click",()=>{a.remove()}),n.addEventListener("click",()=>{l.ratingPopup=!0,a.innerHTML="",a.append(u)}),d.addEventListener("click",g=>{Y(t)}),z(u,{closeCallback:b,submitCallback:()=>{}}),l.detailsPopup=!0,document.body.append(a)};async function W(e,t){if(e.preventDefault(),!!e.target.closest("[data-id]"))try{const s=e.target.closest("[data-id]").dataset.id,a=await o.getExerciseById(s),i=C(a),r=G(i,a)}catch(s){console.error(s),A("Something went wrong. Please try again later.")}}function X(){if(location.href.includes("index.html")){c.nav_home.classList.add("active-item"),c.nav_favorites.classList.remove("active-item");return}if(location.href.includes("favorites.html")){c.nav_favorites.classList.add("active-item"),c.nav_home.classList.remove("active-item");return}}function V({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);F(t),x.page=t}async function Z(e){e.preventDefault();const t=new FormData(e.currentTarget),s={};t.forEach((a,i)=>{s[i]=a}),e.currentTarget.reset();try{const a=await o.subscribe({email:s.subscribe});K(a.message)}catch(a){A(a.response.data.message)}}c.filter.addEventListener("click",J);c.gallery.addEventListener("click",U);c.gallery.addEventListener("click",W);c.pagination.addEventListener("click",V);c.subscribe_form.addEventListener("submit",Z);X();x.load();
//# sourceMappingURL=main-b87d4759.js.map
