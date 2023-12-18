var ae=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var n=(e,t,s)=>(ae(e,t,"read from private field"),s?s.call(e):t.get(e)),g=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},l=(e,t,s,i)=>(ae(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s);var u=(e,t,s)=>(ae(e,t,"access private method"),s);import{i as ge,a as M,l as pe}from"./vendor-243d56f5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const m={SS_KEY_FILTERS:"user filters",SS_KEY_FAVORITES:"favorites-page",LS_KEY_FAVORITES:"favorites",LS_KEY_QUOTE:"quote",BASE_QUOTE:{author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."},ERROR_MESSAGE:"Something goes wrong!"},a={body:document.querySelector("body"),burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),gallerySubtitle:document.querySelector(".js-subtitle"),pagination:document.querySelector(".js-pagination"),searchForm:document.querySelector(".js-search-form"),resetSearchForm:document.querySelector(".js-reset-form"),backBtn:document.querySelector(".js-back-button"),subscribeForm:document.querySelector(".js-subscribe-form"),quote:document.querySelector(".js-quote"),policyBtn:document.querySelector(".js-policy-modal-open"),termsBtn:document.querySelector(".js-terms-modal-open"),scrollTopBtn:document.querySelector(".js-scroll-top-button"),btnCloseBurger:document.querySelector(".mobile-menu-close-btn"),btnOpenBurger:document.querySelector(".mobile-menu-open-btn"),burgerMenu:document.querySelector(".mobile-menu-backdrop")};function Ue(e){return e.map(({filter:t,name:s,imgURL:i})=>`<li class="exercises-item">
      <a data-subfilter="${s}" class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${i}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${t}</p>
        </div>
      </a>
    </li>`).join("")}const W="/project-UCranes02/assets/icons-627bb2e4.svg#icon-remove",qe="/project-UCranes02/assets/icons-627bb2e4.svg#icon-star",He="/project-UCranes02/assets/icons-627bb2e4.svg#icon-arrow",De="/project-UCranes02/assets/icons-627bb2e4.svg#icon-run-man",he="/project-UCranes02/assets/icons-627bb2e4.svg#icon-heart";function ke(e,t){return e.map(({_id:s,bodyPart:i,name:r,target:o,rating:d,burnedCalories:h,time:A})=>`
         <li class="main-item_card-exercises">
      <a class="link-exercise-card" href="" data-id="${s}">
        <!-- Top place card -->
        <div class="card-cont-content">
          <div class="cont-rating-btn-title">
            <div class="const-text-exer">
              <p class="text-card-exer">WORKOUT</p>
            </div>
            ${t==="favorites"?`
                <button class="btn-delete-card" type="button" data-delete="${s}">
                <svg class="icon-delete-favorite" width="16" height="16">
                  <use href="${W}"></use>
                </svg>
                </button>
              `:`
            <div class="btn-card-group">
               <button class="btn-delete-card ${E.isFavorite(s)?"":"is-hidden"}" type="button" data-delete="${s}">
                <svg class="icon-delete-favorite" width="16" height="16">
                  <use href="${W}"></use>
                </svg>
                </button>
                <button class="btn-add-card ${E.isFavorite(s)?"is-hidden":""}"" type="button" data-add="${s}">
                <svg class="icon-add-favorite" width="16" height="16">
                 <use href="${he}"></use>
               </svg>
               </button>
            </div>  
                <div class="cont-card-rating">
                  <p class="card-rating-exer">${d}</p>
                  <svg class="icon-card-exer" width="18" height="18">
                     <use href="${qe}"></use>
                  </svg>
                </div>
              `}
            <div class="block-btn-icon-exer">
              <button class="btn-card-exer">Start</button>
              <svg class="icon-card-btn" width="16" height="16">
                <use href="${He}"></use>
              </svg>
            </div>
          </div>
          <!-- Middle place card -->
          <div class="cont-icon-name-text">
            <svg class="icon-people-card" width="24" height="24">
              <use href="${De}"></use>
            </svg>
            <p class="text-name-exercises-card">${r}</p>
          </div>
          <!-- End place card -->
          <ul class="list-info-exer">
            <li class="item-card-exer">
              <p class="text-title-item-exer big">Burned calories:</p>
              <p class="text-info-exer size-time">${h}/${A}</p>
            </li>
            <li class="item-card-exer">
              <p class="text-title-item-exer medium">Body part:</p>
              <p class="text-info-exer size-body">${i}</p>
            </li>
            <li class="item-card-exer">
              <p class="text-title-item-exer small">Target:</p>
              <p class="text-info-exer size-target">${o}</p>
            </li>
          </ul>
        </div>
      </a>
    </li>`).join("")}function Qe(e,t){let s=[],i=[];if(t<=5)for(let r=1;r<=t;r+=1)J(r,e)?s.push(`<li class="elm"><button type="button" disabled class="pagination-el ${J(r,e)?"active":"unactive"}" data-page="${r}" >${r}</button></li>`):s.push(`<li class="elm"><button type="button" class="pagination-el ${J(r,e)?"active":"unactive"}" data-page="${r}" >${r}</button></li>`);else{const r=Math.max(Math.min(e-2,t-4),1),o=Math.min(r+4,t);for(let d=r;d<=o;d+=1)i.push(d),J(d,e)?s.push(`<li class="elm"><button type="button" class="pagination-el active" disabled data-page="${d}" >${d}</button></li>`):s.push(`<li class="elm"><button type="button" class="pagination-el unactive"  data-page="${d}" >${d}</button></li>`);i.includes(1)||s.unshift('<li class="elm"><button type="button" class="pagination-el unactive"  data-page="1" >1</button>&nbsp;&nbsp;...</li>'),i.includes(t)||s.push(`<li class="elm">...&nbsp;&nbsp;<button type="button" class="pagination-el unactive"  data-page="${t}">${t}</button></li>`)}return s.join("")}function J(e,t){return e===t}const Ne="/project-UCranes02/assets/icons-627bb2e4.svg#icon-close",Ke="/project-UCranes02/assets/icons-627bb2e4.svg#icon-camera";function Ye({bodyPart:e,equipment:t,gifUrl:s,name:i,target:r,description:o,rating:d,burnedCalories:h,time:A,popularity:v,_id:Ce}){let z=Math.round(d),G=!1;const me=JSON.parse(localStorage.getItem("favorites"));return me&&(G=me.some(re=>re._id===Ce)),`
    <div class="exercise-modal">
        <button class="exercise-card-close-btn" type="button">
            <svg class="exercise-card-close-icon" aria-label="Modal window close icon">
                <use href="${Ne}"></use>
            </svg>
        </button>
        <div class="exercise-card">
            <div class="exercise-card-img-wrap">
            ${s?`<img src=${s} alt="Exercise image">`:`
            <div class="exercise-card-no-img-wrap">
              <svg class="exercise-card-no-img" aria-label="No image">
                  <use class="exercise-card-no-img-icon" href="${Ke}"></use>
              </svg>
              <span>image not found</span>
            </div>
            `}
    
            </div>
                <div class="exercise-card-info">
                    <div>
                        <h2 class="exercise-card-title">${i}</h2>
                        ${z?` <div class="exercise-card-rating"><span>${z?z+".0":""}</span>
                        ${[1,2,3,4,5].map(re=>`
                        <svg aria-label="Rating star" width="16" height="16" stroke="var(--black)" fill=${z>=re?"var(--yellow)":"var(--white-transparent-20)"} >
                            <use href="${qe}"></use>
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
                          ${v?`<li class="exercise-card-details-item">
                              <p class="details-name">Popular</p>
                              <p class="details-value">${v}</p>
                          </li>`:""}
                          ${h&&A?`<li class="exercise-card-details-item">
                              <p class="details-name">Burned calories</p>
                              <p class="details-value">${h}/${A} min</p>
                          </li>`:""}
                         
                        </ul>
                        <p class="exercise-card-description">${o||""}</p>
                    </div>
                    <div class="exercise-card-btn-group">
                        <button class="card-btn add-favorites-btn" ${G?'style="padding: 12px 9px"':""}>
                            <span>${G?"Remove from favorites":"Add to favorites"}</span>
                            <svg class="favorites-icon" aria-label="Favorite icon" width="20" height="20" >
                                <use href="${G?`${W}`:`${he}`}"></use>
                            </svg>
                        </button>
                        <button class="card-btn add-rating-btn">Give a rating</button>
                </div>
            </div>
        </div>
    </div>`}function U({author:e,quote:t},s){return`
          ${s==="favorite"?`<p class="favorite-text-quote">${t}</p>`:`<p class="text-quote list-item-text">${t}</p>`}
          <p class="autor-quote list-item-text">${e}</p>
        `}function X(){return`<li class='not-found-gallery'><picture>
    <source media="(min-width: 1440px)" srcset="/img/gallery-not-found/not-found-gallery-desktop.jpg, /img/gallery-not-found/not-found-gallery-desktop@2x.jpg 2x" />
    <source media="(min-width: 768px)" srcset="/img/gallery-not-found/not-found-gallery-tablet.jpg, /img/gallery-not-found/not-found-gallery-tablet@2x.jpg 2x" />
    <source srcset="/img/gallery-not-found/not-found-gallery-mobile.jpg, /img/gallery-not-found/not-found-gallery-mobile@2x.jpg 2x" />
    <img src="/img/gallery-not-found/not-found-gallery-desktop.jpg" alt="Exercises not found" />
  </picture></li>`}function I(e,t){a.pagination.innerHTML=Qe(e,t)}ge.settings({timeout:5e3,resetOnHover:!0,position:"topCenter",transitionIn:"flipInX",transitionOut:"flipOutX",theme:"dark",backgroundColor:"#242424",maxWidth:600});function Y(e){ge.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:e})}function Fe(e){ge.show({progressBarColor:"#4FAC40",message:e})}const _="https://your-energy.b.goit.study/api/",ze={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class Ge{constructor({filter:t="muscles",subFilter:s="",keyword:i="",page:r=1,limit:o=8}){this.filter=t,this.subFilter=s,this.keyword=i,this.page=r,this.limit=o,this.id=""}async getFilters(){return(await M.get(`${_}filters`,{params:{filter:ze[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await M.get(`${_}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(t){const s=await M.get(`${_}exercises/${t}`);return this.id=t,s.data}async updateExerciseRating({rate:t,email:s,review:i}){return(await M.patch(`${_}exercises/${this.id}/rating`,{rate:t,email:s,review:i})).data}async getQuote(){return(await M.get(`${_}quote`)).data}async subscribe({email:t}){return(await M.post(`${_}subscription`,{email:t})).data}}const c=new Ge({});function Je(e){e.target.hasAttribute("data-filter")&&F.changeFilter(e.target.dataset.filter)}async function fe(e){if(e.preventDefault(),!e.target.closest("[data-subfilter]"))return;const{subfilter:t}=e.target.closest("[data-subfilter]").dataset;F.goExercises(t)}function Te(e){(e||document).querySelector(".loader").classList.remove("is-hidden")}function Z(e){(e||document).querySelector(".loader").classList.add("is-hidden")}function Ve(e){const t=document.querySelector(".add-favorites-btn");E.isFavorite(e._id)?(E.removeFavorite(e._id),t.style.padding="12px 16px",t.querySelector("span").textContent="Add to favorites",t.querySelector("use").setAttribute("href",he)):(E.addFavorite(e),t.style.padding="12px 9px",t.querySelector("span").textContent="Remove from favorites",t.querySelector("use").setAttribute("href",W))}function We(){return'<span class="loader is-hidden"></span>'}function Pe(e){e&&(e.querySelector(".loader")||e.insertAdjacentHTML("beforeend",We()))}const Xe=/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;function Ze(e,t){const[s,i,r]=t.querySelectorAll(".users_rating, label"),[o,d,h]=t.querySelectorAll(".error");e.rate?(s.classList.add("invalid"),o.textContent=e.rate):(s.classList.remove("invalid"),o.textContent=""),e.email?(i.classList.add("invalid"),d.textContent=e.email):(i.classList.remove("invalid"),d.textContent=""),e.review?(r.classList.add("invalid"),h.textContent=e.review):(r.classList.remove("invalid"),h.textContent="")}function Be({rate:e,email:t,review:s}){const i={isInvalid:!1};return e||(i.isInvalid=!0,i.rate="Please select a rating"),t||(i.isInvalid=!0,i.email="Please enter an email"),Xe.test(t)||(i.isInvalid=!0,i.email="Please enter a valid email"),s||(i.isInvalid=!0,i.review="Please enter a review"),i}async function et(e,t){e.preventDefault();const s=new FormData(e.target),i={rate:Number(s.get("rate")),email:s.get("email"),review:s.get("review")},r=Be(i);if(Ze(r,e.target),!r.isInvalid){e.target.querySelector('[type="submit"]').disabled=!0,Pe(e.target);try{Te(e.target);const o=await c.updateExerciseRating(i);Z(e.target),t()}catch(o){console.log(o),Y("Something went wrong. Please try again later."),Z(e.target),e.target.querySelector('[type="submit"]').disabled=!1}}}function tt(e){const t=e.target.closest(".rating");if(!t)return;const s=t.querySelectorAll('[name="rate"]'),i=t.parentElement.firstElementChild;s.forEach(r=>{r.checked&&(i.textContent=r.value+".0")})}const k={detailsPopup:!1,ratingPopup:!1},ve=e=>e.stopPropagation(),st=(e,{closeCallback:t,submitCallback:s})=>{const i=e.querySelector(".modal__close-btn"),r=e.querySelector(".give_a_rating"),o=e.querySelector(".rating");r.setAttribute("novalidate",!0),o.addEventListener("click",d=>{tt(d)}),i.addEventListener("click",()=>{t()}),r.addEventListener("submit",d=>{d.preventDefault(),s(d)})},ee=e=>{var t,s;k.detailsPopup=!1,k.ratingPopup=!1,e==null||e.classList.add("is-hidden"),(t=e==null?void 0:e.querySelector("[data-modal]"))==null||t.remove(),(s=e==null?void 0:e.querySelector(".exercise-modal"))==null||s.remove(),document.documentElement.classList.remove("no-scroll")},Ie=(e,t,s)=>{var i;t.remove(),(i=e.querySelector("[data-modal]"))==null||i.remove(),k.ratingPopup=!1,e.append(s)},ye=(e,t,s)=>{switch(!0){case(k.detailsPopup&&!k.ratingPopup):ee(e);return;case(k.detailsPopup&&k.ratingPopup):Ie(e,t,s);return;default:ee(e);return}},it=(e,t,s)=>{s.insertAdjacentHTML("beforeend",e);const i=s.querySelector(".exercise-modal"),r=s.querySelector(".exercise-card-close-btn"),o=s.querySelector(".add-rating-btn"),d=s.querySelector(".add-favorites-btn"),h=document.querySelector("#modal-template").content.firstElementChild.cloneNode(!0),A=r.querySelector("use").getAttribute("href");h.querySelector("use").setAttribute("href",A),window.addEventListener("keydown",v=>{v.code==="Escape"&&ye(s,h,i)}),s.addEventListener("click",()=>{ye(s,h,i)}),i.addEventListener("click",ve),h.addEventListener("click",ve),r.addEventListener("click",()=>{ee(s)}),o.addEventListener("click",()=>{var v;k.ratingPopup=!0,(v=s==null?void 0:s.querySelector(".exercise-modal"))==null||v.remove(),s.append(h)}),d.addEventListener("click",v=>{Ve(t)}),st(h,{closeCallback:()=>Ie(s,h,i),submitCallback:v=>et(v,()=>{ee(s),Fe("Thank you for your feedback!")})}),document.documentElement.classList.add("no-scroll"),k.detailsPopup=!0};async function oe(e){if(e.preventDefault(),!e.target.closest("[data-id]")||e.target.closest("[data-delete]")||e.target.closest("[data-add]"))return;const t=document.querySelector(".exercise-modal-backdrop");t.classList.remove("is-hidden");try{const s=e.target.closest("[data-id]").dataset.id;Pe(t),Te(t);const i=await c.getExerciseById(s);Z(t);const r=Ye(i),o=it(r,i,t)}catch(s){console.error(s),Y("Something went wrong. Please try again later."),Z(t)}}function rt({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);F.changePage(t)}const be=document.querySelector(".footer-error");async function at(e){e.preventDefault();const t=new FormData(e.currentTarget),s={};t.forEach((r,o)=>{s[o]=r});const{email:i}=Be({email:s.subscribe});if(i)be.classList.remove("visually-hidden");else{e.currentTarget.reset(),be.classList.add("visually-hidden");try{const r=await c.subscribe({email:s.subscribe});Fe(r.message)}catch(r){Y(r.response.data.message)}}}let ne,D;function Se(e){e.target===a.policyBtn&&(D=document.querySelector(".js-policy-modal"),ne=document.querySelector(".js-policy-modal-close")),e.target===a.termsBtn&&(D=document.querySelector(".js-terms-modal"),ne=document.querySelector(".js-terms-modal-close")),te(),D.addEventListener("click",nt),ne.addEventListener("click",te),window.addEventListener("keydown",Ae)}function Ae(e){e.code==="Escape"&&te()}function nt(e){e.target===D&&te()}function te(){D.classList.toggle("is-hidden"),document.documentElement.classList.toggle("no-scroll"),window.removeEventListener("keydown",Ae)}function xe(){const e=a.searchForm.exercise.value.trim();F.goSearch(e)}function Ee(){this.setAttribute("value",""),F.resetSearch()}function se(e){if(e==="top")window.scrollTo({top:0,behavior:"smooth"});else{const t=e;if(t){const s=t.getBoundingClientRect();if(s.top>=0&&s.bottom<=(window.innerHeight||document.documentElement.clientHeight))return;window.scrollBy({top:s.top-20,behavior:"smooth"})}}}function ht(){se("top")}function mt(){const{scrollTopBtn:e}=a;if(window.scrollY<100){e.classList.replace("js-scroll-top-button-active","hide-scroll-top-button");return}else e.classList.replace("hide-scroll-top-button","js-scroll-top-button-active");const t=document.documentElement.scrollTop||document.body.scrollTop,s=document.documentElement.scrollHeight-document.documentElement.clientHeight,i=t/s*100;e.style.background=`conic-gradient(rgba(244, 244, 244, 1) ${i}%, #242424 ${i}%)`}async function Le(e){F.goBack()}function ot({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);E.changePage(t)}function pt(e){e.currentTarget===a.btnOpenBurger&&(a.burgerMenu.classList.remove("is-hidden"),document.querySelector("html").classList.add("no-scroll")),e.currentTarget===a.btnCloseBurger&&(a.burgerMenu.classList.add("is-hidden"),document.querySelector("html").classList.remove("no-scroll"))}function le(e){if(e.preventDefault(),!e.target.closest("[data-delete]"))return;const t=e.target.closest("[data-delete]"),s=t.nextElementSibling,i=t.dataset.delete;if(!E.isFavorite(i))return;E.removeFavorite(i),a.body.dataset.page==="home"&&(t.classList.add("is-hidden"),s.classList.remove("is-hidden"))}async function we(e){if(e.preventDefault(),!e.target.closest("[data-add]"))return;const t=e.target.closest("[data-add]"),s=t.previousElementSibling,i=t.dataset.add;E.isFavorite(i)||(c.getExerciseById(i).then(o=>E.addFavorite(o)),t.classList.add("is-hidden"),s.classList.remove("is-hidden"))}const Me={mobile:{subfilters:9,exercises:8,favorites:8},tablet:{subfilters:12,exercises:10,favorites:10},desktop:{subfilters:12,exercises:10,favorites:999}};let $e=je(window.screen.width);const ft=new ResizeObserver(e=>{let t=je(e[0].devicePixelContentBoxSize[0].inlineSize);$e!==t&&($e=t,F.refreshLimits(Me[t]))});function _e(){let e="desktop";return window.screen.width<768&&(e="mobile"),window.screen.width>=768&&window.screen.width<1440&&(e="tablet"),Me[e]}function je(e){let t="desktop";return e<768&&(t="mobile"),e>=768&&e<1440&&(t="tablet"),t}var p,L,w,T,y,b,S,$,B,Q,ce,R,V,N,de;class lt{constructor({state:t,filter:s,subfiltersPage:i,subfilter:r,searchQuery:o,exercisesPage:d,limits:h}){g(this,$);g(this,Q);g(this,R);g(this,N);g(this,p,void 0);g(this,L,void 0);g(this,w,void 0);g(this,T,void 0);g(this,y,void 0);g(this,b,void 0);g(this,S,void 0);l(this,p,t),l(this,L,s),l(this,w,i),l(this,T,r),l(this,y,o),l(this,b,d),l(this,S,h)}load(){switch(Oe(),c.limit=n(this,S)[n(this,p)],c.filter=n(this,L),n(this,p)){case"subfilters":c.page=n(this,w),H(),u(this,R,V).call(this);break;case"exercises":c.subFilter=n(this,T),c.keyword=n(this,y),c.page=n(this,b),a.searchForm.elements.exercise.setAttribute("value",n(this,y)),j(),u(this,Q,ce).call(this,n(this,T));break}a.pagination.addEventListener("click",rt),a.body.dataset.page==="home"&&(u(this,N,de).call(this,n(this,L)),a.filter.addEventListener("click",Je),a.subscribeForm.addEventListener("submit",at),a.policyBtn.addEventListener("click",Se),a.termsBtn.addEventListener("click",Se))}changeFilter(t){c.filter=t,c.page=1,c.limit=n(this,S).subfilters,H(),u(this,N,de).call(this,t,n(this,L)),l(this,p,"subfilters"),l(this,L,t),l(this,w,1),u(this,R,V).call(this),u(this,$,B).call(this)}goExercises(t){c.subFilter=t,c.keyword="",c.page=1,c.limit=n(this,S).exercises,j(),l(this,p,"exercises"),l(this,T,t),l(this,y,""),l(this,b,1),u(this,Q,ce).call(this,t),u(this,$,B).call(this),se(a.gallerySubtitle)}goBack(){c.page=n(this,w),c.limit=n(this,S).subfilters,H(),l(this,p,"subfilters"),u(this,R,V).call(this),u(this,$,B).call(this)}changePage(t){switch(c.page=t,n(this,p)){case"subfilters":H(),l(this,w,t);break;case"exercises":j(),l(this,b,t);break}u(this,$,B).call(this),se(a.gallerySubtitle)}goSearch(t){c.keyword=t,c.page=1,j(),l(this,y,t),l(this,b,1),u(this,$,B).call(this)}resetSearch(){c.keyword="",c.page=1,j(),l(this,y,""),l(this,b,1),u(this,$,B).call(this)}refreshLimits(t){if(t[n(this,p)]!==n(this,S)[n(this,p)])switch(c.limit=t[n(this,p)],n(this,p)){case"subfilters":H();break;case"exercises":j();break}l(this,S,t)}}p=new WeakMap,L=new WeakMap,w=new WeakMap,T=new WeakMap,y=new WeakMap,b=new WeakMap,S=new WeakMap,$=new WeakSet,B=function(){sessionStorage.setItem(m.SS_KEY_FILTERS,JSON.stringify({state:n(this,p),filter:n(this,L),subfiltersPage:n(this,w),subfilter:n(this,T),searchQuery:n(this,y),exercisesPage:n(this,b)}))},Q=new WeakSet,ce=function(t){a.gallery.dataset.cards="exercises",a.backBtn.classList.remove("back-button-hidden"),a.searchForm.classList.remove("search-form-hidden"),a.gallerySubtitle.innerHTML=`<span class="exercises-title">&nbsp;/</span><h3 class="exercises-subtitle">${t}</h3>`,a.gallery.addEventListener("click",oe),a.backBtn.addEventListener("click",Le),a.gallery.addEventListener("click",we),a.gallery.addEventListener("click",le),a.searchForm.addEventListener("input",pe(xe,1e3,{leading:!1,trailing:!0})),a.resetSearchForm.addEventListener("click",Ee),a.gallery.removeEventListener("click",fe),a.searchForm.reset()},R=new WeakSet,V=function(){a.gallery.dataset.cards="subfilters",a.backBtn.classList.add("back-button-hidden"),a.searchForm.classList.add("search-form-hidden"),a.gallerySubtitle.innerHTML="",a.gallery.addEventListener("click",fe),a.gallery.removeEventListener("click",oe),a.backBtn.removeEventListener("click",Le),a.gallery.removeEventListener("click",we),a.gallery.removeEventListener("click",le),a.searchForm.removeEventListener("input",pe(xe,1e3,{leading:!1,trailing:!0})),a.resetSearchForm.removeEventListener("click",Ee)},N=new WeakSet,de=function(t,s){[...a.filter.children].forEach(({firstElementChild:i})=>{switch(i.dataset.filter){case t:i.classList.add("filter-button-active");break;case s:i.classList.remove("filter-button-active");break}})};const F=new lt({...JSON.parse(sessionStorage.getItem(m.SS_KEY_FILTERS))??{state:"subfilters",filter:"muscles",subfiltersPage:1,subfilter:"",searchQuery:"",exercisesPage:1},limits:_e()});async function j(){a.gallery.classList.add("unmounting");try{const{results:e,page:t,totalPages:s}=await c.getExercises();if(!s){a.gallery.innerHTML=X(),I(0,0);return}if(t>s){F.changePage(s);return}a.gallery.innerHTML=ke(e),I(Number(t),s)}catch{Y(m.ERROR_MESSAGE),a.gallery.innerHTML=X(),I(0,0)}finally{a.gallery.classList.remove("unmounting")}}async function H(){a.gallery.classList.add("unmounting");try{const{results:e,page:t,totalPages:s}=await c.getFilters();if(!s){a.gallery.innerHTML=X(),I(0,0);return}if(t>s){F.changePage(s);return}a.gallery.innerHTML=Ue(e),I(Number(t),s)}catch{Y(m.ERROR_MESSAGE),a.gallery.innerHTML=X(),I(0,0)}finally{a.gallery.classList.remove("unmounting")}}async function Oe(e){const t=new Date,s=`${t.getDate()}/${t.getMonth()}/${t.getFullYear()}`;let i;const r=JSON.parse(localStorage.getItem(m.LS_KEY_QUOTE));if(r)if(s!==r.date){try{i=await c.getQuote(),i.quote=i.quote||m.BASE_QUOTE.quote,i.author=i.author||"Unknown"}catch{a.quote.insertAdjacentHTML("beforeend",U(m.BASE_QUOTE,e));return}i.author!=="Unknown"&&i.quote!==m.BASE_QUOTE.quote&&(i.date=s,localStorage.setItem(m.LS_KEY_QUOTE,JSON.stringify(i))),a.quote.insertAdjacentHTML("beforeend",U(i,e))}else a.quote.insertAdjacentHTML("beforeend",U(r,e));else{try{i=await c.getQuote(),i.quote=i.quote||m.BASE_QUOTE.quote,i.author=i.author||"Unknown"}catch{a.quote.insertAdjacentHTML("beforeend",U(m.BASE_QUOTE,e));return}i.author!=="Unknown"&&i.quote!==m.BASE_QUOTE.quote&&(i.date=s,localStorage.setItem(m.LS_KEY_QUOTE,JSON.stringify(i))),a.quote.insertAdjacentHTML("beforeend",U(i,e))}}function ct(e,t,s){a.gallery.classList.add("unmounting"),e.length?(a.gallery.innerHTML=ke(e,"favorites"),I(t,s)):a.gallery.innerHTML="<li class='list-empty'><p>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p></li>",a.gallery.classList.remove("unmounting")}var f,x,q,C,ie,Re,K,ue,P,O;class dt{constructor(t,s,i,r){g(this,ie);g(this,K);g(this,P);g(this,f,void 0);g(this,x,void 0);g(this,q,void 0);g(this,C,void 0);l(this,f,t),l(this,x,s),l(this,q,i),l(this,C,r)}load(){Oe("favorite"),u(this,P,O).call(this),a.gallery.addEventListener("click",oe),a.gallery.addEventListener("click",le),a.pagination.addEventListener("click",ot)}isFavorite(t){return n(this,f).some(s=>s._id===t)}removeFavorite(t){const s=n(this,f).map(i=>i._id).indexOf(t);n(this,f).splice(s,1),u(this,K,ue).call(this),n(this,C)==="favorites"&&u(this,P,O).call(this)}addFavorite(t){n(this,f).push(t),u(this,K,ue).call(this),n(this,C)==="favorites"&&u(this,P,O).call(this)}changePage(t){l(this,x,t),u(this,P,O).call(this),se(a.gallery)}refreshLimits(t){t.favorites!==n(this,q)&&(l(this,q,t.favorites),u(this,P,O).call(this))}}f=new WeakMap,x=new WeakMap,q=new WeakMap,C=new WeakMap,ie=new WeakSet,Re=function(){sessionStorage.setItem(m.SS_KEY_FAVORITES,n(this,x))},K=new WeakSet,ue=function(){localStorage.setItem(m.LS_KEY_FAVORITES,JSON.stringify(n(this,f)))},P=new WeakSet,O=function(){const t=Math.ceil(n(this,f).length/n(this,q));t&&n(this,x)>t&&l(this,x,t);const s=[...n(this,f)].splice((n(this,x)-1)*n(this,q),n(this,q));ct(s,n(this,x),t),u(this,ie,Re).call(this)};const E=new dt(JSON.parse(localStorage.getItem(m.LS_KEY_FAVORITES))??[],parseInt(sessionStorage.getItem(m.SS_KEY_FAVORITES))||1,_e().favorites,a.body.dataset.page);export{ht as a,mt as b,a as e,E as f,F as g,pt as h,ft as r};
//# sourceMappingURL=favorites-page-97f10668.js.map
