var ee=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var n=(e,t,s)=>(ee(e,t,"read from private field"),s?s.call(e):t.get(e)),p=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},c=(e,t,s,i)=>(ee(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s);var u=(e,t,s)=>(ee(e,t,"access private method"),s);import{a as F,i as ne,l as de}from"./vendor-80510813.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const h={SS_KEY_FILTERS:"user filters",SS_KEY_FAVORITES:"favorites-page",LS_KEY_FAVORITES:"favorites",LS_KEY_QUOTE:"quote",BASE_QUOTE:{author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."},ERROR_MESSAGE:"Something goes wrong!"},a={body:document.querySelector("body"),burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),gallerySubtitle:document.querySelector(".js-subtitle"),pagination:document.querySelector(".js-pagination"),searchForm:document.querySelector(".js-search-form"),backBtn:document.querySelector(".js-back-button"),subscribeForm:document.querySelector(".js-subscribe-form"),quote:document.querySelector(".js-quote"),policyBtn:document.querySelector(".js-policy-modal-open"),termsBtn:document.querySelector(".js-terms-modal-open"),scrollTopBtn:document.querySelector(".js-scroll-top-button"),btnCloseBurger:document.querySelector(".mobile-menu-close-btn"),btnOpenBurger:document.querySelector(".mobile-menu-open-btn"),burgerMenu:document.querySelector(".mobile-menu-backdrop")};function Be(e){return e.map(({filter:t,name:s,imgURL:i})=>`<li class="exercises-item">
      <a data-subfilter="${s}" class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${i}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${t}</p>
        </div>
      </a>
    </li>`).join("")}const oe="/project-UCranes02/assets/icons-0389f68f.svg#icon-remove",Fe="/project-UCranes02/assets/icons-0389f68f.svg#icon-star",_e="/project-UCranes02/assets/icons-0389f68f.svg#icon-arrow",Oe="/project-UCranes02/assets/icons-0389f68f.svg#icon-run-man";function ye(e,t){return e.map(({_id:s,bodyPart:i,name:r,target:o,rating:l,burnedCalories:f,time:m})=>`
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
                  <use href="${oe}"></use>
                </svg>
                </button>
                
              `:`
                <div class="cont-card-rating">
                  <p class="card-rating-exer">${l}</p>
                  <svg class="icon-card-exer" width="18" height="18">
                    <use href="${Fe}"></use>
                  </svg>
                </div>
              `}
            <div class="block-btn-icon-exer">
              <button class="btn-card-exer">Start</button>
              <svg class="icon-card-btn" width="16" height="16">
                <use href="${_e}"></use>
              </svg>
            </div>
          </div>
          <!-- Middle place card -->
          <div class="cont-icon-name-text">
            <svg class="icon-people-card" width="24" height="24">
              <use href="${Oe}"></use>
            </svg>
            <p class="text-name-exercises-card">${r}</p>
          </div>
          <!-- End place card -->
          <ul class="list-info-exer">
            <li class="item-card-exer">
              <p class="text-title-item-exer big">Burned calories:</p>
              <p class="text-info-exer size-time">${f}/${m}</p>
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
    </li>`).join("")}function Ae(e,t){let s=[],i=[];if(t<=5)for(let r=1;r<=t;r+=1)s.push(`<li class="elm"><button type="button" class="pagination-el ${r===e?"active":"unactive"}" data-page="${r}" >${r}</button></li>`);else{const r=Math.max(Math.min(e-2,t-4),1),o=Math.min(r+4,t);for(let l=r;l<=o;l+=1)i.push(l),l!==e?s.push(`<li class="elm"><button type="button" class="pagination-el unactive"  data-page="${l}" >${l}</button></li>`):s.push(`<li class="elm"><button type="button" class="pagination-el active" disabled data-page="${l}" >${l}</button></li>`);i.includes(1)||s.unshift('<li class="elm"><button type="button" class="pagination-el unactive"  data-page="1" >1</button>&nbsp;&nbsp;...</li>'),i.includes(t)||s.push(`<li class="elm">...&nbsp;&nbsp;<button type="button" class="pagination-el unactive"  data-page="${t}">${t}</button></li>`)}return s.join("")}const Se="/project-UCranes02/assets/icons-0389f68f.svg#icon-heart",Ie="/project-UCranes02/assets/icons-0389f68f.svg#icon-close";function Me({bodyPart:e,equipment:t,gifUrl:s,name:i,target:r,description:o,rating:l,burnedCalories:f,time:m,popularity:P,_id:Pe}){let K=Math.round(l),Y=!1;const le=JSON.parse(localStorage.getItem("favorites"));return le&&(Y=le.some(W=>W._id===Pe)),`
  <div class="exercise-modal-backdrop" >
    <div class="exercise-modal">
        <button class="exercise-card-close-btn" type="button">
            <svg class="exercise-card-close-icon" aria-label="Modal window close icon">
                <use href="${Ie}"></use>
            </svg>
        </button>
        <div class="exercise-card">
            <div class="exercise-card-img-wrap">
                <img src=${s} alt="">
            </div>
                <div class="exercise-card-info">
                    <div>
                        <h2 class="exercise-card-title">${i}</h2>
                        ${K?` <div class="exercise-card-rating"><span>${K?K+".0":""}</span>
                        ${[1,2,3,4,5].map(W=>`
                        <svg aria-label="Rating star" width="16" height="16" stroke="var(--black)" fill=${K>=W?"var(--yellow)":"var(--white-transparent-20)"} >
                            <use href="/img/icons.svg#icon-star"></use>
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
                          ${P?`<li class="exercise-card-details-item">
                              <p class="details-name">Popular</p>
                              <p class="details-value">${P}</p>
                          </li>`:""}
                          ${f&&m?`<li class="exercise-card-details-item">
                              <p class="details-name">Burned calories</p>
                              <p class="details-value">${f}/${m} min</p>
                          </li>`:""}
                         
                        </ul>
                        <p class="exercise-card-description">${o||""}</p>
                    </div>
                    <div class="exercise-card-btn-group">
                        <button class="card-btn add-favorites-btn" ${Y?'style="padding: 12px 9px"':""}>
                            <span>${Y?"Remove from favorites":"Add to favorites"}</span>
                            <svg class="favorites-icon" aria-label="Favorite icon" width="20" height="20" >
                                <use href="${Y?`${oe}`:`${Se}heart`}"></use>
                            </svg>
                        </button>
                        <button class="card-btn add-rating-btn">Give a rating</button>
                </div>
            </div>
        </div>
    </div>
</div>`}function j({author:e,quote:t},s){return`
          ${s==="favorite"?`<p class="favorite-text-quote">${t}</p>`:`<p class="text-quote list-item-text">${t}</p>`}
          <p class="autor-quote list-item-text">${e}</p>
        `}function ce(e,t){a.pagination.innerHTML=Ae(e,t)}const _="https://your-energy.b.goit.study/api/",Re={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class je{constructor({filter:t="muscles",subFilter:s="",keyword:i="",page:r=1,limit:o=8}){this.filter=t,this.subFilter=s,this.keyword=i,this.page=r,this.limit=o,this.id=""}async getFilters(){return(await F.get(`${_}filters`,{params:{filter:Re[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await F.get(`${_}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(t){const s=await F.get(`${_}exercises/${t}`);return this.id=t,s.data}async updateExerciseRating({rate:t,email:s,review:i}){return(await F.patch(`${_}exercises/${this.id}/rating`,{rate:t,email:s,review:i})).data}async getQuote(){return(await F.get(`${_}quote`)).data}async subscribe({email:t}){return(await F.post(`${_}subscription`,{email:t})).data}}const d=new je({});async function O(){const e=await d.getExercises();a.gallery.innerHTML=ye(e.results),ce(Number(e.page),e.totalPages)}ne.settings({timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX",theme:"dark",backgroundColor:"#242424"});function Z(e){ne.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:e})}function xe(e){ne.show({progressBarColor:"#4FAC40",message:e})}async function C(){try{const e=await d.getFilters();a.gallery.innerHTML=Be(e.results),ce(Number(e.page),e.totalPages)}catch{Z(h.ERROR_MESSAGE),a.gallery.innerHTML="<p>Nothing was found<p/>"}}async function Ee(e){const t=new Date,s=`${t.getDate()}/${t.getMonth()}/${t.getFullYear()}`;let i;const r=JSON.parse(localStorage.getItem(h.LS_KEY_QUOTE));if(r)if(s!==r.date){try{i=await d.getQuote(),i.quote=i.quote||h.BASE_QUOTE.quote,i.author=i.author||"Unknown"}catch{a.quote.insertAdjacentHTML("beforeend",j(h.BASE_QUOTE,e));return}i.author!=="Unknown"&&i.quote!==h.BASE_QUOTE.quote&&(i.date=s,localStorage.setItem(h.LS_KEY_QUOTE,JSON.stringify(i))),a.quote.insertAdjacentHTML("beforeend",j(i,e))}else a.quote.insertAdjacentHTML("beforeend",j(r,e));else{try{i=await d.getQuote(),i.quote=i.quote||h.BASE_QUOTE.quote,i.author=i.author||"Unknown"}catch{a.quote.insertAdjacentHTML("beforeend",j(h.BASE_QUOTE,e));return}i.author!=="Unknown"&&i.quote!==h.BASE_QUOTE.quote&&(i.date=s,localStorage.setItem(h.LS_KEY_QUOTE,JSON.stringify(i))),a.quote.insertAdjacentHTML("beforeend",j(i,e))}}function Ce(e,t,s){a.gallery.innerHTML=ye(e,"favorites"),ce(t,s)}function J(e){if(e==="top")window.scrollTo({top:0,behavior:"smooth"});else{const t=e;if(t){const s=t.getBoundingClientRect();if(s.top>=0&&s.bottom<=(window.innerHeight||document.documentElement.clientHeight))return;window.scrollBy({top:s.top-20,behavior:"smooth"})}}}const we={mobile:{subfilters:9,exercises:8,favorites:8},tablet:{subfilters:12,exercises:10,favorites:10},desktop:{subfilters:12,exercises:10,favorites:999}};let ue=Le(window.screen.width);const nt=new ResizeObserver(e=>{let t=Le(e[0].devicePixelContentBoxSize[0].inlineSize);ue!==t&&(ue=t,R.refreshLimits(we[t]))});function Ue(){let e="desktop";return window.screen.width<768&&(e="mobile"),window.screen.width>=768&&window.screen.width<1440&&(e="tablet"),we[e]}function Le(e){let t="desktop";return e<768&&(t="mobile"),e>=768&&e<1440&&(t="tablet"),t}var g,x,E,$,w,b,y,L,B,Q,se,I,z,H,ie;class De{constructor({state:t,filter:s,subfiltersPage:i,subfilter:r,searchQuery:o,exercisesPage:l,limits:f}){p(this,L);p(this,Q);p(this,I);p(this,H);p(this,g,void 0);p(this,x,void 0);p(this,E,void 0);p(this,$,void 0);p(this,w,void 0);p(this,b,void 0);p(this,y,void 0);c(this,g,t),c(this,x,s),c(this,E,i),c(this,$,r),c(this,w,o),c(this,b,l),c(this,y,f)}load(){switch(Ee(),d.limit=n(this,y)[n(this,g)],d.filter=n(this,x),n(this,g)){case"subfilters":d.page=n(this,E),C(),u(this,I,z).call(this);break;case"exercises":d.subFilter=n(this,$),d.keyword=n(this,w),d.page=n(this,b),O(),u(this,Q,se).call(this,n(this,$));break}a.pagination.addEventListener("click",Ge),a.body.dataset.page==="home"&&(u(this,H,ie).call(this,n(this,x)),a.filter.addEventListener("click",Qe),a.subscribeForm.addEventListener("submit",Xe),a.policyBtn.addEventListener("click",me),a.termsBtn.addEventListener("click",me))}changeFilter(t){d.filter=t,d.page=1,d.limit=n(this,y).subfilters,C(),u(this,H,ie).call(this,t,n(this,x)),c(this,g,"subfilters"),c(this,x,t),c(this,E,1),u(this,I,z).call(this),u(this,L,B).call(this)}goExercises(t){d.subFilter=t,d.keyword="",d.page=1,d.limit=n(this,y).exercises,O(),c(this,g,"exercises"),c(this,$,t),c(this,w,""),c(this,b,1),u(this,Q,se).call(this,t),u(this,L,B).call(this),J(a.gallerySubtitle)}goBack(){d.page=n(this,E),d.limit=n(this,y).subfilters,C(),c(this,g,"subfilters"),u(this,I,z).call(this),u(this,L,B).call(this)}changePage(t){switch(d.page=t,n(this,g)){case"subfilters":C(),c(this,E,t);break;case"exercises":O(),c(this,b,t);break}u(this,L,B).call(this),J(a.gallerySubtitle)}goSearch(t){d.keyword=t,d.page=1,O(),c(this,w,t),c(this,b,1),u(this,L,B).call(this)}resetSearch(){d.keyword="",d.page=1,O(),c(this,w,""),c(this,b,1),u(this,L,B).call(this)}refreshLimits(t){switch(c(this,y,t),d.limit=n(this,y)[n(this,g)],n(this,g)){case"subfilters":C();break;case"exercises":O();break}}}g=new WeakMap,x=new WeakMap,E=new WeakMap,$=new WeakMap,w=new WeakMap,b=new WeakMap,y=new WeakMap,L=new WeakSet,B=function(){sessionStorage.setItem(h.SS_KEY_FILTERS,JSON.stringify({state:n(this,g),filter:n(this,x),subfiltersPage:n(this,E),subfilter:n(this,$),searchQuery:n(this,w),exercisesPage:n(this,b)}))},Q=new WeakSet,se=function(t){a.gallery.dataset.cards="exercises",a.backBtn.classList.remove("back-button-hidden"),a.searchForm.classList.remove("search-form-hidden"),a.gallerySubtitle.innerHTML=`<span class="exercises-title">&nbsp;/</span><h3 class="exercises-subtitle">${t}</h3>`,a.gallery.addEventListener("click",re),a.backBtn.addEventListener("click",be),a.searchForm.addEventListener("input",de(ve,1e3,{leading:!1,trailing:!0})),a.gallery.removeEventListener("click",pe),a.searchForm.reset()},I=new WeakSet,z=function(){a.gallery.dataset.cards="subfilters",a.backBtn.classList.add("back-button-hidden"),a.searchForm.classList.add("search-form-hidden"),a.gallerySubtitle.innerHTML="",a.gallery.addEventListener("click",pe),a.gallery.removeEventListener("click",re),a.backBtn.removeEventListener("click",be),a.searchForm.removeEventListener("input",de(ve,1e3,{leading:!1,trailing:!0}))},H=new WeakSet,ie=function(t,s){[...a.filter.children].forEach(({firstElementChild:i})=>{switch(i.dataset.filter){case t:i.classList.add("filter-button-active");break;case s:i.classList.remove("filter-button-active");break}})};const R=new De({...JSON.parse(sessionStorage.getItem(h.SS_KEY_FILTERS))??{state:"subfilters",filter:"muscles",subfiltersPage:1,subfilter:"",searchQuery:"",exercisesPage:1},limits:Ue()});function Qe(e){e.target.hasAttribute("data-filter")&&R.changeFilter(e.target.dataset.filter)}async function pe(e){if(e.preventDefault(),!e.target.closest("[data-subfilter]"))return;const{subfilter:t}=e.target.closest("[data-subfilter]").dataset;R.goExercises(t)}function He(e){const t=document.querySelector(".add-favorites-btn");D.isFavorite(e._id)?(D.removeFavorite(e._id),t.style.padding="12px 16px",t.querySelector("span").textContent="Add to favorites",t.querySelector("use").setAttribute("href",Se)):(D.addFavorite(e),t.style.padding="12px 9px",t.querySelector("span").textContent="Remove from favorites",t.querySelector("use").setAttribute("href",oe))}const Ne=/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;function Ke(e,t){const[s,i,r]=t.querySelectorAll(".users_rating, label"),[o,l,f]=t.querySelectorAll(".error");e.rate?(s.classList.add("invalid"),o.textContent=e.rate):(s.classList.remove("invalid"),o.textContent=""),e.email?(i.classList.add("invalid"),l.textContent=e.email):(i.classList.remove("invalid"),l.textContent=""),e.review?(r.classList.add("invalid"),f.textContent=e.review):(r.classList.remove("invalid"),f.textContent="")}function ke({rate:e,email:t,review:s}){const i={isInvalid:!1};return e||(i.isInvalid=!0,i.rate="Please select a rating"),t||(i.isInvalid=!0,i.email="Please enter an email"),Ne.test(t)||(i.isInvalid=!0,i.email="Please enter a valid email"),s||(i.isInvalid=!0,i.review="Please enter a review"),i}async function Ye(e,t){e.preventDefault();const s=new FormData(e.target),i={rate:Number(s.get("rate")),email:s.get("email"),review:s.get("review")},r=ke(i);if(Ke(r,e.target),!r.isInvalid)try{const o=await d.updateExerciseRating(i);t()}catch(o){console.log(o),Z("Something went wrong. Please try again later.")}}function ze(e){const t=e.target.closest(".rating");if(!t)return;const s=t.querySelectorAll('[name="rate"]'),i=t.parentElement.firstElementChild;s.forEach(r=>{r.checked&&(i.textContent=r.value+".0")})}const k={detailsPopup:!1,ratingPopup:!1},he=e=>e.stopPropagation(),Je=(e,{closeCallback:t,submitCallback:s})=>{const i=e.querySelector(".modal__close-btn"),r=e.querySelector(".give_a_rating"),o=e.querySelector(".rating");r.setAttribute("novalidate",!0),o.addEventListener("click",l=>{ze(l)}),i.addEventListener("click",()=>{t()}),r.addEventListener("submit",l=>{l.preventDefault(),s(l)})},V=e=>{k.detailsPopup=!1,k.ratingPopup=!1,e==null||e.remove(),document.documentElement.classList.remove("no-scroll")},$e=(e,t,s)=>{t.remove(),e.innerHTML="",k.ratingPopup=!1,e.append(s)},ge=(e,t,s)=>{switch(!0){case(k.detailsPopup&&!k.ratingPopup):V(e);return;case(k.detailsPopup&&k.ratingPopup):$e(e,t,s);return;default:V(e);return}},Ve=(e,t)=>{const s=document.createElement("div");s.innerHTML=e;const i=s.querySelector(".exercise-modal-backdrop"),r=s.querySelector(".exercise-modal"),o=s.querySelector(".exercise-card-close-btn"),l=s.querySelector(".add-rating-btn"),f=s.querySelector(".add-favorites-btn"),m=document.querySelector("#modal-template").content.firstElementChild.cloneNode(!0);window.addEventListener("keydown",P=>{P.code==="Escape"&&ge(i,m,r)}),i.addEventListener("click",()=>{ge(i,m,r)}),r.addEventListener("click",he),m.addEventListener("click",he),o.addEventListener("click",()=>{V(i)}),l.addEventListener("click",()=>{k.ratingPopup=!0,i.innerHTML="",i.append(m)}),f.addEventListener("click",P=>{He(t)}),Je(m,{closeCallback:()=>$e(i,m,r),submitCallback:P=>Ye(P,()=>{V(i),xe("Thank you for your feedback!")})}),document.documentElement.classList.add("no-scroll"),k.detailsPopup=!0,document.body.append(i)};async function re(e){if(e.preventDefault(),!(!e.target.closest("[data-id]")||e.target.closest("[data-delete]")))try{const t=e.target.closest("[data-id]").dataset.id,s=await d.getExerciseById(t),i=Me(s),r=Ve(i,s)}catch(t){console.error(t),Z("Something went wrong. Please try again later.")}}function Ge({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);R.changePage(t)}const fe=document.querySelector(".footer-error");async function Xe(e){e.preventDefault();const t=new FormData(e.currentTarget),s={};t.forEach((r,o)=>{s[o]=r});const{email:i}=ke({email:s.subscribe});if(i)fe.classList.remove("visually-hidden");else{e.currentTarget.reset(),fe.classList.add("visually-hidden");try{const r=await d.subscribe({email:s.subscribe});xe(r.message)}catch(r){Z(r.response.data.message)}}}let te,U;function me(e){e.target===a.policyBtn&&(U=document.querySelector(".js-policy-modal"),te=document.querySelector(".js-policy-modal-close")),e.target===a.termsBtn&&(U=document.querySelector(".js-terms-modal"),te=document.querySelector(".js-terms-modal-close")),G(),U.addEventListener("click",Ze),te.addEventListener("click",G),window.addEventListener("keydown",qe)}function qe(e){e.code==="Escape"&&G()}function Ze(e){e.target===U&&G()}function G(){U.classList.toggle("is-hidden"),document.documentElement.classList.toggle("no-scroll"),window.removeEventListener("keydown",qe)}function ve(e){e.preventDefault();const t=a.searchForm.exercise.value.trim();R.goSearch(t)}function ot(){J("top")}function ct(){const{scrollTopBtn:e}=a;if(window.scrollY<100){e.classList.replace("js-scroll-top-button-active","hide-scroll-top-button");return}else e.classList.replace("hide-scroll-top-button","js-scroll-top-button-active")}async function be(e){R.goBack()}function We({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);D.changePage(t)}function lt(e){e.currentTarget===a.btnOpenBurger&&(a.burgerMenu.classList.remove("is-hidden"),document.querySelector("html").classList.add("no-scroll")),e.currentTarget===a.btnCloseBurger&&(a.burgerMenu.classList.add("is-hidden"),document.querySelector("html").classList.remove("no-scroll"))}function et(e){if(e.preventDefault(),!e.target.closest("[data-delete]"))return;const t=e.target.closest("[data-delete]").dataset.delete;D.removeFavorite(t)}const tt={mobile:{subfilters:9,exercises:8,favorites:8},tablet:{subfilters:12,exercises:10,favorites:10},desktop:{subfilters:12,exercises:10,favorites:999}};function st(){let e="desktop";return window.screen.width<768&&(e="mobile"),window.screen.width>=768&&window.screen.width<1440&&(e="tablet"),tt[e]}var v,S,q,M,X,Te,N,ae,T,A;class it{constructor(t,s,i,r){p(this,X);p(this,N);p(this,T);p(this,v,void 0);p(this,S,void 0);p(this,q,void 0);p(this,M,void 0);c(this,v,t),c(this,S,s),c(this,q,i),c(this,M,r)}load(){Ee("favorite"),u(this,T,A).call(this),a.gallery.addEventListener("click",re),a.gallery.addEventListener("click",et),a.pagination.addEventListener("click",We)}isFavorite(t){return n(this,v).some(s=>s._id===t)}removeFavorite(t){const s=n(this,v).map(i=>i._id).indexOf(t);n(this,v).splice(s,1),u(this,N,ae).call(this),n(this,M)==="favorites"&&u(this,T,A).call(this)}addFavorite(t){n(this,v).push(t),u(this,N,ae).call(this),n(this,M)==="favorites"&&u(this,T,A).call(this)}changePage(t){c(this,S,t),u(this,T,A).call(this),J(a.gallery)}refreshLimits(t){c(this,q,t.favorites),u(this,T,A).call(this)}}v=new WeakMap,S=new WeakMap,q=new WeakMap,M=new WeakMap,X=new WeakSet,Te=function(){sessionStorage.setItem(h.SS_KEY_FAVORITES,n(this,S))},N=new WeakSet,ae=function(){localStorage.setItem(h.LS_KEY_FAVORITES,JSON.stringify(n(this,v)))},T=new WeakSet,A=function(){const t=Math.ceil(n(this,v).length/n(this,q));t&&n(this,S)>t&&c(this,S,t);const s=[...n(this,v)].splice((n(this,S)-1)*n(this,q),n(this,q));Ce(s,n(this,S),t),u(this,X,Te).call(this)};const D=new it(JSON.parse(localStorage.getItem(h.LS_KEY_FAVORITES))??[],sessionStorage.getItem(h.SS_KEY_FAVORITES)??1,st().favorites,a.body.dataset.page);export{ct as a,ot as b,a as e,D as f,R as g,lt as h,nt as r};
//# sourceMappingURL=favorites-page-5a6c0e47.js.map
