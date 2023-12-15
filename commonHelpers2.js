var q=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var P=(e,t,s)=>(q(e,t,"read from private field"),s?s.call(e):t.get(e)),_=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},w=(e,t,s,a)=>(q(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s);import{e as n,a as I}from"./assets/elements-b798f6fe.js";import{a as f,i as L}from"./assets/vendor-2f7d7b6c.js";function D(e,t){let s=[];for(let a=1;a<=t;a+=1)s.push(`<li class="elm"><button type="button" class="pagination-el ${a===e?"active":"unactive"}" data-page="${a}" >${a}</button></li>`);return s.join("")}let T=1;function F(e){[...document.querySelector(".js-pagination").children].forEach(({firstElementChild:s})=>{const a=parseInt(s.dataset.page);a===e?(s.disabled="true",s.classList.replace("unactive","active")):a===T&&(s.classList.replace("active","unactive"),s.removeAttribute("disabled"))}),T=e}function M(e,t){n.pagination.innerHTML=D(e,t)}const m="https://your-energy.b.goit.study/api/",H={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class N{constructor({filter:t="muscles",subFilter:s="",keyword:a="",page:i=1,limit:r=8}){this.filter=t,this.subFilter=s,this.keyword=a,this.page=i,this.limit=r,this.id=""}async getFilters(){return(await f.get(`${m}filters`,{params:{filter:H[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await f.get(`${m}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(t){const s=await f.get(`${m}exercises/${t}`);return this.id=t,s.data}async updateExerciseRating({rate:t,email:s,review:a}){return(await f.patch(`${m}exercises/${this.id}/rating`,{rate:t,email:s,review:a})).data}async getQuote(){return(await f.get(`${m}quote`)).data}async subscribe({email:t}){return(await f.post(`${m}subscription`,{email:t})).data}}const o=new N({});function Q(e){return e.map(({filter:t,name:s,imgURL:a})=>`<li data-subfilter="${s}" class="exercises-item">
      <a class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${a}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${t}</p>
        </div>
      </a>
    </li>`).join("")}function j({bodyPart:e,equipment:t,gifUrl:s,name:a,target:i,description:r,rating:c,burnedCalories:p,time:d,popularity:h,_id:x}){let u=Math.round(c),g=!1;const k=JSON.parse(localStorage.getItem("favorites"));return k&&(g=k.some(S=>S._id===x)),`
  <div class="exercise-modal-backdrop" >
    <div class="exercise-modal">
        <button class="exercise-card-close-btn" type="button">
            <svg class="exercise-card-close-icon" aria-label="Modal window close icon">
                <use href="./img/icons.svg#icon-close"></use>
            </svg>
        </button>
        <div class="exercise-card">
            <div class="exercise-card-img-wrap">
                <img src=${s} alt="">
            </div>
                <div class="exercise-card-info">
                    <div>
                        <h2 class="exercise-card-title">${a}</h2>
                        ${u?` <div class="exercise-card-rating"><span>${u?u+".0":""}</span>
                        ${[1,2,3,4,5].map(S=>`
                        <svg aria-label="Rating star" width="16" height="16" stroke="var(--black)" fill=${u>=S?"var(--yellow)":"var(--white-transparent-20)"} >
                            <use href="./img/icons.svg#icon-star"></use>
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
                          ${h?`<li class="exercise-card-details-item">
                              <p class="details-name">Popular</p>
                              <p class="details-value">${h}</p>
                          </li>`:""}
                          ${p&&d?`<li class="exercise-card-details-item">
                              <p class="details-name">Burned calories</p>
                              <p class="details-value">${p}/${d} min</p>
                          </li>`:""}
                         
                        </ul>
                        <p class="exercise-card-description">${r||""}</p>
                    </div>
                    <div class="exercise-card-btn-group">
                        <button class="card-btn add-favorites-btn">
                            <span>${g?"Remove from favorites":"Add to favorites"}</span>
                            <svg class="favorites-icon" aria-label="Favorite icon" width="20" height="20" >
                                <use href="./img/icons.svg#icon-${g?"remove":"heart"}"></use>
                            </svg>
                        </button>
                        <button class="card-btn add-rating-btn">Give a rating</button>
                </div>
            </div>
        </div>
    </div>
</div>`}function b({author:e,quote:t}){return`
          <p class="text-quote list-item-text">${t}</p>
          <p class="autor-quote list-item-text">${e}</p>
        `}async function O(e){e&&(o.page=e);const t=await o.getExercises();n.gallery.innerHTML=I(t.results),e||M(Number(t.page),t.totalPages)}async function $(e){e&&(o.page=e);const t=await o.getFilters();n.gallery.innerHTML=Q(t.results),e||M(Number(t.page),t.totalPages)}const y={LS_KEY_QUOTE:"quote",BASE_QUOTE:{author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."}};async function C(){const e=new Date,t=`${e.getDate()}/${e.getMonth()}/${e.getFullYear()}`;let s;const a=JSON.parse(localStorage.getItem(y.LS_KEY_QUOTE));if(a)if(t!==a.date){try{if(s=await o.getQuote(),!s.author||!s.quote)throw Error("empty data")}catch(i){n.quote.insertAdjacentHTML("beforeend",b(y.BASE_QUOTE)),console.log(i.message);return}s.date=t,localStorage.setItem(y.LS_KEY_QUOTE,JSON.stringify(s)),n.quote.insertAdjacentHTML("beforeend",b(s))}else n.quote.insertAdjacentHTML("beforeend",b(a));else{try{if(s=await o.getQuote(),!s.author||!s.quote)throw Error("empty data")}catch(i){n.quote.insertAdjacentHTML("beforeend",b(y.BASE_QUOTE)),console.log(i.message);return}s.date=t,localStorage.setItem(y.LS_KEY_QUOTE,JSON.stringify(s)),n.quote.insertAdjacentHTML("beforeend",b(s))}}var v;class U{constructor(){_(this,v,void 0);w(this,v,1),this.state="subfilters"}get page(){return P(this,v)}set page(t){switch(this.state){case"subfilters":$(t);break;case"exercises":O(t);break}w(this,v,t)}load(){C(),$()}}v=new WeakMap;const E=new U;function J(e){e.target.hasAttribute("data-filter")&&(o.filter=e.target.dataset.filter,o.page=1,E.state="subfilters",$())}async function R(e){e.preventDefault(),e.target.closest("[data-subfilter]")&&(o.subFilter=e.target.closest("[data-subfilter]").dataset.subfilter,o.page=1,E.state="exercises",O())}L.settings({timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX",maxWidth:335,theme:"dark",backgroundColor:"#242424"});function B(e){L.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:e})}function Y(e){L.show({progressBarColor:"#4FAC40",message:e})}function K(e){const t=document.querySelector(".add-favorites-btn");t&&t.addEventListener("click",s);function s(a){const i=localStorage.getItem("favorites"),r=JSON.parse(i);if(i)if(!r.some(c=>c._id===e._id))r.push(e),localStorage.setItem("favorites",JSON.stringify(r)),t.querySelector("span").textContent="Remove from favorites",t.querySelector("use").setAttribute("href","./img/icons.svg#icon-remove");else{const c=r.map(p=>p._id).indexOf(e._id);r.splice(c,1),localStorage.setItem("favorites",JSON.stringify(r)),t.querySelector("span").textContent="Add to favorites",t.querySelector("use").setAttribute("href","./img/icons.svg#icon-heart")}else{const c=JSON.stringify([e]);localStorage.setItem("favorites",c)}}}const l={detailsPopup:!1,ratingPopup:!1},A=e=>e.stopPropagation(),G=(e,{closeCallback:t,submitCallback:s})=>{const a=e.querySelector(".modal__close-btn"),i=e.querySelector(".give_a_rating");a.addEventListener("click",()=>{t()}),i.addEventListener("submit",r=>{r.preventDefault(),s(r)})},X=(e,t)=>{const s=document.createElement("div");s.innerHTML=e;const a=s.querySelector(".exercise-modal-backdrop"),i=s.querySelector(".exercise-modal"),r=s.querySelector(".exercise-card-close-btn"),c=s.querySelector(".add-rating-btn"),p=s.querySelector(".add-favorites-btn"),d=document.querySelector("#modal-template").content.firstElementChild.cloneNode(!0),h=()=>{l.detailsPopup=!1,l.ratingPopup=!1,a==null||a.remove()},x=()=>{d.remove(),a.innerHTML="",l.ratingPopup=!1,a.append(i)},u=()=>{switch(!0){case(l.detailsPopup&&!l.ratingPopup):h();return;case(l.detailsPopup&&l.ratingPopup):x();return;default:h();return}};window.addEventListener("keydown",g=>{g.code==="Escape"&&u()}),i.addEventListener("click",A),d.addEventListener("click",A),a.addEventListener("click",()=>{u()}),r.addEventListener("click",()=>{a.remove()}),c.addEventListener("click",()=>{l.ratingPopup=!0,a.innerHTML="",a.append(d)}),p.addEventListener("click",g=>{K(t)}),G(d,{closeCallback:x,submitCallback:()=>{}}),l.detailsPopup=!0,document.body.append(a)};async function z(e,t){if(e.preventDefault(),!!e.target.closest("[data-id]"))try{const s=e.target.closest("[data-id]").dataset.id,a=await o.getExerciseById(s),i=j(a),r=X(i,a)}catch(s){console.error(s),B("Something went wrong. Please try again later.")}}function W(){if(location.href.includes("index.html")){n.nav_home.classList.add("active-item"),n.nav_favorites.classList.remove("active-item");return}if(location.href.includes("favorites.html")){n.nav_favorites.classList.add("active-item"),n.nav_home.classList.remove("active-item");return}}function V({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);F(t),E.page=t}async function Z(e){e.preventDefault();const t=new FormData(e.currentTarget),s={};t.forEach((a,i)=>{s[i]=a}),e.currentTarget.reset();try{const a=await o.subscribe({email:s.subscribe});Y(a.message)}catch(a){B(a.response.data.message)}}n.filter.addEventListener("click",J);n.gallery.addEventListener("click",R);n.gallery.addEventListener("click",z);n.pagination.addEventListener("click",V);n.subscribe_form.addEventListener("submit",Z);W();E.load();
//# sourceMappingURL=commonHelpers2.js.map
