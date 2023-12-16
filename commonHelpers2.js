var O=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var f=(e,t,s)=>(O(e,t,"read from private field"),s?s.call(e):t.get(e)),m=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},d=(e,t,s,a)=>(O(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s);var B=(e,t,s)=>(O(e,t,"access private method"),s);import{r as K,e as r,a as te}from"./assets/elements-5f1f1464.js";import{a as v,i as N,l as se}from"./assets/vendor-80510813.js";const b="https://your-energy.b.goit.study/api/",ae={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class re{constructor({filter:t="muscles",subFilter:s="",keyword:a="",page:i=1,limit:o=8}){this.filter=t,this.subFilter=s,this.keyword=a,this.page=i,this.limit=o,this.id=""}async getFilters(){return(await v.get(`${b}filters`,{params:{filter:ae[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await v.get(`${b}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(t){const s=await v.get(`${b}exercises/${t}`);return this.id=t,s.data}async updateExerciseRating({rate:t,email:s,review:a}){return(await v.patch(`${b}exercises/${this.id}/rating`,{rate:t,email:s,review:a})).data}async getQuote(){return(await v.get(`${b}quote`)).data}async subscribe({email:t}){return(await v.post(`${b}subscription`,{email:t})).data}}const n=new re({});function ie(e){return e.map(({filter:t,name:s,imgURL:a})=>`<li class="exercises-item">
      <a data-subfilter="${s}" class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${a}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${t}</p>
        </div>
      </a>
    </li>`).join("")}function ne(e,t){let s=[];for(let a=1;a<=t;a+=1)s.push(`<li class="elm"><button type="button" class="pagination-el ${a===e?"active":"unactive"}" data-page="${a}" >${a}</button></li>`);return s.join("")}const Y="/project-UCranes02/assets/icons-8e3f0925.svg#icon-heart",oe="/project-UCranes02/assets/icons-8e3f0925.svg#icon-close";function ce({bodyPart:e,equipment:t,gifUrl:s,name:a,target:i,description:o,rating:A,burnedCalories:L,time:c,popularity:u,_id:ee}){let $=Math.round(A),q=!1;const C=JSON.parse(localStorage.getItem("favorites"));return C&&(q=C.some(I=>I._id===ee)),`
  <div class="exercise-modal-backdrop" >
    <div class="exercise-modal">
        <button class="exercise-card-close-btn" type="button">
            <svg class="exercise-card-close-icon" aria-label="Modal window close icon">
                <use href="${oe}"></use>
            </svg>
        </button>
        <div class="exercise-card">
            <div class="exercise-card-img-wrap">
                <img src=${s} alt="">
            </div>
                <div class="exercise-card-info">
                    <div>
                        <h2 class="exercise-card-title">${a}</h2>
                        ${$?` <div class="exercise-card-rating"><span>${$?$+".0":""}</span>
                        ${[1,2,3,4,5].map(I=>`
                        <svg aria-label="Rating star" width="16" height="16" stroke="var(--black)" fill=${$>=I?"var(--yellow)":"var(--white-transparent-20)"} >
                            <use href="/img/icons.svg#icon-star"></use>
                        </svg>`).join("")}
                          </div>`:""}
                            
                        <ul class="exercise-card-details-list">
                        ${i?`<li class="exercise-card-details-item">
                        <p class="details-name">Target</p>
                        <p class="details-value">${i}</p>
                        </li>`:""}
                        ${e?`<li class="exercise-card-details-item">
                              <p class="details-name">Body Part</p>
                              <p class="details-value">${e}</p>
                          </li>`:""}
                          ${t?`<li class="exercise-card-details-item">
                              <p class="details-name">Equipment</p>
                              <p class="details-value">${t}</p>
                          </li>`:""}
                          ${u?`<li class="exercise-card-details-item">
                              <p class="details-name">Popular</p>
                              <p class="details-value">${u}</p>
                          </li>`:""}
                          ${L&&c?`<li class="exercise-card-details-item">
                              <p class="details-name">Burned calories</p>
                              <p class="details-value">${L}/${c} min</p>
                          </li>`:""}
                         
                        </ul>
                        <p class="exercise-card-description">${o||""}</p>
                    </div>
                    <div class="exercise-card-btn-group">
                        <button class="card-btn add-favorites-btn" ${q?'style="padding: 12px 9px"':""}>
                            <span>${q?"Remove from favorites":"Add to favorites"}</span>
                            <svg class="favorites-icon" aria-label="Favorite icon" width="20" height="20" >
                                <use href="${q?`${K}`:`${Y}heart`}"></use>
                            </svg>
                        </button>
                        <button class="card-btn add-rating-btn">Give a rating</button>
                </div>
            </div>
        </div>
    </div>
</div>`}function S({author:e,quote:t}){return`
          <p class="text-quote list-item-text">${t}</p>
          <p class="autor-quote list-item-text">${e}</p>
        `}async function P(e,t){n.page=e;const s=await n.getExercises();r.gallery.innerHTML=te(s.results),t&&t(Number(s.page),s.totalPages)}N.settings({timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX",maxWidth:335,theme:"dark",backgroundColor:"#242424"});function _(e){N.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:e})}function X(e){N.show({progressBarColor:"#4FAC40",message:e})}const E={LS_KEY_QUOTE:"quote",BASE_QUOTE:{author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."},ERROR_MESSAGE:"Something goes wrong!"};async function T(e,t){n.page=e;try{const s=await n.getFilters();r.gallery.innerHTML=ie(s.results),t&&t(Number(s.page),s.totalPages)}catch{_(E.ERROR_MESSAGE),r.gallery.innerHTML="<p>Nothing was found<p/>"}}async function le(){const e=new Date,t=`${e.getDate()}/${e.getMonth()}/${e.getFullYear()}`;let s;const a=JSON.parse(localStorage.getItem(E.LS_KEY_QUOTE));if(a)if(t!==a.date){try{if(s=await n.getQuote(),!s.author||!s.quote)throw Error("empty data")}catch(i){r.quote.insertAdjacentHTML("beforeend",S(E.BASE_QUOTE)),console.log(i.message);return}s.date=t,localStorage.setItem(E.LS_KEY_QUOTE,JSON.stringify(s)),r.quote.insertAdjacentHTML("beforeend",S(s))}else r.quote.insertAdjacentHTML("beforeend",S(a));else{try{if(s=await n.getQuote(),!s.author||!s.quote)throw Error("empty data")}catch(i){r.quote.insertAdjacentHTML("beforeend",S(E.BASE_QUOTE)),console.log(i.message);return}s.date=t,localStorage.setItem(E.LS_KEY_QUOTE,JSON.stringify(s)),r.quote.insertAdjacentHTML("beforeend",S(s))}}let Q=1;function de(e){[...document.querySelector(".js-pagination").children].forEach(({firstElementChild:s})=>{const a=parseInt(s.dataset.page);a===e?(s.disabled="true",s.classList.replace("unactive","active")):a===Q&&(s.classList.replace("active","unactive"),s.removeAttribute("disabled"))}),Q=e}function y(e,t){r.pagination.innerHTML=ne(e,t)}function U(e){e==="top"?window.scrollTo({top:0,behavior:"smooth"}):e.scrollIntoView({behavior:"smooth"})}var p,g,h,F,z,k,j;class ue{constructor(){m(this,F);m(this,k);m(this,p,void 0);m(this,g,void 0);m(this,h,void 0);d(this,h,"muscles"),d(this,p,"subfilters"),d(this,g,1)}changePage(t){switch(f(this,p)){case"subfilters":T(t),d(this,g,t);break;case"exercises":P(t);break}U(r.gallerySubtitle)}changeFilter(t){n.filter=t,n.page=1,T(1,y),[...r.filter.children].forEach(({firstElementChild:s})=>{switch(s.dataset.filter){case f(this,h):s.classList.remove("filter-button-active");break;case t:s.classList.add("filter-button-active");break}}),d(this,h,t),B(this,k,j).call(this)}goExercises(t){n.subFilter=t,n.keyword="",n.page=1,P(1,y),B(this,F,z).call(this,t),r.searchForm.reset(),U(r.gallerySubtitle)}goSearch(t){n.keyword=t,n.page=1,P(1,y)}resetSearch(){n.keyword="",n.page=1,P(1,y)}goBack(){n.filter=f(this,h),n.page=f(this,g),T(f(this,g),y),B(this,k,j).call(this)}load(){le(),T(1,y)}}p=new WeakMap,g=new WeakMap,h=new WeakMap,F=new WeakSet,z=function(t){d(this,p,"exercises"),r.gallery.dataset.cards="exercises",r.backBtn.classList.remove("back-button-hidden"),r.searchForm.classList.remove("search-form-hidden"),r.gallerySubtitle.innerHTML=`<span class="exercises-title">&nbsp;/</span><h3 class="exercises-subtitle">${t}</h3>`,r.backBtn.addEventListener("click",we),r.searchForm.addEventListener("click",R)},k=new WeakSet,j=function(){d(this,p,"subfilters"),r.gallery.dataset.cards="subfilters",r.backBtn.classList.add("back-button-hidden"),r.searchForm.classList.add("search-form-hidden"),r.gallerySubtitle.innerHTML="",r.backBtn.removeEventListener("click",this.goBack),r.searchForm.removeEventListener("click",R)};const x=new ue;function pe(e){e.target.hasAttribute("data-filter")&&x.changeFilter(e.target.dataset.filter)}async function ge(e){if(e.preventDefault(),!e.target.closest("[data-subfilter]"))return;const{subfilter:t}=e.target.closest("[data-subfilter]").dataset;x.goExercises(t)}function he(e){const t=localStorage.getItem("favorites"),s=JSON.parse(t),a=s.map(i=>i._id).indexOf(e);s.splice(a,1),localStorage.setItem("favorites",JSON.stringify(s))}function fe(e){const t=document.querySelector(".add-favorites-btn"),s=localStorage.getItem("favorites"),a=JSON.parse(s);if(s)a.some(i=>i._id===e._id)?(he(e._id),t.style.padding="12px 16px",t.querySelector("span").textContent="Add to favorites",t.querySelector("use").setAttribute("href",Y)):(a.push(e),localStorage.setItem("favorites",JSON.stringify(a)),t.style.padding="12px 9px",t.querySelector("span").textContent="Remove from favorites",t.querySelector("use").setAttribute("href",K));else{const i=JSON.stringify([e]);localStorage.setItem("favorites",i)}}async function me(e,t){e.preventDefault();const s=new FormData(e.target);try{const a=await n.updateExerciseRating({rate:Number(s.get("rate")),email:s.get("email"),review:s.get("review")});t()}catch(a){console.log(a),_("Something went wrong. Please try again later.")}}const l={detailsPopup:!1,ratingPopup:!1},J=e=>e.stopPropagation(),ve=(e,{closeCallback:t,submitCallback:s})=>{const a=e.querySelector(".modal__close-btn"),i=e.querySelector(".give_a_rating");a.addEventListener("click",()=>{t()}),i.addEventListener("submit",o=>{o.preventDefault(),s(o)})},H=e=>{l.detailsPopup=!1,l.ratingPopup=!1,e==null||e.remove()},V=(e,t,s)=>{t.remove(),e.innerHTML="",l.ratingPopup=!1,e.append(s)},G=(e,t,s)=>{switch(!0){case(l.detailsPopup&&!l.ratingPopup):H(e);return;case(l.detailsPopup&&l.ratingPopup):V(e,t,s);return;default:H(e);return}},be=(e,t)=>{const s=document.createElement("div");s.innerHTML=e;const a=s.querySelector(".exercise-modal-backdrop"),i=s.querySelector(".exercise-modal"),o=s.querySelector(".exercise-card-close-btn"),A=s.querySelector(".add-rating-btn"),L=s.querySelector(".add-favorites-btn"),c=document.querySelector("#modal-template").content.firstElementChild.cloneNode(!0);window.addEventListener("keydown",u=>{u.code==="Escape"&&G(a,c,i)}),a.addEventListener("click",()=>{G(a,c,i)}),i.addEventListener("click",J),c.addEventListener("click",J),o.addEventListener("click",()=>{a.remove()}),A.addEventListener("click",()=>{l.ratingPopup=!0,a.innerHTML="",a.append(c)}),L.addEventListener("click",u=>{fe(t)}),ve(c,{closeCallback:()=>V(a,c,i),submitCallback:u=>me(u,()=>{H(a),X("Thank you for your feedback!")})}),l.detailsPopup=!0,document.body.append(a)};async function ye(e,t){if(e.preventDefault(),!!e.target.closest("[data-id]"))try{const s=e.target.closest("[data-id]").dataset.id,a=await n.getExerciseById(s),i=ce(a),o=be(i,a)}catch(s){console.error(s),_("Something went wrong. Please try again later.")}}function Ee({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);de(t),x.changePage(t)}async function xe(e){e.preventDefault();const t=new FormData(e.currentTarget),s={};t.forEach((a,i)=>{s[i]=a}),e.currentTarget.reset();try{const a=await n.subscribe({email:s.subscribe});X(a.message)}catch(a){_(a.response.data.message)}}let D,w;function W(e){e.target===r.policyBtn&&(w=document.querySelector(".js-policy-modal"),D=document.querySelector(".js-policy-modal-close")),e.target===r.termsBtn&&(w=document.querySelector(".js-terms-modal"),D=document.querySelector(".js-terms-modal-close")),M(),w.addEventListener("click",Se),D.addEventListener("click",M),window.addEventListener("keydown",Z)}function Z(e){e.code==="Escape"&&M()}function Se(e){e.target===w&&M()}function M(){w.classList.toggle("is-hidden"),window.removeEventListener("keydown",Z)}function R(e){e.preventDefault();const t=r.searchForm.exercise.value.trim().toLowerCase();t&&x.goSearch(t)}async function we(e){x.goBack()}r.filter.addEventListener("click",pe);r.gallery.addEventListener("click",ge);r.gallery.addEventListener("click",ye);r.pagination.addEventListener("click",Ee);r.subscribeForm.addEventListener("submit",xe);r.policyBtn.addEventListener("click",W);r.termsBtn.addEventListener("click",W);r.searchForm.addEventListener("input",se(R,500,{leading:!1,trailing:!0}));x.load();
//# sourceMappingURL=commonHelpers2.js.map
