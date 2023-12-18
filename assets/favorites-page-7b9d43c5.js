var ae=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var n=(e,t,s)=>(ae(e,t,"read from private field"),s?s.call(e):t.get(e)),g=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},l=(e,t,s,i)=>(ae(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s);var u=(e,t,s)=>(ae(e,t,"access private method"),s);import{i as ge,a as j,l as pe}from"./vendor-243d56f5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const m={SS_KEY_FILTERS:"user filters",SS_KEY_FAVORITES:"favorites-page",LS_KEY_FAVORITES:"favorites",LS_KEY_QUOTE:"quote",BASE_QUOTE:{author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."},ERROR_MESSAGE:"Something goes wrong!"},a={body:document.querySelector("body"),burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),gallerySubtitle:document.querySelector(".js-subtitle"),pagination:document.querySelector(".js-pagination"),searchForm:document.querySelector(".js-search-form"),resetSearchForm:document.querySelector(".js-reset-form"),backBtn:document.querySelector(".js-back-button"),subscribeForm:document.querySelector(".js-subscribe-form"),quote:document.querySelector(".js-quote"),policyBtn:document.querySelector(".js-policy-modal-open"),termsBtn:document.querySelector(".js-terms-modal-open"),scrollTopBtn:document.querySelector(".js-scroll-top-button"),btnCloseBurger:document.querySelector(".mobile-menu-close-btn"),btnOpenBurger:document.querySelector(".mobile-menu-open-btn"),burgerMenu:document.querySelector(".mobile-menu-backdrop")};function He(e){return e.map(({filter:t,name:s,imgURL:i})=>`<li class="exercises-item">
      <a data-subfilter="${s}" class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${i}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${t}</p>
        </div>
      </a>
    </li>`).join("")}const W="/project-UCranes02/assets/icons-627bb2e4.svg#icon-remove",ke="/project-UCranes02/assets/icons-627bb2e4.svg#icon-star",De="/project-UCranes02/assets/icons-627bb2e4.svg#icon-arrow",Qe="/project-UCranes02/assets/icons-627bb2e4.svg#icon-run-man",he="/project-UCranes02/assets/icons-627bb2e4.svg#icon-heart";function Fe(e,t){return e.map(({_id:s,bodyPart:i,name:r,target:o,rating:d,burnedCalories:h,time:A})=>`
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
    </li>`).join("")}function Ne(e,t){let s=[],i=[];if(t<=5)for(let r=1;r<=t;r+=1)J(r,e)?s.push(`<li class="elm"><button type="button" disabled class="pagination-el ${J(r,e)?"active":"unactive"}" data-page="${r}" >${r}</button></li>`):s.push(`<li class="elm"><button type="button" class="pagination-el ${J(r,e)?"active":"unactive"}" data-page="${r}" >${r}</button></li>`);else{const r=Math.max(Math.min(e-2,t-4),1),o=Math.min(r+4,t);for(let d=r;d<=o;d+=1)i.push(d),J(d,e)?s.push(`<li class="elm"><button type="button" class="pagination-el active" disabled data-page="${d}" >${d}</button></li>`):s.push(`<li class="elm"><button type="button" class="pagination-el unactive"  data-page="${d}" >${d}</button></li>`);i.includes(1)||s.unshift('<li class="elm"><button type="button" class="pagination-el unactive"  data-page="1" >1</button>&nbsp;&nbsp;...</li>'),i.includes(t)||s.push(`<li class="elm">...&nbsp;&nbsp;<button type="button" class="pagination-el unactive"  data-page="${t}">${t}</button></li>`)}return s.join("")}function J(e,t){return e===t}const Ke="/project-UCranes02/assets/icons-627bb2e4.svg#icon-close",Ye="/project-UCranes02/assets/icons-627bb2e4.svg#icon-camera";function ze({bodyPart:e,equipment:t,gifUrl:s,name:i,target:r,description:o,rating:d,burnedCalories:h,time:A,popularity:v,_id:Ue}){let z=Math.round(d),G=!1;const me=JSON.parse(localStorage.getItem("favorites"));return me&&(G=me.some(re=>re._id===Ue)),`
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
        `}const fe="/project-UCranes02/assets/not-found-gallery-desktop-588ba661.jpg",Ge="/project-UCranes02/assets/not-found-gallery-desktop@2x-c96f61f2.jpg",Je="/project-UCranes02/assets/not-found-gallery-tablet-5ef0b81f.jpg",Ve="/project-UCranes02/assets/not-found-gallery-tablet@2x-2158ce91.jpg",We="/project-UCranes02/assets/not-found-gallery-mobile-02f7fa11.jpg",Xe="/project-UCranes02/assets/not-found-gallery-mobile@2x-a7ec8ef8.jpg";function X(){return`<li class='not-found-gallery'><picture>
    <source media="(min-width: 1440px)" srcset="${fe}, ${Ge} 2x" />
    <source media="(min-width: 768px)" srcset="${Je}, ${Ve} 2x" />
    <source srcset="${We}, ${Xe} 2x" />
    <img src="${fe}" alt="Exercises not found" />
  </picture></li>`}function B(e,t){a.pagination.innerHTML=Ne(e,t)}ge.settings({timeout:5e3,resetOnHover:!0,position:"topCenter",transitionIn:"flipInX",transitionOut:"flipOutX",theme:"dark",backgroundColor:"#242424",maxWidth:600});function Y(e){ge.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:e})}function Te(e){ge.show({progressBarColor:"#4FAC40",message:e})}const M="https://your-energy.b.goit.study/api/",Ze={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class et{constructor({filter:t="muscles",subFilter:s="",keyword:i="",page:r=1,limit:o=8}){this.filter=t,this.subFilter=s,this.keyword=i,this.page=r,this.limit=o,this.id=""}async getFilters(){return(await j.get(`${M}filters`,{params:{filter:Ze[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await j.get(`${M}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(t){const s=await j.get(`${M}exercises/${t}`);return this.id=t,s.data}async updateExerciseRating({rate:t,email:s,review:i}){return(await j.patch(`${M}exercises/${this.id}/rating`,{rate:t,email:s,review:i})).data}async getQuote(){return(await j.get(`${M}quote`)).data}async subscribe({email:t}){return(await j.post(`${M}subscription`,{email:t})).data}}const c=new et({});function tt(e){e.target.hasAttribute("data-filter")&&F.changeFilter(e.target.dataset.filter)}async function ve(e){if(e.preventDefault(),!e.target.closest("[data-subfilter]"))return;const{subfilter:t}=e.target.closest("[data-subfilter]").dataset;F.goExercises(t)}function Ie(e){(e||document).querySelector(".loader").classList.remove("is-hidden")}function Z(e){(e||document).querySelector(".loader").classList.add("is-hidden")}function st(e){const t=document.querySelector(".add-favorites-btn");E.isFavorite(e._id)?(E.removeFavorite(e._id),t.style.padding="12px 16px",t.querySelector("span").textContent="Add to favorites",t.querySelector("use").setAttribute("href",he)):(E.addFavorite(e),t.style.padding="12px 9px",t.querySelector("span").textContent="Remove from favorites",t.querySelector("use").setAttribute("href",W))}function it(){return'<span class="loader is-hidden"></span>'}function Pe(e){e&&(e.querySelector(".loader")||e.insertAdjacentHTML("beforeend",it()))}const rt=/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;function at(e,t){const[s,i,r]=t.querySelectorAll(".users_rating, label"),[o,d,h]=t.querySelectorAll(".error");e.rate?(s.classList.add("invalid"),o.textContent=e.rate):(s.classList.remove("invalid"),o.textContent=""),e.email?(i.classList.add("invalid"),d.textContent=e.email):(i.classList.remove("invalid"),d.textContent=""),e.review?(r.classList.add("invalid"),h.textContent=e.review):(r.classList.remove("invalid"),h.textContent="")}function Be({rate:e,email:t,review:s}){const i={isInvalid:!1};return e||(i.isInvalid=!0,i.rate="Please select a rating"),t||(i.isInvalid=!0,i.email="Please enter an email"),rt.test(t)||(i.isInvalid=!0,i.email="Please enter a valid email"),s||(i.isInvalid=!0,i.review="Please enter a review"),i}async function nt(e,t){e.preventDefault();const s=new FormData(e.target),i={rate:Number(s.get("rate")),email:s.get("email"),review:s.get("review")},r=Be(i);if(at(r,e.target),!r.isInvalid){e.target.querySelector('[type="submit"]').disabled=!0,Pe(e.target);try{Ie(e.target);const o=await c.updateExerciseRating(i);Z(e.target),t()}catch(o){console.log(o),Y("Something went wrong. Please try again later."),Z(e.target),e.target.querySelector('[type="submit"]').disabled=!1}}}function ot(e){const t=e.target.closest(".rating");if(!t)return;const s=t.querySelectorAll('[name="rate"]'),i=t.parentElement.firstElementChild;s.forEach(r=>{r.checked&&(i.textContent=r.value+".0")})}const k={detailsPopup:!1,ratingPopup:!1},be=e=>e.stopPropagation(),lt=(e,{closeCallback:t,submitCallback:s})=>{const i=e.querySelector(".modal__close-btn"),r=e.querySelector(".give_a_rating"),o=e.querySelector(".rating");r.setAttribute("novalidate",!0),o.addEventListener("click",d=>{ot(d)}),i.addEventListener("click",()=>{t()}),r.addEventListener("submit",d=>{d.preventDefault(),s(d)})},ee=e=>{var t,s;k.detailsPopup=!1,k.ratingPopup=!1,e==null||e.classList.add("is-hidden"),(t=e==null?void 0:e.querySelector("[data-modal]"))==null||t.remove(),(s=e==null?void 0:e.querySelector(".exercise-modal"))==null||s.remove(),document.documentElement.classList.remove("no-scroll")},Ae=(e,t,s)=>{var i;t.remove(),(i=e.querySelector("[data-modal]"))==null||i.remove(),k.ratingPopup=!1,e.append(s)},ye=(e,t,s)=>{switch(!0){case(k.detailsPopup&&!k.ratingPopup):ee(e);return;case(k.detailsPopup&&k.ratingPopup):Ae(e,t,s);return;default:ee(e);return}},ct=(e,t,s)=>{s.insertAdjacentHTML("beforeend",e);const i=s.querySelector(".exercise-modal"),r=s.querySelector(".exercise-card-close-btn"),o=s.querySelector(".add-rating-btn"),d=s.querySelector(".add-favorites-btn"),h=document.querySelector("#modal-template").content.firstElementChild.cloneNode(!0),A=r.querySelector("use").getAttribute("href");h.querySelector("use").setAttribute("href",A),window.addEventListener("keydown",v=>{v.code==="Escape"&&ye(s,h,i)}),s.addEventListener("click",()=>{ye(s,h,i)}),i.addEventListener("click",be),h.addEventListener("click",be),r.addEventListener("click",()=>{ee(s)}),o.addEventListener("click",()=>{var v;k.ratingPopup=!0,(v=s==null?void 0:s.querySelector(".exercise-modal"))==null||v.remove(),s.append(h)}),d.addEventListener("click",v=>{st(t)}),lt(h,{closeCallback:()=>Ae(s,h,i),submitCallback:v=>nt(v,()=>{ee(s),Te("Thank you for your feedback!")})}),document.documentElement.classList.add("no-scroll"),k.detailsPopup=!0};async function oe(e){if(e.preventDefault(),!e.target.closest("[data-id]")||e.target.closest("[data-delete]")||e.target.closest("[data-add]"))return;const t=document.querySelector(".exercise-modal-backdrop");t.classList.remove("is-hidden");try{const s=e.target.closest("[data-id]").dataset.id;Pe(t),Ie(t);const i=await c.getExerciseById(s);Z(t);const r=ze(i),o=ct(r,i,t)}catch(s){console.error(s),Y("Something went wrong. Please try again later."),Z(t)}}function dt({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);F.changePage(t)}const Se=document.querySelector(".footer-error");async function ut(e){e.preventDefault();const t=new FormData(e.currentTarget),s={};t.forEach((r,o)=>{s[o]=r});const{email:i}=Be({email:s.subscribe});if(i)Se.classList.remove("visually-hidden");else{e.currentTarget.reset(),Se.classList.add("visually-hidden");try{const r=await c.subscribe({email:s.subscribe});Te(r.message)}catch(r){Y(r.response.data.message)}}}let ne,D;function xe(e){e.target===a.policyBtn&&(D=document.querySelector(".js-policy-modal"),ne=document.querySelector(".js-policy-modal-close")),e.target===a.termsBtn&&(D=document.querySelector(".js-terms-modal"),ne=document.querySelector(".js-terms-modal-close")),te(),D.addEventListener("click",gt),ne.addEventListener("click",te),window.addEventListener("keydown",je)}function je(e){e.code==="Escape"&&te()}function gt(e){e.target===D&&te()}function te(){D.classList.toggle("is-hidden"),document.documentElement.classList.toggle("no-scroll"),window.removeEventListener("keydown",je)}function Ee(){const e=a.searchForm.exercise.value.trim();F.goSearch(e)}function Le(){this.setAttribute("value",""),F.resetSearch()}function se(e){if(e==="top")window.scrollTo({top:0,behavior:"smooth"});else{const t=e;if(t){const s=t.getBoundingClientRect();if(s.top>=0&&s.bottom<=(window.innerHeight||document.documentElement.clientHeight))return;window.scrollBy({top:s.top-20,behavior:"smooth"})}}}function yt(){se("top")}function St(){const{scrollTopBtn:e}=a;if(window.scrollY<100){e.classList.replace("js-scroll-top-button-active","hide-scroll-top-button");return}else e.classList.replace("hide-scroll-top-button","js-scroll-top-button-active");const t=document.documentElement.scrollTop||document.body.scrollTop,s=document.documentElement.scrollHeight-document.documentElement.clientHeight,i=t/s*100;e.style.background=`conic-gradient(rgba(244, 244, 244, 1) ${i}%, #242424 ${i}%)`}async function we(e){F.goBack()}function ht({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);E.changePage(t)}function xt(e){e.currentTarget===a.btnOpenBurger&&(a.burgerMenu.classList.remove("is-hidden"),document.querySelector("html").classList.add("no-scroll")),e.currentTarget===a.btnCloseBurger&&(a.burgerMenu.classList.add("is-hidden"),document.querySelector("html").classList.remove("no-scroll"))}function le(e){if(e.preventDefault(),!e.target.closest("[data-delete]"))return;const t=e.target.closest("[data-delete]"),s=t.nextElementSibling,i=t.dataset.delete;if(!E.isFavorite(i))return;E.removeFavorite(i),a.body.dataset.page==="home"&&(t.classList.add("is-hidden"),s.classList.remove("is-hidden"))}async function $e(e){if(e.preventDefault(),!e.target.closest("[data-add]"))return;const t=e.target.closest("[data-add]"),s=t.previousElementSibling,i=t.dataset.add;E.isFavorite(i)||(c.getExerciseById(i).then(o=>E.addFavorite(o)),t.classList.add("is-hidden"),s.classList.remove("is-hidden"))}const Me={mobile:{subfilters:9,exercises:8,favorites:8},tablet:{subfilters:12,exercises:10,favorites:10},desktop:{subfilters:12,exercises:10,favorites:999}};let qe=Oe(window.screen.width);const Et=new ResizeObserver(e=>{let t=Oe(e[0].devicePixelContentBoxSize[0].inlineSize);qe!==t&&(qe=t,F.refreshLimits(Me[t]))});function _e(){let e="desktop";return window.screen.width<768&&(e="mobile"),window.screen.width>=768&&window.screen.width<1440&&(e="tablet"),Me[e]}function Oe(e){let t="desktop";return e<768&&(t="mobile"),e>=768&&e<1440&&(t="tablet"),t}var p,L,w,T,b,y,S,$,P,Q,ce,R,V,N,de;class mt{constructor({state:t,filter:s,subfiltersPage:i,subfilter:r,searchQuery:o,exercisesPage:d,limits:h}){g(this,$);g(this,Q);g(this,R);g(this,N);g(this,p,void 0);g(this,L,void 0);g(this,w,void 0);g(this,T,void 0);g(this,b,void 0);g(this,y,void 0);g(this,S,void 0);l(this,p,t),l(this,L,s),l(this,w,i),l(this,T,r),l(this,b,o),l(this,y,d),l(this,S,h)}load(){switch(Re(),c.limit=n(this,S)[n(this,p)],c.filter=n(this,L),n(this,p)){case"subfilters":c.page=n(this,w),H(),u(this,R,V).call(this);break;case"exercises":c.subFilter=n(this,T),c.keyword=n(this,b),c.page=n(this,y),a.searchForm.elements.exercise.setAttribute("value",n(this,b)),_(),u(this,Q,ce).call(this,n(this,T));break}a.pagination.addEventListener("click",dt),a.body.dataset.page==="home"&&(u(this,N,de).call(this,n(this,L)),a.filter.addEventListener("click",tt),a.subscribeForm.addEventListener("submit",ut),a.policyBtn.addEventListener("click",xe),a.termsBtn.addEventListener("click",xe))}changeFilter(t){c.filter=t,c.page=1,c.limit=n(this,S).subfilters,H(),u(this,N,de).call(this,t,n(this,L)),l(this,p,"subfilters"),l(this,L,t),l(this,w,1),u(this,R,V).call(this),u(this,$,P).call(this)}goExercises(t){c.subFilter=t,c.keyword="",c.page=1,c.limit=n(this,S).exercises,_(),l(this,p,"exercises"),l(this,T,t),l(this,b,""),l(this,y,1),u(this,Q,ce).call(this,t),u(this,$,P).call(this),se(a.gallerySubtitle)}goBack(){c.page=n(this,w),c.limit=n(this,S).subfilters,H(),l(this,p,"subfilters"),u(this,R,V).call(this),u(this,$,P).call(this)}changePage(t){switch(c.page=t,n(this,p)){case"subfilters":H(),l(this,w,t);break;case"exercises":_(),l(this,y,t);break}u(this,$,P).call(this),se(a.gallerySubtitle)}goSearch(t){c.keyword=t,c.page=1,_(),l(this,b,t),l(this,y,1),u(this,$,P).call(this)}resetSearch(){c.keyword="",c.page=1,_(),l(this,b,""),l(this,y,1),u(this,$,P).call(this)}refreshLimits(t){if(t[n(this,p)]!==n(this,S)[n(this,p)])switch(c.limit=t[n(this,p)],n(this,p)){case"subfilters":H();break;case"exercises":_();break}l(this,S,t)}}p=new WeakMap,L=new WeakMap,w=new WeakMap,T=new WeakMap,b=new WeakMap,y=new WeakMap,S=new WeakMap,$=new WeakSet,P=function(){sessionStorage.setItem(m.SS_KEY_FILTERS,JSON.stringify({state:n(this,p),filter:n(this,L),subfiltersPage:n(this,w),subfilter:n(this,T),searchQuery:n(this,b),exercisesPage:n(this,y)}))},Q=new WeakSet,ce=function(t){a.gallery.dataset.cards="exercises",a.backBtn.classList.remove("back-button-hidden"),a.searchForm.classList.remove("search-form-hidden"),a.gallerySubtitle.innerHTML=`<span class="exercises-title">&nbsp;/</span><h3 class="exercises-subtitle">${t}</h3>`,a.gallery.addEventListener("click",oe),a.backBtn.addEventListener("click",we),a.gallery.addEventListener("click",$e),a.gallery.addEventListener("click",le),a.searchForm.addEventListener("input",pe(Ee,1e3,{leading:!1,trailing:!0})),a.resetSearchForm.addEventListener("click",Le),a.gallery.removeEventListener("click",ve),a.searchForm.reset()},R=new WeakSet,V=function(){a.gallery.dataset.cards="subfilters",a.backBtn.classList.add("back-button-hidden"),a.searchForm.classList.add("search-form-hidden"),a.gallerySubtitle.innerHTML="",a.gallery.addEventListener("click",ve),a.gallery.removeEventListener("click",oe),a.backBtn.removeEventListener("click",we),a.gallery.removeEventListener("click",$e),a.gallery.removeEventListener("click",le),a.searchForm.removeEventListener("input",pe(Ee,1e3,{leading:!1,trailing:!0})),a.resetSearchForm.removeEventListener("click",Le)},N=new WeakSet,de=function(t,s){[...a.filter.children].forEach(({firstElementChild:i})=>{switch(i.dataset.filter){case t:i.classList.add("filter-button-active");break;case s:i.classList.remove("filter-button-active");break}})};const F=new mt({...JSON.parse(sessionStorage.getItem(m.SS_KEY_FILTERS))??{state:"subfilters",filter:"muscles",subfiltersPage:1,subfilter:"",searchQuery:"",exercisesPage:1},limits:_e()});async function _(){a.gallery.classList.add("unmounting");try{const{results:e,page:t,totalPages:s}=await c.getExercises();if(!s){a.gallery.innerHTML=X(),B(0,0);return}if(t>s){F.changePage(s);return}a.gallery.innerHTML=Fe(e),B(Number(t),s)}catch{Y(m.ERROR_MESSAGE),a.gallery.innerHTML=X(),B(0,0)}finally{a.gallery.classList.remove("unmounting")}}async function H(){a.gallery.classList.add("unmounting");try{const{results:e,page:t,totalPages:s}=await c.getFilters();if(!s){a.gallery.innerHTML=X(),B(0,0);return}if(t>s){F.changePage(s);return}a.gallery.innerHTML=He(e),B(Number(t),s)}catch{Y(m.ERROR_MESSAGE),a.gallery.innerHTML=X(),B(0,0)}finally{a.gallery.classList.remove("unmounting")}}async function Re(e){const t=new Date,s=`${t.getDate()}/${t.getMonth()}/${t.getFullYear()}`;let i;const r=JSON.parse(localStorage.getItem(m.LS_KEY_QUOTE));if(r)if(s!==r.date){try{i=await c.getQuote(),i.quote=i.quote||m.BASE_QUOTE.quote,i.author=i.author||"Unknown"}catch{a.quote.insertAdjacentHTML("beforeend",U(m.BASE_QUOTE,e));return}i.author!=="Unknown"&&i.quote!==m.BASE_QUOTE.quote&&(i.date=s,localStorage.setItem(m.LS_KEY_QUOTE,JSON.stringify(i))),a.quote.insertAdjacentHTML("beforeend",U(i,e))}else a.quote.insertAdjacentHTML("beforeend",U(r,e));else{try{i=await c.getQuote(),i.quote=i.quote||m.BASE_QUOTE.quote,i.author=i.author||"Unknown"}catch{a.quote.insertAdjacentHTML("beforeend",U(m.BASE_QUOTE,e));return}i.author!=="Unknown"&&i.quote!==m.BASE_QUOTE.quote&&(i.date=s,localStorage.setItem(m.LS_KEY_QUOTE,JSON.stringify(i))),a.quote.insertAdjacentHTML("beforeend",U(i,e))}}function pt(e,t,s){a.gallery.classList.add("unmounting"),e.length?(a.gallery.innerHTML=Fe(e,"favorites"),B(t,s)):a.gallery.innerHTML="<li class='list-empty'><p>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p></li>",a.gallery.classList.remove("unmounting")}var f,x,q,C,ie,Ce,K,ue,I,O;class ft{constructor(t,s,i,r){g(this,ie);g(this,K);g(this,I);g(this,f,void 0);g(this,x,void 0);g(this,q,void 0);g(this,C,void 0);l(this,f,t),l(this,x,s),l(this,q,i),l(this,C,r)}load(){Re("favorite"),u(this,I,O).call(this),a.gallery.addEventListener("click",oe),a.gallery.addEventListener("click",le),a.pagination.addEventListener("click",ht)}isFavorite(t){return n(this,f).some(s=>s._id===t)}removeFavorite(t){const s=n(this,f).map(i=>i._id).indexOf(t);n(this,f).splice(s,1),u(this,K,ue).call(this),n(this,C)==="favorites"&&u(this,I,O).call(this)}addFavorite(t){n(this,f).push(t),u(this,K,ue).call(this),n(this,C)==="favorites"&&u(this,I,O).call(this)}changePage(t){l(this,x,t),u(this,I,O).call(this),se(a.gallery)}refreshLimits(t){t.favorites!==n(this,q)&&(l(this,q,t.favorites),u(this,I,O).call(this))}}f=new WeakMap,x=new WeakMap,q=new WeakMap,C=new WeakMap,ie=new WeakSet,Ce=function(){sessionStorage.setItem(m.SS_KEY_FAVORITES,n(this,x))},K=new WeakSet,ue=function(){localStorage.setItem(m.LS_KEY_FAVORITES,JSON.stringify(n(this,f)))},I=new WeakSet,O=function(){const t=Math.ceil(n(this,f).length/n(this,q));t&&n(this,x)>t&&l(this,x,t);const s=[...n(this,f)].splice((n(this,x)-1)*n(this,q),n(this,q));pt(s,n(this,x),t),u(this,ie,Ce).call(this)};const E=new ft(JSON.parse(localStorage.getItem(m.LS_KEY_FAVORITES))??[],parseInt(sessionStorage.getItem(m.SS_KEY_FAVORITES))||1,_e().favorites,a.body.dataset.page);export{yt as a,St as b,a as e,E as f,F as g,xt as h,Et as r};
//# sourceMappingURL=favorites-page-7b9d43c5.js.map
