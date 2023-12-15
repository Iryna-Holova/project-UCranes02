var P=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var T=(e,t,s)=>(P(e,t,"read from private field"),s?s.call(e):t.get(e)),_=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},w=(e,t,s,a)=>(P(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s);import{e as i,a as H}from"./assets/elements-dc0eed9c.js";import{a as u,i as L}from"./assets/vendor-2f7d7b6c.js";function Q(e,t){let s=[];for(let a=1;a<=t;a+=1)s.push(`<li class="elm"><button type="button" class="pagination-el ${a===e?"active":"unactive"}" data-page="${a}" >${a}</button></li>`);return s.join("")}let A=1;function j(e){[...document.querySelector(".js-pagination").children].forEach(({firstElementChild:s})=>{const a=parseInt(s.dataset.page);a===e?(s.disabled="true",s.classList.replace("unactive","active")):a===A&&(s.classList.replace("active","unactive"),s.removeAttribute("disabled"))}),A=e}function D(e,t){i.pagination.innerHTML=Q(e,t)}const p="https://your-energy.b.goit.study/api/",C={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class J{constructor({filter:t="muscles",subFilter:s="",keyword:a="",page:r=1,limit:o=8}){this.filter=t,this.subFilter=s,this.keyword=a,this.page=r,this.limit=o,this.id=""}async getFilters(){return(await u.get(`${p}filters`,{params:{filter:C[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await u.get(`${p}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(t){const s=await u.get(`${p}exercises/${t}`);return this.id=t,s.data}async updateExerciseRating({rate:t,email:s,review:a}){return(await u.patch(`${p}exercises/${this.id}/rating`,{rate:t,email:s,review:a})).data}async getQuote(){return(await u.get(`${p}quote`)).data}async subscribe({email:t}){return(await u.post(`${p}subscription`,{email:t})).data}}const n=new J({});function R(e){return e.map(({filter:t,name:s,imgURL:a})=>`<li class="exercises-item">
      <a data-subfilter="${s}" class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${a}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${t}</p>
        </div>
      </a>
    </li>`).join("")}function U({bodyPart:e,equipment:t,gifUrl:s,name:a,target:r,description:o,rating:x,burnedCalories:v,time:c,popularity:d,_id:N}){let h=Math.round(x),b=!1;const k=JSON.parse(localStorage.getItem("favorites"));return k&&(b=k.some(E=>E._id===N)),`
  <div class="exercise-modal-backdrop" >
    <div class="exercise-modal">
        <button class="exercise-card-close-btn" type="button">
            <svg class="exercise-card-close-icon" aria-label="Modal window close icon">
                <use href="/img/icons.svg#icon-close"></use>
            </svg>
        </button>
        <div class="exercise-card">
            <div class="exercise-card-img-wrap">
                <img src=${s} alt="">
            </div>
                <div class="exercise-card-info">
                    <div>
                        <h2 class="exercise-card-title">${a}</h2>
                        ${h?` <div class="exercise-card-rating"><span>${h?h+".0":""}</span>
                        ${[1,2,3,4,5].map(E=>`
                        <svg aria-label="Rating star" width="16" height="16" stroke="var(--black)" fill=${h>=E?"var(--yellow)":"var(--white-transparent-20)"} >
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
                          ${d?`<li class="exercise-card-details-item">
                              <p class="details-name">Popular</p>
                              <p class="details-value">${d}</p>
                          </li>`:""}
                          ${v&&c?`<li class="exercise-card-details-item">
                              <p class="details-name">Burned calories</p>
                              <p class="details-value">${v}/${c} min</p>
                          </li>`:""}
                         
                        </ul>
                        <p class="exercise-card-description">${o||""}</p>
                    </div>
                    <div class="exercise-card-btn-group">
                        <button class="card-btn add-favorites-btn" ${b?'style="padding: 12px 9px"':""}>
                            <span>${b?"Remove from favorites":"Add to favorites"}</span>
                            <svg class="favorites-icon" aria-label="Favorite icon" width="20" height="20" >
                                <use href="./img/icons.svg#icon-${b?"remove":"heart"}"></use>
                            </svg>
                        </button>
                        <button class="card-btn add-rating-btn">Give a rating</button>
                </div>
            </div>
        </div>
    </div>
</div>`}function f({author:e,quote:t}){return`
          <p class="text-quote list-item-text">${t}</p>
          <p class="autor-quote list-item-text">${e}</p>
        `}async function I(e){e&&(n.page=e);const t=await n.getExercises();i.gallery.innerHTML=H(t.results),e||D(Number(t.page),t.totalPages)}async function S(e){e&&(n.page=e);const t=await n.getFilters();i.gallery.innerHTML=R(t.results),e||D(Number(t.page),t.totalPages)}const m={LS_KEY_QUOTE:"quote",BASE_QUOTE:{author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."}};async function Y(){const e=new Date,t=`${e.getDate()}/${e.getMonth()}/${e.getFullYear()}`;let s;const a=JSON.parse(localStorage.getItem(m.LS_KEY_QUOTE));if(a)if(t!==a.date){try{if(s=await n.getQuote(),!s.author||!s.quote)throw Error("empty data")}catch(r){i.quote.insertAdjacentHTML("beforeend",f(m.BASE_QUOTE)),console.log(r.message);return}s.date=t,localStorage.setItem(m.LS_KEY_QUOTE,JSON.stringify(s)),i.quote.insertAdjacentHTML("beforeend",f(s))}else i.quote.insertAdjacentHTML("beforeend",f(a));else{try{if(s=await n.getQuote(),!s.author||!s.quote)throw Error("empty data")}catch(r){i.quote.insertAdjacentHTML("beforeend",f(m.BASE_QUOTE)),console.log(r.message);return}s.date=t,localStorage.setItem(m.LS_KEY_QUOTE,JSON.stringify(s)),i.quote.insertAdjacentHTML("beforeend",f(s))}}var g;class K{constructor(){_(this,g,void 0);w(this,g,1),this.state="subfilters"}get page(){return T(this,g)}set page(t){switch(this.state){case"subfilters":S(t);break;case"exercises":I(t);break}w(this,g,t)}load(){Y(),S()}}g=new WeakMap;const y=new K;function G(e){e.target.hasAttribute("data-filter")&&(n.filter=e.target.dataset.filter,n.page=1,y.state="subfilters",S())}async function X(e){e.preventDefault(),e.target.closest("[data-subfilter]")&&(n.subFilter=e.target.closest("[data-subfilter]").dataset.subfilter,n.page=1,y.state="exercises",I())}L.settings({timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX",maxWidth:335,theme:"dark",backgroundColor:"#242424"});function q(e){L.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:e})}function B(e){L.show({progressBarColor:"#4FAC40",message:e})}function z(e){const t=localStorage.getItem("favorites"),s=JSON.parse(t),a=s.map(r=>r._id).indexOf(e);s.splice(a,1),localStorage.setItem("favorites",JSON.stringify(s))}function W(e){const t=document.querySelector(".add-favorites-btn"),s=localStorage.getItem("favorites"),a=JSON.parse(s);if(s)a.some(r=>r._id===e._id)?(z(e._id),t.style.padding="12px 16px",t.querySelector("span").textContent="Add to favorites",t.querySelector("use").setAttribute("href","/img/icons.svg#icon-heart")):(a.push(e),localStorage.setItem("favorites",JSON.stringify(a)),t.style.padding="12px 9px",t.querySelector("span").textContent="Remove from favorites",t.querySelector("use").setAttribute("href","/img/icons.svg#icon-remove"));else{const r=JSON.stringify([e]);localStorage.setItem("favorites",r)}}async function V(e,t){e.preventDefault();const s=new FormData(e.target);try{const a=await n.updateExerciseRating({rate:Number(s.get("rate")),email:s.get("email"),review:s.get("review")});t()}catch(a){console.log(a),q("Something went wrong. Please try again later.")}}const l={detailsPopup:!1,ratingPopup:!1},M=e=>e.stopPropagation(),Z=(e,{closeCallback:t,submitCallback:s})=>{const a=e.querySelector(".modal__close-btn"),r=e.querySelector(".give_a_rating");a.addEventListener("click",()=>{t()}),r.addEventListener("submit",o=>{o.preventDefault(),s(o)})},$=e=>{l.detailsPopup=!1,l.ratingPopup=!1,e==null||e.remove()},F=(e,t,s)=>{t.remove(),e.innerHTML="",l.ratingPopup=!1,e.append(s)},O=(e,t,s)=>{switch(!0){case(l.detailsPopup&&!l.ratingPopup):$(e);return;case(l.detailsPopup&&l.ratingPopup):F(e,t,s);return;default:$(e);return}},ee=(e,t)=>{const s=document.createElement("div");s.innerHTML=e;const a=s.querySelector(".exercise-modal-backdrop"),r=s.querySelector(".exercise-modal"),o=s.querySelector(".exercise-card-close-btn"),x=s.querySelector(".add-rating-btn"),v=s.querySelector(".add-favorites-btn"),c=document.querySelector("#modal-template").content.firstElementChild.cloneNode(!0);window.addEventListener("keydown",d=>{d.code==="Escape"&&O(a,c,r)}),a.addEventListener("click",()=>{O(a,c,r)}),r.addEventListener("click",M),c.addEventListener("click",M),o.addEventListener("click",()=>{a.remove()}),x.addEventListener("click",()=>{l.ratingPopup=!0,a.innerHTML="",a.append(c)}),v.addEventListener("click",d=>{W(t)}),Z(c,{closeCallback:()=>F(a,c,r),submitCallback:d=>V(d,()=>{$(a),B("Thank you for your feedback!")})}),l.detailsPopup=!0,document.body.append(a)};async function te(e,t){if(e.preventDefault(),!!e.target.closest("[data-id]"))try{const s=e.target.closest("[data-id]").dataset.id,a=await n.getExerciseById(s),r=U(a),o=ee(r,a)}catch(s){console.error(s),q("Something went wrong. Please try again later.")}}function se({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);j(t),y.page=t}async function ae(e){e.preventDefault();const t=new FormData(e.currentTarget),s={};t.forEach((a,r)=>{s[r]=a}),e.currentTarget.reset();try{const a=await n.subscribe({email:s.subscribe});B(a.message)}catch(a){q(a.response.data.message)}}i.filter.addEventListener("click",G);i.gallery.addEventListener("click",X);i.gallery.addEventListener("click",te);i.pagination.addEventListener("click",se);i.subscribe_form.addEventListener("submit",ae);y.load();
//# sourceMappingURL=commonHelpers2.js.map
