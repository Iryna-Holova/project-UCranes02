var ae=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var n=(t,e,s)=>(ae(t,e,"read from private field"),s?s.call(t):e.get(t)),g=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},l=(t,e,s,i)=>(ae(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s);var u=(t,e,s)=>(ae(t,e,"access private method"),s);import{i as ge,a as j,l as pe}from"./vendor-243d56f5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const m={SS_KEY_FILTERS:"user filters",SS_KEY_FAVORITES:"favorites-page",LS_KEY_FAVORITES:"favorites",LS_KEY_QUOTE:"quote",BASE_QUOTE:{author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."},ERROR_MESSAGE:"Something goes wrong!"},a={body:document.querySelector("body"),burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),gallerySubtitle:document.querySelector(".js-subtitle"),pagination:document.querySelector(".js-pagination"),searchForm:document.querySelector(".js-search-form"),resetSearchForm:document.querySelector(".js-reset-form"),backBtn:document.querySelector(".js-back-button"),subscribeForm:document.querySelector(".js-subscribe-form"),quote:document.querySelector(".js-quote"),policyBtn:document.querySelector(".js-policy-modal-open"),termsBtn:document.querySelector(".js-terms-modal-open"),scrollTopBtn:document.querySelector(".js-scroll-top-button"),btnCloseBurger:document.querySelector(".mobile-menu-close-btn"),btnOpenBurger:document.querySelector(".mobile-menu-open-btn"),burgerMenu:document.querySelector(".mobile-menu-backdrop"),favoritesAnchor:document.querySelector(".js-anchor")};function He(t){return t.map(({filter:e,name:s,imgURL:i})=>`<li class="exercises-item">
      <a data-subfilter="${s}" class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${i}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${e}</p>
        </div>
      </a>
    </li>`).join("")}const W="/project-UCranes02/assets/icons-627bb2e4.svg#icon-remove",ke="/project-UCranes02/assets/icons-627bb2e4.svg#icon-star",De="/project-UCranes02/assets/icons-627bb2e4.svg#icon-arrow",Qe="/project-UCranes02/assets/icons-627bb2e4.svg#icon-run-man",he="/project-UCranes02/assets/icons-627bb2e4.svg#icon-heart";function Fe(t,e){return t.map(({_id:s,bodyPart:i,name:r,target:o,rating:d,burnedCalories:h,time:B})=>`
         <li class="main-item_card-exercises">
      <a class="link-exercise-card" href="" data-id="${s}">
        <!-- Top place card -->
        <div class="card-cont-content">
          <div class="cont-rating-btn-title">
            <div class="const-text-exer">
              <p class="text-card-exer">WORKOUT</p>
            </div>
            ${e==="favorites"?`
                <button class="btn-delete-card" type="button" data-delete="${s}">
                <svg class="icon-delete-favorite" width="16" height="16">
                  <use href="${W}"></use>
                </svg>
                </button>
              `:`
            <div class="btn-card-group">
               <button class="btn-delete-card ${v.isFavorite(s)?"":"is-hidden"}" type="button" data-delete="${s}">
                <svg class="icon-delete-favorite" width="16" height="16">
                  <use href="${W}"></use>
                </svg>
                </button>
                <button class="btn-add-card ${v.isFavorite(s)?"is-hidden":""}"" type="button" data-add="${s}">
                <svg class="icon-add-favorite" width="16" height="16">
                 <use href="${he}"></use>
               </svg>
               </button>
            </div>  
                <div class="cont-card-rating">
                  <p class="card-rating-exer">${d}</p>
                  <svg class="icon-card-exer" width="18" height="18">
                     <use href="${ke}"></use>
                  </svg>
                </div>
              `}
            <div class="block-btn-icon-exer">
              <button class="btn-card-exer">Start</button>
              <svg class="icon-card-btn" width="16" height="16">
                <use href="${De}"></use>
              </svg>
            </div>
          </div>
          <!-- Middle place card -->
          <div class="cont-icon-name-text">
            <svg class="icon-people-card" width="24" height="24">
              <use href="${Qe}"></use>
            </svg>
            <p class="text-name-exercises-card">${r}</p>
          </div>
          <!-- End place card -->
          <ul class="list-info-exer">
            <li class="item-card-exer">
              <p class="text-title-item-exer big">Burned calories:</p>
              <p class="text-info-exer size-time">${h}/${B}</p>
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
    </li>`).join("")}function Ne(t,e){let s=[],i=[];if(e<=5)for(let r=1;r<=e;r+=1)J(r,t)?s.push(`<li class="elm"><button type="button" disabled class="pagination-el ${J(r,t)?"active":"unactive"}" data-page="${r}" >${r}</button></li>`):s.push(`<li class="elm"><button type="button" class="pagination-el ${J(r,t)?"active":"unactive"}" data-page="${r}" >${r}</button></li>`);else{const r=Math.max(Math.min(t-2,e-4),1),o=Math.min(r+4,e);for(let d=r;d<=o;d+=1)i.push(d),J(d,t)?s.push(`<li class="elm"><button type="button" class="pagination-el active" disabled data-page="${d}" >${d}</button></li>`):s.push(`<li class="elm"><button type="button" class="pagination-el unactive"  data-page="${d}" >${d}</button></li>`);i.includes(1)||s.unshift('<li class="elm"><button type="button" class="pagination-el unactive"  data-page="1" >1</button>&nbsp;&nbsp;...</li>'),i.includes(e)||s.push(`<li class="elm">...&nbsp;&nbsp;<button type="button" class="pagination-el unactive"  data-page="${e}">${e}</button></li>`)}return s.join("")}function J(t,e){return t===e}const Ke="/project-UCranes02/assets/icons-627bb2e4.svg#icon-close",Ye="/project-UCranes02/assets/icons-627bb2e4.svg#icon-camera";function ze({bodyPart:t,equipment:e,gifUrl:s,name:i,target:r,description:o,rating:d,burnedCalories:h,time:B,popularity:b,_id:Ue}){let z=Math.round(d),G=!1;const me=JSON.parse(localStorage.getItem("favorites"));return me&&(G=me.some(re=>re._id===Ue)),`
    <div class="exercise-modal">
        <button class="exercise-card-close-btn" type="button">
            <svg class="exercise-card-close-icon" aria-label="Modal window close icon">
                <use href="${Ke}"></use>
            </svg>
        </button>
        <div class="exercise-card">
            <div class="exercise-card-img-wrap">
            ${s?`<img src=${s} alt="Exercise image">`:`
            <div class="exercise-card-no-img-wrap">
              <svg class="exercise-card-no-img" aria-label="No image">
                  <use class="exercise-card-no-img-icon" href="${Ye}"></use>
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
                            <use href="${ke}"></use>
                        </svg>`).join("")}
                          </div>`:""}
                            
                        <ul class="exercise-card-details-list">
                        ${r?`<li class="exercise-card-details-item">
                        <p class="details-name">Target</p>
                        <p class="details-value">${r}</p>
                        </li>`:""}
                        ${t?`<li class="exercise-card-details-item">
                              <p class="details-name">Body Part</p>
                              <p class="details-value">${t}</p>
                          </li>`:""}
                          ${e?`<li class="exercise-card-details-item">
                              <p class="details-name">Equipment</p>
                              <p class="details-value">${e}</p>
                          </li>`:""}
                          ${b?`<li class="exercise-card-details-item">
                              <p class="details-name">Popular</p>
                              <p class="details-value">${b}</p>
                          </li>`:""}
                          ${h&&B?`<li class="exercise-card-details-item">
                              <p class="details-name">Burned calories</p>
                              <p class="details-value">${h}/${B} min</p>
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
    </div>`}function U({author:t,quote:e},s){return`
          ${s==="favorite"?`<p class="favorite-text-quote">${e}</p>`:`<p class="text-quote list-item-text">${e}</p>`}
          <p class="autor-quote list-item-text">${t}</p>
        `}const fe="/project-UCranes02/assets/not-found-gallery-desktop-588ba661.jpg",Ge="/project-UCranes02/assets/not-found-gallery-desktop@2x-c96f61f2.jpg",Je="/project-UCranes02/assets/not-found-gallery-tablet-5ef0b81f.jpg",Ve="/project-UCranes02/assets/not-found-gallery-tablet@2x-2158ce91.jpg",We="/project-UCranes02/assets/not-found-gallery-mobile-02f7fa11.jpg",Xe="/project-UCranes02/assets/not-found-gallery-mobile@2x-a7ec8ef8.jpg";function X(){return`<li class='not-found-gallery'><picture>
    <source media="(min-width: 1440px)" srcset="${fe}, ${Ge} 2x" />
    <source media="(min-width: 768px)" srcset="${Je}, ${Ve} 2x" />
    <source srcset="${We}, ${Xe} 2x" />
    <img src="${fe}" alt="Exercises not found" />
  </picture></li>`}function A(t,e){a.pagination.innerHTML=Ne(t,e)}ge.settings({timeout:5e3,resetOnHover:!0,position:"topCenter",transitionIn:"flipInX",transitionOut:"flipOutX",theme:"dark",backgroundColor:"#242424",maxWidth:600});function Y(t){ge.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:t})}function Te(t){ge.show({progressBarColor:"#4FAC40",message:t})}const M="https://your-energy.b.goit.study/api/",Ze={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class et{constructor({filter:e="muscles",subFilter:s="",keyword:i="",page:r=1,limit:o=8}){this.filter=e,this.subFilter=s,this.keyword=i,this.page=r,this.limit=o,this.id=""}async getFilters(){return(await j.get(`${M}filters`,{params:{filter:Ze[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await j.get(`${M}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(e){const s=await j.get(`${M}exercises/${e}`);return this.id=e,s.data}async updateExerciseRating({rate:e,email:s,review:i}){return(await j.patch(`${M}exercises/${this.id}/rating`,{rate:e,email:s,review:i})).data}async getQuote(){return(await j.get(`${M}quote`)).data}async subscribe({email:e}){return(await j.post(`${M}subscription`,{email:e})).data}}const c=new et({});function tt(t){t.target.hasAttribute("data-filter")&&F.changeFilter(t.target.dataset.filter)}async function ve(t){if(t.preventDefault(),!t.target.closest("[data-subfilter]"))return;const{subfilter:e}=t.target.closest("[data-subfilter]").dataset;F.goExercises(e)}function Ie(t){(t||document).querySelector(".loader").classList.remove("is-hidden")}function Z(t){(t||document).querySelector(".loader").classList.add("is-hidden")}function st(t){const e=document.querySelector(".add-favorites-btn");v.isFavorite(t._id)?(v.removeFavorite(t._id),e.style.padding="12px 16px",e.querySelector("span").textContent="Add to favorites",e.querySelector("use").setAttribute("href",he)):(v.addFavorite(t),e.style.padding="12px 9px",e.querySelector("span").textContent="Remove from favorites",e.querySelector("use").setAttribute("href",W))}function it(){return'<span class="loader is-hidden"></span>'}function Pe(t){t&&(t.querySelector(".loader")||t.insertAdjacentHTML("beforeend",it()))}const rt=/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;function at(t,e){const[s,i,r]=e.querySelectorAll(".users_rating, label"),[o,d,h]=e.querySelectorAll(".error");t.rate?(s.classList.add("invalid"),o.textContent=t.rate):(s.classList.remove("invalid"),o.textContent=""),t.email?(i.classList.add("invalid"),d.textContent=t.email):(i.classList.remove("invalid"),d.textContent=""),t.review?(r.classList.add("invalid"),h.textContent=t.review):(r.classList.remove("invalid"),h.textContent="")}function Ae({rate:t,email:e,review:s}){const i={isInvalid:!1};return t||(i.isInvalid=!0,i.rate="Please select a rating"),e||(i.isInvalid=!0,i.email="Please enter an email"),rt.test(e)||(i.isInvalid=!0,i.email="Please enter a valid email"),s||(i.isInvalid=!0,i.review="Please enter a review"),i}async function nt(t,e){t.preventDefault();const s=new FormData(t.target),i={rate:Number(s.get("rate")),email:s.get("email"),review:s.get("review")},r=Ae(i);if(at(r,t.target),!r.isInvalid){t.target.querySelector('[type="submit"]').disabled=!0,Pe(t.target);try{Ie(t.target);const o=await c.updateExerciseRating(i);Z(t.target),e()}catch(o){console.log(o),Y("Something went wrong. Please try again later."),Z(t.target),t.target.querySelector('[type="submit"]').disabled=!1}}}function ot(t){const e=t.target.closest(".rating");if(!e)return;const s=e.querySelectorAll('[name="rate"]'),i=e.parentElement.firstElementChild;s.forEach(r=>{r.checked&&(i.textContent=r.value+".0")})}const k={detailsPopup:!1,ratingPopup:!1},be=t=>t.stopPropagation(),lt=(t,{closeCallback:e,submitCallback:s})=>{const i=t.querySelector(".modal__close-btn"),r=t.querySelector(".give_a_rating"),o=t.querySelector(".rating");r.setAttribute("novalidate",!0),o.addEventListener("click",d=>{ot(d)}),i.addEventListener("click",()=>{e()}),r.addEventListener("submit",d=>{d.preventDefault(),s(d)})},ee=t=>{var e,s;k.detailsPopup=!1,k.ratingPopup=!1,t==null||t.classList.add("is-hidden"),(e=t==null?void 0:t.querySelector("[data-modal]"))==null||e.remove(),(s=t==null?void 0:t.querySelector(".exercise-modal"))==null||s.remove(),document.documentElement.classList.remove("no-scroll")},Be=(t,e,s)=>{var i;e.remove(),(i=t.querySelector("[data-modal]"))==null||i.remove(),k.ratingPopup=!1,t.append(s)},ye=(t,e,s)=>{switch(!0){case(k.detailsPopup&&!k.ratingPopup):ee(t);return;case(k.detailsPopup&&k.ratingPopup):Be(t,e,s);return;default:ee(t);return}},ct=(t,e,s)=>{s.insertAdjacentHTML("beforeend",t);const i=s.querySelector(".exercise-modal"),r=s.querySelector(".exercise-card-close-btn"),o=s.querySelector(".add-rating-btn"),d=s.querySelector(".add-favorites-btn"),h=document.querySelector("#modal-template").content.firstElementChild.cloneNode(!0),B=r.querySelector("use").getAttribute("href");h.querySelector("use").setAttribute("href",B),window.addEventListener("keydown",b=>{b.code==="Escape"&&ye(s,h,i)}),s.addEventListener("click",()=>{ye(s,h,i)}),i.addEventListener("click",be),h.addEventListener("click",be),r.addEventListener("click",()=>{ee(s)}),o.addEventListener("click",()=>{var b;k.ratingPopup=!0,(b=s==null?void 0:s.querySelector(".exercise-modal"))==null||b.remove(),s.append(h)}),d.addEventListener("click",b=>{st(e)}),lt(h,{closeCallback:()=>Be(s,h,i),submitCallback:b=>nt(b,()=>{ee(s),Te("Thank you for your feedback!")})}),document.documentElement.classList.add("no-scroll"),k.detailsPopup=!0};async function oe(t){if(t.preventDefault(),!t.target.closest("[data-id]")||t.target.closest("[data-delete]")||t.target.closest("[data-add]"))return;const e=document.querySelector(".exercise-modal-backdrop");e.classList.remove("is-hidden");try{const s=t.target.closest("[data-id]").dataset.id;Pe(e),Ie(e);const i=await c.getExerciseById(s);Z(e);const r=ze(i),o=ct(r,i,e)}catch(s){console.error(s),Y("Something went wrong. Please try again later."),Z(e)}}function dt({target:t}){if(!t.hasAttribute("data-page"))return;const e=parseInt(t.dataset.page);F.changePage(e)}const Se=document.querySelector(".footer-error");async function ut(t){t.preventDefault();const e=new FormData(t.currentTarget),s={};e.forEach((r,o)=>{s[o]=r});const{email:i}=Ae({email:s.subscribe});if(i)Se.classList.remove("visually-hidden");else{t.currentTarget.reset(),Se.classList.add("visually-hidden");try{const r=await c.subscribe({email:s.subscribe});Te(r.message)}catch(r){Y(r.response.data.message)}}}let ne,D;function xe(t){t.target===a.policyBtn&&(D=document.querySelector(".js-policy-modal"),ne=document.querySelector(".js-policy-modal-close")),t.target===a.termsBtn&&(D=document.querySelector(".js-terms-modal"),ne=document.querySelector(".js-terms-modal-close")),te(),D.addEventListener("click",gt),ne.addEventListener("click",te),window.addEventListener("keydown",je)}function je(t){t.code==="Escape"&&te()}function gt(t){t.target===D&&te()}function te(){D.classList.toggle("is-hidden"),document.documentElement.classList.toggle("no-scroll"),window.removeEventListener("keydown",je)}function Ee(){const t=a.searchForm.exercise.value.trim();F.goSearch(t)}function Le(){this.setAttribute("value",""),F.resetSearch()}function se(t){if(t==="top")window.scrollTo({top:0,behavior:"smooth"});else{const e=t;if(e){const s=e.getBoundingClientRect();if(s.top>=0&&s.bottom<=(window.innerHeight||document.documentElement.clientHeight))return;window.scrollBy({top:s.top-20,behavior:"smooth"})}}}function yt(){se("top")}function St(){const{scrollTopBtn:t}=a;if(window.scrollY<100){t.classList.replace("js-scroll-top-button-active","hide-scroll-top-button");return}else t.classList.replace("hide-scroll-top-button","js-scroll-top-button-active");const e=document.documentElement.scrollTop||document.body.scrollTop,s=document.documentElement.scrollHeight-document.documentElement.clientHeight,i=e/s*100;t.style.background=`conic-gradient(rgba(244, 244, 244, 1) ${i}%, #242424 ${i}%)`}async function we(t){F.goBack()}function ht({target:t}){if(!t.hasAttribute("data-page"))return;const e=parseInt(t.dataset.page);v.changePage(e)}function xt(t){t.currentTarget===a.btnOpenBurger&&(a.burgerMenu.classList.remove("is-hidden"),document.querySelector("html").classList.add("no-scroll")),t.currentTarget===a.btnCloseBurger&&(a.burgerMenu.classList.add("is-hidden"),document.querySelector("html").classList.remove("no-scroll"))}function le(t){if(t.preventDefault(),!t.target.closest("[data-delete]"))return;const e=t.target.closest("[data-delete]"),s=e.dataset.delete;if(a.body.dataset.page==="home"){const r=e.nextElementSibling;if(e.classList.add("is-hidden"),r.classList.remove("is-hidden"),!v.isFavorite(s))return;v.removeFavorite(s)}else e.disabled=!0,e.closest("[data-id]").classList.add("unmounting"),setTimeout(()=>{v.removeFavorite(s)},250)}async function $e(t){if(t.preventDefault(),!t.target.closest("[data-add]"))return;const e=t.target.closest("[data-add]"),s=e.previousElementSibling,i=e.dataset.add;v.isFavorite(i)||(c.getExerciseById(i).then(o=>v.addFavorite(o)),e.classList.add("is-hidden"),s.classList.remove("is-hidden"))}const Me={mobile:{subfilters:9,exercises:8,favorites:8},tablet:{subfilters:12,exercises:10,favorites:10},desktop:{subfilters:12,exercises:10,favorites:999}};let qe=Oe(window.screen.width);const Et=new ResizeObserver(t=>{let e=Oe(t[0].devicePixelContentBoxSize[0].inlineSize);qe!==e&&(qe=e,F.refreshLimits(Me[e]))});function _e(){let t="desktop";return window.screen.width<768&&(t="mobile"),window.screen.width>=768&&window.screen.width<1440&&(t="tablet"),Me[t]}function Oe(t){let e="desktop";return t<768&&(e="mobile"),t>=768&&t<1440&&(e="tablet"),e}var p,L,w,T,y,S,x,$,P,Q,ce,R,V,N,de;class mt{constructor({state:e,filter:s,subfiltersPage:i,subfilter:r,searchQuery:o,exercisesPage:d,limits:h}){g(this,$);g(this,Q);g(this,R);g(this,N);g(this,p,void 0);g(this,L,void 0);g(this,w,void 0);g(this,T,void 0);g(this,y,void 0);g(this,S,void 0);g(this,x,void 0);l(this,p,e),l(this,L,s),l(this,w,i),l(this,T,r),l(this,y,o),l(this,S,d),l(this,x,h)}load(){switch(Re(),c.limit=n(this,x)[n(this,p)],c.filter=n(this,L),n(this,p)){case"subfilters":c.page=n(this,w),H(),u(this,R,V).call(this);break;case"exercises":c.subFilter=n(this,T),c.keyword=n(this,y),c.page=n(this,S),a.searchForm.elements.exercise.setAttribute("value",n(this,y)),_(),u(this,Q,ce).call(this,n(this,T));break}a.pagination.addEventListener("click",dt),a.body.dataset.page==="home"&&(u(this,N,de).call(this,n(this,L)),a.filter.addEventListener("click",tt),a.subscribeForm.addEventListener("submit",ut),a.policyBtn.addEventListener("click",xe),a.termsBtn.addEventListener("click",xe))}changeFilter(e){c.filter=e,c.page=1,c.limit=n(this,x).subfilters,H(),u(this,N,de).call(this,e,n(this,L)),l(this,p,"subfilters"),l(this,L,e),l(this,w,1),u(this,R,V).call(this),u(this,$,P).call(this)}goExercises(e){c.subFilter=e,c.keyword="",c.page=1,c.limit=n(this,x).exercises,_(),l(this,p,"exercises"),l(this,T,e),l(this,y,""),l(this,S,1),u(this,Q,ce).call(this,e),u(this,$,P).call(this),se(a.gallerySubtitle)}goBack(){c.page=n(this,w),c.limit=n(this,x).subfilters,H(),l(this,p,"subfilters"),u(this,R,V).call(this),u(this,$,P).call(this)}changePage(e){switch(c.page=e,n(this,p)){case"subfilters":H(),l(this,w,e);break;case"exercises":_(),l(this,S,e);break}u(this,$,P).call(this),se(a.gallerySubtitle)}goSearch(e){c.keyword=e,c.page=1,_(),l(this,y,e),l(this,S,1),u(this,$,P).call(this)}resetSearch(){c.keyword="",c.page=1,_(),l(this,y,""),l(this,S,1),u(this,$,P).call(this)}refreshLimits(e){if(e[n(this,p)]!==n(this,x)[n(this,p)])switch(c.limit=e[n(this,p)],n(this,p)){case"subfilters":H();break;case"exercises":_();break}l(this,x,e)}}p=new WeakMap,L=new WeakMap,w=new WeakMap,T=new WeakMap,y=new WeakMap,S=new WeakMap,x=new WeakMap,$=new WeakSet,P=function(){sessionStorage.setItem(m.SS_KEY_FILTERS,JSON.stringify({state:n(this,p),filter:n(this,L),subfiltersPage:n(this,w),subfilter:n(this,T),searchQuery:n(this,y),exercisesPage:n(this,S)}))},Q=new WeakSet,ce=function(e){a.gallery.dataset.cards="exercises",a.backBtn.classList.remove("back-button-hidden"),a.searchForm.classList.remove("search-form-hidden"),a.gallerySubtitle.innerHTML=`<span class="exercises-title">&nbsp;/</span><h3 class="exercises-subtitle">${e}</h3>`,a.gallery.addEventListener("click",oe),a.backBtn.addEventListener("click",we),a.gallery.addEventListener("click",$e),a.gallery.addEventListener("click",le),a.searchForm.addEventListener("input",pe(Ee,1e3,{leading:!1,trailing:!0})),a.resetSearchForm.addEventListener("click",Le),a.gallery.removeEventListener("click",ve),a.searchForm.reset()},R=new WeakSet,V=function(){a.gallery.dataset.cards="subfilters",a.backBtn.classList.add("back-button-hidden"),a.searchForm.classList.add("search-form-hidden"),a.gallerySubtitle.innerHTML="",a.gallery.addEventListener("click",ve),a.gallery.removeEventListener("click",oe),a.backBtn.removeEventListener("click",we),a.gallery.removeEventListener("click",$e),a.gallery.removeEventListener("click",le),a.searchForm.removeEventListener("input",pe(Ee,1e3,{leading:!1,trailing:!0})),a.resetSearchForm.removeEventListener("click",Le)},N=new WeakSet,de=function(e,s){[...a.filter.children].forEach(({firstElementChild:i})=>{switch(i.dataset.filter){case e:i.classList.add("filter-button-active");break;case s:i.classList.remove("filter-button-active");break}})};const F=new mt({...JSON.parse(sessionStorage.getItem(m.SS_KEY_FILTERS))??{state:"subfilters",filter:"muscles",subfiltersPage:1,subfilter:"",searchQuery:"",exercisesPage:1},limits:_e()});async function _(){a.gallery.classList.add("unmounting");try{const{results:t,page:e,totalPages:s}=await c.getExercises();if(!s){a.gallery.innerHTML=X(),A(0,0);return}if(e>s){F.changePage(s);return}a.gallery.innerHTML=Fe(t),A(Number(e),s)}catch{Y(m.ERROR_MESSAGE),a.gallery.innerHTML=X(),A(0,0)}finally{a.gallery.classList.remove("unmounting")}}async function H(){a.gallery.classList.add("unmounting");try{const{results:t,page:e,totalPages:s}=await c.getFilters();if(!s){a.gallery.innerHTML=X(),A(0,0);return}if(e>s){F.changePage(s);return}a.gallery.innerHTML=He(t),A(Number(e),s)}catch{Y(m.ERROR_MESSAGE),a.gallery.innerHTML=X(),A(0,0)}finally{a.gallery.classList.remove("unmounting")}}async function Re(t){const e=new Date,s=`${e.getDate()}/${e.getMonth()}/${e.getFullYear()}`;let i;const r=JSON.parse(localStorage.getItem(m.LS_KEY_QUOTE));if(r)if(s!==r.date){try{i=await c.getQuote(),i.quote=i.quote||m.BASE_QUOTE.quote,i.author=i.author||"Unknown"}catch{a.quote.insertAdjacentHTML("beforeend",U(m.BASE_QUOTE,t));return}i.author!=="Unknown"&&i.quote!==m.BASE_QUOTE.quote&&(i.date=s,localStorage.setItem(m.LS_KEY_QUOTE,JSON.stringify(i))),a.quote.insertAdjacentHTML("beforeend",U(i,t))}else a.quote.insertAdjacentHTML("beforeend",U(r,t));else{try{i=await c.getQuote(),i.quote=i.quote||m.BASE_QUOTE.quote,i.author=i.author||"Unknown"}catch{a.quote.insertAdjacentHTML("beforeend",U(m.BASE_QUOTE,t));return}i.author!=="Unknown"&&i.quote!==m.BASE_QUOTE.quote&&(i.date=s,localStorage.setItem(m.LS_KEY_QUOTE,JSON.stringify(i))),a.quote.insertAdjacentHTML("beforeend",U(i,t))}}function pt(t,e,s){a.gallery.classList.add("unmounting"),t.length?a.gallery.innerHTML=Fe(t,"favorites"):a.gallery.innerHTML="<li class='list-empty'><p>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p></li>",A(e,s),a.gallery.classList.remove("unmounting")}var f,E,q,C,ie,Ce,K,ue,I,O;class ft{constructor(e,s,i,r){g(this,ie);g(this,K);g(this,I);g(this,f,void 0);g(this,E,void 0);g(this,q,void 0);g(this,C,void 0);l(this,f,e),l(this,E,s),l(this,q,i),l(this,C,r)}load(){Re("favorite"),u(this,I,O).call(this),a.gallery.addEventListener("click",oe),a.gallery.addEventListener("click",le),a.pagination.addEventListener("click",ht)}isFavorite(e){return n(this,f).some(s=>s._id===e)}removeFavorite(e){const s=n(this,f).map(i=>i._id).indexOf(e);n(this,f).splice(s,1),u(this,K,ue).call(this),n(this,C)==="favorites"&&u(this,I,O).call(this)}addFavorite(e){n(this,f).push(e),u(this,K,ue).call(this),n(this,C)==="favorites"&&u(this,I,O).call(this)}changePage(e){l(this,E,e),u(this,I,O).call(this),se(a.favoritesAnchor)}refreshLimits(e){e.favorites!==n(this,q)&&(l(this,q,e.favorites),u(this,I,O).call(this))}}f=new WeakMap,E=new WeakMap,q=new WeakMap,C=new WeakMap,ie=new WeakSet,Ce=function(){sessionStorage.setItem(m.SS_KEY_FAVORITES,n(this,E))},K=new WeakSet,ue=function(){localStorage.setItem(m.LS_KEY_FAVORITES,JSON.stringify(n(this,f)))},I=new WeakSet,O=function(){const e=Math.ceil(n(this,f).length/n(this,q));e&&n(this,E)>e&&l(this,E,e);const s=[...n(this,f)].splice((n(this,E)-1)*n(this,q),n(this,q));pt(s,n(this,E),e),u(this,ie,Ce).call(this)};const v=new ft(JSON.parse(localStorage.getItem(m.LS_KEY_FAVORITES))??[],parseInt(sessionStorage.getItem(m.SS_KEY_FAVORITES))||1,_e().favorites,a.body.dataset.page);export{yt as a,St as b,a as e,v as f,F as g,xt as h,Et as r};
//# sourceMappingURL=favorites-page-307960c1.js.map
