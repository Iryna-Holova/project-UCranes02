var O=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var m=(e,t,s)=>(O(e,t,"read from private field"),s?s.call(e):t.get(e)),v=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},d=(e,t,s,a)=>(O(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s);var T=(e,t,s)=>(O(e,t,"access private method"),s);import{r as K,e as r,a as te}from"./assets/elements-5f1f1464.js";import{a as y,i as N,l as se}from"./assets/vendor-80510813.js";const b="https://your-energy.b.goit.study/api/",ae={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class re{constructor({filter:t="muscles",subFilter:s="",keyword:a="",page:i=1,limit:u=8}){this.filter=t,this.subFilter=s,this.keyword=a,this.page=i,this.limit=u,this.id=""}async getFilters(){return(await y.get(`${b}filters`,{params:{filter:ae[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await y.get(`${b}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(t){const s=await y.get(`${b}exercises/${t}`);return this.id=t,s.data}async updateExerciseRating({rate:t,email:s,review:a}){return(await y.patch(`${b}exercises/${this.id}/rating`,{rate:t,email:s,review:a})).data}async getQuote(){return(await y.get(`${b}quote`)).data}async subscribe({email:t}){return(await y.post(`${b}subscription`,{email:t})).data}}const n=new re({});function ie(e){return e.map(({filter:t,name:s,imgURL:a})=>`<li class="exercises-item">
      <a data-subfilter="${s}" class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${a}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${t}</p>
        </div>
      </a>
    </li>`).join("")}function ne(e,t){let s=[];for(let a=1;a<=t;a+=1)s.push(`<li class="elm"><button type="button" class="pagination-el ${a===e?"active":"unactive"}" data-page="${a}" >${a}</button></li>`);return s.join("")}const Y="/project-UCranes02/assets/icons-8e3f0925.svg#icon-heart",oe="/project-UCranes02/assets/icons-8e3f0925.svg#icon-close";function ce({bodyPart:e,equipment:t,gifUrl:s,name:a,target:i,description:u,rating:l,burnedCalories:$,time:o,popularity:p,_id:ee}){let q=Math.round(l),B=!1;const C=JSON.parse(localStorage.getItem("favorites"));return C&&(B=C.some(_=>_._id===ee)),`
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
                        ${q?` <div class="exercise-card-rating"><span>${q?q+".0":""}</span>
                        ${[1,2,3,4,5].map(_=>`
                        <svg aria-label="Rating star" width="16" height="16" stroke="var(--black)" fill=${q>=_?"var(--yellow)":"var(--white-transparent-20)"} >
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
                          ${p?`<li class="exercise-card-details-item">
                              <p class="details-name">Popular</p>
                              <p class="details-value">${p}</p>
                          </li>`:""}
                          ${$&&o?`<li class="exercise-card-details-item">
                              <p class="details-name">Burned calories</p>
                              <p class="details-value">${$}/${o} min</p>
                          </li>`:""}
                         
                        </ul>
                        <p class="exercise-card-description">${u||""}</p>
                    </div>
                    <div class="exercise-card-btn-group">
                        <button class="card-btn add-favorites-btn" ${B?'style="padding: 12px 9px"':""}>
                            <span>${B?"Remove from favorites":"Add to favorites"}</span>
                            <svg class="favorites-icon" aria-label="Favorite icon" width="20" height="20" >
                                <use href="${B?`${K}`:`${Y}heart`}"></use>
                            </svg>
                        </button>
                        <button class="card-btn add-rating-btn">Give a rating</button>
                </div>
            </div>
        </div>
    </div>
</div>`}function w({author:e,quote:t}){return`
          <p class="text-quote list-item-text">${t}</p>
          <p class="autor-quote list-item-text">${e}</p>
        `}async function P(e,t){n.page=e;const s=await n.getExercises();r.gallery.innerHTML=te(s.results),t&&t(Number(s.page),s.totalPages)}N.settings({timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX",maxWidth:335,theme:"dark",backgroundColor:"#242424"});function I(e){N.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:e})}function X(e){N.show({progressBarColor:"#4FAC40",message:e})}const x={LS_KEY_QUOTE:"quote",BASE_QUOTE:{author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."},ERROR_MESSAGE:"Something goes wrong!"};async function M(e,t){n.page=e;try{const s=await n.getFilters();r.gallery.innerHTML=ie(s.results),t&&t(Number(s.page),s.totalPages)}catch{I(x.ERROR_MESSAGE),r.gallery.innerHTML="<p>Nothing was found<p/>"}}async function le(){const e=new Date,t=`${e.getDate()}/${e.getMonth()}/${e.getFullYear()}`;let s;const a=JSON.parse(localStorage.getItem(x.LS_KEY_QUOTE));if(a)if(t!==a.date){try{if(s=await n.getQuote(),!s.author||!s.quote)throw Error("empty data")}catch(i){r.quote.insertAdjacentHTML("beforeend",w(x.BASE_QUOTE)),console.log(i.message);return}s.date=t,localStorage.setItem(x.LS_KEY_QUOTE,JSON.stringify(s)),r.quote.insertAdjacentHTML("beforeend",w(s))}else r.quote.insertAdjacentHTML("beforeend",w(a));else{try{if(s=await n.getQuote(),!s.author||!s.quote)throw Error("empty data")}catch(i){r.quote.insertAdjacentHTML("beforeend",w(x.BASE_QUOTE)),console.log(i.message);return}s.date=t,localStorage.setItem(x.LS_KEY_QUOTE,JSON.stringify(s)),r.quote.insertAdjacentHTML("beforeend",w(s))}}let Q=1;function de(e){[...document.querySelector(".js-pagination").children].forEach(({firstElementChild:s})=>{const a=parseInt(s.dataset.page);a===e?(s.disabled="true",s.classList.replace("unactive","active")):a===Q&&(s.classList.replace("active","unactive"),s.removeAttribute("disabled"))}),Q=e}function E(e,t){r.pagination.innerHTML=ne(e,t)}function U(e){e==="top"?window.scrollTo({top:0,behavior:"smooth"}):e.scrollIntoView({behavior:"smooth"})}var g,f,h,A,z,L,R;class ue{constructor(){v(this,A);v(this,L);v(this,g,void 0);v(this,f,void 0);v(this,h,void 0);d(this,h,"muscles"),d(this,g,"subfilters"),d(this,f,1)}changePage(t){switch(m(this,g)){case"subfilters":M(t),d(this,f,t);break;case"exercises":P(t);break}U(r.gallerySubtitle)}changeFilter(t){n.filter=t,n.page=1,M(1,E),[...r.filter.children].forEach(({firstElementChild:s})=>{switch(s.dataset.filter){case m(this,h):s.classList.remove("filter-button-active");break;case t:s.classList.add("filter-button-active");break}}),d(this,h,t),T(this,L,R).call(this)}goExercises(t){n.subFilter=t,n.keyword="",n.page=1,P(1,E),T(this,A,z).call(this,t),r.searchForm.reset(),U(r.gallerySubtitle)}goSearch(t){n.keyword=t,n.page=1,P(1,E)}resetSearch(){n.keyword="",n.page=1,P(1,E)}goBack(){n.filter=m(this,h),n.page=m(this,f),M(m(this,f),E),T(this,L,R).call(this)}load(){le(),M(1,E)}}g=new WeakMap,f=new WeakMap,h=new WeakMap,A=new WeakSet,z=function(t){d(this,g,"exercises"),r.gallery.dataset.cards="exercises",r.backBtn.classList.remove("back-button-hidden"),r.searchForm.classList.remove("search-form-hidden"),r.gallerySubtitle.innerHTML=`<span class="exercises-title">&nbsp;/</span><h3 class="exercises-subtitle">${t}</h3>`,r.backBtn.addEventListener("click",ke),r.searchForm.addEventListener("click",H)},L=new WeakSet,R=function(){d(this,g,"subfilters"),r.gallery.dataset.cards="subfilters",r.backBtn.classList.add("back-button-hidden"),r.searchForm.classList.add("search-form-hidden"),r.gallerySubtitle.innerHTML="",r.backBtn.removeEventListener("click",this.goBack),r.searchForm.removeEventListener("click",H)};const S=new ue;function pe(e){e.target.hasAttribute("data-filter")&&S.changeFilter(e.target.dataset.filter)}async function ge(e){if(e.preventDefault(),!e.target.closest("[data-subfilter]"))return;const{subfilter:t}=e.target.closest("[data-subfilter]").dataset;S.goExercises(t)}function fe(e){const t=localStorage.getItem("favorites"),s=JSON.parse(t),a=s.map(i=>i._id).indexOf(e);s.splice(a,1),localStorage.setItem("favorites",JSON.stringify(s))}function he(e){const t=document.querySelector(".add-favorites-btn"),s=localStorage.getItem("favorites"),a=JSON.parse(s);if(s)a.some(i=>i._id===e._id)?(fe(e._id),t.style.padding="12px 16px",t.querySelector("span").textContent="Add to favorites",t.querySelector("use").setAttribute("href",Y)):(a.push(e),localStorage.setItem("favorites",JSON.stringify(a)),t.style.padding="12px 9px",t.querySelector("span").textContent="Remove from favorites",t.querySelector("use").setAttribute("href",K));else{const i=JSON.stringify([e]);localStorage.setItem("favorites",i)}}async function me(e,t){e.preventDefault();const s=new FormData(e.target);try{const a=await n.updateExerciseRating({rate:Number(s.get("rate")),email:s.get("email"),review:s.get("review")});t()}catch(a){console.log(a),I("Something went wrong. Please try again later.")}}function ve(e){const t=e.target.closest(".rating");if(!t)return;const s=t.querySelectorAll('[name="rate"]'),a=t.parentElement.firstElementChild;s.forEach(i=>{i.checked&&(a.textContent=i.value+".0")})}const c={detailsPopup:!1,ratingPopup:!1},J=e=>e.stopPropagation(),ye=(e,{closeCallback:t,submitCallback:s})=>{const a=e.querySelector(".modal__close-btn"),i=e.querySelector(".give_a_rating");e.querySelector(".rating").addEventListener("click",l=>{ve(l)}),a.addEventListener("click",()=>{t()}),i.addEventListener("submit",l=>{l.preventDefault(),s(l)})},j=e=>{c.detailsPopup=!1,c.ratingPopup=!1,e==null||e.remove()},V=(e,t,s)=>{t.remove(),e.innerHTML="",c.ratingPopup=!1,e.append(s)},G=(e,t,s)=>{switch(!0){case(c.detailsPopup&&!c.ratingPopup):j(e);return;case(c.detailsPopup&&c.ratingPopup):V(e,t,s);return;default:j(e);return}},be=(e,t)=>{const s=document.createElement("div");s.innerHTML=e;const a=s.querySelector(".exercise-modal-backdrop"),i=s.querySelector(".exercise-modal"),u=s.querySelector(".exercise-card-close-btn"),l=s.querySelector(".add-rating-btn"),$=s.querySelector(".add-favorites-btn"),o=document.querySelector("#modal-template").content.firstElementChild.cloneNode(!0);window.addEventListener("keydown",p=>{p.code==="Escape"&&G(a,o,i)}),a.addEventListener("click",()=>{G(a,o,i)}),i.addEventListener("click",J),o.addEventListener("click",J),u.addEventListener("click",()=>{a.remove()}),l.addEventListener("click",()=>{c.ratingPopup=!0,a.innerHTML="",a.append(o)}),$.addEventListener("click",p=>{he(t)}),ye(o,{closeCallback:()=>V(a,o,i),submitCallback:p=>me(p,()=>{j(a),X("Thank you for your feedback!")})}),c.detailsPopup=!0,document.body.append(a)};async function Ee(e){if(e.preventDefault(),!!e.target.closest("[data-id]"))try{const t=e.target.closest("[data-id]").dataset.id,s=await n.getExerciseById(t),a=ce(s),i=be(a,s)}catch(t){console.error(t),I("Something went wrong. Please try again later.")}}function xe({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);de(t),S.changePage(t)}async function Se(e){e.preventDefault();const t=new FormData(e.currentTarget),s={};t.forEach((a,i)=>{s[i]=a}),e.currentTarget.reset();try{const a=await n.subscribe({email:s.subscribe});X(a.message)}catch(a){I(a.response.data.message)}}let D,k;function W(e){e.target===r.policyBtn&&(k=document.querySelector(".js-policy-modal"),D=document.querySelector(".js-policy-modal-close")),e.target===r.termsBtn&&(k=document.querySelector(".js-terms-modal"),D=document.querySelector(".js-terms-modal-close")),F(),k.addEventListener("click",we),D.addEventListener("click",F),window.addEventListener("keydown",Z)}function Z(e){e.code==="Escape"&&F()}function we(e){e.target===k&&F()}function F(){k.classList.toggle("is-hidden"),window.removeEventListener("keydown",Z)}function H(e){e.preventDefault();const t=r.searchForm.exercise.value.trim().toLowerCase();t&&S.goSearch(t)}async function ke(e){S.goBack()}r.filter.addEventListener("click",pe);r.gallery.addEventListener("click",ge);r.gallery.addEventListener("click",Ee);r.pagination.addEventListener("click",xe);r.subscribeForm.addEventListener("submit",Se);r.policyBtn.addEventListener("click",W);r.termsBtn.addEventListener("click",W);r.searchForm.addEventListener("input",se(H,500,{leading:!1,trailing:!0}));S.load();
//# sourceMappingURL=commonHelpers2.js.map
