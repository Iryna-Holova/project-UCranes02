var ee=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var n=(t,e,s)=>(ee(t,e,"read from private field"),s?s.call(t):e.get(t)),p=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},c=(t,e,s,i)=>(ee(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s);var u=(t,e,s)=>(ee(t,e,"access private method"),s);import{a as F,i as ne,l as de}from"./vendor-80510813.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const h={SS_KEY_FILTERS:"user filters",SS_KEY_FAVORITES:"favorites-page",LS_KEY_FAVORITES:"favorites",LS_KEY_QUOTE:"quote",BASE_QUOTE:{author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."},ERROR_MESSAGE:"Something goes wrong!"},r={body:document.querySelector("body"),burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),gallerySubtitle:document.querySelector(".js-subtitle"),pagination:document.querySelector(".js-pagination"),searchForm:document.querySelector(".js-search-form"),backBtn:document.querySelector(".js-back-button"),subscribeForm:document.querySelector(".js-subscribe-form"),quote:document.querySelector(".js-quote"),policyBtn:document.querySelector(".js-policy-modal-open"),termsBtn:document.querySelector(".js-terms-modal-open"),scrollTopBtn:document.querySelector(".js-scroll-top-button"),btnCloseBurger:document.querySelector(".mobile-menu-close-btn"),btnOpenBurger:document.querySelector(".mobile-menu-open-btn"),burgerMenu:document.querySelector(".mobile-menu-backdrop")};function Fe(t){return t.map(({filter:e,name:s,imgURL:i})=>`<li class="exercises-item">
      <a data-subfilter="${s}" class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${i}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${e}</p>
        </div>
      </a>
    </li>`).join("")}const oe="/project-UCranes02/assets/icons-0389f68f.svg#icon-remove",_e="/project-UCranes02/assets/icons-0389f68f.svg#icon-star",Ie="/project-UCranes02/assets/icons-0389f68f.svg#icon-arrow",Oe="/project-UCranes02/assets/icons-0389f68f.svg#icon-run-man";function ye(t,e){return t.map(({_id:s,bodyPart:i,name:a,target:o,rating:l,burnedCalories:f,time:m})=>`
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
                  <use href="${oe}"></use>
                </svg>
                </button>
                
              `:`
                <div class="cont-card-rating">
                  <p class="card-rating-exer">${l}</p>
                  <svg class="icon-card-exer" width="18" height="18">
                    <use href="${_e}"></use>
                  </svg>
                </div>
              `}
            <div class="block-btn-icon-exer">
              <button class="btn-card-exer">Start</button>
              <svg class="icon-card-btn" width="16" height="16">
                <use href="${Ie}"></use>
              </svg>
            </div>
          </div>
          <!-- Middle place card -->
          <div class="cont-icon-name-text">
            <svg class="icon-people-card" width="24" height="24">
              <use href="${Oe}"></use>
            </svg>
            <p class="text-name-exercises-card">${a}</p>
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
    </li>`).join("")}function Ae(t,e){let s=[],i=[];if(e<=5)for(let a=1;a<=e;a+=1)s.push(`<li class="elm"><button type="button" class="pagination-el ${a===t?"active":"unactive"}" data-page="${a}" >${a}</button></li>`);else{const a=Math.max(Math.min(t-2,e-4),1),o=Math.min(a+4,e);for(let l=a;l<=o;l+=1)i.push(l),l!==t?s.push(`<li class="elm"><button type="button" class="pagination-el unactive"  data-page="${l}" >${l}</button></li>`):s.push(`<li class="elm"><button type="button" class="pagination-el active" disabled data-page="${l}" >${l}</button></li>`);i.includes(1)||s.unshift('<li class="elm"><button type="button" class="pagination-el unactive"  data-page="1" >1</button>&nbsp;&nbsp;...</li>'),i.includes(e)||s.push(`<li class="elm">...&nbsp;&nbsp;<button type="button" class="pagination-el unactive"  data-page="${e}">${e}</button></li>`)}return s.join("")}const Se="/project-UCranes02/assets/icons-0389f68f.svg#icon-heart",Me="/project-UCranes02/assets/icons-0389f68f.svg#icon-close";function Re({bodyPart:t,equipment:e,gifUrl:s,name:i,target:a,description:o,rating:l,burnedCalories:f,time:m,popularity:P,_id:Be}){let K=Math.round(l),Y=!1;const le=JSON.parse(localStorage.getItem("favorites"));return le&&(Y=le.some(W=>W._id===Be)),`
  <div class="exercise-modal-backdrop" >
    <div class="exercise-modal">
        <button class="exercise-card-close-btn" type="button">
            <svg class="exercise-card-close-icon" aria-label="Modal window close icon">
                <use href="${Me}"></use>
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
</div>`}function j({author:t,quote:e},s){return`
          ${s==="favorite"?`<p class="favorite-text-quote">${e}</p>`:`<p class="text-quote list-item-text">${e}</p>`}
          <p class="autor-quote list-item-text">${t}</p>
        `}function ce(t,e){r.pagination.innerHTML=Ae(t,e)}const _="https://your-energy.b.goit.study/api/",je={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class Ce{constructor({filter:e="muscles",subFilter:s="",keyword:i="",page:a=1,limit:o=8}){this.filter=e,this.subFilter=s,this.keyword=i,this.page=a,this.limit=o,this.id=""}async getFilters(){return(await F.get(`${_}filters`,{params:{filter:je[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await F.get(`${_}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(e){const s=await F.get(`${_}exercises/${e}`);return this.id=e,s.data}async updateExerciseRating({rate:e,email:s,review:i}){return(await F.patch(`${_}exercises/${this.id}/rating`,{rate:e,email:s,review:i})).data}async getQuote(){return(await F.get(`${_}quote`)).data}async subscribe({email:e}){return(await F.post(`${_}subscription`,{email:e})).data}}const d=new Ce({});async function I(){const t=await d.getExercises();r.gallery.innerHTML=ye(t.results),ce(Number(t.page),t.totalPages)}ne.settings({timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX",theme:"dark",backgroundColor:"#242424"});function Z(t){ne.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:t})}function xe(t){ne.show({progressBarColor:"#4FAC40",message:t})}async function C(){try{const t=await d.getFilters();r.gallery.innerHTML=Fe(t.results),ce(Number(t.page),t.totalPages)}catch{Z(h.ERROR_MESSAGE),r.gallery.innerHTML="<p>Nothing was found<p/>"}}async function Ee(t){const e=new Date,s=`${e.getDate()}/${e.getMonth()}/${e.getFullYear()}`;let i;const a=JSON.parse(localStorage.getItem(h.LS_KEY_QUOTE));if(a)if(s!==a.date){try{i=await d.getQuote(),i.quote=i.quote||h.BASE_QUOTE.quote,i.author=i.author||"Unknown"}catch{r.quote.insertAdjacentHTML("beforeend",j(h.BASE_QUOTE,t));return}i.author!=="Unknown"&&i.quote!==h.BASE_QUOTE.quote&&(i.date=s,localStorage.setItem(h.LS_KEY_QUOTE,JSON.stringify(i))),r.quote.insertAdjacentHTML("beforeend",j(i,t))}else r.quote.insertAdjacentHTML("beforeend",j(a,t));else{try{i=await d.getQuote(),i.quote=i.quote||h.BASE_QUOTE.quote,i.author=i.author||"Unknown"}catch{r.quote.insertAdjacentHTML("beforeend",j(h.BASE_QUOTE,t));return}i.author!=="Unknown"&&i.quote!==h.BASE_QUOTE.quote&&(i.date=s,localStorage.setItem(h.LS_KEY_QUOTE,JSON.stringify(i))),r.quote.insertAdjacentHTML("beforeend",j(i,t))}}function Ue(t,e,s){r.gallery.innerHTML=ye(t,"favorites"),ce(e,s)}function J(t){if(t==="top")window.scrollTo({top:0,behavior:"smooth"});else{const e=t;if(e){const s=e.getBoundingClientRect();if(s.top>=0&&s.bottom<=(window.innerHeight||document.documentElement.clientHeight))return;window.scrollBy({top:s.top-20,behavior:"smooth"})}}}const we={mobile:{subfilters:9,exercises:8,favorites:8},tablet:{subfilters:12,exercises:10,favorites:10},desktop:{subfilters:12,exercises:10,favorites:999}};let ue=ke(window.screen.width);const at=new ResizeObserver(t=>{let e=ke(t[0].devicePixelContentBoxSize[0].inlineSize);ue!==e&&(ue=e,R.refreshLimits(we[e]))});function Le(){let t="desktop";return window.screen.width<768&&(t="mobile"),window.screen.width>=768&&window.screen.width<1440&&(t="tablet"),we[t]}function ke(t){let e="desktop";return t<768&&(e="mobile"),t>=768&&t<1440&&(e="tablet"),e}var g,x,E,q,w,b,y,L,B,Q,se,A,z,H,ie;class De{constructor({state:e,filter:s,subfiltersPage:i,subfilter:a,searchQuery:o,exercisesPage:l,limits:f}){p(this,L);p(this,Q);p(this,A);p(this,H);p(this,g,void 0);p(this,x,void 0);p(this,E,void 0);p(this,q,void 0);p(this,w,void 0);p(this,b,void 0);p(this,y,void 0);c(this,g,e),c(this,x,s),c(this,E,i),c(this,q,a),c(this,w,o),c(this,b,l),c(this,y,f)}load(){switch(Ee(),d.limit=n(this,y)[n(this,g)],d.filter=n(this,x),n(this,g)){case"subfilters":d.page=n(this,E),C(),u(this,A,z).call(this);break;case"exercises":d.subFilter=n(this,q),d.keyword=n(this,w),d.page=n(this,b),I(),u(this,Q,se).call(this,n(this,q));break}r.pagination.addEventListener("click",Ge),r.body.dataset.page==="home"&&(u(this,H,ie).call(this,n(this,x)),r.filter.addEventListener("click",Qe),r.subscribeForm.addEventListener("submit",Xe),r.policyBtn.addEventListener("click",me),r.termsBtn.addEventListener("click",me))}changeFilter(e){d.filter=e,d.page=1,d.limit=n(this,y).subfilters,C(),u(this,H,ie).call(this,e,n(this,x)),c(this,g,"subfilters"),c(this,x,e),c(this,E,1),u(this,A,z).call(this),u(this,L,B).call(this)}goExercises(e){d.subFilter=e,d.keyword="",d.page=1,d.limit=n(this,y).exercises,I(),c(this,g,"exercises"),c(this,q,e),c(this,w,""),c(this,b,1),u(this,Q,se).call(this,e),u(this,L,B).call(this),J(r.gallerySubtitle)}goBack(){d.page=n(this,E),d.limit=n(this,y).subfilters,C(),c(this,g,"subfilters"),u(this,A,z).call(this),u(this,L,B).call(this)}changePage(e){switch(d.page=e,n(this,g)){case"subfilters":C(),c(this,E,e);break;case"exercises":I(),c(this,b,e);break}u(this,L,B).call(this),J(r.gallerySubtitle)}goSearch(e){d.keyword=e,d.page=1,I(),c(this,w,e),c(this,b,1),u(this,L,B).call(this)}resetSearch(){d.keyword="",d.page=1,I(),c(this,w,""),c(this,b,1),u(this,L,B).call(this)}refreshLimits(e){if(e[n(this,g)]!==n(this,y)[n(this,g)])switch(d.limit=e[n(this,g)],n(this,g)){case"subfilters":C();break;case"exercises":I();break}c(this,y,e)}}g=new WeakMap,x=new WeakMap,E=new WeakMap,q=new WeakMap,w=new WeakMap,b=new WeakMap,y=new WeakMap,L=new WeakSet,B=function(){sessionStorage.setItem(h.SS_KEY_FILTERS,JSON.stringify({state:n(this,g),filter:n(this,x),subfiltersPage:n(this,E),subfilter:n(this,q),searchQuery:n(this,w),exercisesPage:n(this,b)}))},Q=new WeakSet,se=function(e){r.gallery.dataset.cards="exercises",r.backBtn.classList.remove("back-button-hidden"),r.searchForm.classList.remove("search-form-hidden"),r.gallerySubtitle.innerHTML=`<span class="exercises-title">&nbsp;/</span><h3 class="exercises-subtitle">${e}</h3>`,r.gallery.addEventListener("click",ae),r.backBtn.addEventListener("click",be),r.searchForm.addEventListener("input",de(ve,1e3,{leading:!1,trailing:!0})),r.gallery.removeEventListener("click",pe),r.searchForm.reset()},A=new WeakSet,z=function(){r.gallery.dataset.cards="subfilters",r.backBtn.classList.add("back-button-hidden"),r.searchForm.classList.add("search-form-hidden"),r.gallerySubtitle.innerHTML="",r.gallery.addEventListener("click",pe),r.gallery.removeEventListener("click",ae),r.backBtn.removeEventListener("click",be),r.searchForm.removeEventListener("input",de(ve,1e3,{leading:!1,trailing:!0}))},H=new WeakSet,ie=function(e,s){[...r.filter.children].forEach(({firstElementChild:i})=>{switch(i.dataset.filter){case e:i.classList.add("filter-button-active");break;case s:i.classList.remove("filter-button-active");break}})};const R=new De({...JSON.parse(sessionStorage.getItem(h.SS_KEY_FILTERS))??{state:"subfilters",filter:"muscles",subfiltersPage:1,subfilter:"",searchQuery:"",exercisesPage:1},limits:Le()});function Qe(t){t.target.hasAttribute("data-filter")&&R.changeFilter(t.target.dataset.filter)}async function pe(t){if(t.preventDefault(),!t.target.closest("[data-subfilter]"))return;const{subfilter:e}=t.target.closest("[data-subfilter]").dataset;R.goExercises(e)}function He(t){const e=document.querySelector(".add-favorites-btn");D.isFavorite(t._id)?(D.removeFavorite(t._id),e.style.padding="12px 16px",e.querySelector("span").textContent="Add to favorites",e.querySelector("use").setAttribute("href",Se)):(D.addFavorite(t),e.style.padding="12px 9px",e.querySelector("span").textContent="Remove from favorites",e.querySelector("use").setAttribute("href",oe))}const Ne=/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;function Ke(t,e){const[s,i,a]=e.querySelectorAll(".users_rating, label"),[o,l,f]=e.querySelectorAll(".error");t.rate?(s.classList.add("invalid"),o.textContent=t.rate):(s.classList.remove("invalid"),o.textContent=""),t.email?(i.classList.add("invalid"),l.textContent=t.email):(i.classList.remove("invalid"),l.textContent=""),t.review?(a.classList.add("invalid"),f.textContent=t.review):(a.classList.remove("invalid"),f.textContent="")}function $e({rate:t,email:e,review:s}){const i={isInvalid:!1};return t||(i.isInvalid=!0,i.rate="Please select a rating"),e||(i.isInvalid=!0,i.email="Please enter an email"),Ne.test(e)||(i.isInvalid=!0,i.email="Please enter a valid email"),s||(i.isInvalid=!0,i.review="Please enter a review"),i}async function Ye(t,e){t.preventDefault();const s=new FormData(t.target),i={rate:Number(s.get("rate")),email:s.get("email"),review:s.get("review")},a=$e(i);if(Ke(a,t.target),!a.isInvalid)try{const o=await d.updateExerciseRating(i);e()}catch(o){console.log(o),Z("Something went wrong. Please try again later.")}}function ze(t){const e=t.target.closest(".rating");if(!e)return;const s=e.querySelectorAll('[name="rate"]'),i=e.parentElement.firstElementChild;s.forEach(a=>{a.checked&&(i.textContent=a.value+".0")})}const $={detailsPopup:!1,ratingPopup:!1},he=t=>t.stopPropagation(),Je=(t,{closeCallback:e,submitCallback:s})=>{const i=t.querySelector(".modal__close-btn"),a=t.querySelector(".give_a_rating"),o=t.querySelector(".rating");a.setAttribute("novalidate",!0),o.addEventListener("click",l=>{ze(l)}),i.addEventListener("click",()=>{e()}),a.addEventListener("submit",l=>{l.preventDefault(),s(l)})},V=t=>{$.detailsPopup=!1,$.ratingPopup=!1,t==null||t.remove(),document.documentElement.classList.remove("no-scroll")},qe=(t,e,s)=>{e.remove(),t.innerHTML="",$.ratingPopup=!1,t.append(s)},ge=(t,e,s)=>{switch(!0){case($.detailsPopup&&!$.ratingPopup):V(t);return;case($.detailsPopup&&$.ratingPopup):qe(t,e,s);return;default:V(t);return}},Ve=(t,e)=>{const s=document.createElement("div");s.innerHTML=t;const i=s.querySelector(".exercise-modal-backdrop"),a=s.querySelector(".exercise-modal"),o=s.querySelector(".exercise-card-close-btn"),l=s.querySelector(".add-rating-btn"),f=s.querySelector(".add-favorites-btn"),m=document.querySelector("#modal-template").content.firstElementChild.cloneNode(!0);window.addEventListener("keydown",P=>{P.code==="Escape"&&ge(i,m,a)}),i.addEventListener("click",()=>{ge(i,m,a)}),a.addEventListener("click",he),m.addEventListener("click",he),o.addEventListener("click",()=>{V(i)}),l.addEventListener("click",()=>{$.ratingPopup=!0,i.innerHTML="",i.append(m)}),f.addEventListener("click",P=>{He(e)}),Je(m,{closeCallback:()=>qe(i,m,a),submitCallback:P=>Ye(P,()=>{V(i),xe("Thank you for your feedback!")})}),document.documentElement.classList.add("no-scroll"),$.detailsPopup=!0,document.body.append(i)};async function ae(t){if(t.preventDefault(),!(!t.target.closest("[data-id]")||t.target.closest("[data-delete]")))try{const e=t.target.closest("[data-id]").dataset.id,s=await d.getExerciseById(e),i=Re(s),a=Ve(i,s)}catch(e){console.error(e),Z("Something went wrong. Please try again later.")}}function Ge({target:t}){if(!t.hasAttribute("data-page"))return;const e=parseInt(t.dataset.page);R.changePage(e)}const fe=document.querySelector(".footer-error");async function Xe(t){t.preventDefault();const e=new FormData(t.currentTarget),s={};e.forEach((a,o)=>{s[o]=a});const{email:i}=$e({email:s.subscribe});if(i)fe.classList.remove("visually-hidden");else{t.currentTarget.reset(),fe.classList.add("visually-hidden");try{const a=await d.subscribe({email:s.subscribe});xe(a.message)}catch(a){Z(a.response.data.message)}}}let te,U;function me(t){t.target===r.policyBtn&&(U=document.querySelector(".js-policy-modal"),te=document.querySelector(".js-policy-modal-close")),t.target===r.termsBtn&&(U=document.querySelector(".js-terms-modal"),te=document.querySelector(".js-terms-modal-close")),G(),U.addEventListener("click",Ze),te.addEventListener("click",G),window.addEventListener("keydown",Te)}function Te(t){t.code==="Escape"&&G()}function Ze(t){t.target===U&&G()}function G(){U.classList.toggle("is-hidden"),document.documentElement.classList.toggle("no-scroll"),window.removeEventListener("keydown",Te)}function ve(t){t.preventDefault();const e=r.searchForm.exercise.value.trim();R.goSearch(e)}function rt(){J("top")}function nt(){const{scrollTopBtn:t}=r;if(window.scrollY<100){t.classList.replace("js-scroll-top-button-active","hide-scroll-top-button");return}else t.classList.replace("hide-scroll-top-button","js-scroll-top-button-active")}async function be(t){R.goBack()}function We({target:t}){if(!t.hasAttribute("data-page"))return;const e=parseInt(t.dataset.page);D.changePage(e)}function ot(t){t.currentTarget===r.btnOpenBurger&&(r.burgerMenu.classList.remove("is-hidden"),document.querySelector("html").classList.add("no-scroll")),t.currentTarget===r.btnCloseBurger&&(r.burgerMenu.classList.add("is-hidden"),document.querySelector("html").classList.remove("no-scroll"))}function et(t){if(t.preventDefault(),!t.target.closest("[data-delete]"))return;const e=t.target.closest("[data-delete]").dataset.delete;D.removeFavorite(e)}var v,S,k,M,X,Pe,N,re,T,O;class tt{constructor(e,s,i,a){p(this,X);p(this,N);p(this,T);p(this,v,void 0);p(this,S,void 0);p(this,k,void 0);p(this,M,void 0);c(this,v,e),c(this,S,s),c(this,k,i),c(this,M,a)}load(){Ee("favorite"),u(this,T,O).call(this),r.gallery.addEventListener("click",ae),r.gallery.addEventListener("click",et),r.pagination.addEventListener("click",We)}isFavorite(e){return n(this,v).some(s=>s._id===e)}removeFavorite(e){const s=n(this,v).map(i=>i._id).indexOf(e);n(this,v).splice(s,1),u(this,N,re).call(this),n(this,M)==="favorites"&&u(this,T,O).call(this)}addFavorite(e){n(this,v).push(e),u(this,N,re).call(this),n(this,M)==="favorites"&&u(this,T,O).call(this)}changePage(e){c(this,S,e),u(this,T,O).call(this),J(r.gallery)}refreshLimits(e){e.favorites!==n(this,k)&&(c(this,k,e.favorites),u(this,T,O).call(this))}}v=new WeakMap,S=new WeakMap,k=new WeakMap,M=new WeakMap,X=new WeakSet,Pe=function(){sessionStorage.setItem(h.SS_KEY_FAVORITES,n(this,S))},N=new WeakSet,re=function(){localStorage.setItem(h.LS_KEY_FAVORITES,JSON.stringify(n(this,v)))},T=new WeakSet,O=function(){const e=Math.ceil(n(this,v).length/n(this,k));e&&n(this,S)>e&&c(this,S,e);const s=[...n(this,v)].splice((n(this,S)-1)*n(this,k),n(this,k));Ue(s,n(this,S),e),u(this,X,Pe).call(this)};const D=new tt(JSON.parse(localStorage.getItem(h.LS_KEY_FAVORITES))??[],parseInt(sessionStorage.getItem(h.SS_KEY_FAVORITES))||1,Le().favorites,r.body.dataset.page);export{nt as a,rt as b,r as e,D as f,R as g,ot as h,at as r};
//# sourceMappingURL=favorites-page-0cc23654.js.map
