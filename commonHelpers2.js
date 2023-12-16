var U=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var o=(e,t,s)=>(U(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},l=(e,t,s,a)=>(U(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s);var d=(e,t,s)=>(U(e,t,"access private method"),s);import{r as se,e as i,a as ce}from"./assets/elements-3ec99d5b.js";import{a as B,i as Z,l as de}from"./assets/vendor-80510813.js";const P="https://your-energy.b.goit.study/api/",ue={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class pe{constructor({filter:t="muscles",subFilter:s="",keyword:a="",page:r=1,limit:c=8}){this.filter=t,this.subFilter=s,this.keyword=a,this.page=r,this.limit=c,this.id=""}async getFilters(){return(await B.get(`${P}filters`,{params:{filter:ue[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await B.get(`${P}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(t){const s=await B.get(`${P}exercises/${t}`);return this.id=t,s.data}async updateExerciseRating({rate:t,email:s,review:a}){return(await B.patch(`${P}exercises/${this.id}/rating`,{rate:t,email:s,review:a})).data}async getQuote(){return(await B.get(`${P}quote`)).data}async subscribe({email:t}){return(await B.post(`${P}subscription`,{email:t})).data}}const n=new pe({});function he(e){return e.map(({filter:t,name:s,imgURL:a})=>`<li class="exercises-item">
      <a data-subfilter="${s}" class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${a}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${t}</p>
        </div>
      </a>
    </li>`).join("")}function ge(e,t){let s=[];for(let a=1;a<=t;a+=1)s.push(`<li class="elm"><button type="button" class="pagination-el ${a===e?"active":"unactive"}" data-page="${a}" >${a}</button></li>`);return s.join("")}const ae="/project-UCranes02/assets/icons-0389f68f.svg#icon-heart",fe="/project-UCranes02/assets/icons-0389f68f.svg#icon-close";function me({bodyPart:e,equipment:t,gifUrl:s,name:a,target:r,description:c,rating:u,burnedCalories:m,time:v,popularity:k,_id:le}){let R=Math.round(u),C=!1;const V=JSON.parse(localStorage.getItem("favorites"));return V&&(C=V.some(J=>J._id===le)),`
  <div class="exercise-modal-backdrop" >
    <div class="exercise-modal">
        <button class="exercise-card-close-btn" type="button">
            <svg class="exercise-card-close-icon" aria-label="Modal window close icon">
                <use href="${fe}"></use>
            </svg>
        </button>
        <div class="exercise-card">
            <div class="exercise-card-img-wrap">
                <img src=${s} alt="">
            </div>
                <div class="exercise-card-info">
                    <div>
                        <h2 class="exercise-card-title">${a}</h2>
                        ${R?` <div class="exercise-card-rating"><span>${R?R+".0":""}</span>
                        ${[1,2,3,4,5].map(J=>`
                        <svg aria-label="Rating star" width="16" height="16" stroke="var(--black)" fill=${R>=J?"var(--yellow)":"var(--white-transparent-20)"} >
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
                          ${m&&v?`<li class="exercise-card-details-item">
                              <p class="details-name">Burned calories</p>
                              <p class="details-value">${m}/${v} min</p>
                          </li>`:""}
                         
                        </ul>
                        <p class="exercise-card-description">${c||""}</p>
                    </div>
                    <div class="exercise-card-btn-group">
                        <button class="card-btn add-favorites-btn" ${C?'style="padding: 12px 9px"':""}>
                            <span>${C?"Remove from favorites":"Add to favorites"}</span>
                            <svg class="favorites-icon" aria-label="Favorite icon" width="20" height="20" >
                                <use href="${C?`${se}`:`${ae}heart`}"></use>
                            </svg>
                        </button>
                        <button class="card-btn add-rating-btn">Give a rating</button>
                </div>
            </div>
        </div>
    </div>
</div>`}function F({author:e,quote:t}){return`
          <p class="text-quote list-item-text">${t}</p>
          <p class="autor-quote list-item-text">${e}</p>
        `}async function q(e){const t=await n.getExercises();i.gallery.innerHTML=ce(t.results),e&&e(Number(t.page),t.totalPages)}Z.settings({timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX",maxWidth:335,theme:"dark",backgroundColor:"#242424"});function Q(e){Z.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:e})}function ie(e){Z.show({progressBarColor:"#4FAC40",message:e})}const T={LS_KEY_QUOTE:"quote",BASE_QUOTE:{author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."},ERROR_MESSAGE:"Something goes wrong!"};async function M(e){try{const t=await n.getFilters();i.gallery.innerHTML=he(t.results),e&&e(Number(t.page),t.totalPages)}catch{Q(T.ERROR_MESSAGE),i.gallery.innerHTML="<p>Nothing was found<p/>"}}async function ve(){const e=new Date,t=`${e.getDate()}/${e.getMonth()}/${e.getFullYear()}`;let s;const a=JSON.parse(localStorage.getItem(T.LS_KEY_QUOTE));if(a)if(t!==a.date){try{if(s=await n.getQuote(),!s.author||!s.quote)throw Error("empty data")}catch(r){i.quote.insertAdjacentHTML("beforeend",F(T.BASE_QUOTE)),console.log(r.message);return}s.date=t,localStorage.setItem(T.LS_KEY_QUOTE,JSON.stringify(s)),i.quote.insertAdjacentHTML("beforeend",F(s))}else i.quote.insertAdjacentHTML("beforeend",F(a));else{try{if(s=await n.getQuote(),!s.author||!s.quote)throw Error("empty data")}catch(r){i.quote.insertAdjacentHTML("beforeend",F(T.BASE_QUOTE)),console.log(r.message);return}s.date=t,localStorage.setItem(T.LS_KEY_QUOTE,JSON.stringify(s)),i.quote.insertAdjacentHTML("beforeend",F(s))}}let W=1;function be(e){[...document.querySelector(".js-pagination").children].forEach(({firstElementChild:s})=>{const a=parseInt(s.dataset.page);a===e?(s.disabled="true",s.classList.replace("unactive","active")):a===W&&(s.classList.replace("active","unactive"),s.removeAttribute("disabled"))}),W=e}function b(e,t){i.pagination.innerHTML=ge(e,t)}function Y(e){if(e==="top")window.scrollTo({top:0,behavior:"smooth"});else{const t=e;if(t){const s=t.getBoundingClientRect();if(s.top>=0&&s.bottom<=(window.innerHeight||document.documentElement.clientHeight)){console.log("el is in viewport");return}window.scrollBy({top:s.top-20,behavior:"smooth"})}}}const ye={mobile:{subfilters:9,exercises:8,favorites:8},tablet:{subfilters:12,exercises:10,favorites:10},desktop:{subfilters:12,exercises:10,favorites:999}};function we(){let e="desktop";return window.screen.width<768&&(e="mobile"),window.screen.width>=768&&window.screen.width<1440&&(e="tablet"),ye[e]}var p,y,w,L,g,f,x,E,$,O,K,A,j,D,z;class xe{constructor({state:t,filter:s,subfiltersPage:a,subfilter:r,searchQuery:c,exercisesPage:u,limits:m}){h(this,E);h(this,O);h(this,A);h(this,D);h(this,p,void 0);h(this,y,void 0);h(this,w,void 0);h(this,L,void 0);h(this,g,void 0);h(this,f,void 0);h(this,x,void 0);l(this,p,t),l(this,y,s),l(this,w,a),l(this,L,r),l(this,g,c),l(this,f,u),l(this,x,m)}load(){switch(ve(),n.limit=o(this,x)[o(this,p)],n.filter=o(this,y),o(this,p)){case"subfilters":n.page=o(this,w),M(b),d(this,A,j).call(this);break;case"exercises":n.subFilter=o(this,L),n.keyword=o(this,g),n.page=o(this,f),i.searchForm.elements.exercise.setAttribute("value",o(this,g)),q(b),d(this,O,K).call(this,o(this,L));break}d(this,D,z).call(this,o(this,y))}changeFilter(t){n.filter=t,n.page=1,n.limit=o(this,x).subfilters,M(b),d(this,D,z).call(this,t,o(this,y)),l(this,p,"subfilters"),l(this,y,t),l(this,w,1),d(this,A,j).call(this),d(this,E,$).call(this)}goExercises(t){n.subFilter=t,n.keyword="",n.page=1,n.limit=o(this,x).exercises,q(b),l(this,p,"exercises"),l(this,L,t),l(this,g,""),l(this,f,1),d(this,O,K).call(this,t),d(this,E,$).call(this),Y(i.gallerySubtitle)}goBack(){n.page=o(this,w),n.limit=o(this,x).subfilters,M(b),l(this,p,"subfilters"),d(this,A,j).call(this),d(this,E,$).call(this)}changePage(t){switch(n.page=t,o(this,p)){case"subfilters":M(),l(this,w,t);break;case"exercises":q(),l(this,f,t);break}d(this,E,$).call(this),Y(i.gallerySubtitle)}goSearch(t){n.keyword=t,n.page=1,q(b),l(this,g,t),l(this,f,1),d(this,E,$).call(this)}resetSearch(){n.keyword="",n.page=1,q(b),l(this,g,""),l(this,f,1),d(this,E,$).call(this)}refreshLimits(t){switch(this.limits=t,n.limit=o(this,x)[o(this,p)],o(this,p)){case"subfilters":M(b);break;case"exercises":q(b);break}}}p=new WeakMap,y=new WeakMap,w=new WeakMap,L=new WeakMap,g=new WeakMap,f=new WeakMap,x=new WeakMap,E=new WeakSet,$=function(){localStorage.setItem("gallery",JSON.stringify({state:o(this,p),filter:o(this,y),subfiltersPage:o(this,w),subfilter:o(this,L),searchQuery:o(this,g),exercisesPage:o(this,f)}))},O=new WeakSet,K=function(t){i.gallery.dataset.cards="exercises",i.backBtn.classList.remove("back-button-hidden"),i.searchForm.classList.remove("search-form-hidden"),i.gallerySubtitle.innerHTML=`<span class="exercises-title">&nbsp;/</span><h3 class="exercises-subtitle">${t}</h3>`,i.backBtn.addEventListener("click",Ce),i.searchForm.addEventListener("click",X),i.searchForm.reset()},A=new WeakSet,j=function(){i.gallery.dataset.cards="subfilters",i.backBtn.classList.add("back-button-hidden"),i.searchForm.classList.add("search-form-hidden"),i.gallerySubtitle.innerHTML="",i.backBtn.removeEventListener("click",this.goBack),i.searchForm.removeEventListener("click",X)},D=new WeakSet,z=function(t,s){[...i.filter.children].forEach(({firstElementChild:a})=>{switch(a.dataset.filter){case t:a.classList.add("filter-button-active");break;case s:a.classList.remove("filter-button-active");break}})};const I=new xe({...JSON.parse(localStorage.getItem("gallery"))??{state:"subfilters",filter:"muscles",subfiltersPage:1,subfilter:"",searchQuery:"",exercisesPage:1},limits:we()});function Ee(e){e.target.hasAttribute("data-filter")&&I.changeFilter(e.target.dataset.filter)}async function Se(e){if(e.preventDefault(),!e.target.closest("[data-subfilter]"))return;const{subfilter:t}=e.target.closest("[data-subfilter]").dataset;I.goExercises(t)}function Le(e){const t=localStorage.getItem("favorites"),s=JSON.parse(t),a=s.map(r=>r._id).indexOf(e);s.splice(a,1),localStorage.setItem("favorites",JSON.stringify(s))}function ke(e){const t=document.querySelector(".add-favorites-btn"),s=localStorage.getItem("favorites"),a=JSON.parse(s);if(s)a.some(r=>r._id===e._id)?(Le(e._id),t.style.padding="12px 16px",t.querySelector("span").textContent="Add to favorites",t.querySelector("use").setAttribute("href",ae)):(a.push(e),localStorage.setItem("favorites",JSON.stringify(a)),t.style.padding="12px 9px",t.querySelector("span").textContent="Remove from favorites",t.querySelector("use").setAttribute("href",se));else{const r=JSON.stringify([e]);localStorage.setItem("favorites",r)}}const $e=/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;function Be(e,t){const[s,a,r]=t.querySelectorAll(".users_rating, label"),[c,u,m]=t.querySelectorAll(".error");e.rate?(s.classList.add("invalid"),c.textContent=e.rate):(s.classList.remove("invalid"),c.textContent=""),e.email?(a.classList.add("invalid"),u.textContent=e.email):(a.classList.remove("invalid"),u.textContent=""),e.review?(r.classList.add("invalid"),m.textContent=e.review):(r.classList.remove("invalid"),m.textContent="")}function Pe({rate:e,email:t,review:s}){const a={isInvalid:!1};return e||(a.isInvalid=!0,a.rate="Please select a rating"),t||(a.isInvalid=!0,a.email="Please enter an email"),$e.test(t)||(a.isInvalid=!0,a.email="Please enter a valid email"),s||(a.isInvalid=!0,a.review="Please enter a review"),a}async function qe(e,t){e.preventDefault();const s=new FormData(e.target),a={rate:Number(s.get("rate")),email:s.get("email"),review:s.get("review")},r=Pe(a);if(Be(r,e.target),!r.isInvalid)try{const c=await n.updateExerciseRating(a);t()}catch(c){console.log(c),Q("Something went wrong. Please try again later.")}}function Te(e){const t=e.target.closest(".rating");if(!t)return;const s=t.querySelectorAll('[name="rate"]'),a=t.parentElement.firstElementChild;s.forEach(r=>{r.checked&&(a.textContent=r.value+".0")})}const S={detailsPopup:!1,ratingPopup:!1},ee=e=>e.stopPropagation(),Ae=(e,{closeCallback:t,submitCallback:s})=>{const a=e.querySelector(".modal__close-btn"),r=e.querySelector(".give_a_rating"),c=e.querySelector(".rating");r.setAttribute("novalidate",!0),c.addEventListener("click",u=>{Te(u)}),a.addEventListener("click",()=>{t()}),r.addEventListener("submit",u=>{u.preventDefault(),s(u)})},H=e=>{S.detailsPopup=!1,S.ratingPopup=!1,e==null||e.remove(),document.documentElement.classList.remove("no-scroll")},re=(e,t,s)=>{t.remove(),e.innerHTML="",S.ratingPopup=!1,e.append(s)},te=(e,t,s)=>{switch(!0){case(S.detailsPopup&&!S.ratingPopup):H(e);return;case(S.detailsPopup&&S.ratingPopup):re(e,t,s);return;default:H(e);return}},Ie=(e,t)=>{const s=document.createElement("div");s.innerHTML=e;const a=s.querySelector(".exercise-modal-backdrop"),r=s.querySelector(".exercise-modal"),c=s.querySelector(".exercise-card-close-btn"),u=s.querySelector(".add-rating-btn"),m=s.querySelector(".add-favorites-btn"),v=document.querySelector("#modal-template").content.firstElementChild.cloneNode(!0);window.addEventListener("keydown",k=>{k.code==="Escape"&&te(a,v,r)}),a.addEventListener("click",()=>{te(a,v,r)}),r.addEventListener("click",ee),v.addEventListener("click",ee),c.addEventListener("click",()=>{H(a)}),u.addEventListener("click",()=>{S.ratingPopup=!0,a.innerHTML="",a.append(v)}),m.addEventListener("click",k=>{ke(t)}),Ae(v,{closeCallback:()=>re(a,v,r),submitCallback:k=>qe(k,()=>{H(a),ie("Thank you for your feedback!")})}),document.documentElement.classList.add("no-scroll"),S.detailsPopup=!0,document.body.append(a)};async function Fe(e){if(e.preventDefault(),!!e.target.closest("[data-id]"))try{const t=e.target.closest("[data-id]").dataset.id,s=await n.getExerciseById(t),a=me(s),r=Ie(a,s)}catch(t){console.error(t),Q("Something went wrong. Please try again later.")}}function Me({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);be(t),I.changePage(t)}async function _e(e){e.preventDefault();const t=new FormData(e.currentTarget),s={};t.forEach((a,r)=>{s[r]=a}),e.currentTarget.reset();try{const a=await n.subscribe({email:s.subscribe});ie(a.message)}catch(a){Q(a.response.data.message)}}let G,_;function ne(e){e.target===i.policyBtn&&(_=document.querySelector(".js-policy-modal"),G=document.querySelector(".js-policy-modal-close")),e.target===i.termsBtn&&(_=document.querySelector(".js-terms-modal"),G=document.querySelector(".js-terms-modal-close")),N(),_.addEventListener("click",Oe),G.addEventListener("click",N),window.addEventListener("keydown",oe)}function oe(e){e.code==="Escape"&&N()}function Oe(e){e.target===_&&N()}function N(){_.classList.toggle("is-hidden"),window.removeEventListener("keydown",oe)}function X(e){e.preventDefault();const t=i.searchForm.exercise.value.trim();I.goSearch(t)}function De(){Y("top")}function Re(){const{scrollTopBtn:e}=i;if(window.scrollY<100){e.classList.replace("js-scroll-top-button-active","hide-scroll-top-button");return}else e.classList.replace("hide-scroll-top-button","js-scroll-top-button-active")}async function Ce(e){I.goBack()}i.filter.addEventListener("click",Ee);i.gallery.addEventListener("click",Se);i.gallery.addEventListener("click",Fe);i.pagination.addEventListener("click",Me);i.subscribeForm.addEventListener("submit",_e);i.policyBtn.addEventListener("click",ne);i.termsBtn.addEventListener("click",ne);window.addEventListener("scroll",Re);i.scrollTopBtn.addEventListener("click",De);i.searchForm.addEventListener("input",de(X,500,{leading:!1,trailing:!0}));I.load();
//# sourceMappingURL=commonHelpers2.js.map
