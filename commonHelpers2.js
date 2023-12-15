var q=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var P=(e,t,s)=>(q(e,t,"read from private field"),s?s.call(e):t.get(e)),_=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},w=(e,t,s,a)=>(q(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s);import{e as r,a as I}from"./assets/elements-b7c45304.js";import{a as p,i as L}from"./assets/vendor-2f7d7b6c.js";function D(e,t){let s=[];for(let a=1;a<=t;a+=1)s.push(`<li class="elm"><button type="button" class="pagination-el ${a===e?"active":"unactive"}" data-page="${a}" >${a}</button></li>`);return s.join("")}let T=1;function F(e){[...document.querySelector(".js-pagination").children].forEach(({firstElementChild:s})=>{const a=parseInt(s.dataset.page);a===e?(s.disabled="true",s.classList.replace("unactive","active")):a===T&&(s.classList.replace("active","unactive"),s.removeAttribute("disabled"))}),T=e}function M(e,t){r.pagination.innerHTML=D(e,t)}const g="https://your-energy.b.goit.study/api/",H={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class N{constructor({filter:t="muscles",subFilter:s="",keyword:a="",page:i=1,limit:n=8}){this.filter=t,this.subFilter=s,this.keyword=a,this.page=i,this.limit=n,this.id=""}async getFilters(){return(await p.get(`${g}filters`,{params:{filter:H[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await p.get(`${g}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(t){const s=await p.get(`${g}exercises/${t}`);return this.id=t,s.data}async updateExerciseRating({rate:t,email:s,review:a}){return(await p.patch(`${g}exercises/${this.id}/rating`,{rate:t,email:s,review:a})).data}async getQuote(){return(await p.get(`${g}quote`)).data}async subscribe({email:t}){return(await p.post(`${g}subscription`,{email:t})).data}}const o=new N({});function Q(e){return e.map(({filter:t,name:s,imgURL:a})=>`<li data-subfilter="${s}" class="exercises-item">
      <a class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${a}" alt="${s}" />
        <div class="exercises-proprties-container">
          <h4 class="exercises-item-name">${s}</h4>
          <p class="exercises-item-type">${t}</p>
        </div>
      </a>
    </li>`).join("")}function j({bodyPart:e,equipment:t,gifUrl:s,name:a,target:i,description:n,rating:E,burnedCalories:b,time:l,popularity:m,_id:y}){let d=Math.round(E),u=!1;const k=JSON.parse(localStorage.getItem("favorites"));return k&&(u=k.some(S=>S._id===y)),`
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
                        ${d?` <div class="exercise-card-rating"><span>${d?d+".0":""}</span>
                        ${[1,2,3,4,5].map(S=>`
                        <svg aria-label="Rating star" width="16" height="16" stroke="var(--black)" fill=${d>=S?"var(--yellow)":"var(--white-transparent-20)"} >
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
                          ${m?`<li class="exercise-card-details-item">
                              <p class="details-name">Popular</p>
                              <p class="details-value">${m}</p>
                          </li>`:""}
                          ${b&&l?`<li class="exercise-card-details-item">
                              <p class="details-name">Burned calories</p>
                              <p class="details-value">${b}/${l} min</p>
                          </li>`:""}
                         
                        </ul>
                        <p class="exercise-card-description">${n||""}</p>
                    </div>
                    <div class="exercise-card-btn-group">
                        <button class="card-btn add-favorites-btn">
                            <span>${u?"Remove from favorites":"Add to favorites"}</span>
                            <svg class="favorites-icon" aria-label="Favorite icon" width="20" height="20" >
                                <use href="./img/icons.svg#icon-${u?"remove":"heart"}"></use>
                            </svg>
                        </button>
                        <button class="card-btn add-rating-btn">Give a rating</button>
                </div>
            </div>
        </div>
    </div>
</div>`}function v({author:e,quote:t}){return`
          <p class="text-quote list-item-text">${t}</p>
          <p class="autor-quote list-item-text">${e}</p>
        `}async function O(e){e&&(o.page=e);const t=await o.getExercises();r.gallery.innerHTML=I(t.results),e||M(Number(t.page),t.totalPages)}async function $(e){e&&(o.page=e);const t=await o.getFilters();r.gallery.innerHTML=Q(t.results),e||M(Number(t.page),t.totalPages)}const h={LS_KEY_QUOTE:"quote",BASE_QUOTE:{author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."}};async function C(){const e=new Date,t=`${e.getDate()}/${e.getMonth()}/${e.getFullYear()}`;let s;const a=JSON.parse(localStorage.getItem(h.LS_KEY_QUOTE));if(a)if(t!==a.date){try{if(s=await o.getQuote(),!s.author||!s.quote)throw Error("empty data")}catch(i){r.quote.insertAdjacentHTML("beforeend",v(h.BASE_QUOTE)),console.log(i.message);return}s.date=t,localStorage.setItem(h.LS_KEY_QUOTE,JSON.stringify(s)),r.quote.insertAdjacentHTML("beforeend",v(s))}else r.quote.insertAdjacentHTML("beforeend",v(a));else{try{if(s=await o.getQuote(),!s.author||!s.quote)throw Error("empty data")}catch(i){r.quote.insertAdjacentHTML("beforeend",v(h.BASE_QUOTE)),console.log(i.message);return}s.date=t,localStorage.setItem(h.LS_KEY_QUOTE,JSON.stringify(s)),r.quote.insertAdjacentHTML("beforeend",v(s))}}var f;class U{constructor(){_(this,f,void 0);w(this,f,1),this.state="subfilters"}get page(){return P(this,f)}set page(t){switch(this.state){case"subfilters":$(t);break;case"exercises":O(t);break}w(this,f,t)}load(){C(),$()}}f=new WeakMap;const x=new U;function J(e){e.target.hasAttribute("data-filter")&&(o.filter=e.target.dataset.filter,o.page=1,x.state="subfilters",$())}async function R(e){e.preventDefault(),e.target.closest("[data-subfilter]")&&(o.subFilter=e.target.closest("[data-subfilter]").dataset.subfilter,o.page=1,x.state="exercises",O())}L.settings({timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX",maxWidth:335,theme:"dark",backgroundColor:"#242424"});function B(e){L.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:e})}function Y(e){L.show({progressBarColor:"#4FAC40",message:e})}function K(e){const t=document.querySelector(".add-favorites-btn"),s=localStorage.getItem("favorites"),a=JSON.parse(s);if(s)if(!a.some(i=>i._id===e._id))a.push(e),localStorage.setItem("favorites",JSON.stringify(a)),t.querySelector("span").textContent="Remove from favorites",t.querySelector("use").setAttribute("href","./img/icons.svg#icon-remove");else{const i=a.map(n=>n._id).indexOf(e._id);a.splice(i,1),localStorage.setItem("favorites",JSON.stringify(a)),t.querySelector("span").textContent="Add to favorites",t.querySelector("use").setAttribute("href","./img/icons.svg#icon-heart")}else{const i=JSON.stringify([e]);localStorage.setItem("favorites",i)}}const c={detailsPopup:!1,ratingPopup:!1},A=e=>e.stopPropagation(),G=(e,{closeCallback:t,submitCallback:s})=>{const a=e.querySelector(".modal__close-btn"),i=e.querySelector(".give_a_rating");a.addEventListener("click",()=>{t()}),i.addEventListener("submit",n=>{n.preventDefault(),s(n)})},X=(e,t)=>{const s=document.createElement("div");s.innerHTML=e;const a=s.querySelector(".exercise-modal-backdrop"),i=s.querySelector(".exercise-modal"),n=s.querySelector(".exercise-card-close-btn"),E=s.querySelector(".add-rating-btn"),b=s.querySelector(".add-favorites-btn"),l=document.querySelector("#modal-template").content.firstElementChild.cloneNode(!0),m=()=>{c.detailsPopup=!1,c.ratingPopup=!1,a==null||a.remove()},y=()=>{l.remove(),a.innerHTML="",c.ratingPopup=!1,a.append(i)},d=()=>{switch(!0){case(c.detailsPopup&&!c.ratingPopup):m();return;case(c.detailsPopup&&c.ratingPopup):y();return;default:m();return}};window.addEventListener("keydown",u=>{u.code==="Escape"&&d()}),i.addEventListener("click",A),l.addEventListener("click",A),a.addEventListener("click",()=>{d()}),n.addEventListener("click",()=>{a.remove()}),E.addEventListener("click",()=>{c.ratingPopup=!0,a.innerHTML="",a.append(l)}),b.addEventListener("click",u=>{K(t)}),G(l,{closeCallback:y,submitCallback:()=>{}}),c.detailsPopup=!0,document.body.append(a)};async function z(e,t){if(e.preventDefault(),!!e.target.closest("[data-id]"))try{const s=e.target.closest("[data-id]").dataset.id,a=await o.getExerciseById(s),i=j(a),n=X(i,a)}catch(s){console.error(s),B("Something went wrong. Please try again later.")}}function W(){if(location.href.includes("index.html")){r.nav_home.classList.add("active-item"),r.nav_favorites.classList.remove("active-item");return}if(location.href.includes("favorites.html")){r.nav_favorites.classList.add("active-item"),r.nav_home.classList.remove("active-item");return}}function V({target:e}){if(!e.hasAttribute("data-page"))return;const t=parseInt(e.dataset.page);F(t),x.page=t}async function Z(e){e.preventDefault();const t=new FormData(e.currentTarget),s={};t.forEach((a,i)=>{s[i]=a}),e.currentTarget.reset();try{const a=await o.subscribe({email:s.subscribe});Y(a.message)}catch(a){B(a.response.data.message)}}r.filter.addEventListener("click",J);r.gallery.addEventListener("click",R);r.gallery.addEventListener("click",z);r.pagination.addEventListener("click",V);r.subscribe_form.addEventListener("submit",Z);W();x.load();
//# sourceMappingURL=commonHelpers2.js.map
