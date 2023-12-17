var H=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var c=(e,t,s)=>(H(e,t,"read from private field"),s?s.call(e):t.get(e)),g=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},l=(e,t,s,i)=>(H(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s);var u=(e,t,s)=>(H(e,t,"access private method"),s);import{a as $,i as Y,l as X}from"./vendor-80510813.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const n={body:document.querySelector("body"),burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),gallerySubtitle:document.querySelector(".js-subtitle"),pagination:document.querySelector(".js-pagination"),searchForm:document.querySelector(".js-search-form"),backBtn:document.querySelector(".js-back-button"),subscribeForm:document.querySelector(".js-subscribe-form"),quote:document.querySelector(".js-quote"),policyBtn:document.querySelector(".js-policy-modal-open"),termsBtn:document.querySelector(".js-terms-modal-open"),scrollTopBtn:document.querySelector(".js-scroll-top-button"),btnCloseBurger:document.querySelector(".mobile-menu-close-btn"),btnOpenBurger:document.querySelector(".mobile-menu-open-btn"),burgerMenu:document.querySelector(".mobile-menu-backdrop")};function ve(e){return e.map(({filter:t,name:s,imgURL:i})=>`<li class="exercises-item">
      <a data-subfilter="${s}" class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${i}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${t}</p>
        </div>
      </a>
    </li>`).join("")}const G="/project-UCranes02/assets/icons-0389f68f.svg#icon-remove",be="/project-UCranes02/assets/icons-0389f68f.svg#icon-star",ye="/project-UCranes02/assets/icons-0389f68f.svg#icon-arrow",xe="/project-UCranes02/assets/icons-0389f68f.svg#icon-run-man";function Se(e,t){return e.map(({_id:s,bodyPart:i,name:r,target:a,rating:d,burnedCalories:h,time:f})=>`
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
                  <use href="${G}"></use>
                </svg>
                </button>
                
              `:`
                <div class="cont-card-rating">
                  <p class="card-rating-exer">${d}</p>
                  <svg class="icon-card-exer" width="18" height="18">
                    <use href="${be}"></use>
                  </svg>
                </div>
              `}
            <div class="block-btn-icon-exer">
              <button class="btn-card-exer">Start</button>
              <svg class="icon-card-btn" width="16" height="16">
                <use href="${ye}"></use>
              </svg>
            </div>
          </div>
          <!-- Middle place card -->
          <div class="cont-icon-name-text">
            <svg class="icon-people-card" width="24" height="24">
              <use href="${xe}"></use>
            </svg>
            <p class="text-name-exercises-card">${r}</p>
          </div>
          <!-- End place card -->
          <ul class="list-info-exer">
            <li class="item-card-exer">
              <p class="text-title-item-exer big">Burned calories:</p>
              <p class="text-info-exer size-time">${h}/${f}</p>
            </li>
            <li class="item-card-exer">
              <p class="text-title-item-exer medium">Body part:</p>
              <p class="text-info-exer size-body">${i}</p>
            </li>
            <li class="item-card-exer">
              <p class="text-title-item-exer small">Target:</p>
              <p class="text-info-exer size-target">${a}</p>
            </li>
          </ul>
        </div>
      </a>
    </li>`).join("")}function we(e,t){let s=[];if(t<=5)for(let i=1;i<=t;i+=1)s.push(`<li class="elm"><button type="button" class="pagination-el ${i===e?"active":"unactive"}" data-page="${i}" >${i}</button></li>`);else{const i=Math.max(Math.min(e-2,t-4),1),r=Math.min(i+4,t);for(let a=1;a<=t;a+=1)a>=i&&a<=r?s.push(`<li class="elm"><button type="button" class="pagination-el ${a===e?"active":"unactive"}" data-page="${a}" >${a}</button></li>`):s.push(`<li class="elm" style="display: none;"><button type="button" class="pagination-el ${a===e?"active":"unactive"}" data-page="${a}" >${a}</button></li>`)}return s.join("")}const ce="/project-UCranes02/assets/icons-0389f68f.svg#icon-heart",Ee="/project-UCranes02/assets/icons-0389f68f.svg#icon-close";function Le({bodyPart:e,equipment:t,gifUrl:s,name:i,target:r,description:a,rating:d,burnedCalories:h,time:f,popularity:k,_id:fe}){let j=Math.round(d),C=!1;const V=JSON.parse(localStorage.getItem("favorites"));return V&&(C=V.some(N=>N._id===fe)),`
  <div class="exercise-modal-backdrop" >
    <div class="exercise-modal">
        <button class="exercise-card-close-btn" type="button">
            <svg class="exercise-card-close-icon" aria-label="Modal window close icon">
                <use href="${Ee}"></use>
            </svg>
        </button>
        <div class="exercise-card">
            <div class="exercise-card-img-wrap">
                <img src=${s} alt="">
            </div>
                <div class="exercise-card-info">
                    <div>
                        <h2 class="exercise-card-title">${i}</h2>
                        ${j?` <div class="exercise-card-rating"><span>${j?j+".0":""}</span>
                        ${[1,2,3,4,5].map(N=>`
                        <svg aria-label="Rating star" width="16" height="16" stroke="var(--black)" fill=${j>=N?"var(--yellow)":"var(--white-transparent-20)"} >
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
                          ${k?`<li class="exercise-card-details-item">
                              <p class="details-name">Popular</p>
                              <p class="details-value">${k}</p>
                          </li>`:""}
                          ${h&&f?`<li class="exercise-card-details-item">
                              <p class="details-name">Burned calories</p>
                              <p class="details-value">${h}/${f} min</p>
                          </li>`:""}
                         
                        </ul>
                        <p class="exercise-card-description">${a||""}</p>
                    </div>
                    <div class="exercise-card-btn-group">
                        <button class="card-btn add-favorites-btn" ${C?'style="padding: 12px 9px"':""}>
                            <span>${C?"Remove from favorites":"Add to favorites"}</span>
                            <svg class="favorites-icon" aria-label="Favorite icon" width="20" height="20" >
                                <use href="${C?`${G}`:`${ce}heart`}"></use>
                            </svg>
                        </button>
                        <button class="card-btn add-rating-btn">Give a rating</button>
                </div>
            </div>
        </div>
    </div>
</div>`}function _({author:e,quote:t}){return`
          <p class="text-quote list-item-text">${t}</p>
          <p class="autor-quote list-item-text">${e}</p>
        `}function le(e,t){n.pagination.innerHTML=we(e,t)}const B="https://your-energy.b.goit.study/api/",ke={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class qe{constructor({filter:t="muscles",subFilter:s="",keyword:i="",page:r=1,limit:a=8}){this.filter=t,this.subFilter=s,this.keyword=i,this.page=r,this.limit=a,this.id=""}async getFilters(){return(await $.get(`${B}filters`,{params:{filter:ke[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await $.get(`${B}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(t){const s=await $.get(`${B}exercises/${t}`);return this.id=t,s.data}async updateExerciseRating({rate:t,email:s,review:i}){return(await $.patch(`${B}exercises/${this.id}/rating`,{rate:t,email:s,review:i})).data}async getQuote(){return(await $.get(`${B}quote`)).data}async subscribe({email:t}){return(await $.post(`${B}subscription`,{email:t})).data}}const o=new qe({});async function T(){const e=await o.getExercises();n.gallery.innerHTML=Se(e.results),le(Number(e.page),e.totalPages)}Y.settings({timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX",theme:"dark",backgroundColor:"#242424"});function Q(e){Y.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:e})}function de(e){Y.show({progressBarColor:"#4FAC40",message:e})}const m={SS_KEY_FILTERS:"user filters",LS_KEY_FAVORITES:"favorites",LS_KEY_QUOTE:"quote",BASE_QUOTE:{author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."},ERROR_MESSAGE:"Something goes wrong!"};async function M(){try{const e=await o.getFilters();n.gallery.innerHTML=ve(e.results),le(Number(e.page),e.totalPages)}catch{Q(m.ERROR_MESSAGE),n.gallery.innerHTML="<p>Nothing was found<p/>"}}async function $e(){const e=new Date,t=`${e.getDate()}/${e.getMonth()}/${e.getFullYear()}`;let s;const i=JSON.parse(localStorage.getItem(m.LS_KEY_QUOTE));if(i)if(t!==i.date){try{s=await o.getQuote(),s.quote=s.quote||m.BASE_QUOTE.quote,s.author=s.author||"Unknown"}catch{n.quote.insertAdjacentHTML("beforeend",_(m.BASE_QUOTE));return}s.author!=="Unknown"&&s.quote!==m.BASE_QUOTE.quote&&(s.date=t,localStorage.setItem(m.LS_KEY_QUOTE,JSON.stringify(s))),n.quote.insertAdjacentHTML("beforeend",_(s))}else n.quote.insertAdjacentHTML("beforeend",_(i));else{try{s=await o.getQuote(),s.quote=s.quote||m.BASE_QUOTE.quote,s.author=s.author||"Unknown"}catch{n.quote.insertAdjacentHTML("beforeend",_(m.BASE_QUOTE));return}s.author!=="Unknown"&&s.quote!==m.BASE_QUOTE.quote&&(s.date=t,localStorage.setItem(m.LS_KEY_QUOTE,JSON.stringify(s))),n.quote.insertAdjacentHTML("beforeend",_(s))}}function Z(e){if(e==="top")window.scrollTo({top:0,behavior:"smooth"});else{const t=e;if(t){const s=t.getBoundingClientRect();if(s.top>=0&&s.bottom<=(window.innerHeight||document.documentElement.clientHeight)){console.log("el is in viewport");return}window.scrollBy({top:s.top-20,behavior:"smooth"})}}}const ue={mobile:{subfilters:9,exercises:8,favorites:8},tablet:{subfilters:12,exercises:10,favorites:10},desktop:{subfilters:12,exercises:10,favorites:999}};let W=pe(window.screen.width);const He=new ResizeObserver(e=>{let t=pe(e[0].devicePixelContentBoxSize[0].inlineSize);W!==t&&(W=t,O.refreshLimits(ue[t]))});function Be(){let e="desktop";return window.screen.width<768&&(e="mobile"),window.screen.width>=768&&window.screen.width<1440&&(e="tablet"),ue[e]}function pe(e){let t="desktop";return e<768&&(t="mobile"),e>=768&&e<1440&&(t="tablet"),t}var p,b,y,L,x,v,S,w,q,I,K,P,R,F,z;class Te{constructor({state:t,filter:s,subfiltersPage:i,subfilter:r,searchQuery:a,exercisesPage:d,limits:h}){g(this,w);g(this,I);g(this,P);g(this,F);g(this,p,void 0);g(this,b,void 0);g(this,y,void 0);g(this,L,void 0);g(this,x,void 0);g(this,v,void 0);g(this,S,void 0);l(this,p,t),l(this,b,s),l(this,y,i),l(this,L,r),l(this,x,a),l(this,v,d),l(this,S,h)}load(){switch($e(),o.limit=c(this,S)[c(this,p)],o.filter=c(this,b),c(this,p)){case"subfilters":o.page=c(this,y),M(),u(this,P,R).call(this);break;case"exercises":o.subFilter=c(this,L),o.keyword=c(this,x),o.page=c(this,v),T(),u(this,I,K).call(this,c(this,L));break}n.pagination.addEventListener("click",Re),n.body.dataset.page==="home"&&(u(this,F,z).call(this,c(this,b)),n.filter.addEventListener("click",Pe),n.subscribeForm.addEventListener("submit",De),n.policyBtn.addEventListener("click",ae),n.termsBtn.addEventListener("click",ae))}changeFilter(t){o.filter=t,o.page=1,o.limit=c(this,S).subfilters,M(),u(this,F,z).call(this,t,c(this,b)),l(this,p,"subfilters"),l(this,b,t),l(this,y,1),u(this,P,R).call(this),u(this,w,q).call(this)}goExercises(t){o.subFilter=t,o.keyword="",o.page=1,o.limit=c(this,S).exercises,T(),l(this,p,"exercises"),l(this,L,t),l(this,x,""),l(this,v,1),u(this,I,K).call(this,t),u(this,w,q).call(this),Z(n.gallerySubtitle)}goBack(){o.page=c(this,y),o.limit=c(this,S).subfilters,M(),l(this,p,"subfilters"),u(this,P,R).call(this),u(this,w,q).call(this)}changePage(t){switch(o.page=t,c(this,p)){case"subfilters":M(),l(this,y,t);break;case"exercises":T(),l(this,v,t);break}u(this,w,q).call(this),Z(n.gallerySubtitle)}goSearch(t){o.keyword=t,o.page=1,T(),l(this,x,t),l(this,v,1),u(this,w,q).call(this)}resetSearch(){o.keyword="",o.page=1,T(),l(this,x,""),l(this,v,1),u(this,w,q).call(this)}refreshLimits(t){switch(this.limits=t,o.limit=c(this,S)[c(this,p)],c(this,p)){case"subfilters":M();break;case"exercises":T();break}}}p=new WeakMap,b=new WeakMap,y=new WeakMap,L=new WeakMap,x=new WeakMap,v=new WeakMap,S=new WeakMap,w=new WeakSet,q=function(){sessionStorage.setItem(m.SS_KEY_FILTERS,JSON.stringify({state:c(this,p),filter:c(this,b),subfiltersPage:c(this,y),subfilter:c(this,L),searchQuery:c(this,x),exercisesPage:c(this,v)}))},I=new WeakSet,K=function(t){n.gallery.dataset.cards="exercises",n.backBtn.classList.remove("back-button-hidden"),n.searchForm.classList.remove("search-form-hidden"),n.gallerySubtitle.innerHTML=`<span class="exercises-title">&nbsp;/</span><h3 class="exercises-subtitle">${t}</h3>`,n.gallery.addEventListener("click",ie),n.backBtn.addEventListener("click",oe),n.searchForm.addEventListener("input",X(ne,1e3,{leading:!1,trailing:!0})),n.gallery.removeEventListener("click",ee),n.searchForm.reset()},P=new WeakSet,R=function(){n.gallery.dataset.cards="subfilters",n.backBtn.classList.add("back-button-hidden"),n.searchForm.classList.add("search-form-hidden"),n.gallerySubtitle.innerHTML="",n.gallery.addEventListener("click",ee),n.gallery.removeEventListener("click",ie),n.backBtn.removeEventListener("click",oe),n.searchForm.removeEventListener("input",X(ne,1e3,{leading:!1,trailing:!0}))},F=new WeakSet,z=function(t,s){[...n.filter.children].forEach(({firstElementChild:i})=>{switch(i.dataset.filter){case t:i.classList.add("filter-button-active");break;case s:i.classList.remove("filter-button-active");break}})};const O=new Te({...JSON.parse(sessionStorage.getItem(m.SS_KEY_FILTERS))??{state:"subfilters",filter:"muscles",subfiltersPage:1,subfilter:"",searchQuery:"",exercisesPage:1},limits:Be()});function Pe(e){e.target.hasAttribute("data-filter")&&O.changeFilter(e.target.dataset.filter)}async function ee(e){if(e.preventDefault(),!e.target.closest("[data-subfilter]"))return;const{subfilter:t}=e.target.closest("[data-subfilter]").dataset;O.goExercises(t)}function Oe(e){const t=localStorage.getItem("favorites"),s=JSON.parse(t),i=s.map(r=>r._id).indexOf(e);s.splice(i,1),localStorage.setItem("favorites",JSON.stringify(s))}function _e(e){const t=document.querySelector(".add-favorites-btn"),s=localStorage.getItem("favorites"),i=JSON.parse(s);if(s)i.some(r=>r._id===e._id)?(Oe(e._id),t.style.padding="12px 16px",t.querySelector("span").textContent="Add to favorites",t.querySelector("use").setAttribute("href",ce)):(i.push(e),localStorage.setItem("favorites",JSON.stringify(i)),t.style.padding="12px 9px",t.querySelector("span").textContent="Remove from favorites",t.querySelector("use").setAttribute("href",G));else{const r=JSON.stringify([e]);localStorage.setItem("favorites",r)}}const Me=/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;function Ae(e,t){const[s,i,r]=t.querySelectorAll(".users_rating, label"),[a,d,h]=t.querySelectorAll(".error");e.rate?(s.classList.add("invalid"),a.textContent=e.rate):(s.classList.remove("invalid"),a.textContent=""),e.email?(i.classList.add("invalid"),d.textContent=e.email):(i.classList.remove("invalid"),d.textContent=""),e.review?(r.classList.add("invalid"),h.textContent=e.review):(r.classList.remove("invalid"),h.textContent="")}function ge({rate:e,email:t,review:s}){const i={isInvalid:!1};return e||(i.isInvalid=!0,i.rate="Please select a rating"),t||(i.isInvalid=!0,i.email="Please enter an email"),Me.test(t)||(i.isInvalid=!0,i.email="Please enter a valid email"),s||(i.isInvalid=!0,i.review="Please enter a review"),i}async function Ie(e,t){e.preventDefault();const s=new FormData(e.target),i={rate:Number(s.get("rate")),email:s.get("email"),review:s.get("review")},r=ge(i);if(Ae(r,e.target),!r.isInvalid)try{const a=await o.updateExerciseRating(i);t()}catch(a){console.log(a),Q("Something went wrong. Please try again later.")}}function Fe(e){const t=e.target.closest(".rating");if(!t)return;const s=t.querySelectorAll('[name="rate"]'),i=t.parentElement.firstElementChild;s.forEach(r=>{r.checked&&(i.textContent=r.value+".0")})}const E={detailsPopup:!1,ratingPopup:!1},te=e=>e.stopPropagation(),je=(e,{closeCallback:t,submitCallback:s})=>{const i=e.querySelector(".modal__close-btn"),r=e.querySelector(".give_a_rating"),a=e.querySelector(".rating");r.setAttribute("novalidate",!0),a.addEventListener("click",d=>{Fe(d)}),i.addEventListener("click",()=>{t()}),r.addEventListener("submit",d=>{d.preventDefault(),s(d)})},D=e=>{E.detailsPopup=!1,E.ratingPopup=!1,e==null||e.remove(),document.documentElement.classList.remove("no-scroll")},me=(e,t,s)=>{t.remove(),e.innerHTML="",E.ratingPopup=!1,e.append(s)},se=(e,t,s)=>{switch(!0){case(E.detailsPopup&&!E.ratingPopup):D(e);return;case(E.detailsPopup&&E.ratingPopup):me(e,t,s);return;default:D(e);return}},Ce=(e,t)=>{const s=document.createElement("div");s.innerHTML=e;const i=s.querySelector(".exercise-modal-backdrop"),r=s.querySelector(".exercise-modal"),a=s.querySelector(".exercise-card-close-btn"),d=s.querySelector(".add-rating-btn"),h=s.querySelector(".add-favorites-btn"),f=document.querySelector("#modal-template").content.firstElementChild.cloneNode(!0);window.addEventListener("keydown",k=>{k.code==="Escape"&&se(i,f,r)}),i.addEventListener("click",()=>{se(i,f,r)}),r.addEventListener("click",te),f.addEventListener("click",te),a.addEventListener("click",()=>{D(i)}),d.addEventListener("click",()=>{E.ratingPopup=!0,i.innerHTML="",i.append(f)}),h.addEventListener("click",k=>{_e(t)}),je(f,{closeCallback:()=>me(i,f,r),submitCallback:k=>Ie(k,()=>{D(i),de("Thank you for your feedback!")})}),document.documentElement.classList.add("no-scroll"),E.detailsPopup=!0,document.body.append(i)};async function ie(e){if(e.preventDefault(),!!e.target.closest("[data-id]"))try{const t=e.target.closest("[data-id]").dataset.id,s=await o.getExerciseById(t),i=Le(s),r=Ce(i,s)}catch(t){console.error(t),Q("Something went wrong. Please try again later.")}}function Re({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);O.changePage(t)}const re=document.querySelector(".footer-error");async function De(e){e.preventDefault();const t=new FormData(e.currentTarget),s={};t.forEach((r,a)=>{s[a]=r});const{email:i}=ge({email:s.subscribe});if(i)re.classList.remove("visually-hidden");else{e.currentTarget.reset(),re.classList.add("visually-hidden");try{const r=await o.subscribe({email:s.subscribe});de(r.message)}catch(r){Q(r.response.data.message)}}}let J,A;function ae(e){e.target===n.policyBtn&&(A=document.querySelector(".js-policy-modal"),J=document.querySelector(".js-policy-modal-close")),e.target===n.termsBtn&&(A=document.querySelector(".js-terms-modal"),J=document.querySelector(".js-terms-modal-close")),U(),A.addEventListener("click",Ue),J.addEventListener("click",U),window.addEventListener("keydown",he)}function he(e){e.code==="Escape"&&U()}function Ue(e){e.target===A&&U()}function U(){A.classList.toggle("is-hidden"),document.documentElement.classList.toggle("no-scroll"),window.removeEventListener("keydown",he)}function ne(e){e.preventDefault();const t=n.searchForm.exercise.value.trim();O.goSearch(t)}async function oe(e){O.goBack()}function Je(e){e.currentTarget===n.btnOpenBurger&&(n.burgerMenu.classList.remove("is-hidden"),document.querySelector("html").classList.add("no-scroll")),e.currentTarget===n.btnCloseBurger&&(n.burgerMenu.classList.add("is-hidden"),document.querySelector("html").classList.remove("no-scroll"))}export{Se as a,He as b,m as c,n as e,O as g,Je as h,le as r,Z as s};
//# sourceMappingURL=burget-menu-handler-205b86d2.js.map
