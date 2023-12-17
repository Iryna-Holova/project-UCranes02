var ae=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var n=(e,t,s)=>(ae(e,t,"read from private field"),s?s.call(e):t.get(e)),g=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},l=(e,t,s,i)=>(ae(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s);var u=(e,t,s)=>(ae(e,t,"access private method"),s);import{i as ue,a as A,l as me}from"./vendor-243d56f5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const m={SS_KEY_FILTERS:"user filters",SS_KEY_FAVORITES:"favorites-page",LS_KEY_FAVORITES:"favorites",LS_KEY_QUOTE:"quote",BASE_QUOTE:{author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."},ERROR_MESSAGE:"Something goes wrong!"},r={body:document.querySelector("body"),burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),gallerySubtitle:document.querySelector(".js-subtitle"),pagination:document.querySelector(".js-pagination"),searchForm:document.querySelector(".js-search-form"),resetSearchForm:document.querySelector(".js-reset-form"),backBtn:document.querySelector(".js-back-button"),subscribeForm:document.querySelector(".js-subscribe-form"),quote:document.querySelector(".js-quote"),policyBtn:document.querySelector(".js-policy-modal-open"),termsBtn:document.querySelector(".js-terms-modal-open"),scrollTopBtn:document.querySelector(".js-scroll-top-button"),btnCloseBurger:document.querySelector(".mobile-menu-close-btn"),btnOpenBurger:document.querySelector(".mobile-menu-open-btn"),burgerMenu:document.querySelector(".mobile-menu-backdrop")};function Re(e){return e.map(({filter:t,name:s,imgURL:i})=>`<li class="exercises-item">
      <a data-subfilter="${s}" class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${i}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${t}</p>
        </div>
      </a>
    </li>`).join("")}const V="/project-UCranes02/assets/icons-627bb2e4.svg#icon-remove",we="/project-UCranes02/assets/icons-627bb2e4.svg#icon-star",Ce="/project-UCranes02/assets/icons-627bb2e4.svg#icon-arrow",Ne="/project-UCranes02/assets/icons-627bb2e4.svg#icon-run-man",ge="/project-UCranes02/assets/icons-627bb2e4.svg#icon-heart";function ne(e,t){return e.map(({_id:s,bodyPart:i,name:a,target:o,rating:d,burnedCalories:h,time:I})=>`
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
                  <use href="${V}"></use>
                </svg>
                </button>
              `:`
               <button class="btn-delete-card ${E.isFavorite(s)?"":"is-hidden"}" type="button" data-delete="${s}">
                <svg class="icon-delete-favorite" width="16" height="16">
                  <use href="${V}"></use>
                </svg>
                </button>
                   
                <button class="btn-add-card ${E.isFavorite(s)?"is-hidden":""}"" type="button" data-add="${s}">
                <svg class="icon-add-favorite" width="16" height="16">
                 <use href="${ge}"></use>
               </svg>
               </button>
               
                <div class="cont-card-rating">
                  <p class="card-rating-exer">${d}</p>
                  <svg class="icon-card-exer" width="18" height="18">
                     <use href="${we}"></use>
                  </svg>
                </div>
              `}
            <div class="block-btn-icon-exer">
              <button class="btn-card-exer">Start</button>
              <svg class="icon-card-btn" width="16" height="16">
                <use href="${Ce}"></use>
              </svg>
            </div>
          </div>
          <!-- Middle place card -->
          <div class="cont-icon-name-text">
            <svg class="icon-people-card" width="24" height="24">
              <use href="${Ne}"></use>
            </svg>
            <p class="text-name-exercises-card">${a}</p>
          </div>
          <!-- End place card -->
          <ul class="list-info-exer">
            <li class="item-card-exer">
              <p class="text-title-item-exer big">Burned calories:</p>
              <p class="text-info-exer size-time">${h}/${I}</p>
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
    </li>`).join("")}function Ue(e,t){let s=[],i=[];if(t<=5)for(let a=1;a<=t;a+=1)J(a,e)?s.push(`<li class="elm"><button type="button" disabled class="pagination-el ${J(a,e)?"active":"unactive"}" data-page="${a}" >${a}</button></li>`):s.push(`<li class="elm"><button type="button" class="pagination-el ${J(a,e)?"active":"unactive"}" data-page="${a}" >${a}</button></li>`);else{const a=Math.max(Math.min(e-2,t-4),1),o=Math.min(a+4,t);for(let d=a;d<=o;d+=1)i.push(d),J(d,e)?s.push(`<li class="elm"><button type="button" class="pagination-el active" disabled data-page="${d}" >${d}</button></li>`):s.push(`<li class="elm"><button type="button" class="pagination-el unactive"  data-page="${d}" >${d}</button></li>`);i.includes(1)||s.unshift('<li class="elm"><button type="button" class="pagination-el unactive"  data-page="1" >1</button>&nbsp;&nbsp;...</li>'),i.includes(t)||s.push(`<li class="elm">...&nbsp;&nbsp;<button type="button" class="pagination-el unactive"  data-page="${t}">${t}</button></li>`)}return s.join("")}function J(e,t){return e===t}const He="/project-UCranes02/assets/icons-627bb2e4.svg#icon-close",De="/project-UCranes02/assets/icons-627bb2e4.svg#icon-camera";function Qe({bodyPart:e,equipment:t,gifUrl:s,name:i,target:a,description:o,rating:d,burnedCalories:h,time:I,popularity:v,_id:je}){let Y=Math.round(d),z=!1;const he=JSON.parse(localStorage.getItem("favorites"));return he&&(z=he.some(ie=>ie._id===je)),`
    <div class="exercise-modal">
        <button class="exercise-card-close-btn" type="button">
            <svg class="exercise-card-close-icon" aria-label="Modal window close icon">
                <use href="${He}"></use>
            </svg>
        </button>
        <div class="exercise-card">
            <div class="exercise-card-img-wrap">
            ${s?`<img src=${s} alt="Exercise image">`:`
            <div class="exercise-card-no-img-wrap">
              <svg class="exercise-card-no-img" aria-label="No image">
                  <use class="exercise-card-no-img-icon" href="${De}"></use>
              </svg>
              <span>image not found</span>
            </div>
            `}
    
            </div>
                <div class="exercise-card-info">
                    <div>
                        <h2 class="exercise-card-title">${i}</h2>
                        ${Y?` <div class="exercise-card-rating"><span>${Y?Y+".0":""}</span>
                        ${[1,2,3,4,5].map(ie=>`
                        <svg aria-label="Rating star" width="16" height="16" stroke="var(--black)" fill=${Y>=ie?"var(--yellow)":"var(--white-transparent-20)"} >
                            <use href="${we}"></use>
                        </svg>`).join("")}
                          </div>`:""}
                            
                        <ul class="exercise-card-details-list">
                        ${a?`<li class="exercise-card-details-item">
                        <p class="details-name">Target</p>
                        <p class="details-value">${a}</p>
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
                          ${h&&I?`<li class="exercise-card-details-item">
                              <p class="details-name">Burned calories</p>
                              <p class="details-value">${h}/${I} min</p>
                          </li>`:""}
                         
                        </ul>
                        <p class="exercise-card-description">${o||""}</p>
                    </div>
                    <div class="exercise-card-btn-group">
                        <button class="card-btn add-favorites-btn" ${z?'style="padding: 12px 9px"':""}>
                            <span>${z?"Remove from favorites":"Add to favorites"}</span>
                            <svg class="favorites-icon" aria-label="Favorite icon" width="20" height="20" >
                                <use href="${z?`${V}`:`${ge}`}"></use>
                            </svg>
                        </button>
                        <button class="card-btn add-rating-btn">Give a rating</button>
                </div>
            </div>
        </div>
    </div>`}function C({author:e,quote:t},s){return`
          ${s==="favorite"?`<p class="favorite-text-quote">${t}</p>`:`<p class="text-quote list-item-text">${t}</p>`}
          <p class="autor-quote list-item-text">${e}</p>
        `}function W(e,t){r.pagination.innerHTML=Ue(e,t)}ue.settings({timeout:5e3,resetOnHover:!0,position:"topCenter",transitionIn:"flipInX",transitionOut:"flipOutX",theme:"dark",backgroundColor:"#242424",maxWidth:600});function K(e){ue.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:e})}function $e(e){ue.show({progressBarColor:"#4FAC40",message:e})}const M="https://your-energy.b.goit.study/api/",Ke={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class Ye{constructor({filter:t="muscles",subFilter:s="",keyword:i="",page:a=1,limit:o=8}){this.filter=t,this.subFilter=s,this.keyword=i,this.page=a,this.limit=o,this.id=""}async getFilters(){return(await A.get(`${M}filters`,{params:{filter:Ke[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await A.get(`${M}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(t){const s=await A.get(`${M}exercises/${t}`);return this.id=t,s.data}async updateExerciseRating({rate:t,email:s,review:i}){return(await A.patch(`${M}exercises/${this.id}/rating`,{rate:t,email:s,review:i})).data}async getQuote(){return(await A.get(`${M}quote`)).data}async subscribe({email:t}){return(await A.post(`${M}subscription`,{email:t})).data}}const c=new Ye({});function ze(e){e.target.hasAttribute("data-filter")&&F.changeFilter(e.target.dataset.filter)}async function pe(e){if(e.preventDefault(),!e.target.closest("[data-subfilter]"))return;const{subfilter:t}=e.target.closest("[data-subfilter]").dataset;F.goExercises(t)}function qe(e){(e||document).querySelector(".loader").classList.remove("is-hidden")}function X(e){(e||document).querySelector(".loader").classList.add("is-hidden")}function Je(e){const t=document.querySelector(".add-favorites-btn");E.isFavorite(e._id)?(E.removeFavorite(e._id),t.style.padding="12px 16px",t.querySelector("span").textContent="Add to favorites",t.querySelector("use").setAttribute("href",ge)):(E.addFavorite(e),t.style.padding="12px 9px",t.querySelector("span").textContent="Remove from favorites",t.querySelector("use").setAttribute("href",V))}function Ge(){return'<span class="loader is-hidden"></span>'}function Te(e){e&&(e.querySelector(".loader")||e.insertAdjacentHTML("beforeend",Ge()))}const Ve=/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;function We(e,t){const[s,i,a]=t.querySelectorAll(".users_rating, label"),[o,d,h]=t.querySelectorAll(".error");e.rate?(s.classList.add("invalid"),o.textContent=e.rate):(s.classList.remove("invalid"),o.textContent=""),e.email?(i.classList.add("invalid"),d.textContent=e.email):(i.classList.remove("invalid"),d.textContent=""),e.review?(a.classList.add("invalid"),h.textContent=e.review):(a.classList.remove("invalid"),h.textContent="")}function Fe({rate:e,email:t,review:s}){const i={isInvalid:!1};return e||(i.isInvalid=!0,i.rate="Please select a rating"),t||(i.isInvalid=!0,i.email="Please enter an email"),Ve.test(t)||(i.isInvalid=!0,i.email="Please enter a valid email"),s||(i.isInvalid=!0,i.review="Please enter a review"),i}async function Xe(e,t){e.preventDefault();const s=new FormData(e.target),i={rate:Number(s.get("rate")),email:s.get("email"),review:s.get("review")},a=Fe(i);if(We(a,e.target),!a.isInvalid){e.target.querySelector('[type="submit"]').disabled=!0,Te(e.target);try{qe(e.target);const o=await c.updateExerciseRating(i);X(e.target),t()}catch(o){console.log(o),K("Something went wrong. Please try again later."),X(e.target),e.target.querySelector('[type="submit"]').disabled=!1}}}function Ze(e){const t=e.target.closest(".rating");if(!t)return;const s=t.querySelectorAll('[name="rate"]'),i=t.parentElement.firstElementChild;s.forEach(a=>{a.checked&&(i.textContent=a.value+".0")})}const T={detailsPopup:!1,ratingPopup:!1},fe=e=>e.stopPropagation(),et=(e,{closeCallback:t,submitCallback:s})=>{const i=e.querySelector(".modal__close-btn"),a=e.querySelector(".give_a_rating"),o=e.querySelector(".rating");a.setAttribute("novalidate",!0),o.addEventListener("click",d=>{Ze(d)}),i.addEventListener("click",()=>{t()}),a.addEventListener("submit",d=>{d.preventDefault(),s(d)})},Z=e=>{var t,s;T.detailsPopup=!1,T.ratingPopup=!1,e==null||e.classList.add("is-hidden"),(t=e==null?void 0:e.querySelector("[data-modal]"))==null||t.remove(),(s=e==null?void 0:e.querySelector(".exercise-modal"))==null||s.remove(),document.documentElement.classList.remove("no-scroll")},ke=(e,t,s)=>{var i;t.remove(),(i=e.querySelector("[data-modal]"))==null||i.remove(),T.ratingPopup=!1,e.append(s)},ve=(e,t,s)=>{switch(!0){case(T.detailsPopup&&!T.ratingPopup):Z(e);return;case(T.detailsPopup&&T.ratingPopup):ke(e,t,s);return;default:Z(e);return}},tt=(e,t,s)=>{s.insertAdjacentHTML("beforeend",e);const i=s.querySelector(".exercise-modal"),a=s.querySelector(".exercise-card-close-btn"),o=s.querySelector(".add-rating-btn"),d=s.querySelector(".add-favorites-btn"),h=document.querySelector("#modal-template").content.firstElementChild.cloneNode(!0),I=a.querySelector("use").getAttribute("href");h.querySelector("use").setAttribute("href",I),window.addEventListener("keydown",v=>{v.code==="Escape"&&ve(s,h,i)}),s.addEventListener("click",()=>{ve(s,h,i)}),i.addEventListener("click",fe),h.addEventListener("click",fe),a.addEventListener("click",()=>{Z(s)}),o.addEventListener("click",()=>{var v;T.ratingPopup=!0,(v=s==null?void 0:s.querySelector(".exercise-modal"))==null||v.remove(),s.append(h)}),d.addEventListener("click",v=>{Je(t)}),et(h,{closeCallback:()=>ke(s,h,i),submitCallback:v=>Xe(v,()=>{Z(s),$e("Thank you for your feedback!")})}),document.documentElement.classList.add("no-scroll"),T.detailsPopup=!0};async function oe(e){if(e.preventDefault(),!e.target.closest("[data-id]")||e.target.closest("[data-delete]")||e.target.closest("[data-add]"))return;const t=document.querySelector(".exercise-modal-backdrop");t.classList.remove("is-hidden");try{const s=e.target.closest("[data-id]").dataset.id;Te(t),qe(t);const i=await c.getExerciseById(s);X(t);const a=Qe(i),o=tt(a,i,t)}catch(s){console.error(s),K("Something went wrong. Please try again later."),X(t)}}function st({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);F.changePage(t)}const be=document.querySelector(".footer-error");async function it(e){e.preventDefault();const t=new FormData(e.currentTarget),s={};t.forEach((a,o)=>{s[o]=a});const{email:i}=Fe({email:s.subscribe});if(i)be.classList.remove("visually-hidden");else{e.currentTarget.reset(),be.classList.add("visually-hidden");try{const a=await c.subscribe({email:s.subscribe});$e(a.message)}catch(a){K(a.response.data.message)}}}let re,U;function ye(e){e.target===r.policyBtn&&(U=document.querySelector(".js-policy-modal"),re=document.querySelector(".js-policy-modal-close")),e.target===r.termsBtn&&(U=document.querySelector(".js-terms-modal"),re=document.querySelector(".js-terms-modal-close")),ee(),U.addEventListener("click",at),re.addEventListener("click",ee),window.addEventListener("keydown",Pe)}function Pe(e){e.code==="Escape"&&ee()}function at(e){e.target===U&&ee()}function ee(){U.classList.toggle("is-hidden"),document.documentElement.classList.toggle("no-scroll"),window.removeEventListener("keydown",Pe)}function Se(){const e=r.searchForm.exercise.value.trim();F.goSearch(e)}function xe(){this.setAttribute("value",""),F.resetSearch()}function te(e){if(e==="top")window.scrollTo({top:0,behavior:"smooth"});else{const t=e;if(t){const s=t.getBoundingClientRect();if(s.top>=0&&s.bottom<=(window.innerHeight||document.documentElement.clientHeight))return;window.scrollBy({top:s.top-20,behavior:"smooth"})}}}function gt(){te("top")}function ht(){const{scrollTopBtn:e}=r;if(window.scrollY<100){e.classList.replace("js-scroll-top-button-active","hide-scroll-top-button");return}else e.classList.replace("hide-scroll-top-button","js-scroll-top-button-active")}async function Ee(e){F.goBack()}function rt({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);E.changePage(t)}function mt(e){e.currentTarget===r.btnOpenBurger&&(r.burgerMenu.classList.remove("is-hidden"),document.querySelector("html").classList.add("no-scroll")),e.currentTarget===r.btnCloseBurger&&(r.burgerMenu.classList.add("is-hidden"),document.querySelector("html").classList.remove("no-scroll"))}function Be(e){if(e.preventDefault(),!e.target.closest("[data-delete]"))return;const t=e.target.closest("[data-delete]"),s=t.nextElementSibling,i=t.dataset.delete;if(!E.isFavorite(i))return;E.removeFavorite(i),r.body.dataset.page==="home"&&(t.classList.add("is-hidden"),s.classList.remove("is-hidden"))}async function nt(e){if(e.preventDefault(),!e.target.closest("[data-add]"))return;const t=e.target.closest("[data-add]"),s=t.previousElementSibling,i=t.dataset.add;E.isFavorite(i)||(c.getExerciseById(i).then(o=>E.addFavorite(o)),t.classList.add("is-hidden"),s.classList.remove("is-hidden"))}const Ie={mobile:{subfilters:9,exercises:8,favorites:8},tablet:{subfilters:12,exercises:10,favorites:10},desktop:{subfilters:12,exercises:10,favorites:999}};let Le=Me(window.screen.width);const pt=new ResizeObserver(e=>{let t=Me(e[0].devicePixelContentBoxSize[0].inlineSize);Le!==t&&(Le=t,F.refreshLimits(Ie[t]))});function Ae(){let e="desktop";return window.screen.width<768&&(e="mobile"),window.screen.width>=768&&window.screen.width<1440&&(e="tablet"),Ie[e]}function Me(e){let t="desktop";return e<768&&(t="mobile"),e>=768&&e<1440&&(t="tablet"),t}var p,L,w,k,b,y,S,$,B,H,le,j,G,D,ce;class ot{constructor({state:t,filter:s,subfiltersPage:i,subfilter:a,searchQuery:o,exercisesPage:d,limits:h}){g(this,$);g(this,H);g(this,j);g(this,D);g(this,p,void 0);g(this,L,void 0);g(this,w,void 0);g(this,k,void 0);g(this,b,void 0);g(this,y,void 0);g(this,S,void 0);l(this,p,t),l(this,L,s),l(this,w,i),l(this,k,a),l(this,b,o),l(this,y,d),l(this,S,h)}load(){switch(_e(),c.limit=n(this,S)[n(this,p)],c.filter=n(this,L),n(this,p)){case"subfilters":c.page=n(this,w),N(),u(this,j,G).call(this);break;case"exercises":c.subFilter=n(this,k),c.keyword=n(this,b),c.page=n(this,y),r.searchForm.elements.exercise.setAttribute("value",n(this,b)),_(),u(this,H,le).call(this,n(this,k));break}r.pagination.addEventListener("click",st),r.body.dataset.page==="home"&&(u(this,D,ce).call(this,n(this,L)),r.filter.addEventListener("click",ze),r.subscribeForm.addEventListener("submit",it),r.policyBtn.addEventListener("click",ye),r.termsBtn.addEventListener("click",ye))}changeFilter(t){c.filter=t,c.page=1,c.limit=n(this,S).subfilters,N(),u(this,D,ce).call(this,t,n(this,L)),l(this,p,"subfilters"),l(this,L,t),l(this,w,1),u(this,j,G).call(this),u(this,$,B).call(this)}goExercises(t){c.subFilter=t,c.keyword="",c.page=1,c.limit=n(this,S).exercises,_(),l(this,p,"exercises"),l(this,k,t),l(this,b,""),l(this,y,1),u(this,H,le).call(this,t),u(this,$,B).call(this),te(r.gallerySubtitle)}goBack(){c.page=n(this,w),c.limit=n(this,S).subfilters,N(),l(this,p,"subfilters"),u(this,j,G).call(this),u(this,$,B).call(this)}changePage(t){switch(c.page=t,n(this,p)){case"subfilters":N(),l(this,w,t);break;case"exercises":_(),l(this,y,t);break}u(this,$,B).call(this),te(r.gallerySubtitle)}goSearch(t){c.keyword=t,c.page=1,_(),l(this,b,t),l(this,y,1),u(this,$,B).call(this)}resetSearch(){c.keyword="",c.page=1,_(),l(this,b,""),l(this,y,1),u(this,$,B).call(this)}refreshLimits(t){if(t[n(this,p)]!==n(this,S)[n(this,p)])switch(c.limit=t[n(this,p)],n(this,p)){case"subfilters":N();break;case"exercises":_();break}l(this,S,t)}}p=new WeakMap,L=new WeakMap,w=new WeakMap,k=new WeakMap,b=new WeakMap,y=new WeakMap,S=new WeakMap,$=new WeakSet,B=function(){sessionStorage.setItem(m.SS_KEY_FILTERS,JSON.stringify({state:n(this,p),filter:n(this,L),subfiltersPage:n(this,w),subfilter:n(this,k),searchQuery:n(this,b),exercisesPage:n(this,y)}))},H=new WeakSet,le=function(t){r.gallery.dataset.cards="exercises",r.backBtn.classList.remove("back-button-hidden"),r.searchForm.classList.remove("search-form-hidden"),r.gallerySubtitle.innerHTML=`<span class="exercises-title">&nbsp;/</span><h3 class="exercises-subtitle">${t}</h3>`,r.gallery.addEventListener("click",oe),r.backBtn.addEventListener("click",Ee),r.searchForm.addEventListener("input",me(Se,1e3,{leading:!1,trailing:!0})),r.gallery.removeEventListener("click",pe),r.resetSearchForm.addEventListener("click",xe),r.searchForm.reset()},j=new WeakSet,G=function(){r.gallery.dataset.cards="subfilters",r.backBtn.classList.add("back-button-hidden"),r.searchForm.classList.add("search-form-hidden"),r.gallerySubtitle.innerHTML="",r.gallery.addEventListener("click",pe),r.gallery.removeEventListener("click",oe),r.backBtn.removeEventListener("click",Ee),r.searchForm.removeEventListener("input",me(Se,1e3,{leading:!1,trailing:!0})),r.resetSearchForm.removeEventListener("click",xe)},D=new WeakSet,ce=function(t,s){[...r.filter.children].forEach(({firstElementChild:i})=>{switch(i.dataset.filter){case t:i.classList.add("filter-button-active");break;case s:i.classList.remove("filter-button-active");break}})};const F=new ot({...JSON.parse(sessionStorage.getItem(m.SS_KEY_FILTERS))??{state:"subfilters",filter:"muscles",subfiltersPage:1,subfilter:"",searchQuery:"",exercisesPage:1},limits:Ae()});async function _(){const e=await c.getExercises();r.gallery.innerHTML=ne(e.results),W(Number(e.page),e.totalPages),r.gallery.addEventListener("click",nt),r.gallery.addEventListener("click",Be),r.gallery.classList.add("unmounting");try{const{results:t,page:s,totalPages:i}=await c.getExercises();if(!i){r.gallery.innerHTML='<img src="/img/no-foto.jpeg" alt="Not found">';return}if(s>i){F.changePage(i);return}r.gallery.innerHTML=ne(t),W(Number(s),i)}catch{K(m.ERROR_MESSAGE),r.gallery.innerHTML='<img src="/img/no-foto.jpeg" alt="Not found">'}finally{r.gallery.classList.remove("unmounting")}}async function N(){r.gallery.classList.add("unmounting");try{const{results:e,page:t,totalPages:s}=await c.getFilters();if(!s){r.gallery.innerHTML='<img src="/img/no-foto.jpeg" alt="Not found">';return}if(t>s){F.changePage(s);return}r.gallery.innerHTML=Re(e),W(Number(t),s)}catch{K(m.ERROR_MESSAGE),r.gallery.innerHTML='<img src="/img/no-foto.jpeg" alt="Not found">'}finally{r.gallery.classList.remove("unmounting")}}async function _e(e){const t=new Date,s=`${t.getDate()}/${t.getMonth()}/${t.getFullYear()}`;let i;const a=JSON.parse(localStorage.getItem(m.LS_KEY_QUOTE));if(a)if(s!==a.date){try{i=await c.getQuote(),i.quote=i.quote||m.BASE_QUOTE.quote,i.author=i.author||"Unknown"}catch{r.quote.insertAdjacentHTML("beforeend",C(m.BASE_QUOTE,e));return}i.author!=="Unknown"&&i.quote!==m.BASE_QUOTE.quote&&(i.date=s,localStorage.setItem(m.LS_KEY_QUOTE,JSON.stringify(i))),r.quote.insertAdjacentHTML("beforeend",C(i,e))}else r.quote.insertAdjacentHTML("beforeend",C(a,e));else{try{i=await c.getQuote(),i.quote=i.quote||m.BASE_QUOTE.quote,i.author=i.author||"Unknown"}catch{r.quote.insertAdjacentHTML("beforeend",C(m.BASE_QUOTE,e));return}i.author!=="Unknown"&&i.quote!==m.BASE_QUOTE.quote&&(i.date=s,localStorage.setItem(m.LS_KEY_QUOTE,JSON.stringify(i))),r.quote.insertAdjacentHTML("beforeend",C(i,e))}}function lt(e,t,s){r.gallery.classList.add("unmounting"),e.length?(r.gallery.innerHTML=ne(e,"favorites"),W(t,s)):r.gallery.innerHTML="<p class='list-empty'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>",r.gallery.classList.remove("unmounting"),setTimeout(()=>{},0)}var f,x,q,R,se,Oe,Q,de,P,O;class ct{constructor(t,s,i,a){g(this,se);g(this,Q);g(this,P);g(this,f,void 0);g(this,x,void 0);g(this,q,void 0);g(this,R,void 0);l(this,f,t),l(this,x,s),l(this,q,i),l(this,R,a)}load(){_e("favorite"),u(this,P,O).call(this),r.gallery.addEventListener("click",oe),r.gallery.addEventListener("click",Be),r.pagination.addEventListener("click",rt)}isFavorite(t){return n(this,f).some(s=>s._id===t)}removeFavorite(t){const s=n(this,f).map(i=>i._id).indexOf(t);n(this,f).splice(s,1),u(this,Q,de).call(this),n(this,R)==="favorites"&&u(this,P,O).call(this)}addFavorite(t){n(this,f).push(t),u(this,Q,de).call(this),n(this,R)==="favorites"&&u(this,P,O).call(this)}changePage(t){l(this,x,t),u(this,P,O).call(this),te(r.gallery)}refreshLimits(t){t.favorites!==n(this,q)&&(l(this,q,t.favorites),u(this,P,O).call(this))}}f=new WeakMap,x=new WeakMap,q=new WeakMap,R=new WeakMap,se=new WeakSet,Oe=function(){sessionStorage.setItem(m.SS_KEY_FAVORITES,n(this,x))},Q=new WeakSet,de=function(){localStorage.setItem(m.LS_KEY_FAVORITES,JSON.stringify(n(this,f)))},P=new WeakSet,O=function(){const t=Math.ceil(n(this,f).length/n(this,q));t&&n(this,x)>t&&l(this,x,t);const s=[...n(this,f)].splice((n(this,x)-1)*n(this,q),n(this,q));lt(s,n(this,x),t),u(this,se,Oe).call(this)};const E=new ct(JSON.parse(localStorage.getItem(m.LS_KEY_FAVORITES))??[],parseInt(sessionStorage.getItem(m.SS_KEY_FAVORITES))||1,Ae().favorites,r.body.dataset.page);export{gt as a,ht as b,r as e,E as f,F as g,mt as h,pt as r};
//# sourceMappingURL=favorites-page-0997b530.js.map
