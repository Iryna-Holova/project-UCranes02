var ee=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var n=(e,t,s)=>(ee(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},l=(e,t,s,i)=>(ee(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s);var u=(e,t,s)=>(ee(e,t,"access private method"),s);import{a as B,i as ne,l as ue}from"./vendor-80510813.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const p={SS_KEY_FILTERS:"user filters",SS_KEY_FAVORITES:"favorites-page",LS_KEY_FAVORITES:"favorites",LS_KEY_QUOTE:"quote",BASE_QUOTE:{author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."},ERROR_MESSAGE:"Something goes wrong!"},a={body:document.querySelector("body"),burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),gallerySubtitle:document.querySelector(".js-subtitle"),pagination:document.querySelector(".js-pagination"),searchForm:document.querySelector(".js-search-form"),backBtn:document.querySelector(".js-back-button"),subscribeForm:document.querySelector(".js-subscribe-form"),quote:document.querySelector(".js-quote"),policyBtn:document.querySelector(".js-policy-modal-open"),termsBtn:document.querySelector(".js-terms-modal-open"),scrollTopBtn:document.querySelector(".js-scroll-top-button"),btnCloseBurger:document.querySelector(".mobile-menu-close-btn"),btnOpenBurger:document.querySelector(".mobile-menu-open-btn"),burgerMenu:document.querySelector(".mobile-menu-backdrop")};function Ie(e){return e.map(({filter:t,name:s,imgURL:i})=>`<li class="exercises-item">
      <a data-subfilter="${s}" class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${i}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${t}</p>
        </div>
      </a>
    </li>`).join("")}const oe="/project-UCranes02/assets/icons-0389f68f.svg#icon-remove",Oe="/project-UCranes02/assets/icons-0389f68f.svg#icon-star",Me="/project-UCranes02/assets/icons-0389f68f.svg#icon-arrow",je="/project-UCranes02/assets/icons-0389f68f.svg#icon-run-man";function Se(e,t){return e.map(({_id:s,bodyPart:i,name:r,target:o,rating:c,burnedCalories:g,time:m})=>`
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
                  <p class="card-rating-exer">${c}</p>
                  <svg class="icon-card-exer" width="18" height="18">
                     <!-- <use href="${Oe}"></use> -->
                     <use href="./img/icons.svg#icon-star"></use>
                  </svg>
                </div>
              `}
            <div class="block-btn-icon-exer">
              <button class="btn-card-exer">Start</button>
              <svg class="icon-card-btn" width="16" height="16">
                <use href="${Me}"></use>
              </svg>
            </div>
          </div>
          <!-- Middle place card -->
          <div class="cont-icon-name-text">
            <svg class="icon-people-card" width="24" height="24">
              <use href="${je}"></use>
            </svg>
            <p class="text-name-exercises-card">${r}</p>
          </div>
          <!-- End place card -->
          <ul class="list-info-exer">
            <li class="item-card-exer">
              <p class="text-title-item-exer big">Burned calories:</p>
              <p class="text-info-exer size-time">${g}/${m}</p>
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
    </li>`).join("")}function Re(e,t){let s=[],i=[];if(t<=5)for(let r=1;r<=t;r+=1)s.push(`<li class="elm"><button type="button" class="pagination-el ${r===e?"active":"unactive"}" data-page="${r}" >${r}</button></li>`);else{const r=Math.max(Math.min(e-2,t-4),1),o=Math.min(r+4,t);for(let c=r;c<=o;c+=1)i.push(c),c!==e?s.push(`<li class="elm"><button type="button" class="pagination-el unactive"  data-page="${c}" >${c}</button></li>`):s.push(`<li class="elm"><button type="button" class="pagination-el active" disabled data-page="${c}" >${c}</button></li>`);i.includes(1)||s.unshift('<li class="elm"><button type="button" class="pagination-el unactive"  data-page="1" >1</button>&nbsp;&nbsp;...</li>'),i.includes(t)||s.push(`<li class="elm">...&nbsp;&nbsp;<button type="button" class="pagination-el unactive"  data-page="${t}">${t}</button></li>`)}return s.join("")}const xe="/project-UCranes02/assets/icons-0389f68f.svg#icon-heart",Ce="/project-UCranes02/assets/icons-0389f68f.svg#icon-close";function Ue({bodyPart:e,equipment:t,gifUrl:s,name:i,target:r,description:o,rating:c,burnedCalories:g,time:m,popularity:ce,_id:Ae}){let N=Math.round(c),K=!1;const de=JSON.parse(localStorage.getItem("favorites"));return de&&(K=de.some(W=>W._id===Ae)),`
  
    <div class="exercise-modal">
        <button class="exercise-card-close-btn" type="button">
            <svg class="exercise-card-close-icon" aria-label="Modal window close icon">
                <use href="${Ce}"></use>
            </svg>
        </button>
        <div class="exercise-card">
            <div class="exercise-card-img-wrap">
                <img src=${s} alt="">
            </div>
                <div class="exercise-card-info">
                    <div>
                        <h2 class="exercise-card-title">${i}</h2>
                        ${N?` <div class="exercise-card-rating"><span>${N?N+".0":""}</span>
                        ${[1,2,3,4,5].map(W=>`
                        <svg aria-label="Rating star" width="16" height="16" stroke="var(--black)" fill=${N>=W?"var(--yellow)":"var(--white-transparent-20)"} >
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
                          ${ce?`<li class="exercise-card-details-item">
                              <p class="details-name">Popular</p>
                              <p class="details-value">${ce}</p>
                          </li>`:""}
                          ${g&&m?`<li class="exercise-card-details-item">
                              <p class="details-name">Burned calories</p>
                              <p class="details-value">${g}/${m} min</p>
                          </li>`:""}
                         
                        </ul>
                        <p class="exercise-card-description">${o||""}</p>
                    </div>
                    <div class="exercise-card-btn-group">
                        <button class="card-btn add-favorites-btn" ${K?'style="padding: 12px 9px"':""}>
                            <span>${K?"Remove from favorites":"Add to favorites"}</span>
                            <svg class="favorites-icon" aria-label="Favorite icon" width="20" height="20" >
                                <use href="${K?`${oe}`:`${xe}heart`}"></use>
                            </svg>
                        </button>
                        <button class="card-btn add-rating-btn">Give a rating</button>
                </div>
            </div>
        </div>
    </div>`}function j({author:e,quote:t},s){return`
          ${s==="favorite"?`<p class="favorite-text-quote">${t}</p>`:`<p class="text-quote list-item-text">${t}</p>`}
          <p class="autor-quote list-item-text">${e}</p>
        `}function le(e,t){a.pagination.innerHTML=Re(e,t)}const F="https://your-energy.b.goit.study/api/",De={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class Qe{constructor({filter:t="muscles",subFilter:s="",keyword:i="",page:r=1,limit:o=8}){this.filter=t,this.subFilter=s,this.keyword=i,this.page=r,this.limit=o,this.id=""}async getFilters(){return(await B.get(`${F}filters`,{params:{filter:De[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await B.get(`${F}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(t){const s=await B.get(`${F}exercises/${t}`);return this.id=t,s.data}async updateExerciseRating({rate:t,email:s,review:i}){return(await B.patch(`${F}exercises/${this.id}/rating`,{rate:t,email:s,review:i})).data}async getQuote(){return(await B.get(`${F}quote`)).data}async subscribe({email:t}){return(await B.post(`${F}subscription`,{email:t})).data}}const d=new Qe({});async function _(){const e=await d.getExercises();a.gallery.innerHTML=Se(e.results),le(Number(e.page),e.totalPages)}ne.settings({timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX",theme:"dark",backgroundColor:"#242424"});function Z(e){ne.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:e})}function Ee(e){ne.show({progressBarColor:"#4FAC40",message:e})}async function R(){try{const e=await d.getFilters();a.gallery.innerHTML=Ie(e.results),le(Number(e.page),e.totalPages)}catch{Z(p.ERROR_MESSAGE),a.gallery.innerHTML="<p>Nothing was found<p/>"}}async function we(e){const t=new Date,s=`${t.getDate()}/${t.getMonth()}/${t.getFullYear()}`;let i;const r=JSON.parse(localStorage.getItem(p.LS_KEY_QUOTE));if(r)if(s!==r.date){try{i=await d.getQuote(),i.quote=i.quote||p.BASE_QUOTE.quote,i.author=i.author||"Unknown"}catch{a.quote.insertAdjacentHTML("beforeend",j(p.BASE_QUOTE,e));return}i.author!=="Unknown"&&i.quote!==p.BASE_QUOTE.quote&&(i.date=s,localStorage.setItem(p.LS_KEY_QUOTE,JSON.stringify(i))),a.quote.insertAdjacentHTML("beforeend",j(i,e))}else a.quote.insertAdjacentHTML("beforeend",j(r,e));else{try{i=await d.getQuote(),i.quote=i.quote||p.BASE_QUOTE.quote,i.author=i.author||"Unknown"}catch{a.quote.insertAdjacentHTML("beforeend",j(p.BASE_QUOTE,e));return}i.author!=="Unknown"&&i.quote!==p.BASE_QUOTE.quote&&(i.date=s,localStorage.setItem(p.LS_KEY_QUOTE,JSON.stringify(i))),a.quote.insertAdjacentHTML("beforeend",j(i,e))}}function He(e,t,s){a.gallery.innerHTML=Se(e,"favorites"),le(t,s)}function z(e){if(e==="top")window.scrollTo({top:0,behavior:"smooth"});else{const t=e;if(t){const s=t.getBoundingClientRect();if(s.top>=0&&s.bottom<=(window.innerHeight||document.documentElement.clientHeight))return;window.scrollBy({top:s.top-20,behavior:"smooth"})}}}const Le={mobile:{subfilters:9,exercises:8,favorites:8},tablet:{subfilters:12,exercises:10,favorites:10},desktop:{subfilters:12,exercises:10,favorites:999}};let he=$e(window.screen.width);const lt=new ResizeObserver(e=>{let t=$e(e[0].devicePixelContentBoxSize[0].inlineSize);he!==t&&(he=t,M.refreshLimits(Le[t]))});function qe(){let e="desktop";return window.screen.width<768&&(e="mobile"),window.screen.width>=768&&window.screen.width<1440&&(e="tablet"),Le[e]}function $e(e){let t="desktop";return e<768&&(t="mobile"),e>=768&&e<1440&&(t="tablet"),t}function Ne(){return'<span class="loader is-hidden"></span>'}function Te(e){e&&(e.querySelector(".loader")||e.insertAdjacentHTML("beforeend",Ne()))}var f,x,E,T,w,b,y,L,P,D,se,I,Y,Q,ie;class Ke{constructor({state:t,filter:s,subfiltersPage:i,subfilter:r,searchQuery:o,exercisesPage:c,limits:g}){h(this,L);h(this,D);h(this,I);h(this,Q);h(this,f,void 0);h(this,x,void 0);h(this,E,void 0);h(this,T,void 0);h(this,w,void 0);h(this,b,void 0);h(this,y,void 0);l(this,f,t),l(this,x,s),l(this,E,i),l(this,T,r),l(this,w,o),l(this,b,c),l(this,y,g)}load(){switch(we(),d.limit=n(this,y)[n(this,f)],d.filter=n(this,x),n(this,f)){case"subfilters":d.page=n(this,E),R(),u(this,I,Y).call(this);break;case"exercises":d.subFilter=n(this,T),d.keyword=n(this,w),d.page=n(this,b),_(),u(this,D,se).call(this,n(this,T));break}a.pagination.addEventListener("click",et),a.body.dataset.page==="home"&&(u(this,Q,ie).call(this,n(this,x)),a.filter.addEventListener("click",Ye),a.subscribeForm.addEventListener("submit",tt),a.policyBtn.addEventListener("click",ve),a.termsBtn.addEventListener("click",ve))}changeFilter(t){d.filter=t,d.page=1,d.limit=n(this,y).subfilters,R(),u(this,Q,ie).call(this,t,n(this,x)),l(this,f,"subfilters"),l(this,x,t),l(this,E,1),u(this,I,Y).call(this),u(this,L,P).call(this)}goExercises(t){d.subFilter=t,d.keyword="",d.page=1,d.limit=n(this,y).exercises,_(),l(this,f,"exercises"),l(this,T,t),l(this,w,""),l(this,b,1),u(this,D,se).call(this,t),u(this,L,P).call(this),z(a.gallerySubtitle)}goBack(){d.page=n(this,E),d.limit=n(this,y).subfilters,R(),l(this,f,"subfilters"),u(this,I,Y).call(this),u(this,L,P).call(this)}changePage(t){switch(d.page=t,n(this,f)){case"subfilters":R(),l(this,E,t);break;case"exercises":_(),l(this,b,t);break}u(this,L,P).call(this),z(a.gallerySubtitle)}goSearch(t){d.keyword=t,d.page=1,_(),l(this,w,t),l(this,b,1),u(this,L,P).call(this)}resetSearch(){d.keyword="",d.page=1,_(),l(this,w,""),l(this,b,1),u(this,L,P).call(this)}refreshLimits(t){if(t[n(this,f)]!==n(this,y)[n(this,f)])switch(d.limit=t[n(this,f)],n(this,f)){case"subfilters":R();break;case"exercises":_();break}l(this,y,t)}}f=new WeakMap,x=new WeakMap,E=new WeakMap,T=new WeakMap,w=new WeakMap,b=new WeakMap,y=new WeakMap,L=new WeakSet,P=function(){sessionStorage.setItem(p.SS_KEY_FILTERS,JSON.stringify({state:n(this,f),filter:n(this,x),subfiltersPage:n(this,E),subfilter:n(this,T),searchQuery:n(this,w),exercisesPage:n(this,b)}))},D=new WeakSet,se=function(t){a.gallery.dataset.cards="exercises",a.backBtn.classList.remove("back-button-hidden"),a.searchForm.classList.remove("search-form-hidden"),a.gallerySubtitle.innerHTML=`<span class="exercises-title">&nbsp;/</span><h3 class="exercises-subtitle">${t}</h3>`,a.gallery.addEventListener("click",re),a.backBtn.addEventListener("click",ye),a.searchForm.addEventListener("input",ue(be,1e3,{leading:!1,trailing:!0})),a.gallery.removeEventListener("click",ge),a.searchForm.reset()},I=new WeakSet,Y=function(){a.gallery.dataset.cards="subfilters",a.backBtn.classList.add("back-button-hidden"),a.searchForm.classList.add("search-form-hidden"),a.gallerySubtitle.innerHTML="",a.gallery.addEventListener("click",ge),a.gallery.removeEventListener("click",re),a.backBtn.removeEventListener("click",ye),a.searchForm.removeEventListener("input",ue(be,1e3,{leading:!1,trailing:!0}))},Q=new WeakSet,ie=function(t,s){[...a.filter.children].forEach(({firstElementChild:i})=>{switch(i.dataset.filter){case t:i.classList.add("filter-button-active");break;case s:i.classList.remove("filter-button-active");break}})};const M=new Ke({...JSON.parse(sessionStorage.getItem(p.SS_KEY_FILTERS))??{state:"subfilters",filter:"muscles",subfiltersPage:1,subfilter:"",searchQuery:"",exercisesPage:1},limits:qe()});function Ye(e){e.target.hasAttribute("data-filter")&&M.changeFilter(e.target.dataset.filter)}async function ge(e){if(e.preventDefault(),!e.target.closest("[data-subfilter]"))return;const{subfilter:t}=e.target.closest("[data-subfilter]").dataset;M.goExercises(t)}function ke(e){(e||document).querySelector(".loader").classList.remove("is-hidden")}function J(e){(e||document).querySelector(".loader").classList.add("is-hidden")}function ze(e){const t=document.querySelector(".add-favorites-btn");U.isFavorite(e._id)?(U.removeFavorite(e._id),t.style.padding="12px 16px",t.querySelector("span").textContent="Add to favorites",t.querySelector("use").setAttribute("href",xe)):(U.addFavorite(e),t.style.padding="12px 9px",t.querySelector("span").textContent="Remove from favorites",t.querySelector("use").setAttribute("href",oe))}const Je=/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;function Ve(e,t){const[s,i,r]=t.querySelectorAll(".users_rating, label"),[o,c,g]=t.querySelectorAll(".error");e.rate?(s.classList.add("invalid"),o.textContent=e.rate):(s.classList.remove("invalid"),o.textContent=""),e.email?(i.classList.add("invalid"),c.textContent=e.email):(i.classList.remove("invalid"),c.textContent=""),e.review?(r.classList.add("invalid"),g.textContent=e.review):(r.classList.remove("invalid"),g.textContent="")}function Pe({rate:e,email:t,review:s}){const i={isInvalid:!1};return e||(i.isInvalid=!0,i.rate="Please select a rating"),t||(i.isInvalid=!0,i.email="Please enter an email"),Je.test(t)||(i.isInvalid=!0,i.email="Please enter a valid email"),s||(i.isInvalid=!0,i.review="Please enter a review"),i}async function Ge(e,t){e.preventDefault();const s=new FormData(e.target),i={rate:Number(s.get("rate")),email:s.get("email"),review:s.get("review")},r=Pe(i);if(Ve(r,e.target),!r.isInvalid){e.target.querySelector('[type="submit"]').disabled=!0,Te(e.target);try{ke(e.target);const o=await d.updateExerciseRating(i);J(e.target),t()}catch(o){console.log(o),Z("Something went wrong. Please try again later."),J(e.target),e.target.querySelector('[type="submit"]').disabled=!1}}}function Xe(e){const t=e.target.closest(".rating");if(!t)return;const s=t.querySelectorAll('[name="rate"]'),i=t.parentElement.firstElementChild;s.forEach(r=>{r.checked&&(i.textContent=r.value+".0")})}const $={detailsPopup:!1,ratingPopup:!1},pe=e=>e.stopPropagation(),Ze=(e,{closeCallback:t,submitCallback:s})=>{const i=e.querySelector(".modal__close-btn"),r=e.querySelector(".give_a_rating"),o=e.querySelector(".rating");r.setAttribute("novalidate",!0),o.addEventListener("click",c=>{Xe(c)}),i.addEventListener("click",()=>{t()}),r.addEventListener("submit",c=>{c.preventDefault(),s(c)})},V=e=>{var t,s;$.detailsPopup=!1,$.ratingPopup=!1,e==null||e.classList.add("is-hidden"),(t=e==null?void 0:e.querySelector("[data-modal]"))==null||t.remove(),(s=e==null?void 0:e.querySelector(".exercise-modal"))==null||s.remove(),document.documentElement.classList.remove("no-scroll")},Be=(e,t,s)=>{var i;t.remove(),(i=e.querySelector("[data-modal]"))==null||i.remove(),$.ratingPopup=!1,e.append(s)},fe=(e,t,s)=>{switch(!0){case($.detailsPopup&&!$.ratingPopup):V(e);return;case($.detailsPopup&&$.ratingPopup):Be(e,t,s);return;default:V(e);return}},We=(e,t,s)=>{s.insertAdjacentHTML("beforeend",e);const i=s.querySelector(".exercise-modal"),r=s.querySelector(".exercise-card-close-btn"),o=s.querySelector(".add-rating-btn"),c=s.querySelector(".add-favorites-btn"),g=document.querySelector("#modal-template").content.firstElementChild.cloneNode(!0);window.addEventListener("keydown",m=>{m.code==="Escape"&&fe(s,g,i)}),s.addEventListener("click",()=>{fe(s,g,i)}),i.addEventListener("click",pe),g.addEventListener("click",pe),r.addEventListener("click",()=>{V(s)}),o.addEventListener("click",()=>{var m;$.ratingPopup=!0,(m=s==null?void 0:s.querySelector(".exercise-modal"))==null||m.remove(),s.append(g)}),c.addEventListener("click",m=>{ze(t)}),Ze(g,{closeCallback:()=>Be(s,g,i),submitCallback:m=>Ge(m,()=>{V(s),Ee("Thank you for your feedback!")})}),document.documentElement.classList.add("no-scroll"),$.detailsPopup=!0};async function re(e){if(e.preventDefault(),!e.target.closest("[data-id]")||e.target.closest("[data-delete]"))return;const t=document.querySelector(".exercise-modal-backdrop");t.classList.remove("is-hidden");try{const s=e.target.closest("[data-id]").dataset.id;Te(t),ke(t);const i=await d.getExerciseById(s);J(t);const r=Ue(i),o=We(r,i,t)}catch(s){console.error(s),Z("Something went wrong. Please try again later."),J(t)}}function et({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);M.changePage(t)}const me=document.querySelector(".footer-error");async function tt(e){e.preventDefault();const t=new FormData(e.currentTarget),s={};t.forEach((r,o)=>{s[o]=r});const{email:i}=Pe({email:s.subscribe});if(i)me.classList.remove("visually-hidden");else{e.currentTarget.reset(),me.classList.add("visually-hidden");try{const r=await d.subscribe({email:s.subscribe});Ee(r.message)}catch(r){Z(r.response.data.message)}}}let te,C;function ve(e){e.target===a.policyBtn&&(C=document.querySelector(".js-policy-modal"),te=document.querySelector(".js-policy-modal-close")),e.target===a.termsBtn&&(C=document.querySelector(".js-terms-modal"),te=document.querySelector(".js-terms-modal-close")),G(),C.addEventListener("click",st),te.addEventListener("click",G),window.addEventListener("keydown",Fe)}function Fe(e){e.code==="Escape"&&G()}function st(e){e.target===C&&G()}function G(){C.classList.toggle("is-hidden"),document.documentElement.classList.toggle("no-scroll"),window.removeEventListener("keydown",Fe)}function be(e){e.preventDefault();const t=a.searchForm.exercise.value.trim();M.goSearch(t)}function ct(){z("top")}function dt(){const{scrollTopBtn:e}=a;if(window.scrollY<100){e.classList.replace("js-scroll-top-button-active","hide-scroll-top-button");return}else e.classList.replace("hide-scroll-top-button","js-scroll-top-button-active")}async function ye(e){M.goBack()}function it({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);U.changePage(t)}function ut(e){e.currentTarget===a.btnOpenBurger&&(a.burgerMenu.classList.remove("is-hidden"),document.querySelector("html").classList.add("no-scroll")),e.currentTarget===a.btnCloseBurger&&(a.burgerMenu.classList.add("is-hidden"),document.querySelector("html").classList.remove("no-scroll"))}function rt(e){if(e.preventDefault(),!e.target.closest("[data-delete]"))return;const t=e.target.closest("[data-delete]").dataset.delete;U.removeFavorite(t)}var v,S,q,O,X,_e,H,ae,k,A;class at{constructor(t,s,i,r){h(this,X);h(this,H);h(this,k);h(this,v,void 0);h(this,S,void 0);h(this,q,void 0);h(this,O,void 0);l(this,v,t),l(this,S,s),l(this,q,i),l(this,O,r)}load(){we("favorite"),u(this,k,A).call(this),a.gallery.addEventListener("click",re),a.gallery.addEventListener("click",rt),a.pagination.addEventListener("click",it)}isFavorite(t){return n(this,v).some(s=>s._id===t)}removeFavorite(t){const s=n(this,v).map(i=>i._id).indexOf(t);n(this,v).splice(s,1),u(this,H,ae).call(this),n(this,O)==="favorites"&&u(this,k,A).call(this)}addFavorite(t){n(this,v).push(t),u(this,H,ae).call(this),n(this,O)==="favorites"&&u(this,k,A).call(this)}changePage(t){l(this,S,t),u(this,k,A).call(this),z(a.gallery)}refreshLimits(t){t.favorites!==n(this,q)&&(l(this,q,t.favorites),u(this,k,A).call(this))}}v=new WeakMap,S=new WeakMap,q=new WeakMap,O=new WeakMap,X=new WeakSet,_e=function(){sessionStorage.setItem(p.SS_KEY_FAVORITES,n(this,S))},H=new WeakSet,ae=function(){localStorage.setItem(p.LS_KEY_FAVORITES,JSON.stringify(n(this,v)))},k=new WeakSet,A=function(){const t=Math.ceil(n(this,v).length/n(this,q));t&&n(this,S)>t&&l(this,S,t);const s=[...n(this,v)].splice((n(this,S)-1)*n(this,q),n(this,q));He(s,n(this,S),t),u(this,X,_e).call(this)};const U=new at(JSON.parse(localStorage.getItem(p.LS_KEY_FAVORITES))??[],parseInt(sessionStorage.getItem(p.SS_KEY_FAVORITES))||1,qe().favorites,a.body.dataset.page);export{dt as a,ct as b,a as e,U as f,M as g,ut as h,lt as r};
//# sourceMappingURL=favorites-page-e812f568.js.map
