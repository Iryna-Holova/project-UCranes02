var ae=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var n=(t,e,s)=>(ae(t,e,"read from private field"),s?s.call(t):e.get(t)),h=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},l=(t,e,s,i)=>(ae(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s);var u=(t,e,s)=>(ae(t,e,"access private method"),s);import{i as he,a as B,l as pe}from"./vendor-243d56f5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const m={SS_KEY_FILTERS:"user filters",SS_KEY_FAVORITES:"favorites-page",LS_KEY_FAVORITES:"favorites",LS_KEY_QUOTE:"quote",BASE_QUOTE:{author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."},ERROR_MESSAGE:"Something goes wrong!"},r={navHome:document.querySelectorAll(".js-nav-home"),navFavorites:document.querySelectorAll(".js-nav-favorites"),body:document.querySelector("body"),burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),gallerySubtitle:document.querySelector(".js-subtitle"),pagination:document.querySelector(".js-pagination"),searchForm:document.querySelector(".js-search-form"),resetSearchForm:document.querySelector(".js-reset-form"),backBtn:document.querySelector(".js-back-button"),subscribeForm:document.querySelector(".js-subscribe-form"),quote:document.querySelector(".js-quote"),policyBtn:document.querySelector(".js-policy-modal-open"),termsBtn:document.querySelector(".js-terms-modal-open"),scrollTopBtn:document.querySelector(".js-scroll-top-button"),btnCloseBurger:document.querySelector(".mobile-menu-close-btn"),btnOpenBurger:document.querySelector(".mobile-menu-open-btn"),burgerMenu:document.querySelector(".mobile-menu-backdrop"),favoritesAnchor:document.querySelector(".js-anchor")};function He(t){return t.map(({filter:e,name:s,imgURL:i})=>`<li class="exercises-item">
      <a data-subfilter="${s}" class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${i}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${e}</p>
        </div>
      </a>
    </li>`).join("")}const W="/project-UCranes02/assets/icons-627bb2e4.svg#icon-remove",Fe="/project-UCranes02/assets/icons-627bb2e4.svg#icon-star",De="/project-UCranes02/assets/icons-627bb2e4.svg#icon-arrow",Qe="/project-UCranes02/assets/icons-627bb2e4.svg#icon-run-man",ge="/project-UCranes02/assets/icons-627bb2e4.svg#icon-heart";function ke(t,e){return t.map(({_id:s,bodyPart:i,name:a,target:o,rating:c,burnedCalories:g,time:P})=>`
         <li class="main-item_card-exercises">
      <a class="link-exercise-card" href="" data-id="${s}">
        <!-- Top place card -->
        <div class="card-cont-content">
          <div class="cont-rating-btn-title">
            <div class="const-text-exer">
              <p class="text-card-exer">WORKOUT</p>
            </div>
            ${e==="favorites"?`
              <div class="btn-card-group">
                <button class="btn-delete-card" type="button" data-delete="${s}">
                <svg class="icon-delete-favorite" width="16" height="16">
                  <use href="${W}"></use>
                </svg>
                </button>
              </div> 
              `:`
            <div class="btn-card-group">
               <button class="btn-delete-card ${b.isFavorite(s)?"":"is-hidden"}" type="button" data-delete="${s}">
                <svg class="icon-delete-favorite" width="16" height="16">
                  <use href="${W}"></use>
                </svg>
                </button>
                <button class="btn-add-card ${b.isFavorite(s)?"is-hidden":""}"" type="button" data-add="${s}">
                <svg class="icon-add-favorite" width="16" height="16">
                 <use href="${ge}"></use>
               </svg>
               </button>
            </div>  
            ${c?`
                <div class="cont-card-rating">
                <p class="card-rating-exer">${Math.round(c)+".0"}</p>
                <svg class="icon-card-exer" width="18" height="18">
                  <use href="${Fe}"></use>
                </svg>
              </div>`:""}
              `}
            <div class="block-btn-icon-exer">
              <span class="btn-card-exer">Start</span>
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
            <p class="text-name-exercises-card">${a}</p>
          </div>
          <!-- End place card -->
          <ul class="list-info-exer">
            <li class="item-card-exer">
              <p class="text-title-item-exer big">Burned calories:</p>
              <p class="text-info-exer size-time">${g}/${P}</p>
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
    </li>`).join("")}function Ne(t,e){let s=[],i=[];if(e<=5)for(let a=1;a<=e;a+=1)J(a,t)?s.push(`<li class="elm"><button type="button" disabled class="pagination-el ${J(a,t)?"active":"unactive"}" data-page="${a}" >${a}</button></li>`):s.push(`<li class="elm"><button type="button" class="pagination-el ${J(a,t)?"active":"unactive"}" data-page="${a}" >${a}</button></li>`);else{const a=Math.max(Math.min(t-2,e-4),1),o=Math.min(a+4,e);for(let c=a;c<=o;c+=1)i.push(c),J(c,t)?s.push(`<li class="elm"><button type="button" class="pagination-el active" disabled data-page="${c}" >${c}</button></li>`):s.push(`<li class="elm"><button type="button" class="pagination-el unactive"  data-page="${c}" >${c}</button></li>`);i.includes(1)||s.unshift('<li class="elm"><button type="button" class="pagination-el unactive"  data-page="1" >1</button>&nbsp;&nbsp;...</li>'),i.includes(e)||s.push(`<li class="elm">...&nbsp;&nbsp;<button type="button" class="pagination-el unactive"  data-page="${e}">${e}</button></li>`)}return s.join("")}function J(t,e){return t===e}const Ke="/project-UCranes02/assets/icons-627bb2e4.svg#icon-close",Ye="/project-UCranes02/assets/icons-627bb2e4.svg#icon-camera";function ze({bodyPart:t,equipment:e,gifUrl:s,name:i,target:a,description:o,rating:c,burnedCalories:g,time:P,popularity:y,_id:Ue}){let z=Math.round(c),G=!1;const me=JSON.parse(localStorage.getItem("favorites"));return me&&(G=me.some(re=>re._id===Ue)),`
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
                            <use href="${Fe}"></use>
                        </svg>`).join("")}
                          </div>`:""}
                            
                        <ul class="exercise-card-details-list">
                        ${a?`<li class="exercise-card-details-item">
                        <p class="details-name">Target</p>
                        <p class="details-value">${a}</p>
                        </li>`:""}
                        ${t?`<li class="exercise-card-details-item">
                              <p class="details-name">Body Part</p>
                              <p class="details-value">${t}</p>
                          </li>`:""}
                          ${e?`<li class="exercise-card-details-item">
                              <p class="details-name">Equipment</p>
                              <p class="details-value">${e}</p>
                          </li>`:""}
                          ${y?`<li class="exercise-card-details-item">
                              <p class="details-name">Popular</p>
                              <p class="details-value">${y}</p>
                          </li>`:""}
                          ${g&&P?`<li class="exercise-card-details-item">
                              <p class="details-name">Burned calories</p>
                              <p class="details-value">${g}/${P} min</p>
                          </li>`:""}
                         
                        </ul>
                        <p class="exercise-card-description">${o||""}</p>
                    </div>
                    <div class="exercise-card-btn-group">
                        <button class="card-btn add-favorites-btn" ${G?'style="padding: 12px 9px"':""}>
                            <span>${G?"Remove from favorites":"Add to favorites"}</span>
                            <svg class="favorites-icon" aria-label="Favorite icon" width="20" height="20" >
                                <use href="${G?`${W}`:`${ge}`}"></use>
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
  </picture></li>`}function j(t,e){r.pagination.innerHTML=Ne(t,e)}he.settings({timeout:5e3,resetOnHover:!0,position:"topCenter",transitionIn:"flipInX",transitionOut:"flipOutX",theme:"dark",backgroundColor:"#242424",maxWidth:600});function Y(t){he.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:t})}function Te(t){he.show({progressBarColor:"#4FAC40",message:t})}const M="https://your-energy.b.goit.study/api/",Ze={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class et{constructor({filter:e="muscles",subFilter:s="",keyword:i="",page:a=1,limit:o=8}){this.filter=e,this.subFilter=s,this.keyword=i,this.page=a,this.limit=o,this.id=""}async getFilters(){return(await B.get(`${M}filters`,{params:{filter:Ze[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await B.get(`${M}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(e){const s=await B.get(`${M}exercises/${e}`);return this.id=e,s.data}async updateExerciseRating({rate:e,email:s,review:i}){return(await B.patch(`${M}exercises/${this.id}/rating`,{rate:e,email:s,review:i})).data}async getQuote(){return(await B.get(`${M}quote`)).data}async subscribe({email:e}){return(await B.post(`${M}subscription`,{email:e})).data}}const d=new et({});function tt(t){t.target.hasAttribute("data-filter")&&k.changeFilter(t.target.dataset.filter)}async function ve(t){if(t.preventDefault(),!t.target.closest("[data-subfilter]"))return;const{subfilter:e}=t.target.closest("[data-subfilter]").dataset;k.goExercises(e)}function Ie(t){(t||document).querySelector(".loader").classList.remove("is-hidden")}function Z(t){(t||document).querySelector(".loader").classList.add("is-hidden")}function st(t){const e=document.querySelector(".add-favorites-btn");b.isFavorite(t._id)?(b.removeFavorite(t._id),e.style.padding="12px 16px",e.querySelector("span").textContent="Add to favorites",e.querySelector("use").setAttribute("href",ge)):(b.addFavorite(t),e.style.padding="12px 9px",e.querySelector("span").textContent="Remove from favorites",e.querySelector("use").setAttribute("href",W))}function it(){return'<span class="loader is-hidden"></span>'}function Ae(t){t&&(t.querySelector(".loader")||t.insertAdjacentHTML("beforeend",it()))}const rt=/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;function at(t,e){const[s,i,a]=e.querySelectorAll(".users_rating, label"),[o,c,g]=e.querySelectorAll(".error");t.rate?(s.classList.add("invalid"),o.textContent=t.rate):(s.classList.remove("invalid"),o.textContent=""),t.email?(i.classList.add("invalid"),c.textContent=t.email):(i.classList.remove("invalid"),c.textContent=""),t.review?(a.classList.add("invalid"),g.textContent=t.review):(a.classList.remove("invalid"),g.textContent="")}function je({rate:t,email:e,review:s}){const i={isInvalid:!1};return t||(i.isInvalid=!0,i.rate="Please select a rating"),e||(i.isInvalid=!0,i.email="Please enter an email"),rt.test(e)||(i.isInvalid=!0,i.email="Please enter a valid email"),s||(i.isInvalid=!0,i.review="Please enter a review"),i}async function nt(t,e){t.preventDefault();const s=new FormData(t.target),i={rate:Number(s.get("rate")),email:s.get("email"),review:s.get("review")},a=je(i);if(at(a,t.target),!a.isInvalid){t.target.querySelector('[type="submit"]').disabled=!0,Ae(t.target);try{Ie(t.target);const o=await d.updateExerciseRating(i);Z(t.target),e()}catch(o){console.log(o),Y("Something went wrong. Please try again later."),Z(t.target),t.target.querySelector('[type="submit"]').disabled=!1}}}function ot(t){const e=t.target.closest(".rating");if(!e)return;const s=e.querySelectorAll('[name="rate"]'),i=e.parentElement.firstElementChild;s.forEach(a=>{a.checked&&(i.textContent=a.value+".0")})}const F={detailsPopup:!1,ratingPopup:!1},be=t=>t.stopPropagation(),lt=(t,{closeCallback:e,submitCallback:s})=>{const i=t.querySelector(".modal__close-btn"),a=t.querySelector(".give_a_rating"),o=t.querySelector(".rating");a.setAttribute("novalidate",!0),o.addEventListener("click",c=>{ot(c)}),i.addEventListener("click",()=>{e()}),a.addEventListener("submit",c=>{c.preventDefault(),s(c)})},ee=t=>{var e,s;F.detailsPopup=!1,F.ratingPopup=!1,t==null||t.classList.add("is-hidden"),(e=t==null?void 0:t.querySelector("[data-modal]"))==null||e.remove(),(s=t==null?void 0:t.querySelector(".exercise-modal"))==null||s.remove(),document.documentElement.classList.remove("no-scroll")},Pe=(t,e,s)=>{var i;e.remove(),(i=t.querySelector("[data-modal]"))==null||i.remove(),F.ratingPopup=!1,t.append(s)},ye=(t,e,s)=>{switch(!0){case(F.detailsPopup&&!F.ratingPopup):ee(t);return;case(F.detailsPopup&&F.ratingPopup):Pe(t,e,s);return;default:ee(t);return}},ct=(t,e,s)=>{s.insertAdjacentHTML("beforeend",t);const i=s.querySelector(".exercise-modal"),a=s.querySelector(".exercise-card-close-btn"),o=s.querySelector(".add-rating-btn"),c=s.querySelector(".add-favorites-btn"),g=document.querySelector("#modal-template").content.firstElementChild.cloneNode(!0),P=a.querySelector("use").getAttribute("href");g.querySelector("use").setAttribute("href",P),window.addEventListener("keydown",y=>{y.code==="Escape"&&ye(s,g,i)}),s.addEventListener("click",()=>{ye(s,g,i)}),i.addEventListener("click",be),g.addEventListener("click",be),a.addEventListener("click",()=>{ee(s)}),o.addEventListener("click",()=>{var y;F.ratingPopup=!0,(y=s==null?void 0:s.querySelector(".exercise-modal"))==null||y.remove(),s.append(g)}),c.addEventListener("click",y=>{st(e)}),lt(g,{closeCallback:()=>Pe(s,g,i),submitCallback:y=>nt(y,()=>{ee(s),Te("Thank you for your feedback!")})}),document.documentElement.classList.add("no-scroll"),F.detailsPopup=!0};async function oe(t){if(t.preventDefault(),!t.target.closest("[data-id]")||t.target.closest("[data-delete]")||t.target.closest("[data-add]"))return;const e=document.querySelector(".exercise-modal-backdrop");e.classList.remove("is-hidden");try{const s=t.target.closest("[data-id]").dataset.id;Ae(e),Ie(e);const i=await d.getExerciseById(s);Z(e);const a=ze(i),o=ct(a,i,e)}catch(s){console.error(s),Y("Something went wrong. Please try again later."),Z(e)}}function dt({target:t}){if(!t.hasAttribute("data-page"))return;const e=parseInt(t.dataset.page);k.changePage(e)}const Se=document.querySelector(".footer-error");async function ut(t){t.preventDefault();const e=new FormData(t.currentTarget),s={};e.forEach((a,o)=>{s[o]=a});const{email:i}=je({email:s.subscribe});if(i)Se.classList.remove("visually-hidden");else{t.currentTarget.reset(),Se.classList.add("visually-hidden");try{const a=await d.subscribe({email:s.subscribe});Te(a.message)}catch(a){Y(a.response.data.message)}}}let ne,D;function xe(t){t.target===r.policyBtn&&(D=document.querySelector(".js-policy-modal"),ne=document.querySelector(".js-policy-modal-close")),t.target===r.termsBtn&&(D=document.querySelector(".js-terms-modal"),ne=document.querySelector(".js-terms-modal-close")),te(),D.addEventListener("click",ht),ne.addEventListener("click",te),window.addEventListener("keydown",Be)}function Be(t){t.code==="Escape"&&te()}function ht(t){t.target===D&&te()}function te(){D.classList.toggle("is-hidden"),document.documentElement.classList.toggle("no-scroll"),window.removeEventListener("keydown",Be)}function Ee(){const t=r.searchForm.exercise.value.trim();k.goSearch(t)}function Le(){k.resetSearch(),r.searchForm.elements.exercise.setAttribute("value","")}function se(t){if(t==="top")window.scrollTo({top:0,behavior:"smooth"});else{const e=t;if(e){const s=e.getBoundingClientRect();if(s.top>=0&&s.bottom<=(window.innerHeight||document.documentElement.clientHeight))return;window.scrollBy({top:s.top-20,behavior:"smooth"})}}}function yt(){se("top")}function St(){const{scrollTopBtn:t}=r;if(window.scrollY<100){t.classList.replace("js-scroll-top-button-active","hide-scroll-top-button");return}else t.classList.replace("hide-scroll-top-button","js-scroll-top-button-active");const e=document.documentElement.scrollTop||document.body.scrollTop,s=document.documentElement.scrollHeight-document.documentElement.clientHeight,i=e/s*100;t.style.background=`conic-gradient(rgba(244, 244, 244, 1) ${i}%, #242424 ${i}%)`}async function we(t){k.goBack()}function gt({target:t}){if(!t.hasAttribute("data-page"))return;const e=parseInt(t.dataset.page);b.changePage(e)}function xt(t){t.currentTarget===r.btnOpenBurger&&(r.burgerMenu.classList.remove("is-hidden"),document.querySelector("html").classList.add("no-scroll")),t.currentTarget===r.btnCloseBurger&&(r.burgerMenu.classList.add("is-hidden"),document.querySelector("html").classList.remove("no-scroll"))}function le(t){if(t.preventDefault(),!t.target.closest("[data-delete]"))return;const e=t.target.closest("[data-delete]"),s=e.dataset.delete;if(r.body.dataset.page==="home"){const a=e.nextElementSibling;if(e.classList.add("is-hidden"),a.classList.remove("is-hidden"),!b.isFavorite(s))return;b.removeFavorite(s)}else e.disabled=!0,e.closest("[data-id]").classList.add("unmounting"),setTimeout(()=>{b.removeFavorite(s)},250)}async function $e(t){if(t.preventDefault(),!t.target.closest("[data-add]"))return;const e=t.target.closest("[data-add]"),s=e.previousElementSibling,i=e.dataset.add;b.isFavorite(i)||(d.getExerciseById(i).then(o=>b.addFavorite(o)),e.classList.add("is-hidden"),s.classList.remove("is-hidden"))}const Me={mobile:{subfilters:9,exercises:8,favorites:8},tablet:{subfilters:12,exercises:10,favorites:10},desktop:{subfilters:12,exercises:10,favorites:999}};let qe=Oe(window.screen.width);const Et=new ResizeObserver(t=>{let e=Oe(t[0].devicePixelContentBoxSize[0].inlineSize);qe!==e&&(qe=e,k.refreshLimits(Me[e]))});function _e(){let t="desktop";return window.screen.width<768&&(t="mobile"),window.screen.width>=768&&window.screen.width<1440&&(t="tablet"),Me[t]}function Oe(t){let e="desktop";return t<768&&(e="mobile"),t>=768&&t<1440&&(e="tablet"),e}var p,L,w,T,f,S,x,$,A,Q,ce,R,V,N,de;class mt{constructor({state:e,filter:s,subfiltersPage:i,subfilter:a,searchQuery:o,exercisesPage:c,limits:g}){h(this,$);h(this,Q);h(this,R);h(this,N);h(this,p,void 0);h(this,L,void 0);h(this,w,void 0);h(this,T,void 0);h(this,f,void 0);h(this,S,void 0);h(this,x,void 0);l(this,p,e),l(this,L,s),l(this,w,i),l(this,T,a),l(this,f,o),l(this,S,c),l(this,x,g)}load(){switch(Re(),d.limit=n(this,x)[n(this,p)],d.filter=n(this,L),n(this,p)){case"subfilters":d.page=n(this,w),H(),u(this,R,V).call(this);break;case"exercises":d.subFilter=n(this,T),d.keyword=n(this,f),d.page=n(this,S),r.searchForm.elements.exercise.setAttribute("value",n(this,f)),_(),u(this,Q,ce).call(this,n(this,T));break}r.pagination.addEventListener("click",dt),r.body.dataset.page==="home"&&(u(this,N,de).call(this,n(this,L)),r.filter.addEventListener("click",tt),r.subscribeForm.addEventListener("submit",ut),r.policyBtn.addEventListener("click",xe),r.termsBtn.addEventListener("click",xe)),r.navHome.forEach(e=>e.setAttribute("href","javascript:void(0)"))}changeFilter(e){d.filter=e,d.page=1,d.limit=n(this,x).subfilters,H(),u(this,N,de).call(this,e,n(this,L)),l(this,p,"subfilters"),l(this,L,e),l(this,w,1),u(this,R,V).call(this),u(this,$,A).call(this)}goExercises(e){d.subFilter=e,d.keyword="",d.page=1,d.limit=n(this,x).exercises,_(),l(this,p,"exercises"),l(this,T,e),l(this,f,""),l(this,S,1),u(this,Q,ce).call(this,e),u(this,$,A).call(this),se(r.gallerySubtitle)}goBack(){d.page=n(this,w),d.limit=n(this,x).subfilters,H(),l(this,p,"subfilters"),u(this,R,V).call(this),u(this,$,A).call(this)}changePage(e){switch(d.page=e,n(this,p)){case"subfilters":H(),l(this,w,e);break;case"exercises":_(),l(this,S,e);break}u(this,$,A).call(this),se(r.gallerySubtitle)}goSearch(e){e!==n(this,f)&&(d.keyword=e,d.page=1,_(),l(this,f,e),l(this,S,1),u(this,$,A).call(this))}resetSearch(){n(this,f)!==""&&(d.keyword="",d.page=1,_(),l(this,f,""),l(this,S,1),u(this,$,A).call(this))}refreshLimits(e){if(e[n(this,p)]!==n(this,x)[n(this,p)])switch(d.limit=e[n(this,p)],n(this,p)){case"subfilters":H();break;case"exercises":_();break}l(this,x,e)}}p=new WeakMap,L=new WeakMap,w=new WeakMap,T=new WeakMap,f=new WeakMap,S=new WeakMap,x=new WeakMap,$=new WeakSet,A=function(){sessionStorage.setItem(m.SS_KEY_FILTERS,JSON.stringify({state:n(this,p),filter:n(this,L),subfiltersPage:n(this,w),subfilter:n(this,T),searchQuery:n(this,f),exercisesPage:n(this,S)}))},Q=new WeakSet,ce=function(e){r.gallery.dataset.cards="exercises",r.backBtn.classList.remove("back-button-hidden"),r.searchForm.classList.remove("search-form-hidden"),r.gallerySubtitle.innerHTML=`<span class="exercises-title">&nbsp;/</span><h3 class="exercises-subtitle">${e}</h3>`,r.gallery.addEventListener("click",oe),r.backBtn.addEventListener("click",we),r.gallery.addEventListener("click",$e),r.gallery.addEventListener("click",le),r.searchForm.addEventListener("input",pe(Ee,1e3,{leading:!1,trailing:!0})),r.resetSearchForm.addEventListener("click",Le),r.gallery.removeEventListener("click",ve),r.searchForm.reset(),r.searchForm.elements.exercise.setAttribute("value",n(this,f))},R=new WeakSet,V=function(){r.gallery.dataset.cards="subfilters",r.backBtn.classList.add("back-button-hidden"),r.searchForm.classList.add("search-form-hidden"),r.gallerySubtitle.innerHTML="",r.gallery.addEventListener("click",ve),r.gallery.removeEventListener("click",oe),r.backBtn.removeEventListener("click",we),r.gallery.removeEventListener("click",$e),r.gallery.removeEventListener("click",le),r.searchForm.removeEventListener("input",pe(Ee,1e3,{leading:!1,trailing:!0})),r.resetSearchForm.removeEventListener("click",Le)},N=new WeakSet,de=function(e,s){[...r.filter.children].forEach(({firstElementChild:i})=>{switch(i.dataset.filter){case e:i.classList.add("filter-button-active");break;case s:i.classList.remove("filter-button-active");break}})};const k=new mt({...JSON.parse(sessionStorage.getItem(m.SS_KEY_FILTERS))??{state:"subfilters",filter:"muscles",subfiltersPage:1,subfilter:"",searchQuery:"",exercisesPage:1},limits:_e()});async function _(){r.gallery.classList.add("unmounting");try{const{results:t,page:e,totalPages:s}=await d.getExercises();if(!s){r.gallery.innerHTML=X(),j(0,0);return}if(e>s){k.changePage(s);return}r.gallery.innerHTML=ke(t),j(Number(e),s)}catch{Y(m.ERROR_MESSAGE),r.gallery.innerHTML=X(),j(0,0)}finally{r.gallery.classList.remove("unmounting")}}async function H(){r.gallery.classList.add("unmounting");try{const{results:t,page:e,totalPages:s}=await d.getFilters();if(!s){r.gallery.innerHTML=X(),j(0,0);return}if(e>s){k.changePage(s);return}r.gallery.innerHTML=He(t),j(Number(e),s)}catch{Y(m.ERROR_MESSAGE),r.gallery.innerHTML=X(),j(0,0)}finally{r.gallery.classList.remove("unmounting")}}async function Re(t){const e=new Date,s=`${e.getDate()}/${e.getMonth()}/${e.getFullYear()}`;let i;const a=JSON.parse(localStorage.getItem(m.LS_KEY_QUOTE));if(a)if(s!==a.date){try{i=await d.getQuote(),i.quote=i.quote||m.BASE_QUOTE.quote,i.author=i.author||"Unknown"}catch{r.quote.insertAdjacentHTML("beforeend",U(m.BASE_QUOTE,t));return}i.author!=="Unknown"&&i.quote!==m.BASE_QUOTE.quote&&(i.date=s,localStorage.setItem(m.LS_KEY_QUOTE,JSON.stringify(i))),r.quote.insertAdjacentHTML("beforeend",U(i,t))}else r.quote.insertAdjacentHTML("beforeend",U(a,t));else{try{i=await d.getQuote(),i.quote=i.quote||m.BASE_QUOTE.quote,i.author=i.author||"Unknown"}catch{r.quote.insertAdjacentHTML("beforeend",U(m.BASE_QUOTE,t));return}i.author!=="Unknown"&&i.quote!==m.BASE_QUOTE.quote&&(i.date=s,localStorage.setItem(m.LS_KEY_QUOTE,JSON.stringify(i))),r.quote.insertAdjacentHTML("beforeend",U(i,t))}}function pt(t,e,s){r.gallery.classList.add("unmounting"),t.length?r.gallery.innerHTML=ke(t,"favorites"):r.gallery.innerHTML="<li class='list-empty'><p>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p></li>",j(e,s),r.gallery.classList.remove("unmounting")}var v,E,q,C,ie,Ce,K,ue,I,O;class ft{constructor(e,s,i,a){h(this,ie);h(this,K);h(this,I);h(this,v,void 0);h(this,E,void 0);h(this,q,void 0);h(this,C,void 0);l(this,v,e),l(this,E,s),l(this,q,i),l(this,C,a)}load(){Re("favorite"),u(this,I,O).call(this),r.gallery.addEventListener("click",oe),r.gallery.addEventListener("click",le),r.pagination.addEventListener("click",gt),r.navFavorites.forEach(e=>e.setAttribute("href","javascript:void(0)"))}isFavorite(e){return n(this,v).some(s=>s._id===e)}removeFavorite(e){const s=n(this,v).map(i=>i._id).indexOf(e);n(this,v).splice(s,1),u(this,K,ue).call(this),n(this,C)==="favorites"&&u(this,I,O).call(this)}addFavorite(e){n(this,v).push(e),u(this,K,ue).call(this),n(this,C)==="favorites"&&u(this,I,O).call(this)}changePage(e){l(this,E,e),u(this,I,O).call(this),se(r.favoritesAnchor)}refreshLimits(e){e.favorites!==n(this,q)&&(l(this,q,e.favorites),u(this,I,O).call(this))}}v=new WeakMap,E=new WeakMap,q=new WeakMap,C=new WeakMap,ie=new WeakSet,Ce=function(){sessionStorage.setItem(m.SS_KEY_FAVORITES,n(this,E))},K=new WeakSet,ue=function(){localStorage.setItem(m.LS_KEY_FAVORITES,JSON.stringify(n(this,v)))},I=new WeakSet,O=function(){const e=Math.ceil(n(this,v).length/n(this,q));e&&n(this,E)>e&&l(this,E,e);const s=[...n(this,v)].splice((n(this,E)-1)*n(this,q),n(this,q));pt(s,n(this,E),e),u(this,ie,Ce).call(this)};const b=new ft(JSON.parse(localStorage.getItem(m.LS_KEY_FAVORITES))??[],parseInt(sessionStorage.getItem(m.SS_KEY_FAVORITES))||1,_e().favorites,r.body.dataset.page);export{yt as a,St as b,r as e,b as f,k as g,xt as h,Et as r};
//# sourceMappingURL=favorites-page-2129c18e.js.map
