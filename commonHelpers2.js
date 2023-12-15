var P=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var T=(e,t,s)=>(P(e,t,"read from private field"),s?s.call(e):t.get(e)),_=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},w=(e,t,s,a)=>(P(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s);import{e as i,r as O,a as C}from"./assets/elements-7c67c5ad.js";import{a as u,i as q,l as Q}from"./assets/vendor-80510813.js";function j(e,t){let s=[];for(let a=1;a<=t;a+=1)s.push(`<li class="elm"><button type="button" class="pagination-el ${a===e?"active":"unactive"}" data-page="${a}" >${a}</button></li>`);return s.join("")}let A=1;function U(e){[...document.querySelector(".js-pagination").children].forEach(({firstElementChild:s})=>{const a=parseInt(s.dataset.page);a===e?(s.disabled="true",s.classList.replace("unactive","active")):a===A&&(s.classList.replace("active","unactive"),s.removeAttribute("disabled"))}),A=e}function D(e,t){i.pagination.innerHTML=j(e,t)}const p="https://your-energy.b.goit.study/api/",J={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class Y{constructor({filter:t="muscles",subFilter:s="",keyword:a="",page:r=1,limit:o=8}){this.filter=t,this.subFilter=s,this.keyword=a,this.page=r,this.limit=o,this.id=""}async getFilters(){return(await u.get(`${p}filters`,{params:{filter:J[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await u.get(`${p}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(t){const s=await u.get(`${p}exercises/${t}`);return this.id=t,s.data}async updateExerciseRating({rate:t,email:s,review:a}){return(await u.patch(`${p}exercises/${this.id}/rating`,{rate:t,email:s,review:a})).data}async getQuote(){return(await u.get(`${p}quote`)).data}async subscribe({email:t}){return(await u.post(`${p}subscription`,{email:t})).data}}const n=new Y({});function G(e){return e.map(({filter:t,name:s,imgURL:a})=>`<li class="exercises-item">
      <a data-subfilter="${s}" class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${a}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${t}</p>
        </div>
      </a>
    </li>`).join("")}const B="/project-UCranes02/assets/icons-8e3f0925.svg#icon-heart",K="/project-UCranes02/assets/icons-8e3f0925.svg#icon-close";function X({bodyPart:e,equipment:t,gifUrl:s,name:a,target:r,description:o,rating:E,burnedCalories:v,time:c,popularity:d,_id:H}){let h=Math.round(E),b=!1;const k=JSON.parse(localStorage.getItem("favorites"));return k&&(b=k.some(S=>S._id===H)),`
  <div class="exercise-modal-backdrop" >
    <div class="exercise-modal">
        <button class="exercise-card-close-btn" type="button">
            <svg class="exercise-card-close-icon" aria-label="Modal window close icon">
                <use href="${K}"></use>
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
                        ${[1,2,3,4,5].map(S=>`
                        <svg aria-label="Rating star" width="16" height="16" stroke="var(--black)" fill=${h>=S?"var(--yellow)":"var(--white-transparent-20)"} >
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
                                <use href="${b?`${O}`:`${B}heart`}"></use>
                            </svg>
                        </button>
                        <button class="card-btn add-rating-btn">Give a rating</button>
                </div>
            </div>
        </div>
    </div>
</div>`}function m({author:e,quote:t}){return`
          <p class="text-quote list-item-text">${t}</p>
          <p class="autor-quote list-item-text">${e}</p>
        `}async function F(e){e&&(n.page=e);const t=await n.getExercises();i.gallery.innerHTML=C(t.results),e||D(Number(t.page),t.totalPages)}q.settings({timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX",maxWidth:335,theme:"dark",backgroundColor:"#242424"});function y(e){q.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:e})}function R(e){q.show({progressBarColor:"#4FAC40",message:e})}const g={LS_KEY_QUOTE:"quote",BASE_QUOTE:{author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."},ERROR_MESSAGE:"Something goes wrong!"};async function $(e){e&&(n.page=e);try{const t=await n.getFilters();i.gallery.innerHTML=G(t.results),e||D(Number(t.page),t.totalPages)}catch{y(g.ERROR_MESSAGE),i.gallery.innerHTML="<p>Nothing was found<p/>"}}async function z(){const e=new Date,t=`${e.getDate()}/${e.getMonth()}/${e.getFullYear()}`;let s;const a=JSON.parse(localStorage.getItem(g.LS_KEY_QUOTE));if(a)if(t!==a.date){try{if(s=await n.getQuote(),!s.author||!s.quote)throw Error("empty data")}catch(r){i.quote.insertAdjacentHTML("beforeend",m(g.BASE_QUOTE)),console.log(r.message);return}s.date=t,localStorage.setItem(g.LS_KEY_QUOTE,JSON.stringify(s)),i.quote.insertAdjacentHTML("beforeend",m(s))}else i.quote.insertAdjacentHTML("beforeend",m(a));else{try{if(s=await n.getQuote(),!s.author||!s.quote)throw Error("empty data")}catch(r){i.quote.insertAdjacentHTML("beforeend",m(g.BASE_QUOTE)),console.log(r.message);return}s.date=t,localStorage.setItem(g.LS_KEY_QUOTE,JSON.stringify(s)),i.quote.insertAdjacentHTML("beforeend",m(s))}}var f;class W{constructor(){_(this,f,void 0);w(this,f,1),this.state="subfilters"}get page(){return T(this,f)}set page(t){switch(this.state){case"subfilters":$(t);break;case"exercises":F(t);break}w(this,f,t)}load(){z(),$()}}f=new WeakMap;const x=new W;function V(e){e.target.hasAttribute("data-filter")&&(n.filter=e.target.dataset.filter,n.page=1,x.state="subfilters",$())}async function Z(e){e.preventDefault(),e.target.closest("[data-subfilter]")&&(n.subFilter=e.target.closest("[data-subfilter]").dataset.subfilter,n.page=1,x.state="exercises",F())}function ee(e){const t=localStorage.getItem("favorites"),s=JSON.parse(t),a=s.map(r=>r._id).indexOf(e);s.splice(a,1),localStorage.setItem("favorites",JSON.stringify(s))}function te(e){const t=document.querySelector(".add-favorites-btn"),s=localStorage.getItem("favorites"),a=JSON.parse(s);if(s)a.some(r=>r._id===e._id)?(ee(e._id),t.style.padding="12px 16px",t.querySelector("span").textContent="Add to favorites",t.querySelector("use").setAttribute("href",B)):(a.push(e),localStorage.setItem("favorites",JSON.stringify(a)),t.style.padding="12px 9px",t.querySelector("span").textContent="Remove from favorites",t.querySelector("use").setAttribute("href",O));else{const r=JSON.stringify([e]);localStorage.setItem("favorites",r)}}async function se(e,t){e.preventDefault();const s=new FormData(e.target);try{const a=await n.updateExerciseRating({rate:Number(s.get("rate")),email:s.get("email"),review:s.get("review")});t()}catch(a){console.log(a),y("Something went wrong. Please try again later.")}}const l={detailsPopup:!1,ratingPopup:!1},M=e=>e.stopPropagation(),ae=(e,{closeCallback:t,submitCallback:s})=>{const a=e.querySelector(".modal__close-btn"),r=e.querySelector(".give_a_rating");a.addEventListener("click",()=>{t()}),r.addEventListener("submit",o=>{o.preventDefault(),s(o)})},L=e=>{l.detailsPopup=!1,l.ratingPopup=!1,e==null||e.remove()},N=(e,t,s)=>{t.remove(),e.innerHTML="",l.ratingPopup=!1,e.append(s)},I=(e,t,s)=>{switch(!0){case(l.detailsPopup&&!l.ratingPopup):L(e);return;case(l.detailsPopup&&l.ratingPopup):N(e,t,s);return;default:L(e);return}},re=(e,t)=>{const s=document.createElement("div");s.innerHTML=e;const a=s.querySelector(".exercise-modal-backdrop"),r=s.querySelector(".exercise-modal"),o=s.querySelector(".exercise-card-close-btn"),E=s.querySelector(".add-rating-btn"),v=s.querySelector(".add-favorites-btn"),c=document.querySelector("#modal-template").content.firstElementChild.cloneNode(!0);window.addEventListener("keydown",d=>{d.code==="Escape"&&I(a,c,r)}),a.addEventListener("click",()=>{I(a,c,r)}),r.addEventListener("click",M),c.addEventListener("click",M),o.addEventListener("click",()=>{a.remove()}),E.addEventListener("click",()=>{l.ratingPopup=!0,a.innerHTML="",a.append(c)}),v.addEventListener("click",d=>{te(t)}),ae(c,{closeCallback:()=>N(a,c,r),submitCallback:d=>se(d,()=>{L(a),R("Thank you for your feedback!")})}),l.detailsPopup=!0,document.body.append(a)};async function ie(e,t){if(e.preventDefault(),!!e.target.closest("[data-id]"))try{const s=e.target.closest("[data-id]").dataset.id,a=await n.getExerciseById(s),r=X(a),o=re(r,a)}catch(s){console.error(s),y("Something went wrong. Please try again later.")}}function ne({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);U(t),x.page=t}async function oe(e){e.preventDefault();const t=new FormData(e.currentTarget),s={};t.forEach((a,r)=>{s[r]=a}),e.currentTarget.reset();try{const a=await n.subscribe({email:s.subscribe});R(a.message)}catch(a){y(a.response.data.message)}}function ce(e){e.preventDefault(),i.searchForm.exercise.value.trim().toLowerCase()}i.filter.addEventListener("click",V);i.gallery.addEventListener("click",Z);i.gallery.addEventListener("click",ie);i.pagination.addEventListener("click",ne);i.subscribe_form.addEventListener("submit",oe);i.searchForm.addEventListener("input",Q(ce,500,{leading:!1,trailing:!0}));x.load();
//# sourceMappingURL=commonHelpers2.js.map
